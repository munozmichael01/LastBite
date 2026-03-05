"use client"

import { useState, useMemo } from "react"
import { Leaf, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BagCard } from "@/components/bag-card"
import { surplusBags } from "@/lib/mock-data"

const DIETARY_CATEGORIES = [
  { emoji: "🌱", label: "Vegano",        gradient: "from-green-50 to-emerald-100", value: "Vegano" },
  { emoji: "🌿", label: "Ecológico",     gradient: "from-teal-50 to-green-100",    value: "Ecologico" },
  { emoji: "🌾", label: "Sin gluten",    gradient: "from-amber-50 to-yellow-100",  value: "Sin gluten" },
  { emoji: "🐟", label: "Pescetariano",  gradient: "from-blue-50 to-cyan-100",     value: "Pescetariano" },
  { emoji: "🥛", label: "Sin lactosa",   gradient: "from-sky-50 to-blue-100",      value: "Sin lactosa" },
]

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

  const toggle = (val: string) =>
    setSelectedDietary((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    )

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
          <Leaf className="h-5 w-5 text-secondary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Bolsas Sorpresa</h1>
          <p className="text-sm text-muted-foreground">Rescata comida excedente y ahorra hasta un 70%</p>
        </div>
      </div>

      {/* Dietary category strip */}
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {DIETARY_CATEGORIES.map((cat) => {
          const active = selectedDietary.includes(cat.value)
          return (
            <button
              key={cat.value}
              onClick={() => toggle(cat.value)}
              className="flex flex-shrink-0 flex-col items-center gap-1.5 group"
            >
              <div className={`flex h-20 w-20 items-center justify-center rounded-2xl text-4xl shadow-sm ring-2 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md
                ${active
                  ? "bg-secondary/10 ring-secondary scale-105 shadow-md"
                  : `bg-gradient-to-br ${cat.gradient} ring-transparent`
                }`}
              >
                {cat.emoji}
              </div>
              <span className={`text-xs font-medium transition-colors ${active ? "text-secondary" : "text-muted-foreground group-hover:text-foreground"}`}>
                {cat.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Search + toggle */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
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

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Leaf className="mx-auto h-10 w-10 text-muted-foreground/50" />
            <p className="mt-3 text-lg font-medium text-foreground">No hay bolsas disponibles</p>
            <p className="mt-1 text-sm text-muted-foreground">Vuelve mas tarde para ver nuevas bolsas sorpresa</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((bag) => <BagCard key={bag.id} bag={bag} />)}
          </div>
        )}
      </div>
    </div>
  )
}
