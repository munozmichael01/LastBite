"use client"

import { useState, useMemo } from "react"
import { Search, ArrowUpDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RestaurantCard } from "@/components/restaurant-card"
import { SearchFiltersSidebar, SearchFiltersSheet } from "@/components/search-filters"
import { restaurants } from "@/lib/mock-data"

type SortOption = "rating" | "price_asc" | "price_desc" | "reviews"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortOption>("rating")
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
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
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "price_asc":
        result.sort((a, b) => a.priceRange - b.priceRange)
        break
      case "price_desc":
        result.sort((a, b) => b.priceRange - a.priceRange)
        break
      case "reviews":
        result.sort((a, b) => b.reviewCount - a.reviewCount)
        break
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
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

      <div className="mt-8 flex gap-8">
        <SearchFiltersSidebar {...filterProps} />
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-foreground">No se encontraron restaurantes</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Prueba a cambiar tus filtros o busqueda
              </p>
              <Button variant="outline" className="mt-4" onClick={filterProps.onClear}>
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
