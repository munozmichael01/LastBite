"use client"

import Image from "next/image"
import { useState, use } from "react"
import Link from "next/link"
import { ArrowLeft, Leaf, Clock, MapPin, Check, ShoppingBag, Tag, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { surplusBags, getRestaurant, formatCurrency } from "@/lib/mock-data"
import { toast } from "sonner"

export default function BagDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const bag = surplusBags.find((b) => b.id === id)
  const [purchased, setPurchased] = useState(false)

  if (!bag) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg font-medium text-foreground">Bolsa no encontrada</p>
        <Link href="/bolsas">
          <Button variant="outline" className="mt-4">Volver a bolsas</Button>
        </Link>
      </div>
    )
  }

  const restaurant = getRestaurant(bag.restaurantId)
  const isSoldOut = bag.status === "sold_out"
  const code = `LB-BAG-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

  if (purchased) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Check className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Compra confirmada!</h1>
          <p className="mt-2 text-muted-foreground">
            Presenta este codigo en el restaurante para recoger tu bolsa
          </p>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex flex-col items-center gap-4">
              {/* QR Code placeholder */}
              <div className="flex h-40 w-40 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted">
                <QrCode className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="text-lg font-bold font-mono text-primary">{code}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-sm text-muted-foreground">Bolsa</span>
                <span className="text-sm font-medium text-foreground">{bag.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Restaurante</span>
                <span className="text-sm font-medium text-foreground">{bag.restaurantName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Recogida</span>
                <span className="text-sm font-medium text-foreground">Hoy, {bag.pickupFrom} - {bag.pickupUntil}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total pagado</span>
                <span className="text-lg font-bold text-secondary">{formatCurrency(bag.price)}</span>
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
            <span className="rounded-lg bg-card px-4 py-2 text-lg font-semibold text-foreground">
              Agotado
            </span>
          </div>
        )}
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-secondary">{bag.restaurantName}</p>
        <h1 className="mt-1 text-2xl font-bold text-foreground">{bag.name}</h1>
        <p className="mt-3 leading-relaxed text-muted-foreground">{bag.description}</p>
      </div>

      {/* Pricing */}
      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Tu pagas</p>
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
            <p className="text-sm text-muted-foreground">Hoy, {bag.pickupFrom} - {bag.pickupUntil}</p>
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
      </div>

      {/* Dietary tags */}
      {bag.dietaryTags.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground">Informacion dietaria</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {bag.dietaryTags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Availability */}
      {!isSoldOut && (
        <div className="mt-4 rounded-lg bg-secondary/5 p-3">
          <p className="text-sm text-secondary font-medium">
            {bag.available} de {bag.total} disponibles - Date prisa!
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
        <Button
          size="lg"
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          disabled={isSoldOut}
          onClick={() => {
            setPurchased(true)
            toast.success("Bolsa reservada!")
          }}
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          {isSoldOut ? "Agotado" : `Comprar por ${formatCurrency(bag.price)}`}
        </Button>
      </div>
    </div>
  )
}
