import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const { plantillaId, fecha, franjaInicio, franjaFin, unidadesTotales } = await req.json()
  if (!plantillaId || !fecha) return NextResponse.json({ error: "Faltan campos" }, { status: 400 })

  const restaurante = await prisma.restaurante.findUnique({ where: { managerId: session.user.id }, select: { id: true } })
  if (!restaurante) return NextResponse.json({ error: "Restaurante no encontrado" }, { status: 404 })

  const plantilla = await prisma.bolsaSorpresaPlantilla.findFirst({
    where: { id: plantillaId, restauranteId: restaurante.id },
    select: { id: true, nombre: true, precio: true, valorEstimado: true },
  })
  if (!plantilla) return NextResponse.json({ error: "Plantilla no encontrada" }, { status: 404 })

  const pub = await prisma.publicacionBolsa.create({
    data: {
      restauranteId: restaurante.id,
      plantillaId,
      fecha: new Date(fecha),
      franjaInicio: franjaInicio ?? "15:00",
      franjaFin: franjaFin ?? "17:00",
      unidadesTotales: unidadesTotales ?? 5,
    },
  })

  return NextResponse.json({
    publicacion: {
      id: pub.id, plantillaId: pub.plantillaId, plantillaNombre: plantilla.nombre,
      precio: plantilla.precio, valorEstimado: plantilla.valorEstimado,
      fecha: pub.fecha.toISOString().split("T")[0],
      franjaInicio: pub.franjaInicio, franjaFin: pub.franjaFin,
      unidadesTotales: pub.unidadesTotales, unidadesVendidas: 0,
      estado: "ACTIVA", reservas: [],
    },
  }, { status: 201 })
}
