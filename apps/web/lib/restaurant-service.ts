/**
 * restaurant-service.ts
 * Fetches Restaurante / PublicacionBolsa data from DB and transforms
 * it into the UI-facing types used by RestaurantCard and BagCard.
 */

import { prisma } from "@/lib/prisma"
import type { Restaurant, SurplusBag, Promotion, MenuCategory } from "@/lib/mock-data"

// Gradients assigned deterministically by cuisine type
const CUISINE_GRADIENTS: Record<string, string> = {
  Parrilla:       "from-rose-400 to-red-600",
  Criolla:        "from-amber-400 to-orange-500",
  Mariscos:       "from-blue-400 to-cyan-600",
  Japonesa:       "from-slate-400 to-zinc-600",
  Italiana:       "from-red-400 to-orange-400",
  Internacional:  "from-orange-400 to-amber-500",
  Vegetariana:    "from-green-400 to-emerald-600",
  Fusion:         "from-purple-400 to-pink-500",
}

const DAYS_MAP = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

function pickGradient(cuisines: string[]): string {
  for (const c of cuisines) {
    if (CUISINE_GRADIENTS[c]) return CUISINE_GRADIENTS[c]
  }
  return "from-primary/40 to-primary/70"
}

/** Transform DB Restaurante row into Restaurant card shape */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toRestaurant(r: any, statsMap?: Map<string, { avg: number; count: number }>): Restaurant {
  const stats = statsMap?.get(r.id) ?? { avg: 0, count: 0 }

  // Parse servicios JSON
  const servicios: Record<string, boolean> = typeof r.servicios === "object" && r.servicios
    ? r.servicios as Record<string, boolean>
    : {}
  const features: string[] = Object.entries(servicios)
    .filter(([, v]) => v)
    .map(([k]) => {
      const labels: Record<string, string> = {
        terraza: "Terraza", wifi: "WiFi", grupos: "Grupos",
        ninos: "Niños", takeaway: "Para llevar", parking: "Parking",
        accesible: "Accesible", reservas: "Reservas",
      }
      return labels[k] ?? k
    })

  // Convert turnos to hours
  const hours: { day: string; open: string; close: string }[] = []
  if (r.turnos) {
    for (const t of r.turnos) {
      if (!t.activo) continue
      for (const dayIdx of t.diasSemana) {
        hours.push({ day: DAYS_MAP[dayIdx] ?? String(dayIdx), open: t.horaInicio, close: t.horaFin })
      }
    }
  }

  // Convert promotions
  const promotions: Promotion[] = (r.promos ?? [])
    .filter((p: any) => p.estado === "ACTIVA")
    .map((p: any) => ({
      id: p.id,
      name: p.nombre,
      discount: p.valor,
      type: p.tipo === "PORCENTAJE" ? "percentage" : p.tipo === "IMPORTE_FIJO" ? "fixed" : "percentage",
      conditions: p.condiciones ?? "",
      validDays: (p.diasSemana ?? []).map((d: number) => DAYS_MAP[d] ?? ""),
      validFrom: p.fechaInicio ? p.fechaInicio.toISOString().split("T")[0] : "",
      validUntil: p.fechaFin ? p.fechaFin.toISOString().split("T")[0] : "",
      status: "active" as const,
    }))

  const menu: MenuCategory[] = [] // carta not in DB schema yet

  return {
    id: r.id,
    name: r.nombre,
    slug: r.id, // use id as slug
    cuisine: r.tipoCocina ?? [],
    priceRange: Math.min(4, Math.max(1, r.precioMedio)) as 1 | 2 | 3 | 4,
    rating: stats.avg,
    reviewCount: stats.count,
    address: r.direccion,
    city: r.ciudad,
    neighborhood: r.barrio ?? r.ciudad,
    phone: r.telefono ?? "",
    description: r.descripcion ?? "",
    coverGradient: pickGradient(r.tipoCocina ?? []),
    image: r.fotos?.[0] ?? undefined,
    features,
    hours,
    dietaryOptions: [],
    promotions,
    menu,
    gallery: r.fotos ?? [],
    lat: r.lat ?? 10.5,
    lng: r.lng ?? -66.9,
  }
}

