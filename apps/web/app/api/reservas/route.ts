import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const { restauranteId, fecha, hora, comensales, notas, promocionId } = await req.json()

  if (!restauranteId || !fecha || !hora || !comensales) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
  }

  const restaurante = await prisma.restaurante.findUnique({
    where: { id: restauranteId },
    select: { id: true, nombre: true },
  })
  if (!restaurante) {
    return NextResponse.json({ error: "Restaurante no encontrado" }, { status: 404 })
  }

  const reserva = await prisma.reservaMesa.create({
    data: {
      clienteId: session.user.id,
      restauranteId,
      fecha: new Date(fecha),
      hora,
      comensales: Number(comensales),
      notas: notas ?? null,
      promocionId: promocionId || null,
      estado: "CONFIRMADA",
    },
    select: {
      id: true,
      codigo: true,
      fecha: true,
      hora: true,
      comensales: true,
      estado: true,
      restaurante: { select: { nombre: true, direccion: true } },
    },
  })

  return NextResponse.json({ reserva }, { status: 201 })
}
