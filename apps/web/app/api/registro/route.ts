import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@lastbite/db"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, nombre, telefono, rol } = body

    if (!email || !password || !nombre) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "La contrasena debe tener al menos 8 caracteres" }, { status: 400 })
    }

    const existing = await prisma.usuario.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Ya existe una cuenta con ese email" }, { status: 409 })
    }

    const passwordHash = await hash(password, 12)

    const usuario = await prisma.usuario.create({
      data: {
        email,
        passwordHash,
        nombre,
        telefono: telefono ?? null,
        rol: rol === "RESTAURANTE" ? "RESTAURANTE" : "CLIENTE",
      },
      select: { id: true, email: true, nombre: true, rol: true },
    })

    return NextResponse.json({ user: usuario }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
