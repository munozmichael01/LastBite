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
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function ManagerBolsasPage() {
  const [bags, setBags] = useState(initialBags)
  const [dialogOpen, setDialogOpen] = useState(false)

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
    </div>
  )
}
