import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

/**
 * GET /api/health
 * Verifica conectividad a la DB. Sin datos sensibles.
 * Útil para diagnosticar Vercel → Supabase desde producción.
 */
export async function GET() {
  const start = Date.now()
  try {
    const count = await prisma.restaurante.count()
    const ms = Date.now() - start
    return NextResponse.json({
      status: "ok",
      db: "connected",
      restaurantes: count,
      latencyMs: ms,
      env: process.env.NODE_ENV,
    })
  } catch (err) {
    const ms = Date.now() - start
    const message = err instanceof Error ? err.message : String(err)
    console.error("[health] DB error:", message)
    return NextResponse.json(
      {
        status: "error",
        db: "disconnected",
        error: message,
        latencyMs: ms,
        env: process.env.NODE_ENV,
      },
      { status: 503 }
    )
  }
}
