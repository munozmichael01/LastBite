"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChefHat, CheckCircle2, Clock, Bell, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type EstadoItem = "enviado" | "en_preparacion" | "listo"

interface ItemPedido {
  plato: string
  cantidad: number
  nota?: string
}

interface Comanda {
  id: string
  mesa: number
  items: ItemPedido[]
  estado: EstadoItem
  hora: string
  receivedAt: Date
}

const now = new Date()
const mins = (m: number) => new Date(now.getTime() - m * 60000)

const initialComandas: Comanda[] = [
  {
    id: "cmd1", mesa: 7, estado: "en_preparacion", hora: "20:55", receivedAt: mins(27),
    items: [
      { plato: "Chuleton de buey (1kg)", cantidad: 1 },
      { plato: "Patatas bravas", cantidad: 2 },
      { plato: "Pimientos de Padrón", cantidad: 1, nota: "Sin sal extra" },
    ],
  },
  {
    id: "cmd2", mesa: 2, estado: "en_preparacion", hora: "21:18", receivedAt: mins(14),
    items: [
      { plato: "Rabo de toro", cantidad: 2 },
      { plato: "Patatas bravas", cantidad: 1 },
      { plato: "Merluza a la plancha", cantidad: 1, nota: "Sin guarnición" },
    ],
  },
  {
    id: "cmd3", mesa: 3, estado: "enviado", hora: "21:45", receivedAt: mins(3),
    items: [
      { plato: "Torrija", cantidad: 2, nota: "Una sin azúcar" },
      { plato: "Tarta de queso", cantidad: 1 },
    ],
  },
  {
    id: "cmd4", mesa: 5, estado: "enviado", hora: "22:01", receivedAt: mins(1),
    items: [
      { plato: "Croquetas de jamon", cantidad: 1 },
      { plato: "Pulpo a la gallega", cantidad: 1 },
      { plato: "Tortilla española", cantidad: 1, nota: "Muy hecha" },
    ],
  },
  {
    id: "cmd5", mesa: 2, estado: "listo", hora: "21:05", receivedAt: mins(35),
    items: [
      { plato: "Pulpo a la gallega", cantidad: 1 },
    ],
  },
]

const estadoConfig: Record<EstadoItem, {
  label: string
  bgCard: string
  accionLabel: string
  accionClass: string
  nextEstado: EstadoItem | null
}> = {
  enviado: {
    label: "Nuevo pedido",
    bgCard: "border-amber-400 bg-amber-50 dark:border-amber-600 dark:bg-amber-950/50",
    accionLabel: "Aceptar pedido",
    accionClass: "bg-amber-500 hover:bg-amber-600 text-white",
    nextEstado: "en_preparacion",
  },
  en_preparacion: {
    label: "En preparación",
    bgCard: "border-blue-400 bg-blue-50 dark:border-blue-600 dark:bg-blue-950/50",
    accionLabel: "Marcar listo",
    accionClass: "bg-blue-500 hover:bg-blue-600 text-white",
    nextEstado: "listo",
  },
  listo: {
    label: "Listo para servir",
    bgCard: "border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-950/50",
    accionLabel: "Retirado",
    accionClass: "bg-green-500 hover:bg-green-600 text-white",
    nextEstado: null,
  },
}

function ElapsedTimer({ receivedAt }: { receivedAt: Date }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const calc = () => setElapsed(Math.floor((Date.now() - receivedAt.getTime()) / 1000))
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [receivedAt])

  const m = Math.floor(elapsed / 60)
  const s = elapsed % 60
  const isUrgent = m >= 15

  return (
    <span className={cn(
      "flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
      isUrgent ? "bg-red-500 text-white" : "bg-zinc-700 text-zinc-200"
    )}>
      <Clock className="h-3 w-3" />
      {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
    </span>
  )
}

