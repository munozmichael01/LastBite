import { NextResponse } from "next/server"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"

export async function PATCH(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 })
    }

    const body = await req.json()
    const { nombre, telefono, dietaPreferencia } = body

    const updated = await prisma.usuario.update({
      where: { id: session.user.id },
      data: {
        ...(nombre           !== undefined && { nombre }),
        ...(telefono         !== undefined && { telefono }),
        ...(dietaPreferencia !== undefined && { dietaPreferencia }),
      },
      select: { id: true, nombre: true, email: true, telefono: true, dietaPreferencia: true },
    })

    return NextResponse.json({ user: updated })
  } catch (err) {
    console.error("[/api/me PATCH]", err)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
