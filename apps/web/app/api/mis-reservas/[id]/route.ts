import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const { id } = await params
  const { estado } = await req.json()

  if (estado !== "CANCELADA") return NextResponse.json({ error: "Solo se puede cancelar" }, { status: 400 })

  const reserva = await prisma.reservaMesa.findFirst({
    where: { id, clienteId: session.user.id },
  })
  if (!reserva) return NextResponse.json({ error: "Reserva no encontrada" }, { status: 404 })
  if (reserva.estado === "CANCELADA") return NextResponse.json({ error: "Ya cancelada" }, { status: 400 })

  const updated = await prisma.reservaMesa.update({
    where: { id },
    data: { estado: "CANCELADA" },
    select: { id: true, estado: true },
  })

  return NextResponse.json({ reserva: updated })
}
