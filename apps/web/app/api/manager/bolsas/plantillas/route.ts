import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const { nombre, descripcion, precio, valorEstimado } = await req.json()
  if (!nombre || !precio || !valorEstimado) return NextResponse.json({ error: "Faltan campos" }, { status: 400 })

  const restaurante = await prisma.restaurante.findUnique({ where: { managerId: session.user.id }, select: { id: true } })
  if (!restaurante) return NextResponse.json({ error: "Restaurante no encontrado" }, { status: 404 })

  const plantilla = await prisma.bolsaSorpresaPlantilla.create({
    data: { restauranteId: restaurante.id, nombre, descripcion: descripcion ?? "", precio, valorEstimado, etiquetasDieta: [], tipComida: [] },
  })
  return NextResponse.json({ plantilla }, { status: 201 })
}
