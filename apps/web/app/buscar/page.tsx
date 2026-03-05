"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Search, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RestaurantCard } from "@/components/restaurant-card"
import { SearchFiltersSheet } from "@/components/search-filters"
import { restaurants } from "@/lib/mock-data"

type SortOption = "rating" | "price_asc" | "price_desc" | "reviews"

const CUISINE_CATEGORIES = [
  { emoji: "🥘", label: "Española",   gradient: "from-orange-50 to-amber-100",  value: "Espanola" },
  { emoji: "🍕", label: "Italiana",   gradient: "from-red-50 to-orange-100",    value: "Italiana" },
  { emoji: "🍣", label: "Japonesa",   gradient: "from-slate-50 to-zinc-100",    value: "Japonesa" },
  { emoji: "🥗", label: "Veggie",     gradient: "from-green-50 to-emerald-100", value: "Vegetariana" },
  { emoji: "🦐", label: "Mariscos",   gradient: "from-blue-50 to-cyan-100",     value: "Marisqueria" },
  { emoji: "🥩", label: "Asador",     gradient: "from-rose-50 to-red-100",      value: "Asador" },
  { emoji: "🌮", label: "Fusión",     gradient: "from-purple-50 to-pink-100",   value: "Fusion" },
  { emoji: "🌿", label: "Ecológico",  gradient: "from-teal-50 to-green-100",    value: "Ecologica" },
]

function SearchPageInner() {
  const searchParams = useSearchParams()
  const initialCuisine = searchParams.get("cuisine")

  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortOption>("rating")
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(initialCuisine ? [initialCuisine] : [])
  const [selectedPrices, setSelectedPrices] = useState<number[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])

  const toggle = <T,>(arr: T[], val: T): T[] =>
    arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]

  const filtered = useMemo(() => {
    let result = [...restaurants]

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.cuisine.some((c) => c.toLowerCase().includes(q)) ||
          r.neighborhood.toLowerCase().includes(q) ||
          r.city.toLowerCase().includes(q)
      )
    }

    if (selectedCuisines.length) {
      result = result.filter((r) =>
        r.cuisine.some((c) => selectedCuisines.includes(c))
      )
    }

    if (selectedPrices.length) {
      result = result.filter((r) => selectedPrices.includes(r.priceRange))
    }

    if (selectedFeatures.length) {
      result = result.filter((r) =>
        selectedFeatures.every((f) => r.features.includes(f))
      )
    }

    if (selectedDietary.length) {
      result = result.filter((r) =>
        selectedDietary.every((d) => r.dietaryOptions.includes(d))
      )
    }

    switch (sort) {
      case "rating":   result.sort((a, b) => b.rating - a.rating); break
      case "price_asc": result.sort((a, b) => a.priceRange - b.priceRange); break
      case "price_desc": result.sort((a, b) => b.priceRange - a.priceRange); break
      case "reviews":  result.sort((a, b) => b.reviewCount - a.reviewCount); break
    }

    return result
  }, [query, sort, selectedCuisines, selectedPrices, selectedFeatures, selectedDietary])

  const filterProps = {
    selectedCuisines,
    selectedPrices,
    selectedFeatures,
    selectedDietary,
    onToggleCuisine: (c: string) => setSelectedCuisines(toggle(selectedCuisines, c)),
    onTogglePrice: (p: number) => setSelectedPrices(toggle(selectedPrices, p)),
    onToggleFeature: (f: string) => setSelectedFeatures(toggle(selectedFeatures, f)),
    onToggleDietary: (d: string) => setSelectedDietary(toggle(selectedDietary, d)),
    onClear: () => {
      setSelectedCuisines([])
      setSelectedPrices([])
      setSelectedFeatures([])
      setSelectedDietary([])
    },
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">Buscar restaurantes</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        {filtered.length} restaurante{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Cuisine category strip */}
      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CUISINE_CATEGORIES.map((cat) => {
          const active = selectedCuisines.includes(cat.value)
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCuisines(toggle(selectedCuisines, cat.value))}
              className="flex flex-shrink-0 flex-col items-center gap-1.5 group"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-2xl text-4xl shadow-sm ring-2 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md
                ${active
                  ? "bg-primary/10 ring-primary scale-105 shadow-md"
                  : `bg-gradient-to-br ${cat.gradient} ring-transparent`
                }`}
              >
                {cat.emoji}
              </div>
              <span className={`text-xs font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
                {cat.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Search + sort bar */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nombre, cocina, zona..."
            className="pl-10"
          />
        </div>
        <div className="flex items-center gap-2">
          <SearchFiltersSheet {...filterProps} />
          <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
            <SelectTrigger className="w-44">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Mejor valorados</SelectItem>
              <SelectItem value="reviews">Mas resenas</SelectItem>
              <SelectItem value="price_asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="price_desc">Precio: mayor a menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg font-medium text-foreground">No se encontraron restaurantes</p>
            <p className="mt-1 text-sm text-muted-foreground">Prueba a cambiar tus filtros o busqueda</p>
            <Button variant="outline" className="mt-4" onClick={filterProps.onClear}>
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => <RestaurantCard key={r.id} restaurant={r} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchPageInner />
    </Suspense>
  )
}
