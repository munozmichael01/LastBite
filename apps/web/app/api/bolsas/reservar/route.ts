import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }

  const { publicacionId, unidades } = await req.json()
  if (!publicacionId) return NextResponse.json({ error: "Falta publicacionId" }, { status: 400 })

  // Fetch publication with lock-safe check
  const pub = await prisma.publicacionBolsa.findUnique({
    where: { id: publicacionId },
    select: { id: true, unidadesTotales: true, unidadesVendidas: true, estado: true, restaurante: { select: { nombre: true, direccion: true } }, plantilla: { select: { nombre: true, precio: true } } },
  })
  if (!pub) return NextResponse.json({ error: "Publicación no encontrada" }, { status: 404 })
  if (pub.estado !== "ACTIVA") return NextResponse.json({ error: "Esta bolsa ya no está disponible" }, { status: 400 })

  const qty = Number(unidades ?? 1)
  const disponibles = pub.unidadesTotales - pub.unidadesVendidas
  if (qty > disponibles) return NextResponse.json({ error: "No hay suficientes unidades disponibles" }, { status: 400 })

  // Create reservation + update stock atomically
  const [reserva] = await prisma.$transaction([
    prisma.reservaBolsa.create({
      data: {
        clienteId: session.user.id,
        publicacionId,
        unidades: qty,
        estado: "PENDIENTE",
        metodoPago: "PAGO_EN_LOCAL",
      },
      select: {
        id: true,
        codigo: true,
        unidades: true,
        publicacion: {
          select: {
            franjaInicio: true,
            franjaFin: true,
            fecha: true,
            restaurante: { select: { nombre: true, direccion: true } },
            plantilla: { select: { nombre: true, precio: true } },
          },
        },
      },
    }),
    prisma.publicacionBolsa.update({
      where: { id: publicacionId },
      data: { unidadesVendidas: { increment: qty } },
    }),
  ])

  return NextResponse.json({ reserva }, { status: 201 })
}
