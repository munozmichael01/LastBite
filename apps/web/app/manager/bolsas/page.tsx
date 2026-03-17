import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { BolsasManagerClient } from "./bolsas-client"

export default async function ManagerBolsasPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login")

  const restaurante = await prisma.restaurante.findUnique({
    where: { managerId: session.user.id },
    select: { id: true },
  })
  if (!restaurante) redirect("/auth/login")

  const [plantillas, publicaciones] = await Promise.all([
    prisma.bolsaSorpresaPlantilla.findMany({
      where: { restauranteId: restaurante.id },
      orderBy: { creadoEn: "desc" },
    }),
    prisma.publicacionBolsa.findMany({
      where: { restauranteId: restaurante.id },
      include: {
        plantilla: { select: { nombre: true, precio: true, valorEstimado: true } },
        reservas: { select: { id: true, unidades: true, estado: true } },
      },
      orderBy: { fecha: "desc" },
      take: 50,
    }),
  ])

  const plantillasData = plantillas.map((p) => ({
    id: p.id, nombre: p.nombre, descripcion: p.descripcion ?? "",
    precio: p.precio, valorEstimado: p.valorEstimado,
    etiquetasDieta: p.etiquetasDieta, activa: p.activa,
  }))

  const publicacionesData = publicaciones.map((pub) => ({
    id: pub.id,
    plantillaId: pub.plantillaId,
    plantillaNombre: pub.plantilla.nombre,
    precio: pub.plantilla.precio,
    valorEstimado: pub.plantilla.valorEstimado,
    fecha: pub.fecha.toISOString().split("T")[0],
    franjaInicio: pub.franjaInicio,
    franjaFin: pub.franjaFin,
    unidadesTotales: pub.unidadesTotales,
    unidadesVendidas: pub.unidadesVendidas,
    estado: pub.estado,
    reservas: pub.reservas.map((r) => ({ id: r.id, unidades: r.unidades, estado: r.estado })),
  }))

  return <BolsasManagerClient plantillas={plantillasData} publicaciones={publicacionesData} restauranteId={restaurante.id} />
}
