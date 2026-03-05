"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { Minus, Plus, ShoppingBag, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useMesa } from "@/lib/mesa-context"
import { MesaBottomNav } from "@/components/mesa-bottom-nav"
import { getRestaurant } from "@/lib/mock-data"
import type { MenuItem } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export default function CartaPage() {
  const router = useRouter()
  const params = useParams()
  const { restauranteId, mesaId } = params as { restauranteId: string; mesaId: string }

  const { comensal, carrito, agregarItem, actualizarCantidad, cantidadEnCarrito, totalCarrito, mesaNumero, restaurantName } = useMesa()

  const restaurant = getRestaurant(restauranteId)
  const [activeCategory, setActiveCategory] = useState<string>("")
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Si no hay comensal, volver al landing
  useEffect(() => {
    if (!comensal) {
      router.replace(`/mesa/${restauranteId}/${mesaId}`)
    }
  }, [comensal, restauranteId, mesaId, router])

  useEffect(() => {
    if (restaurant?.menu?.[0]) {
      setActiveCategory(restaurant.menu[0].name)
    }
  }, [restaurant])

  if (!comensal || !restaurant) return null

  const scrollToCategory = (name: string) => {
    setActiveCategory(name)
    categoryRefs.current[name]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleAdd = (item: MenuItem) => agregarItem(item)
  const handleDecrease = (item: MenuItem) => {
    const qty = cantidadEnCarrito(item.id)
    actualizarCantidad(item.id, qty - 1)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <button
            onClick={() => router.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground leading-tight">{restaurantName}</p>
            <p className="text-xs text-muted-foreground">Mesa {mesaNumero} · Hola, {comensal.nombre}</p>
          </div>
          {carrito.length > 0 && (
            <Button
              size="sm"
              onClick={() => router.push(`/mesa/${restauranteId}/${mesaId}/pedido`)}
              className="gap-1.5"
            >
              <ShoppingBag className="h-4 w-4" />
              {carrito.reduce((s, i) => s + i.cantidad, 0)}
            </Button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-1 overflow-x-auto px-4 pb-3 scrollbar-hide">
          {restaurant.menu.map((cat) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(cat.name)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1 text-sm font-medium transition-colors",
                activeCategory === cat.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* Menu */}
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-4 pb-24">
        {restaurant.menu.map((category) => (
          <div
            key={category.name}
            ref={(el) => { categoryRefs.current[category.name] = el }}
            className="mb-8 scroll-mt-32"
          >
            <h2 className="mb-3 text-lg font-bold text-foreground">{category.name}</h2>
            <div className="flex flex-col gap-3">
              {category.items.map((item) => {
                const qty = cantidadEnCarrito(item.id)
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    {/* Image */}
                    {item.image && (
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                    )}

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="mt-1 flex flex-wrap gap-1">
                            {item.dietary.map((d) => (
                              <Badge key={d} variant="secondary" className="text-xs px-1.5 py-0">
                                {d}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm font-bold text-foreground">
                          {formatCurrency(item.price)}
                        </span>

                        {qty === 0 ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAdd(item)}
                            className="h-8 gap-1 px-3"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            Agregar
                          </Button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDecrease(item)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-muted"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-4 text-center text-sm font-semibold">{qty}</span>
                            <button
                              onClick={() => handleAdd(item)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </main>

      {/* Floating cart button — above bottom nav */}
      {carrito.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4">
          <Button
            size="lg"
            onClick={() => router.push(`/mesa/${restauranteId}/${mesaId}/pedido`)}
            className="w-full max-w-sm shadow-lg gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Ver pedido</span>
            <span className="ml-auto font-bold">{formatCurrency(totalCarrito)}</span>
          </Button>
        </div>
      )}

      <MesaBottomNav />
    </div>
  )
}
