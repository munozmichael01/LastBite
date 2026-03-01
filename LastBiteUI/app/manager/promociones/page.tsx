"use client"

import { useState } from "react"
import {
  Tag,
  Plus,
  Pause,
  Play,
  Trash2,
  Calendar,
  Percent,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface Promotion {
  id: string
  name: string
  discount: number
  type: "percentage" | "fixed" | "2x1"
  conditions: string
  validDays: string[]
  validFrom: string
  validUntil: string
  status: "active" | "paused" | "expired"
  usageCount: number
}

const initialPromotions: Promotion[] = [
  {
    id: "p1",
    name: "Almuerzo entre semana",
    discount: 30,
    type: "percentage",
    conditions: "Valido de lunes a viernes, de 12:00 a 16:00",
    validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
    validFrom: "2026-01-01",
    validUntil: "2026-06-30",
    status: "active",
    usageCount: 142,
  },
  {
    id: "p2",
    name: "2x1 en Cenas",
    discount: 50,
    type: "2x1",
    conditions: "Segundo menu gratis. Jueves y viernes noche.",
    validDays: ["Jue", "Vie"],
    validFrom: "2026-02-01",
    validUntil: "2026-04-30",
    status: "active",
    usageCount: 67,
  },
  {
    id: "p3",
    name: "Descuento San Valentin",
    discount: 20,
    type: "percentage",
    conditions: "Valido solo 14 de febrero, cena.",
    validDays: ["Vie"],
    validFrom: "2026-02-14",
    validUntil: "2026-02-14",
    status: "active",
    usageCount: 18,
  },
  {
    id: "p4",
    name: "Promo verano 2025",
    discount: 15,
    type: "percentage",
    conditions: "Valido en julio y agosto, todo el dia.",
    validDays: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
    validFrom: "2025-07-01",
    validUntil: "2025-08-31",
    status: "expired",
    usageCount: 340,
  },
]

const statusColors = {
  active: "bg-secondary/10 text-secondary",
  paused: "bg-accent/20 text-accent-foreground",
  expired: "bg-muted text-muted-foreground",
}

const statusLabels = {
  active: "Activa",
  paused: "Pausada",
  expired: "Expirada",
}

export default function ManagerPromocionesPage() {
  const [promotions, setPromotions] = useState(initialPromotions)
  const [dialogOpen, setDialogOpen] = useState(false)

  function toggleStatus(id: string) {
    setPromotions((prev) =>
      prev.map((p) => {
        if (p.id !== id || p.status === "expired") return p
        const newStatus = p.status === "active" ? "paused" : "active"
        return { ...p, status: newStatus }
      })
    )
    toast.success("Estado de la promocion actualizado")
  }

  function deletePromo(id: string) {
    setPromotions((prev) => prev.filter((p) => p.id !== id))
    toast.success("Promocion eliminada")
  }

  function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const newPromo: Promotion = {
      id: `p${Date.now()}`,
      name: form.get("name") as string,
      discount: Number(form.get("discount")),
      type: (form.get("type") as Promotion["type"]) || "percentage",
      conditions: form.get("conditions") as string,
      validDays: ["Lun", "Mar", "Mie", "Jue", "Vie"],
      validFrom: form.get("validFrom") as string,
      validUntil: form.get("validUntil") as string,
      status: "active",
      usageCount: 0,
    }
    setPromotions((prev) => [newPromo, ...prev])
    setDialogOpen(false)
    toast.success("Promocion creada correctamente")
  }

  const activeCount = promotions.filter((p) => p.status === "active").length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <Tag className="h-6 w-6 text-primary" />
            Promociones
          </h1>
          <p className="text-sm text-muted-foreground">
            {activeCount} promocion{activeCount !== 1 ? "es" : ""} activa{activeCount !== 1 ? "s" : ""}
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nueva promocion
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear promocion</DialogTitle>
              <DialogDescription>
                Crea una nueva promocion para atraer mas comensales.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreate} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nombre de la promocion</Label>
                <Input id="name" name="name" placeholder="Ej: Descuento almuerzo" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="type">Tipo</Label>
                  <Select name="type" defaultValue="percentage">
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Porcentaje</SelectItem>
                      <SelectItem value="fixed">Descuento fijo</SelectItem>
                      <SelectItem value="2x1">2x1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="discount">Descuento (%/EUR)</Label>
                  <Input id="discount" name="discount" type="number" min={1} max={100} placeholder="30" required />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="conditions">Condiciones</Label>
                <Input id="conditions" name="conditions" placeholder="Ej: De lunes a viernes, comida" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="validFrom">Desde</Label>
                  <Input id="validFrom" name="validFrom" type="date" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="validUntil">Hasta</Label>
                  <Input id="validUntil" name="validUntil" type="date" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Crear promocion</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Promotions grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {promotions.map((promo) => (
          <Card key={promo.id} className="relative overflow-hidden">
            {promo.status === "active" && (
              <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
            )}
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{promo.name}</CardTitle>
                  <CardDescription>{promo.conditions}</CardDescription>
                </div>
                <Badge className={statusColors[promo.status]}>
                  {statusLabels[promo.status]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 font-medium text-primary">
                  <Percent className="h-3.5 w-3.5" />
                  {promo.type === "2x1" ? "2x1" : `-${promo.discount}${promo.type === "percentage" ? "%" : " EUR"}`}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {promo.validFrom} - {promo.validUntil}
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-1">
                {promo.validDays.map((d) => (
                  <Badge key={d} variant="outline" className="text-[10px]">
                    {d}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <p className="text-xs text-muted-foreground">
                  {promo.usageCount} uso{promo.usageCount !== 1 ? "s" : ""}
                </p>
                <div className="flex gap-1">
                  {promo.status !== "expired" && (
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleStatus(promo.id)}>
                      {promo.status === "active" ? (
                        <Pause className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Play className="h-4 w-4 text-secondary" />
                      )}
                      <span className="sr-only">
                        {promo.status === "active" ? "Pausar" : "Activar"}
                      </span>
                    </Button>
                  )}
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deletePromo(promo.id)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                    <span className="sr-only">Eliminar</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
