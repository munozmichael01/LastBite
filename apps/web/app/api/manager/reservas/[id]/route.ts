import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth()
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 })

  const { id } = await params
  const { estado } = await req.json()

  const validos = ["CONFIRMADA", "MODIFICADA", "CANCELADA", "COMPLETADA", "NO_SHOW"]
  if (!validos.includes(estado)) return NextResponse.json({ error: "Estado inválido" }, { status: 400 })

  // Verificar que la reserva pertenece al restaurante del manager
  const restaurante = await prisma.restaurante.findUnique({
    where: { managerId: session.user.id },
    select: { id: true },
  })
  if (!restaurante) return NextResponse.json({ error: "No autorizado" }, { status: 403 })

  const reserva = await prisma.reservaMesa.findFirst({
    where: { id, restauranteId: restaurante.id },
  })
  if (!reserva) return NextResponse.json({ error: "Reserva no encontrada" }, { status: 404 })

  const updated = await prisma.reservaMesa.update({
    where: { id },
    data: { estado },
    select: { id: true, estado: true },
  })

  return NextResponse.json({ reserva: updated })
}