export default function CocinaPage() {
  const [comandas, setComandas] = useState(initialComandas)
  const [filtro, setFiltro] = useState<EstadoItem | "todos">("todos")

  const avanzar = (id: string) => {
    setComandas((prev) =>
      prev
        .map((c) => {
          if (c.id !== id) return c
          const next = estadoConfig[c.estado].nextEstado
          return next ? { ...c, estado: next } : c
        })
        .filter((c) => {
          if (c.id !== id) return true
          const original = prev.find((p) => p.id === id)!
          return original.estado !== "listo"
        })
    )
  }

  const visibles = comandas
    .filter((c) => filtro === "todos" || c.estado === filtro)
    .sort((a, b) => a.receivedAt.getTime() - b.receivedAt.getTime())

  const counts = {
    todos: comandas.length,
    enviado: comandas.filter((c) => c.estado === "enviado").length,
    en_preparacion: comandas.filter((c) => c.estado === "en_preparacion").length,
    listo: comandas.filter((c) => c.estado === "listo").length,
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/manager/mesas">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white hover:bg-zinc-800 gap-1.5 px-2">
                <ArrowLeft className="h-4 w-4" />
                Mesas
              </Button>
            </Link>
            <div className="h-5 w-px bg-zinc-700" />
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <ChefHat className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">Vista Cocina</p>
                <p className="text-xs text-zinc-400">La Taberna de Lola</p>
              </div>
            </div>
          </div>
          {counts.enviado > 0 && (
            <div className="flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5">
              <Bell className="h-4 w-4 text-white" />
              <span className="text-sm font-bold text-white">
                {counts.enviado} nuevo{counts.enviado > 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
        <div className="mx-auto mt-3 flex max-w-5xl gap-2 overflow-x-auto pb-1">
          {([
            { key: "todos",          label: "Todos",          count: counts.todos },
            { key: "enviado",        label: "Nuevos",         count: counts.enviado },
            { key: "en_preparacion", label: "En preparación", count: counts.en_preparacion },
            { key: "listo",          label: "Listos",         count: counts.listo },
          ] as { key: typeof filtro; label: string; count: number }[]).map((f) => (
            <button key={f.key} onClick={() => setFiltro(f.key)}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                filtro === f.key ? "bg-white text-zinc-900" : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              )}>
              {f.label}
              {f.count > 0 && (
                <span className={cn("ml-1.5 rounded-full px-1.5 py-0.5 text-xs font-bold",
                  filtro === f.key ? "bg-zinc-200 text-zinc-800" : "bg-zinc-700 text-zinc-200")}>
                  {f.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-5">
        {visibles.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center">
            <CheckCircle2 className="mb-4 h-12 w-12 text-green-500" />
            <p className="text-lg font-bold text-white">Todo al día</p>
            <p className="mt-1 text-sm text-zinc-400">No hay comandas pendientes</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((comanda) => {
              const cfg = estadoConfig[comanda.estado]
              const totalItems = comanda.items.reduce((s, i) => s + i.cantidad, 0)
              return (
                <div key={comanda.id}
                  className={cn("rounded-2xl border-2 p-4 flex flex-col gap-3", cfg.bgCard)}>
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-zinc-900 dark:text-white">
                      Mesa {comanda.mesa}
                    </span>
                    <div className="flex items-center gap-2">
                      <ElapsedTimer receivedAt={comanda.receivedAt} />
                      <span className="text-xs text-zinc-500">{comanda.hora}</span>
                    </div>
                  </div>

                  {/* Estado + conteo */}
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-black/10 dark:bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                      {cfg.label}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {totalItems} item{totalItems !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-2 rounded-xl bg-white/60 dark:bg-zinc-900/50 p-3">
                    {comanda.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-zinc-900 dark:text-white w-7 shrink-0">
                            ×{item.cantidad}
                          </span>
                          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 leading-snug">
                            {item.plato}
                          </span>
                        </div>
                        {item.nota && (
                          <p className="ml-9 mt-0.5 rounded bg-yellow-100 dark:bg-yellow-900/40 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:text-yellow-200">
                            📝 {item.nota}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Acción */}
                  <Button
                    className={cn("w-full font-bold text-sm h-11 mt-auto", cfg.accionClass)}
                    onClick={() => avanzar(comanda.id)}
                  >
                    {cfg.accionLabel}
                  </Button>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
