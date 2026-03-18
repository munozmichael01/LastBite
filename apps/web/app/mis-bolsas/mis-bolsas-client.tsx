"use client"

import Link from "next/link"
import { ShoppingBag, Clock, QrCode, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type EstadoBolsa = "PENDIENTE" | "ENTREGADA" | "NO_RECOGIDA" | "CANCELADA"

interface Compra {
  id: string
  codigo: string
  bagName: string
  restaurantId: string
  restaurantName: string
  price: number
  pickupDate: string
  pickupFrom: string
  pickupUntil: string
  unidades: number
  estado: EstadoBolsa
}

const ESTADO_CONFIG: Record<EstadoBolsa, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  PENDIENTE:    { label: "Pendiente recogida", variant: "default" },
  ENTREGADA:    { label: "Recogida",           variant: "secondary" },
  NO_RECOGIDA:  { label: "No recogida",        variant: "destructive" },
  CANCELADA:    { label: "Cancelada",          variant: "destructive" },
}

function formatCurrency(n: number) { return `$${n.toFixed(2)}` }

export function MisBolsasClient({ compras }: { compras: Compra[] }) {
  const pending   = compras.filter((c) => c.estado === "PENDIENTE")
  const completed = compras.filter((c) => c.estado !== "PENDIENTE")

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">Mis Bolsas</h1>
      <p className="mt-1 text-sm text-muted-foreground">Tus bolsas sorpresa reservadas</p>

      <Tabs defaultValue="pending" className="mt-6">
        <TabsList>
          <TabsTrigger value="pending">Pendientes ({pending.length})</TabsTrigger>
          <TabsTrigger value="completed">Completadas ({completed.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          {pending.length === 0 ? (
            <div className="py-16 text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 text-lg font-medium text-foreground">No tienes bolsas pendientes</p>
              <p className="mt-1 text-sm text-muted-foreground">Explora las bolsas sorpresa disponibles</p>
              <Link href="/bolsas">
                <Button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Ver bolsas disponibles
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {pending.map((c) => <CompraCard key={c.id} compra={c} />)}
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          {completed.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-foreground">No tienes bolsas completadas</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {completed.map((c) => <CompraCard key={c.id} compra={c} />)}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CompraCard({ compra }: { compra: Compra }) {
  const cfg = ESTADO_CONFIG[compra.estado]
  const isPending = compra.estado === "PENDIENTE"

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">{compra.bagName}</h3>
              <Badge variant={cfg.variant}>{cfg.label}</Badge>
            </div>
            <Link href={`/restaurante/${compra.restaurantId}`} className="mt-1 text-sm text-secondary font-medium hover:underline">
              {compra.restaurantName}
            </Link>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {compra.pickupDate} | {compra.pickupFrom} – {compra.pickupUntil}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground">
                Código: {compra.codigo.slice(-8).toUpperCase()}
              </span>
              <span className="text-sm font-bold text-secondary">{formatCurrency(compra.price)}</span>
              {compra.unidades > 1 && (
                <span className="text-xs text-muted-foreground">× {compra.unidades}</span>
              )}
            </div>
          </div>

          {isPending && (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
              <QrCode className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
          {compra.estado === "ENTREGADA" && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
              <Check className="h-5 w-5 text-secondary" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
