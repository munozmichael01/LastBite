"use client"

import { useState, useMemo } from "react"
import { Leaf, Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BagCard } from "@/components/bag-card"
import { surplusBags } from "@/lib/mock-data"

const dietaryFilters = ["Vegano", "Ecologico", "Sin gluten", "Pescetariano"]

export default function BagsPage() {
  const [query, setQuery] = useState("")
  const [showSoldOut, setShowSoldOut] = useState(false)
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])

  const filtered = useMemo(() => {
    let result = [...surplusBags]

    if (!showSoldOut) {
      result = result.filter((b) => b.status !== "sold_out")
    }

    if (query) {
      const q = query.toLowerCase()
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.restaurantName.toLowerCase().includes(q)
      )
    }

    if (selectedDietary.length) {
      result = result.filter((b) =>
        selectedDietary.some((d) =>
          b.dietaryTags.some((t) => t.toLowerCase().includes(d.toLowerCase()))
        )
      )
    }

    return result
  }, [query, showSoldOut, selectedDietary])

  const toggleDietary = (d: string) => {
    setSelectedDietary((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
          <Leaf className="h-5 w-5 text-secondary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Bolsas Sorpresa</h1>
          <p className="text-sm text-muted-foreground">
            Rescata comida excedente y ahorra hasta un 70%
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por restaurante o tipo de bolsa..."
            className="pl-10"
          />
        </div>
        <Button
          variant={showSoldOut ? "default" : "outline"}
          size="sm"
          onClick={() => setShowSoldOut(!showSoldOut)}
        >
          {showSoldOut ? "Ocultar agotadas" : "Mostrar agotadas"}
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {dietaryFilters.map((d) => (
          <Badge
            key={d}
            variant={selectedDietary.includes(d) ? "default" : "outline"}
            className={`cursor-pointer ${selectedDietary.includes(d) ? "bg-secondary text-secondary-foreground" : ""}`}
            onClick={() => toggleDietary(d)}
          >
            {d}
          </Badge>
        ))}
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Leaf className="mx-auto h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-lg font-medium text-foreground">No hay bolsas disponibles</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Vuelve mas tarde para ver nuevas bolsas sorpresa
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((bag) => (
              <BagCard key={bag.id} bag={bag} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
