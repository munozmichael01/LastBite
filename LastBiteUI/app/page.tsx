import Link from "next/link"
import { Search, ArrowRight, Leaf, UtensilsCrossed, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { RestaurantCard } from "@/components/restaurant-card"
import { BagCard } from "@/components/bag-card"
import { restaurants, surplusBags } from "@/lib/mock-data"

export default function HomePage() {
  const featuredRestaurants = restaurants.slice(0, 3)
  const nearbyRestaurants = restaurants.slice(3, 6)
  const availableBags = surplusBags.filter((b) => b.status === "available")

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              <TrendingUp className="mr-1.5 h-3 w-3" />
              Nuevo en Madrid y Barcelona
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Reserva mesa. Rescata comida.
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Descubre los mejores restaurantes con promociones exclusivas y rescata comida excedente a precios increibles.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar restaurante, cocina o zona..."
                  className="h-12 pl-10 pr-4"
                  readOnly
                />
                <Link href="/buscar" className="absolute inset-0" aria-label="Ir a buscar">
                  <span className="sr-only">Buscar</span>
                </Link>
              </div>
              <Link href="/buscar">
                <Button size="lg" className="h-12 px-6">
                  Explorar
                </Button>
              </Link>
            </div>
          </div>
          {/* Quick stats */}
          <div className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-xs text-muted-foreground">Restaurantes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">-30%</p>
              <p className="text-xs text-muted-foreground">Descuento medio</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">12k</p>
              <p className="text-xs text-muted-foreground">Bolsas rescatadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured restaurants */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Star className="h-5 w-5 text-accent" />
              Restaurantes destacados
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Los mejor valorados con promociones activas
            </p>
          </div>
          <Link href="/buscar" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
        <div className="mt-4 text-center sm:hidden">
          <Link href="/buscar">
            <Button variant="ghost" size="sm" className="text-primary">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Rescue section */}
      <section className="bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Leaf className="h-5 w-5 text-secondary" />
                Rescata comida hoy
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Bolsas sorpresa con hasta un 70% de descuento
              </p>
            </div>
            <Link href="/bolsas" className="hidden items-center gap-1 text-sm font-medium text-secondary hover:underline sm:flex">
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {availableBags.map((bag) => (
              <BagCard key={bag.id} bag={bag} />
            ))}
          </div>
          <div className="mt-4 text-center sm:hidden">
            <Link href="/bolsas">
              <Button variant="ghost" size="sm" className="text-secondary">
                Ver todas <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              Cerca de ti
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Restaurantes populares en tu zona
            </p>
          </div>
          <Link href="/buscar" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h2 className="text-balance text-2xl font-bold text-primary-foreground md:text-3xl">
            Tienes un restaurante?
          </h2>
          <p className="mt-3 text-pretty text-base text-primary-foreground/80">
            Unete a Last Bite y llega a miles de comensales. Gestiona reservas, crea promociones y reduce tu desperdicio alimentario.
          </p>
          <Link href="/manager">
            <Button size="lg" variant="secondary" className="mt-6">
              Registrar mi restaurante
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
