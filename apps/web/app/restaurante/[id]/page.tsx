import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, Tag, Leaf, Utensils, ChevronRight, Wifi, Accessibility, Car, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getRestaurantById, getActiveBags } from "@/lib/restaurant-service"
import { priceRangeLabel } from "@/lib/mock-data"
import { BagCard } from "@/components/bag-card"

const featureIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="h-4 w-4" />,
  Accesible: <Accessibility className="h-4 w-4" />,
  Parking: <Car className="h-4 w-4" />,
  Grupos: <Users className="h-4 w-4" />,
}

export default async function RestaurantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [restaurant, allBags] = await Promise.all([
    getRestaurantById(id),
    getActiveBags(),
  ])
  if (!restaurant) notFound()

  const bags = allBags.filter((b) => b.restaurantId === id)
  const activePromos = restaurant.promotions.filter((p) => p.status === "active")

  return (
    <div className="flex flex-col">
      {/* Cover */}
      <div className="relative h-52 overflow-hidden md:h-72">
        {restaurant.image ? (
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.coverGradient} flex items-center justify-center`}>
            <span className="text-7xl font-bold text-white/20">{restaurant.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-2">
              {restaurant.cuisine.map((c) => (
                <Badge key={c} variant="secondary" className="bg-card/80 text-card-foreground backdrop-blur">
                  {c}
                </Badge>
              ))}
              <Badge variant="secondary" className="bg-card/80 text-card-foreground backdrop-blur">
                {priceRangeLabel(restaurant.priceRange)}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">{restaurant.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              {restaurant.reviewCount > 0 && (
                <div className="flex items-center gap-1.5">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-lg font-bold text-foreground">{restaurant.rating}</span>
                  <span className="text-sm text-muted-foreground">({restaurant.reviewCount} reseñas)</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {restaurant.address}, {restaurant.neighborhood}, {restaurant.city}
              </div>
            </div>

            {restaurant.description && (
              <p className="mt-4 leading-relaxed text-muted-foreground">{restaurant.description}</p>
            )}

            {/* Active Promotions */}
            {activePromos.length > 0 && (
              <div className="mt-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Tag className="h-4 w-4 text-accent" />
                  Promociones activas
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {activePromos.map((promo) => (
                    <div
                      key={promo.id}
                      className="flex items-center justify-between rounded-lg border border-accent/30 bg-accent/5 p-4"
                    >
                      <div>
                        <p className="font-semibold text-foreground">{promo.name}</p>
                        {promo.conditions && (
                          <p className="text-sm text-muted-foreground">{promo.conditions}</p>
                        )}
                        {promo.validDays.filter(Boolean).length > 0 && (
                          <p className="mt-1 text-xs text-muted-foreground">
                            Válido: {promo.validDays.filter(Boolean).join(", ")}
                          </p>
                        )}
                      </div>
                      <Badge className="bg-accent text-accent-foreground text-lg font-bold">
                        -{promo.discount}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available bags */}
            {bags.length > 0 && (
              <div className="mt-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Leaf className="h-4 w-4 text-secondary" />
                  Bolsas sorpresa disponibles
                </h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  {bags.map((bag) => (
                    <BagCard key={bag.id} bag={bag} />
                  ))}
                </div>
              </div>
            )}

            {/* Hours */}
            {restaurant.hours.length > 0 && (
              <div className="mt-8">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Utensils className="h-4 w-4 text-primary" />
                  Horarios
                </h3>
                <div className="mt-3 flex flex-col gap-1.5">
                  {restaurant.hours.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" />
                      <span className="font-medium text-foreground w-8">{h.day}</span>
                      <span>{h.open} – {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full shrink-0 lg:w-80">
            <div className="sticky top-20 flex flex-col gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Reservar mesa</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">
                    Selecciona fecha, hora y comensales para reservar.
                  </p>
                  <Link href={`/reservar/${restaurant.id}`}>
                    <Button className="w-full">
                      Reservar ahora
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Información</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{restaurant.address}, {restaurant.city}</span>
                  </div>
                  {restaurant.phone && (
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{restaurant.phone}</span>
                    </div>
                  )}
                  {restaurant.features.length > 0 && (
                    <>
                      <Separator />
                      <div className="flex flex-wrap gap-2">
                        {restaurant.features.map((f) => (
                          <Badge key={f} variant="outline" className="gap-1.5">
                            {featureIcons[f] || null}
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