/** Get all active restaurants (for Home + Buscar) */
export async function getRestaurants(): Promise<Restaurant[]> {
  const rows = await prisma.restaurante.findMany({
    where: { estado: "ACTIVO" },
    orderBy: { creadoEn: "asc" },
    include: {
      turnos: { where: { activo: true } },
      promos: { where: { estado: "ACTIVA" } },
      _count: { select: { reservasMesa: true } },
    },
  })

  // Compute average ratings from ResenaMesa
  const ids = rows.map((r) => r.id)
  const reviews = ids.length
    ? await prisma.resenaMesa.findMany({
        where: { reserva: { restauranteId: { in: ids } } },
        select: { rating: true, reserva: { select: { restauranteId: true } } },
      })
    : []

  const statsMap = new Map<string, { avg: number; count: number }>()
  for (const id of ids) {
    const rr = reviews.filter((r) => r.reserva.restauranteId === id)
    const avg = rr.length ? rr.reduce((s, r) => s + r.rating, 0) / rr.length : 0
    statsMap.set(id, { avg: Math.round(avg * 10) / 10, count: rr.length })
  }

  return rows.map((r) => toRestaurant(r, statsMap))
}

/** Get a single restaurant by ID (for detail + reservation pages) */
export async function getRestaurantById(id: string): Promise<Restaurant | null> {
  const r = await prisma.restaurante.findUnique({
    where: { id },
    include: {
      turnos: { where: { activo: true } },
      promos: { where: { estado: "ACTIVA" } },
    },
  })
  if (!r) return null

  const reviews = await prisma.resenaMesa.findMany({
    where: { reserva: { restauranteId: id } },
    select: { rating: true },
  })
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0
  const statsMap = new Map([[id, { avg: Math.round(avg * 10) / 10, count: reviews.length }]])

  return toRestaurant(r, statsMap)
}

/** Get active bag publications (today + future) for the /bolsas listing */
export async function getActiveBags(): Promise<SurplusBag[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const pubs = await prisma.publicacionBolsa.findMany({
    where: {
      estado: "ACTIVA",
      fecha: { gte: today },
    },
    orderBy: { fecha: "asc" },
    include: {
      plantilla: true,
      restaurante: { select: { nombre: true, barrio: true, ciudad: true, fotos: true } },
    },
  })

  return pubs.map((pub): SurplusBag => {
    const available = pub.unidadesTotales - pub.unidadesVendidas
    const originalPrice = pub.plantilla.valorEstimado
    const price = pub.plantilla.precio
    const discount = Math.round((1 - price / originalPrice) * 100)

    return {
      id: pub.id,
      restaurantId: pub.restauranteId,
      restaurantName: pub.restaurante.nombre,
      name: pub.plantilla.nombre,
      description: pub.plantilla.descripcion ?? "",
      originalPrice,
      price,
      discount,
      pickupFrom: pub.franjaInicio,
      pickupUntil: pub.franjaFin,
      dietaryTags: pub.plantilla.etiquetasDieta ?? [],
      available,
      total: pub.unidadesTotales,
      coverGradient: "from-secondary/40 to-secondary/70",
      image: pub.restaurante.fotos?.[0] ?? undefined,
      status: available > 0 ? "available" : "sold_out",
    }
  })
}

/** Get a single bag publication by ID */
export async function getBagById(id: string): Promise<SurplusBag | null> {
  const pub = await prisma.publicacionBolsa.findUnique({
    where: { id },
    include: {
      plantilla: true,
      restaurante: { select: { id: true, nombre: true, barrio: true, ciudad: true, fotos: true, direccion: true } },
    },
  })
  if (!pub) return null

  const available = pub.unidadesTotales - pub.unidadesVendidas
  const originalPrice = pub.plantilla.valorEstimado
  const price = pub.plantilla.precio
  const discount = Math.round((1 - price / originalPrice) * 100)

  return {
    id: pub.id,
    restaurantId: pub.restauranteId,
    restaurantName: pub.restaurante.nombre,
    name: pub.plantilla.nombre,
    description: pub.plantilla.descripcion ?? "",
    originalPrice,
    price,
    discount,
    pickupFrom: pub.franjaInicio,
    pickupUntil: pub.franjaFin,
    dietaryTags: pub.plantilla.etiquetasDieta ?? [],
    available,
    total: pub.unidadesTotales,
    coverGradient: "from-secondary/40 to-secondary/70",
    image: pub.restaurante.fotos?.[0] ?? undefined,
    status: available > 0 ? "available" : "sold_out",
  }
}
