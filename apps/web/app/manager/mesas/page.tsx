"use client"

import { useState } from "react"
import Link from "next/link"
import { Users, QrCode, Circle, ChevronRight, Clock, ChefHat, CheckCircle2, UtensilsCrossed, X, Receipt, Timer } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { getMesasByRestaurante, type Mesa, formatCurrency } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

type EstadoItem = "enviado" | "en_preparacion" | "listo" | "servido"

interface ItemComanda {
  id: string
  name: string
  cantidad: number
  precio: number
  estado: EstadoItem
  hora: string
}

const mockComandas: Record<string, ItemComanda[]> = {
  t2: [
    { id: "c1", name: "Pulpo a la gallega", cantidad: 1, precio: 14, estado: "servido", hora: "21:05" },
    { id: "c2", name: "Rabo de toro", cantidad: 2, precio: 18, estado: "en_preparacion", hora: "21:18" },
    { id: "c3", name: "Patatas bravas", cantidad: 1, precio: 6.5, estado: "listo", hora: "21:18" },
  ],
  t3: [
    { id: "c4", name: "Croquetas de jamon", cantidad: 1, precio: 9, estado: "servido", hora: "21:30" },
    { id: "c5", name: "Torrija", cantidad: 2, precio: 7, estado: "enviado", hora: "21:45" },
  ],
  t7: [
    { id: "c6", name: "Chuleton de buey (1kg)", cantidad: 1, precio: 65, estado: "en_preparacion", hora: "20:55" },
    { id: "c7", name: "Patatas bravas", cantidad: 2, precio: 6.5, estado: "listo", hora: "20:55" },
    { id: "c8", name: "Pimientos de Padron", cantidad: 1, precio: 9, estado: "servido", hora: "20:42" },
  ],
}

const estadoConfig: Record<EstadoItem, { label: string; icon: React.ElementType; color: string; next?: EstadoItem; nextLabel?: string }> = {
  enviado:        { label: "Enviado",        icon: Clock,          color: "text-amber-500",          next: "en_preparacion", nextLabel: "Aceptar" },
  en_preparacion: { label: "En preparación", icon: ChefHat,        color: "text-blue-500",            next: "listo",          nextLabel: "Marcar listo" },
  listo:          { label: "Listo",          icon: CheckCircle2,   color: "text-green-500",           next: "servido",        nextLabel: "Marcar servido" },
  servido:        { label: "Servido",        icon: UtensilsCrossed, color: "text-muted-foreground",   next: undefined },
}

const mesaEstadoConfig = {
  libre:     { label: "Libre",     dotColor: "text-green-500",  badge: "outline" as const },
  ocupada:   { label: "Ocupada",   dotColor: "text-amber-500",  badge: "secondary" as const },
  reservada: { label: "Reservada", dotColor: "text-blue-500",   badge: "secondary" as const },
}

