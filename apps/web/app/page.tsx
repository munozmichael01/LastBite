import Link from "next/link"
import { Search, ArrowRight, Leaf, UtensilsCrossed, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { RestaurantCard } from "@/components/restaurant-card"
import { BagCard } from "@/components/bag-card"
import { restaurants, surplusBags } from "@/lib/mock-data"

const CUISINE_CATEGORIES = [
  { emoji: "🥘", label: "Española",   gradient: "from-orange-50 to-amber-100",  filter: "Espanola" },
  { emoji: "🍕", label: "Italiana",   gradient: "from-red-50 to-orange-100",    filter: "Italiana" },
  { emoji: "🍣", label: "Japonesa",   gradient: "from-slate-50 to-zinc-100",    filter: "Japonesa" },
  { emoji: "🥗", label: "Veggie",     gradient: "from-green-50 to-emerald-100", filter: "Vegetariana" },
  { emoji: "🦐", label: "Mariscos",   gradient: "from-blue-50 to-cyan-100",     filter: "Marisqueria" },
  { emoji: "🥩", label: "Asador",     gradient: "from-rose-50 to-red-100",      filter: "Asador" },
  { emoji: "🌮", label: "Fusión",     gradient: "from-purple-50 to-pink-100",   filter: "Fusion" },
  { emoji: "🌿", label: "Ecológico",  gradient: "from-teal-50 to-green-100",    filter: "Ecologica" },
]

export default function HomePage() {
  const featuredRestaurants = restaurants.slice(0, 3)
  const nearbyRestaurants = restaurants.slice(3, 6)
  const availableBags = surplusBags.filter((b) => b.status === "available")

  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">

        {/* Floating food illustrations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Right side */}
          <div className="absolute right-[6%] top-8 hidden animate-float md:flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg text-4xl ring-1 ring-border/30">🍕</div>
          </div>
          <div className="absolute right-[2%] top-1/2 hidden -translate-y-1/2 animate-float-slow md:flex" style={{ animationDelay: "0.6s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg text-3xl ring-1 ring-border/30">🥘</div>
          </div>
          <div className="absolute bottom-10 right-[8%] hidden animate-float-alt md:flex" style={{ animationDelay: "1.2s" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg text-2xl ring-1 ring-border/30">🥗</div>
          </div>
          <div className="absolute right-[18%] top-6 hidden animate-float-alt lg:flex" style={{ animationDelay: "0.3s" }}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md text-2xl ring-1 ring-border/30">🍱</div>
          </div>
          {/* Left side */}
          <div className="absolute left-[4%] top-10 hidden animate-float-slow lg:flex" style={{ animationDelay: "0.8s" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg text-2xl ring-1 ring-border/30">🦐</div>
          </div>
          <div className="absolute bottom-8 left-[6%] hidden animate-float lg:flex" style={{ animationDelay: "1.5s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg text-3xl ring-1 ring-border/30">🥩</div>
          </div>
          <div className="absolute left-[15%] top-1/3 hidden animate-float-alt lg:flex" style={{ animationDelay: "0.4s" }}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md text-xl ring-1 ring-border/30">🌿</div>
          </div>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-2xl px-4 py-16 text-center md:py-24">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            <TrendingUp className="mr-1.5 h-3 w-3" />
            Nuevo en Madrid y Barcelona
          </Badge>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Reserva mesa.<br />Rescata comida.
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
              <Link href="/buscar" className="absolute inset-0" aria-label="Ir a buscar" />
            </div>
            <Link href="/buscar">
              <Button size="lg" className="h-12 px-6">Explorar</Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">500+</p>
              <p className="text-xs text-muted-foreground">Restaurantes</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">-30%</p>
              <p className="text-xs text-muted-foreground">Descuento medio</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <p className="text-2xl font-bold text-secondary">12k</p>
              <p className="text-xs text-muted-foreground">Bolsas rescatadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explora por cocina ── */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h2 className="mb-6 text-base font-semibold text-foreground">Explora por cocina</h2>
          <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CUISINE_CATEGORIES.map((cat) => (
              <Link
                key={cat.filter}
                href={`/buscar?cuisine=${cat.filter}`}
                className="group flex flex-shrink-0 flex-col items-center gap-2"
              >
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.gradient} text-4xl shadow-sm ring-1 ring-border/50 transition-all duration-200 group-hover:scale-110 group-hover:shadow-md`}>
                  {cat.emoji}
                </div>
                <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Restaurantes destacados ── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <Star className="h-5 w-5 text-accent" />
              Restaurantes destacados
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Los mejor valorados con promociones activas</p>
          </div>
          <Link href="/buscar" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRestaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
        </div>
        <div className="mt-4 text-center sm:hidden">
          <Link href="/buscar">
            <Button variant="ghost" size="sm" className="text-primary">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Rescata comida ── */}
      <section className="bg-secondary/5">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Leaf className="h-5 w-5 text-secondary" />
                Rescata comida hoy
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Bolsas sorpresa con hasta un 70% de descuento</p>
            </div>
            <Link href="/bolsas" className="hidden items-center gap-1 text-sm font-medium text-secondary hover:underline sm:flex">
              Ver todas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {availableBags.map((bag) => <BagCard key={bag.id} bag={bag} />)}
          </div>
        </div>
      </section>

      {/* ── Cerca de ti ── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
              Cerca de ti
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Restaurantes populares en tu zona</p>
          </div>
          <Link href="/buscar" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearbyRestaurants.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
        </div>
      </section>

      {/* ── CTA ── */}
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
