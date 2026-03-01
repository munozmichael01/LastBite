"use client"

import Link from "next/link"
import { ShoppingBag, Clock, QrCode, Check, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { currentUser, formatCurrency } from "@/lib/mock-data"

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
  pending_pickup: { label: "Pendiente recogida", variant: "default" },
  picked_up: { label: "Recogida", variant: "secondary" },
  expired: { label: "Expirada", variant: "destructive" },
}

export default function MisBolsasPage() {
  const purchases = currentUser.bagPurchases

  const pending = purchases.filter((p) => p.status === "pending_pickup")
  const completed = purchases.filter((p) => p.status !== "pending_pickup")

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">Mis Bolsas</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Tus bolsas sorpresa compradas
      </p>

      <Tabs defaultValue="pending" className="mt-6">
        <TabsList>
          <TabsTrigger value="pending">
            Pendientes ({pending.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completadas ({completed.length})
          </TabsTrigger>
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
              {pending.map((purchase) => (
                <BagPurchaseCard key={purchase.id} purchase={purchase} />
              ))}
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
              {completed.map((purchase) => (
                <BagPurchaseCard key={purchase.id} purchase={purchase} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BagPurchaseCard({ purchase }: { purchase: (typeof currentUser.bagPurchases)[0] }) {
  const status = statusLabels[purchase.status]
  const isPending = purchase.status === "pending_pickup"

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">{purchase.bagName}</h3>
              <Badge variant={status.variant}>{status.label}</Badge>
            </div>
            <p className="mt-1 text-sm text-secondary font-medium">{purchase.restaurantName}</p>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {purchase.pickupDate} | {purchase.pickupFrom} - {purchase.pickupUntil}
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">Codigo: {purchase.code}</span>
              <span className="text-sm font-bold text-secondary">{formatCurrency(purchase.price)}</span>
            </div>
          </div>

          {isPending && (
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
              <QrCode className="h-8 w-8 text-muted-foreground" />
            </div>
          )}

          {purchase.status === "picked_up" && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
              <Check className="h-5 w-5 text-secondary" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
