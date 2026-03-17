import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password, nombre, telefono, rol } = body

    if (!email || !password || !nombre) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 })
    }

    const existing = await prisma.usuario.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Ya existe una cuenta con ese correo electrónico" }, { status: 409 })
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
  } catch (err) {
    const errObj = err as Record<string, unknown>
    console.error("[/api/registro] Error completo:", {
      message: errObj?.message,
      code: errObj?.code,
      name: errObj?.name,
      stack: errObj?.stack,
    })

    // Prisma: violación de constraint único (email duplicado llegando por race condition)
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      (err as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Ya existe una cuenta con ese correo electrónico" },
        { status: 409 }
      )
    }

    // Prisma: no puede conectar a la base de datos
    if (
      typeof err === "object" &&
      err !== null &&
      "code" in err &&
      ["P1001", "P1002", "P1003"].includes((err as { code: string }).code)
    ) {
      return NextResponse.json(
        { error: "No se pudo conectar a la base de datos. Inténtalo en unos minutos." },
        { status: 503 }
      )
    }

    return NextResponse.json(
      { error: "Error interno del servidor. Inténtalo de nuevo." },
      { status: 500 }
    )
  }
}
