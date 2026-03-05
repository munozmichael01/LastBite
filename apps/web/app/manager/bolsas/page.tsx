"use client"

import { useState } from "react"
import {
  ShoppingBag,
  Plus,
  Pause,
  Play,
  Trash2,
  Clock,
  Package,
  TrendingUp,
  Euro,
  BarChart3,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ManagerBag {
  id: string
  name: string
  description: string
  originalPrice: number
  price: number
  available: number
  total: number
  pickupFrom: string
  pickupUntil: string
  active: boolean
  soldToday: number
}

const initialBags: ManagerBag[] = [
  {
    id: "mb1",
    name: "Bolsa Mediterranea",
    description: "Platos del dia, ensaladas y postre. Variedad de cocina mediterranea.",
    originalPrice: 14.99,
    price: 4.99,
    available: 3,
    total: 5,
    pickupFrom: "21:00",
    pickupUntil: "22:00",
    active: true,
    soldToday: 2,
  },
  {
    id: "mb2",
    name: "Bolsa Tapas Clasicas",
    description: "Seleccion de tapas sobrantes del servicio de almuerzo.",
    originalPrice: 12.99,
    price: 3.99,
    available: 2,
    total: 4,
    pickupFrom: "16:00",
    pickupUntil: "17:30",
    active: true,
    soldToday: 2,
  },
  {
    id: "mb3",
    name: "Bolsa del Chef",
    description: "Sorpresa del chef con platos premium del dia.",
    originalPrice: 22.99,
    price: 7.99,
    available: 0,
    total: 3,
    pickupFrom: "22:00",
    pickupUntil: "22:30",
    active: false,
    soldToday: 3,
  },
]

interface VentaBolsa {
  id: string
  bag: string
  buyer: string
  time: string
  date: string
  price: number
  code: string
}

const historialVentas: VentaBolsa[] = [
  { id: "vh1",  bag: "Bolsa Mediterránea",   buyer: "Sofia R.",    time: "21:15", date: "2026-02-14", price: 4.99, code: "LB-9A3F" },
  { id: "vh2",  bag: "Bolsa Tapas Clásicas", buyer: "Javier M.",   time: "16:30", date: "2026-02-14", price: 3.99, code: "LB-7B2D" },
  { id: "vh3",  bag: "Bolsa del Chef",       buyer: "Elena P.",    time: "22:05", date: "2026-02-14", price: 7.99, code: "LB-5C1E" },
  { id: "vh4",  bag: "Bolsa Tapas Clásicas", buyer: "Miguel A.",   time: "16:45", date: "2026-02-14", price: 3.99, code: "LB-4D2A" },
  { id: "vh5",  bag: "Bolsa Mediterránea",   buyer: "Carmen L.",   time: "21:30", date: "2026-02-14", price: 4.99, code: "LB-3B1C" },
  { id: "vh6",  bag: "Bolsa del Chef",       buyer: "Roberto F.",  time: "21:55", date: "2026-02-13", price: 7.99, code: "LB-2E8F" },
  { id: "vh7",  bag: "Bolsa Mediterránea",   buyer: "Lucía M.",    time: "21:10", date: "2026-02-13", price: 4.99, code: "LB-1G7H" },
  { id: "vh8",  bag: "Bolsa Tapas Clásicas", buyer: "Alberto S.",  time: "16:20", date: "2026-02-13", price: 3.99, code: "LB-9I6J" },
  { id: "vh9",  bag: "Bolsa Mediterránea",   buyer: "Pilar R.",    time: "21:20", date: "2026-02-12", price: 4.99, code: "LB-8K5L" },
  { id: "vh10", bag: "Bolsa del Chef",       buyer: "Andrés T.",   time: "22:10", date: "2026-02-12", price: 7.99, code: "LB-7M4N" },
  { id: "vh11", bag: "Bolsa Tapas Clásicas", buyer: "Nuria V.",    time: "16:35", date: "2026-02-12", price: 3.99, code: "LB-6O3P" },
  { id: "vh12", bag: "Bolsa Mediterránea",   buyer: "Fernando B.", time: "21:45", date: "2026-02-11", price: 4.99, code: "LB-5Q2R" },
  { id: "vh13", bag: "Bolsa del Chef",       buyer: "Isabel C.",   time: "22:00", date: "2026-02-11", price: 7.99, code: "LB-4S1T" },
  { id: "vh14", bag: "Bolsa Tapas Clásicas", buyer: "Juan D.",     time: "16:50", date: "2026-02-10", price: 3.99, code: "LB-3U0V" },
  { id: "vh15", bag: "Bolsa Mediterránea",   buyer: "Rosa G.",     time: "21:05", date: "2026-02-07", price: 4.99, code: "LB-2W9X" },
  { id: "vh16", bag: "Bolsa del Chef",       buyer: "Pablo N.",    time: "22:15", date: "2026-02-07", price: 7.99, code: "LB-1Y8Z" },
  { id: "vh17", bag: "Bolsa Tapas Clásicas", buyer: "Vera O.",     time: "16:40", date: "2026-02-06", price: 3.99, code: "LB-0A7B" },
  { id: "vh18", bag: "Bolsa Mediterránea",   buyer: "Hector P.",   time: "21:25", date: "2026-02-05", price: 4.99, code: "LB-9C6D" },
  { id: "vh19", bag: "Bolsa del Chef",       buyer: "Alma Q.",     time: "21:50", date: "2026-02-04", price: 7.99, code: "LB-8E5F" },
  { id: "vh20", bag: "Bolsa Mediterránea",   buyer: "Gonzalo R.",  time: "21:15", date: "2026-02-03", price: 4.99, code: "LB-7G4H" },
  { id: "vh21", bag: "Bolsa Tapas Clásicas", buyer: "Diana S.",    time: "16:30", date: "2026-02-01", price: 3.99, code: "LB-6I3J" },
  { id: "vh22", bag: "Bolsa del Chef",       buyer: "Marco T.",    time: "22:05", date: "2026-01-28", price: 7.99, code: "LB-5K2L" },
  { id: "vh23", bag: "Bolsa Mediterránea",   buyer: "Laura U.",    time: "21:35", date: "2026-01-21", price: 4.99, code: "LB-4M1N" },
  { id: "vh24", bag: "Bolsa Tapas Clásicas", buyer: "Sergio V.",   time: "16:55", date: "2026-01-14", price: 3.99, code: "LB-3O0P" },
]

type PeriodoKey = "hoy" | "semana" | "mes" | "acumulado"

const periodos: { key: PeriodoKey; label: string }[] = [
  { key: "hoy",       label: "Hoy" },
  { key: "semana",    label: "Esta semana" },
  { key: "mes",       label: "Este mes" },
  { key: "acumulado", label: "Acumulado" },
]

function getVentasByPeriodo(ventas: VentaBolsa[], periodo: PeriodoKey): VentaBolsa[] {
  const today = "2026-02-14"
  if (periodo === "hoy")       return ventas.filter((v) => v.date === today)
  if (periodo === "semana")    return ventas.filter((v) => v.date >= "2026-02-10" && v.date <= "2026-02-16")
  if (periodo === "mes")       return ventas.filter((v) => v.date.startsWith("2026-02"))
  return ventas
}

export default function ManagerBolsasPage() {
  const [bags, setBags] = useState(initialBags)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [periodo, setPeriodo] = useState<PeriodoKey>("semana")

  function toggleActive(id: string) {
    setBags((prev) =>
      prev.map((b) => (b.id === id ? { ...b, active: !b.active } : b))
    )
    toast.success("Estado de la bolsa actualizado")
  }

  function deleteBag(id: string) {
    setBags((prev) => prev.filter((b) => b.id !== id))
    toast.success("Bolsa eliminada")
  }

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newBag: ManagerBag = {
      id: `mb${Date.now()}`,
      name: form.get("name") as string,
      description: form.get("description") as string,
      originalPrice: Number(form.get("originalPrice")),
      price: Number(form.get("price")),
      available: Number(form.get("total")),
      total: Number(form.get("total")),
      pickupFrom: form.get("pickupFrom") as string,
      pickupUntil: form.get("pickupUntil") as string,
      active: true,
      soldToday: 0,
    }
    setBags((prev) => [newBag, ...prev])
    setDialogOpen(false)
    toast.success("Bolsa sorpresa creada correctamente")
  }

  const totalSoldToday = bags.reduce((sum, b) => sum + b.soldToday, 0)
  const totalAvailable = bags.reduce((sum, b) => sum + (b.active ? b.available : 0), 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <ShoppingBag className="h-6 w-6 text-secondary" />
            Bolsas sorpresa
          </h1>
          <p className="text-sm text-muted-foreground">
            {totalAvailable} disponible{totalAvailable !== 1 ? "s" : ""} &middot;{" "}
            {totalSoldToday} vendida{totalSoldToday !== 1 ? "s" : ""} hoy
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Plus className="mr-2 h-4 w-4" />
              Nueva bolsa
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear bolsa sorpresa</DialogTitle>
              <DialogDescription>
                Publica una nueva bolsa sorpresa para reducir desperdicios.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" name="name" placeholder="Ej: Bolsa Mediterranea" required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Descripcion</Label>
                <Input id="description" name="description" placeholder="Que incluye la bolsa..." required />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="originalPrice">Precio original</Label>
                  <Input id="originalPrice" name="originalPrice" type="number" step="0.01" min="1" placeholder="14.99" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="price">Precio bolsa</Label>
                  <Input id="price" name="price" type="number" step="0.01" min="1" placeholder="4.99" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="total">Unidades</Label>
                  <Input id="total" name="total" type="number" min="1" placeholder="5" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="pickupFrom">Recogida desde</Label>
                  <Input id="pickupFrom" name="pickupFrom" type="time" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="pickupUntil">Recogida hasta</Label>
                  <Input id="pickupUntil" name="pickupUntil" type="time" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Publicar bolsa
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bags.map((bag) => {
          const discount = Math.round(((bag.originalPrice - bag.price) / bag.originalPrice) * 100)
          return (
            <Card key={bag.id} className="relative overflow-hidden">
              {bag.active && (
                <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
              )}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{bag.name}</CardTitle>
                    <CardDescription className="line-clamp-2">{bag.description}</CardDescription>
                  </div>
                  <Badge className={bag.active ? "bg-secondary/10 text-secondary" : "bg-muted text-muted-foreground"}>
                    {bag.active ? "Activa" : "Pausada"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-lg font-bold text-secondary">{bag.price.toFixed(2)} EUR</span>
                  <span className="text-sm text-muted-foreground line-through">{bag.originalPrice.toFixed(2)} EUR</span>
                  <Badge variant="outline" className="border-secondary/30 text-secondary text-[10px]">
                    -{discount}%
                  </Badge>
                </div>
                <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {bag.pickupFrom} - {bag.pickupUntil}
                  </span>
                  <span className="flex items-center gap-1">
                    <Package className="h-3 w-3" />
                    {bag.available}/{bag.total} disponibles
                  </span>
                </div>
                {/* Progress bar */}
                <div className="mb-3 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-secondary transition-all"
                    style={{ width: `${((bag.total - bag.available) / bag.total) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground">
                    {bag.soldToday} vendida{bag.soldToday !== 1 ? "s" : ""} hoy
                  </p>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleActive(bag.id)}>
                      {bag.active ? (
                        <Pause className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Play className="h-4 w-4 text-secondary" />
                      )}
                      <span className="sr-only">{bag.active ? "Pausar" : "Activar"}</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteBag(bag.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                      <span className="sr-only">Eliminar</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Historial de ventas */}
      <Separator />

      <div>
        <div className="mb-4 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-secondary" />
          <h2 className="text-lg font-semibold text-foreground">Historial de ventas</h2>
        </div>

        {/* Period selector */}
        <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
          {periodos.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriodo(p.key)}
              className={cn(
                "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
                periodo === p.key
                  ? "bg-secondary text-secondary-foreground border-secondary"
                  : "bg-background border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Summary metrics */}
        {(() => {
          const ventasPeriodo = getVentasByPeriodo(historialVentas, periodo)
          const totalUnidades = ventasPeriodo.length
          const totalIngresos = ventasPeriodo.reduce((s, v) => s + v.price, 0)
          const ticketMedio = totalUnidades > 0 ? totalIngresos / totalUnidades : 0

          return (
            <>
              <div className="mb-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="mb-1 flex justify-center">
                    <ShoppingBag className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{totalUnidades}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Bolsas vendidas</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="mb-1 flex justify-center">
                    <Euro className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xl font-bold text-foreground tabular-nums whitespace-nowrap">
                    {totalIngresos.toFixed(2).replace(".", ",")} €
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Ingresos</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="mb-1 flex justify-center">
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-xl font-bold text-foreground tabular-nums whitespace-nowrap">
                    {ticketMedio.toFixed(2).replace(".", ",")} €
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">Ticket medio</p>
                </div>
              </div>

              {/* Sales list */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {totalUnidades} venta{totalUnidades !== 1 ? "s" : ""}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {ventasPeriodo.length === 0 ? (
                    <p className="py-6 text-center text-sm text-muted-foreground">
                      Sin ventas en este periodo.
                    </p>
                  ) : (
                    <div className="flex flex-col divide-y divide-border">
                      {ventasPeriodo.slice(0, 20).map((venta) => (
                        <div key={venta.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-medium text-foreground">{venta.bag}</span>
                            <span className="text-xs text-muted-foreground">
                              {venta.buyer} · {venta.date} {venta.time}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <Badge variant="outline" className="font-mono text-[10px]">{venta.code}</Badge>
                            <span className="text-sm font-bold text-secondary w-14 text-right">
                              {venta.price.toFixed(2)} €
                            </span>
                          </div>
                        </div>
                      ))}
                      {ventasPeriodo.length > 20 && (
                        <p className="pt-3 text-center text-xs text-muted-foreground">
                          + {ventasPeriodo.length - 20} ventas más en este periodo
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )
        })()}
      </div>
    </div>
  )
}
