"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Leaf, Clock, MapPin, Check, ShoppingBag, Tag, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { SurplusBag, Restaurant } from "@/lib/mock-data"

function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`
}

interface Confirmed {
  codigo: string
  restaurantName: string
  restaurantAddress: string
  bagName: string
  price: number
  pickupFrom: string
  pickupUntil: string
}

export function BolsaDetailClient({
  bag,
  restaurant,
  user,
}: {
  bag: SurplusBag
  restaurant: Restaurant | null
  user: { id: string } | null
}) {
  const [purchasing, setPurchasing] = useState(false)
  const [confirmed, setConfirmed] = useState<Confirmed | null>(null)
  const isSoldOut = bag.status === "sold_out"

  async function handleBuy() {
    if (!user) {
      toast.error("Debes iniciar sesión para reservar una bolsa")
      return
    }
    setPurchasing(true)
    try {
      const res = await fetch("/api/bolsas/reservar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicacionId: bag.id, unidades: 1 }),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Error al reservar la bolsa")
        return
      }
      const pub = data.reserva.publicacion
      setConfirmed({
        codigo: data.reserva.codigo,
        restaurantName: pub.restaurante.nombre,
        restaurantAddress: pub.restaurante.direccion,
        bagName: pub.plantilla.nombre,
        price: pub.plantilla.precio,
        pickupFrom: pub.franjaInicio,
        pickupUntil: pub.franjaFin,
      })
    } catch {
      toast.error("Error de conexión")
    } finally {
      setPurchasing(false)
    }
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Check className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">¡Reserva confirmada!</h1>
          <p className="mt-2 text-muted-foreground">
            Presenta este código en el restaurante para recoger tu bolsa
          </p>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted">
                <QrCode className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="text-lg font-bold font-mono text-primary">
                {confirmed.codigo.slice(-8).toUpperCase()}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-sm text-muted-foreground">Bolsa</span>
                <span className="text-sm font-medium text-foreground">{confirmed.bagName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Restaurante</span>
                <span className="text-sm font-medium text-foreground">{confirmed.restaurantName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Recogida</span>
                <span className="text-sm font-medium text-foreground">Hoy, {confirmed.pickupFrom} – {confirmed.pickupUntil}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total a pagar en local</span>
                <span className="text-lg font-bold text-secondary">{formatCurrency(confirmed.price)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link href="/mis-bolsas" className="flex-1">
            <Button variant="outline" className="w-full">Ver mis bolsas</Button>
          </Link>
          <Link href="/bolsas" className="flex-1">
            <Button className="w-full">Seguir explorando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href="/bolsas" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Volver a bolsas
      </Link>

      <div className="relative mt-4 h-56 overflow-hidden rounded-xl">
        {bag.image ? (
          <Image
            src={bag.image}
            alt={bag.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 672px) 100vw, 672px"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${bag.coverGradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge className="bg-secondary text-secondary-foreground text-lg font-bold px-3 py-1">
            -{bag.discount}%
          </Badge>
        </div>
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
            <span className="rounded-lg bg-card px-4 py-2 text-lg font-semibold text-foreground">Agotado</span>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-secondary">{bag.restaurantName}</p>
        <h1 className="mt-1 text-2xl font-bold text-foreground">{bag.name}</h1>
        {bag.description && (
          <p className="mt-3 leading-relaxed text-muted-foreground">{bag.description}</p>
        )}
      </div>

      {/* Pricing */}
      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Tu pagas en local</p>
              <p className="text-3xl font-bold text-secondary">{formatCurrency(bag.price)}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Valor original</p>
              <p className="text-lg text-muted-foreground line-through">{formatCurrency(bag.originalPrice)}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Tag className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              Ahorras {formatCurrency(bag.originalPrice - bag.price)}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Details */}
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Horario de recogida</p>
            <p className="text-sm text-muted-foreground">Hoy, {bag.pickupFrom} – {bag.pickupUntil}</p>
          </div>
        </div>
        {restaurant && (
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">{restaurant.name}</p>
              <p className="text-sm text-muted-foreground">{restaurant.address}, {restaurant.city}</p>
            </div>
          </div>
        )}
        <div className="flex items-start gap-3">
          <Leaf className="mt-0.5 h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Pago en local al recoger</p>
        </div>
      </div>

      {/* Dietary tags */}
      {bag.dietaryTags.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground">Información dietaria</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {bag.dietaryTags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </div>
      )}

      {/* Availability */}
      {!isSoldOut && (
        <div className="mt-4 rounded-lg bg-secondary/5 p-3">
          <p className="text-sm text-secondary font-medium">
            {bag.available} de {bag.total} disponibles — ¡Date prisa!
          </p>
          <div className="mt-2 h-2 w-full rounded-full bg-secondary/20">
            <div
              className="h-2 rounded-full bg-secondary transition-all"
              style={{ width: `${((bag.total - bag.available) / bag.total) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Buy button */}
      <div className="mt-8">
        {!user ? (
          <Link href="/auth/login?callbackUrl=/bolsas">
            <Button size="lg" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Inicia sesión para reservar
            </Button>
          </Link>
        ) : (
          <Button
            size="lg"
            className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
            disabled={isSoldOut || purchasing}
            onClick={handleBuy}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            {isSoldOut ? "Agotado" : purchasing ? "Reservando..." : `Reservar por ${formatCurrency(bag.price)}`}
          </Button>
        )}
      </div>
    </div>
  )
}
