"use client"

import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const cuisines = ["Espanola", "Tapas", "Japonesa", "Italiana", "Vegetariana", "Marisqueria", "Asador", "Fusion", "Gallega", "Mediterranea", "Ecologica"]
const priceRanges = [
  { label: "$", value: 1 },
  { label: "$$", value: 2 },
  { label: "$$$", value: 3 },
  { label: "$$$$", value: 4 },
]
const features = ["Terraza", "WiFi", "Accesible", "Grupos", "Parking", "Salon privado"]
const dietary = ["Vegetariano", "Vegano", "Sin gluten", "Ecologico", "Pescetariano"]

interface SearchFiltersProps {
  selectedCuisines: string[]
  selectedPrices: number[]
  selectedFeatures: string[]
  selectedDietary: string[]
  onToggleCuisine: (c: string) => void
  onTogglePrice: (p: number) => void
  onToggleFeature: (f: string) => void
  onToggleDietary: (d: string) => void
  onClear: () => void
}

function FilterContent(props: SearchFiltersProps) {
  const totalActive =
    props.selectedCuisines.length +
    props.selectedPrices.length +
    props.selectedFeatures.length +
    props.selectedDietary.length

  return (
    <div className="flex flex-col gap-6">
      {totalActive > 0 && (
        <Button variant="ghost" size="sm" onClick={props.onClear} className="self-start text-primary">
          <X className="mr-1 h-3 w-3" />
          Limpiar filtros ({totalActive})
        </Button>
      )}

      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">Cocina</h4>
        <div className="flex flex-col gap-2">
          {cuisines.map((c) => (
            <label key={c} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <Checkbox
                checked={props.selectedCuisines.includes(c)}
                onCheckedChange={() => props.onToggleCuisine(c)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">Precio</h4>
        <div className="flex gap-2">
          {priceRanges.map((p) => (
            <Button
              key={p.value}
              variant={props.selectedPrices.includes(p.value) ? "default" : "outline"}
              size="sm"
              onClick={() => props.onTogglePrice(p.value)}
            >
              {p.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">Servicios</h4>
        <div className="flex flex-col gap-2">
          {features.map((f) => (
            <label key={f} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <Checkbox
                checked={props.selectedFeatures.includes(f)}
                onCheckedChange={() => props.onToggleFeature(f)}
              />
              {f}
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">Dieta</h4>
        <div className="flex flex-col gap-2">
          {dietary.map((d) => (
            <label key={d} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
              <Checkbox
                checked={props.selectedDietary.includes(d)}
                onCheckedChange={() => props.onToggleDietary(d)}
              />
              {d}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export function SearchFiltersSidebar(props: SearchFiltersProps) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-20 rounded-lg border border-border bg-card p-5">
        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
          <SlidersHorizontal className="h-4 w-4" />
          Filtros
        </h3>
        <FilterContent {...props} />
      </div>
    </aside>
  )
}

export function SearchFiltersSheet(props: SearchFiltersProps) {
  const totalActive =
    props.selectedCuisines.length +
    props.selectedPrices.length +
    props.selectedFeatures.length +
    props.selectedDietary.length

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filtros
          {totalActive > 0 && (
            <span className="ml-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {totalActive}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          <FilterContent {...props} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
