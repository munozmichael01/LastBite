import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, Phone, Clock, Star, Tag, Leaf, Utensils, ChevronRight, Wifi, Accessibility, Car, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarRating } from "@/components/star-rating"
import { ReviewCard } from "@/components/review-card"
import { BagCard } from "@/components/bag-card"
import { getRestaurant, getRestaurantReviews, getRestaurantBags, priceRangeLabel, formatCurrency } from "@/lib/mock-data"

const featureIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="h-4 w-4" />,
  Accesible: <Accessibility className="h-4 w-4" />,
  Parking: <Car className="h-4 w-4" />,
  Grupos: <Users className="h-4 w-4" />,
}

export default async function RestaurantDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const restaurant = getRestaurant(id)
  if (!restaurant) notFound()

  const reviews = getRestaurantReviews(id)
  const bags = getRestaurantBags(id)
  const avgAspects = reviews.length
    ? {
        food: (reviews.reduce((s, r) => s + r.aspects.food, 0) / reviews.length).toFixed(1),
        service: (reviews.reduce((s, r) => s + r.aspects.service, 0) / reviews.length).toFixed(1),
        ambience: (reviews.reduce((s, r) => s + r.aspects.ambience, 0) / reviews.length).toFixed(1),
        value: (reviews.reduce((s, r) => s + r.aspects.value, 0) / reviews.length).toFixed(1),
      }
    : null

  return (
    <div className="flex flex-col">
      {/* Cover */}
      <div className={`relative h-52 bg-gradient-to-br ${restaurant.coverGradient} md:h-72`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-bold text-white/20">{restaurant.name.charAt(0)}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/40 to-transparent p-6">
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
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="text-lg font-bold text-foreground">{restaurant.rating}</span>
                <span className="text-sm text-muted-foreground">({restaurant.reviewCount} resenas)</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {restaurant.address}, {restaurant.neighborhood}, {restaurant.city}
              </div>
            </div>

            <p className="mt-4 leading-relaxed text-muted-foreground">{restaurant.description}</p>

            {/* Active Promotions */}
            {restaurant.promotions.filter((p) => p.status === "active").length > 0 && (
              <div className="mt-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Tag className="h-4 w-4 text-accent" />
                  Promociones activas
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {restaurant.promotions
                    .filter((p) => p.status === "active")
                    .map((promo) => (
                      <div
                        key={promo.id}
                        className="flex items-center justify-between rounded-lg border border-accent/30 bg-accent/5 p-4"
                      >
                        <div>
                          <p className="font-semibold text-foreground">{promo.name}</p>
                          <p className="text-sm text-muted-foreground">{promo.conditions}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Valido: {promo.validDays.join(", ")}
                          </p>
                        </div>
                        <Badge className="bg-accent text-accent-foreground text-lg font-bold">
                          {promo.type === "2x1" ? "2x1" : `-${promo.discount}%`}
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

            {/* Menu */}
            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Utensils className="h-4 w-4 text-primary" />
                Carta
              </h3>
              <Tabs defaultValue={restaurant.menu[0]?.name} className="mt-3">
                <TabsList className="flex-wrap">
                  {restaurant.menu.map((cat) => (
                    <TabsTrigger key={cat.name} value={cat.name}>
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {restaurant.menu.map((cat) => (
                  <TabsContent key={cat.name} value={cat.name} className="mt-4">
                    <div className="flex flex-col gap-3">
                      {cat.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start justify-between rounded-lg border border-border p-4"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{item.name}</p>
                            <p className="mt-0.5 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                            {item.dietary && item.dietary.length > 0 && (
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {item.dietary.map((d) => (
                                  <Badge key={d} variant="outline" className="text-xs">
                                    {d}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="ml-4 text-base font-semibold text-foreground">
                            {formatCurrency(item.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">
                Resenas ({reviews.length})
              </h3>
              {avgAspects && (
                <div className="mt-3 grid grid-cols-2 gap-3 rounded-lg border border-border bg-card p-4 sm:grid-cols-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{avgAspects.food}</p>
                    <p className="text-xs text-muted-foreground">Comida</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{avgAspects.service}</p>
                    <p className="text-xs text-muted-foreground">Servicio</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{avgAspects.ambience}</p>
                    <p className="text-xs text-muted-foreground">Ambiente</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{avgAspects.value}</p>
                    <p className="text-xs text-muted-foreground">Precio</p>
                  </div>
                </div>
              )}
              <div className="mt-4 flex flex-col gap-3">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
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
                  <CardTitle className="text-base">Informacion</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{restaurant.address}, {restaurant.city}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{restaurant.phone}</span>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="flex flex-col gap-1">
                      {restaurant.hours.map((h, i) => (
                        <span key={i} className="text-muted-foreground">
                          {h.day}: {h.open} - {h.close}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-2">
                    {restaurant.features.map((f) => (
                      <Badge key={f} variant="outline" className="gap-1.5">
                        {featureIcons[f] || null}
                        {f}
                      </Badge>
                    ))}
                  </div>
                  {restaurant.dietaryOptions.length > 0 && (
                    <>
                      <Separator />
                      <div className="flex flex-wrap gap-2">
                        {restaurant.dietaryOptions.map((d) => (
                          <Badge key={d} variant="secondary" className="gap-1.5 bg-secondary/10 text-secondary">
                            <Leaf className="h-3 w-3" />
                            {d}
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