export default function MesasPage() {
  const mesas = getMesasByRestaurante("1")
  const [comandas, setComandas] = useState(mockComandas)
  const [selectedMesa, setSelectedMesa] = useState<Mesa | null>(null)

  const libres    = mesas.filter((m) => m.estado === "libre").length
  const ocupadas  = mesas.filter((m) => m.estado === "ocupada").length
  const reservadas = mesas.filter((m) => m.estado === "reservada").length

  const avanzarEstado = (mesaId: string, itemId: string) => {
    setComandas((prev) => ({
      ...prev,
      [mesaId]: (prev[mesaId] ?? []).map((item) => {
        if (item.id !== itemId) return item
        const next = estadoConfig[item.estado].next
        return next ? { ...item, estado: next } : item
      }),
    }))
  }

  const mesaComanda = selectedMesa ? (comandas[selectedMesa.id] ?? []) : []
  const totalMesa   = mesaComanda.reduce((s, i) => s + i.precio * i.cantidad, 0)

  const pendientes = (mesaId: string) =>
    (comandas[mesaId] ?? []).filter((i) => i.estado !== "servido").length

  return (
    <div>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Mesas</h1>
          <p className="mt-1 text-sm text-muted-foreground">Vista en tiempo real del salón</p>
        </div>
        <Link href="/cocina">
          <Button variant="outline" className="gap-2 shrink-0">
            <ChefHat className="h-4 w-4" />
            Ver cocina
          </Button>
        </Link>
      </div>

      {/* Resumen */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        {[
          { label: "Libres",     value: libres,     color: "text-green-600" },
          { label: "Ocupadas",   value: ocupadas,   color: "text-amber-600" },
          { label: "Reservadas", value: reservadas, color: "text-blue-600" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <p className={cn("text-2xl font-bold", stat.color)}>{stat.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Métricas clave */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <Receipt className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Ticket medio</span>
          </div>
          <p className="text-2xl font-bold text-foreground">38,50 €</p>
          <p className="text-xs text-muted-foreground mt-0.5">por mesa · hoy</p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center gap-2 mb-1">
            <Timer className="h-4 w-4 text-secondary" />
            <span className="text-xs font-medium text-muted-foreground">Rotación de mesa</span>
          </div>
          <p className="text-2xl font-bold text-foreground">78 min</p>
          <p className="text-xs text-muted-foreground mt-0.5">tiempo medio de uso · hoy</p>
        </div>
      </div>

      {/* Grid mesas */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {mesas.map((mesa) => {
          const cfg        = mesaEstadoConfig[mesa.estado]
          const items      = comandas[mesa.id] ?? []
          const total      = items.reduce((s, i) => s + i.precio * i.cantidad, 0)
          const nPendientes = pendientes(mesa.id)
          const isOcupada  = mesa.estado === "ocupada"

          return (
            <button
              key={mesa.id}
              onClick={() => isOcupada && setSelectedMesa(mesa)}
              className={cn(
                "relative rounded-xl border bg-card p-4 text-left transition-all",
                isOcupada
                  ? "border-amber-200 dark:border-amber-800 shadow-sm hover:shadow-md cursor-pointer"
                  : "border-border cursor-default"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-foreground">Mesa {mesa.numero}</span>
                <div className="flex items-center gap-1.5">
                  {isOcupada && nPendientes > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">
                      {nPendientes}
                    </span>
                  )}
                  <Circle className={cn("h-3 w-3 fill-current", cfg.dotColor)} />
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Users className="h-3 w-3" />
                <span>Hasta {mesa.capacidad} pax</span>
              </div>

              <Badge variant={cfg.badge} className="text-xs mb-3">{cfg.label}</Badge>

              {isOcupada && items.length > 0 && (
                <div className="mt-1 rounded-lg bg-muted px-2.5 py-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{formatCurrency(total)}</span>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mt-0.5 truncate">
                    {items.map((i) => i.name).join(" · ")}
                  </p>
                </div>
              )}

              {!isOcupada && (
                <Link
                  href={`/mesa/1/${mesa.id}`}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs text-primary hover:underline mt-1"
                >
                  <QrCode className="h-3.5 w-3.5" />
                  Simular escaneo
                </Link>
              )}
            </button>
          )
        })}
      </div>

      {/* Simular QR */}
      <div className="mt-6 rounded-xl border border-dashed border-border p-5 text-center">
        <QrCode className="mx-auto mb-2 h-7 w-7 text-muted-foreground" />
        <p className="text-sm font-medium text-foreground">Simular escaneo de cliente</p>
        <p className="mt-1 text-xs text-muted-foreground mb-4">
          Abre el flujo del cliente en una nueva pestaña
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {mesas.slice(0, 4).map((m) => (
            <Link key={m.id} href={`/mesa/1/${m.id}`} target="_blank">
              <Button variant="outline" size="sm">Mesa {m.numero}</Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Sheet — detalle de comanda */}
      <Sheet open={!!selectedMesa} onOpenChange={(open) => !open && setSelectedMesa(null)}>
        <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
          <SheetHeader className="mb-4">
            <SheetTitle>
              Mesa {selectedMesa?.numero} — Comanda
            </SheetTitle>
          </SheetHeader>

          {mesaComanda.length === 0 ? (
            <p className="text-sm text-muted-foreground">Sin pedidos en esta mesa.</p>
          ) : (
            <div className="flex flex-col gap-3">
              {mesaComanda.map((item) => {
                const cfg = estadoConfig[item.estado]
                const Icon = cfg.icon
                return (
                  <div key={item.id} className="rounded-xl border border-border bg-card p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-bold">
                            {item.cantidad}
                          </span>
                          <span className="text-sm font-semibold text-foreground">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs">
                          <Icon className={cn("h-3.5 w-3.5", cfg.color)} />
                          <span className={cfg.color}>{cfg.label}</span>
                          <span className="text-muted-foreground">· {item.hora}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-foreground shrink-0">
                        {formatCurrency(item.precio * item.cantidad)}
                      </span>
                    </div>

                    {cfg.next && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-2 w-full h-8 text-xs"
                        onClick={() => avanzarEstado(selectedMesa!.id, item.id)}
                      >
                        {cfg.nextLabel}
                      </Button>
                    )}
                  </div>
                )
              })}

              <Separator />

              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-semibold text-foreground">Total mesa</span>
                <span className="text-lg font-bold text-foreground">{formatCurrency(totalMesa)}</span>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
