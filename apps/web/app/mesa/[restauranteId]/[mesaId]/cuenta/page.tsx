"use client"

import { useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { ChevronLeft, CheckCircle2, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useMesa } from "@/lib/mesa-context"
import { MesaBottomNav } from "@/components/mesa-bottom-nav"
import { formatCurrency } from "@/lib/mock-data"

export default function CuentaPage() {
  const router = useRouter()
  const params = useParams()
  const { restauranteId, mesaId } = params as { restauranteId: string; mesaId: string }

  const {
    comensal,
    pedidos,
    cuentaSolicitada,
    solicitarCuenta,
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

  const todosLosItems = pedidos.flatMap((p) => p.items)

  // Agrupar por item
  const resumen = todosLosItems.reduce<Record<string, { name: string; cantidad: number; precio: number }>>(
    (acc, entry) => {
      if (acc[entry.item.id]) {
        acc[entry.item.id].cantidad += entry.cantidad
      } else {
        acc[entry.item.id] = {
          name: entry.item.name,
          cantidad: entry.cantidad,
          precio: entry.item.price,
        }
      }
      return acc
    },
    {}
  )

  const hasItems = Object.keys(resumen).length > 0

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
            <p className="text-sm font-semibold text-foreground">Cuenta</p>
            <p className="text-xs text-muted-foreground">
              {restaurantName} · Mesa {mesaNumero}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6">
        {/* Solicitada */}
        {cuentaSolicitada && (
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4 dark:bg-green-950/30 dark:border-green-800">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-green-600 dark:text-green-400" />
            <div>
              <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                Cuenta solicitada
              </p>
              <p className="text-xs text-green-700 dark:text-green-400">
                En breve el mesero se acercará a tu mesa.
              </p>
            </div>
          </div>
        )}

        {/* Resumen */}
        {hasItems ? (
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Receipt className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">Resumen de consumo</span>
            </div>

            <div className="divide-y divide-border">
              {Object.values(resumen).map((entry) => (
                <div key={entry.name} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                      {entry.cantidad}
                    </span>
                    <span className="text-sm text-foreground">{entry.name}</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {formatCurrency(entry.precio * entry.cantidad)}
                  </span>
                </div>
              ))}
            </div>

            <Separator />
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-base font-bold text-foreground">Total</span>
              <span className="text-xl font-bold text-foreground">{formatCurrency(totalSesion)}</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-16 text-center">
            <div className="mb-4 text-5xl">🧾</div>
            <p className="text-base font-semibold text-foreground">Aún no hay pedidos</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Explora la carta y realiza tu primer pedido
            </p>
            <Button
              className="mt-6"
              onClick={() => router.push(`/mesa/${restauranteId}/${mesaId}/carta`)}
            >
              Ver la carta
            </Button>
          </div>
        )}

        {/* Nota informativa */}
        {hasItems && (
          <p className="mt-4 text-center text-xs text-muted-foreground">
            El pago se realiza directamente con el mesero
          </p>
        )}
      </main>

      {/* Botón pedir cuenta — above bottom nav */}
      {hasItems && !cuentaSolicitada && (
        <div className="fixed bottom-16 left-0 right-0 px-4 pb-2">
          <div className="mx-auto max-w-2xl">
            <Button size="lg" className="w-full shadow-lg" onClick={solicitarCuenta}>
              Pedir la cuenta — {formatCurrency(totalSesion)}
            </Button>
          </div>
        </div>
      )}

      <MesaBottomNav />
    </div>
  )
}
