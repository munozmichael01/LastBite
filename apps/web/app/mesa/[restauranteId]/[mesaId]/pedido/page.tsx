"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Minus, Plus, ChevronLeft, Clock, CheckCircle2, ChefHat, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useMesa } from "@/lib/mesa-context"
import { MesaBottomNav } from "@/components/mesa-bottom-nav"
import { formatCurrency } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import type { PedidoEnviado } from "@/lib/mesa-context"

const estadoConfig: Record<PedidoEnviado["estado"], { label: string; icon: React.ElementType; color: string }> = {
  enviado: { label: "Enviado a cocina", icon: Clock, color: "text-amber-500" },
  en_preparacion: { label: "En preparación", icon: ChefHat, color: "text-blue-500" },
  listo: { label: "¡Listo para servir!", icon: CheckCircle2, color: "text-green-500" },
  servido: { label: "Servido en mesa", icon: CheckCircle2, color: "text-muted-foreground" },
}

export default function PedidoPage() {
  const router = useRouter()
  const params = useParams()
  const { restauranteId, mesaId } = params as { restauranteId: string; mesaId: string }

  const {
    comensal,
    carrito,
    pedidos,
    actualizarCantidad,
    quitarItem,
    confirmarPedido,
    totalCarrito,
    totalSesion,
    mesaNumero,
    restaurantName,
  } = useMesa()

  useEffect(() => {
    if (!comensal) {
      router.replace(`/mesa/${restauranteId}/${mesaId}`)
    }
  }, [comensal, restauranteId, mesaId, router])

  if (!comensal) return null

  const cantidadCarrito = carrito.reduce((s, i) => s + i.cantidad, 0)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-4">
          <button
            onClick={() => router.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">Tu pedido</p>
            <p className="text-xs text-muted-foreground">
              {restaurantName} · Mesa {mesaNumero}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-4 pb-36">
        {/* Carrito actual */}
        {carrito.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-3 text-base font-semibold text-foreground">
              Pedido actual
            </h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              {carrito.map((entry, idx) => (
                <div key={entry.item.id}>
                  {idx > 0 && <Separator />}
                  <div className="flex items-center gap-3 p-3">
                    {entry.item.image && (
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={entry.item.image}
                          alt={entry.item.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{entry.item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatCurrency(entry.item.price)} c/u
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => actualizarCantidad(entry.item.id, entry.cantidad - 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
                      >
                        {entry.cantidad === 1 ? <Trash2 className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
                      </button>
                      <span className="w-4 text-center text-sm font-semibold">{entry.cantidad}</span>
                      <button
                        onClick={() => actualizarCantidad(entry.item.id, entry.cantidad + 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="w-14 text-right text-sm font-semibold text-foreground shrink-0">
                      {formatCurrency(entry.item.price * entry.cantidad)}
                    </span>
                  </div>
                </div>
              ))}

              <Separator />
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm font-semibold text-foreground">
                  Total ({cantidadCarrito} {cantidadCarrito === 1 ? "item" : "items"})
                </span>
                <span className="text-base font-bold text-foreground">
                  {formatCurrency(totalCarrito)}
                </span>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => router.push(`/mesa/${restauranteId}/${mesaId}/carta`)}
              >
                Agregar más
              </Button>
              <Button className="flex-1" onClick={confirmarPedido}>
                Confirmar pedido
              </Button>
            </div>
          </section>
        )}

        {/* Pedidos enviados */}
        {pedidos.length > 0 && (
          <section className="mb-6">
            <h2 className="mb-3 text-base font-semibold text-foreground">
              Pedidos enviados
            </h2>
            <div className="flex flex-col gap-3">
              {[...pedidos].reverse().map((pedido) => {
                const estado = estadoConfig[pedido.estado]
                const Icon = estado.icon
                return (
                  <div
                    key={pedido.id}
                    className="rounded-xl border border-border bg-card overflow-hidden"
                  >
                    <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                      <div className={cn("flex items-center gap-1.5 text-sm font-medium", estado.color)}>
                        <Icon className="h-4 w-4" />
                        {estado.label}
                      </div>
                      <span className="text-xs text-muted-foreground">{pedido.hora}</span>
                    </div>
                    <div className="divide-y divide-border">
                      {pedido.items.map((entry) => (
                        <div key={entry.item.id} className="flex items-center justify-between px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                              {entry.cantidad}
                            </span>
                            <span className="text-sm text-foreground">{entry.item.name}</span>
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {formatCurrency(entry.item.price * entry.cantidad)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Empty state */}
        {carrito.length === 0 && pedidos.length === 0 && (
          <div className="flex flex-col items-center py-16 text-center">
            <div className="mb-4 text-5xl">🛒</div>
            <p className="text-base font-semibold text-foreground">Tu pedido está vacío</p>
            <p className="mt-1 text-sm text-muted-foreground">Explora la carta y agrega lo que quieras</p>
            <Button
              className="mt-6"
              onClick={() => router.push(`/mesa/${restauranteId}/${mesaId}/carta`)}
            >
              Ver la carta
            </Button>
          </div>
        )}
      </main>

      {/* Total sesión — above bottom nav */}
      {(carrito.length > 0 || pedidos.length > 0) && (
        <div className="fixed bottom-16 left-0 right-0 px-4 pointer-events-none">
          <div className="mx-auto max-w-2xl flex justify-end">
            <div className="rounded-full bg-card border border-border px-3 py-1.5 shadow-sm text-xs text-muted-foreground">
              Total sesión: <span className="font-bold text-foreground">{formatCurrency(totalSesion)}</span>
            </div>
          </div>
        </div>
      )}

      <MesaBottomNav />
    </div>
  )
}
