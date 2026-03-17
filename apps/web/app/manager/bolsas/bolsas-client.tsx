"use client"

import { useState } from "react"
import { ShoppingBag, Plus, Package, TrendingUp, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface Plantilla {
  id: string; nombre: string; descripcion: string
  precio: number; valorEstimado: number; etiquetasDieta: string[]; activa: boolean
}

interface Publicacion {
  id: string; plantillaId: string; plantillaNombre: string
  precio: number; valorEstimado: number
  fecha: string; franjaInicio: string; franjaFin: string
  unidadesTotales: number; unidadesVendidas: number
  estado: "ACTIVA" | "FINALIZADA" | "CANCELADA"
  reservas: { id: string; unidades: number; estado: string }[]
}

interface Props {
  plantillas: Plantilla[]
  publicaciones: Publicacion[]
  restauranteId: string
}

const ESTADO_BADGE: Record<string, string> = {
  ACTIVA:     "bg-secondary/10 text-secondary",
  FINALIZADA: "bg-muted text-muted-foreground",
  CANCELADA:  "bg-destructive/10 text-destructive",
}

export function BolsasManagerClient({ plantillas: initPlantillas, publicaciones: initPubs, restauranteId }: Props) {
  const [plantillas, setPlantillas]       = useState(initPlantillas)
  const [publicaciones, setPublicaciones] = useState(initPubs)
  const [dialogOpen, setDialogOpen]       = useState(false)
  const [pubDialogOpen, setPubDialogOpen] = useState(false)
  const [saving, setSaving]               = useState(false)

  // Nueva plantilla form
  const [newNombre, setNewNombre]   = useState("")
  const [newDesc, setNewDesc]       = useState("")
  const [newPrecio, setNewPrecio]   = useState("")
  const [newValor, setNewValor]     = useState("")

  // Nueva publicación form
  const [pubPlantilla, setPubPlantilla]   = useState("")
  const [pubFecha, setPubFecha]           = useState(new Date().toISOString().split("T")[0])
  const [pubInicio, setPubInicio]         = useState("15:00")
  const [pubFin, setPubFin]               = useState("16:30")
  const [pubUnidades, setPubUnidades]     = useState("5")

  const totalVendidas  = publicaciones.reduce((a, p) => a + p.unidadesVendidas, 0)
  const totalIngresos  = publicaciones.reduce((a, p) => a + p.unidadesVendidas * p.precio, 0)
  const activas        = publicaciones.filter((p) => p.estado === "ACTIVA").length

  async function crearPlantilla() {
    if (!newNombre || !newPrecio || !newValor) { toast.error("Completa todos los campos obligatorios"); return }
    setSaving(true)
    const res = await fetch("/api/manager/bolsas/plantillas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ restauranteId, nombre: newNombre, descripcion: newDesc, precio: parseFloat(newPrecio), valorEstimado: parseFloat(newValor) }),
    })
    const data = await res.json()
    if (res.ok) {
      setPlantillas((prev) => [data.plantilla, ...prev])
      setDialogOpen(false); setNewNombre(""); setNewDesc(""); setNewPrecio(""); setNewValor("")
      toast.success("Plantilla creada")
    } else { toast.error(data.error ?? "Error al crear plantilla") }
    setSaving(false)
  }

  async function publicar() {
    if (!pubPlantilla || !pubFecha) { toast.error("Selecciona la plantilla y la fecha"); return }
    setSaving(true)
    const res = await fetch("/api/manager/bolsas/publicaciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ restauranteId, plantillaId: pubPlantilla, fecha: pubFecha, franjaInicio: pubInicio, franjaFin: pubFin, unidadesTotales: parseInt(pubUnidades) }),
    })
    const data = await res.json()
    if (res.ok) {
      setPublicaciones((prev) => [data.publicacion, ...prev])
      setPubDialogOpen(false)
      toast.success("¡Bolsa publicada!")
    } else { toast.error(data.error ?? "Error al publicar") }
    setSaving(false)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <ShoppingBag className="h-6 w-6 text-secondary" />
            Bolsas Sorpresa
          </h1>
          <p className="text-sm text-muted-foreground">Publica excedentes y reduce el desperdicio</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm"><Plus className="mr-1 h-4 w-4" />Nueva plantilla</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nueva plantilla de bolsa</DialogTitle>
                <DialogDescription>Define el tipo de bolsa que ofrecerás habitualmente.</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div><Label>Nombre *</Label><Input className="mt-1" value={newNombre} onChange={(e) => setNewNombre(e.target.value)} placeholder="Ej: Bolsa Sorpresa Almuerzo" /></div>
                <div><Label>Descripción</Label><Input className="mt-1" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Qué incluye la bolsa..." /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Precio venta ($) *</Label><Input className="mt-1" type="number" value={newPrecio} onChange={(e) => setNewPrecio(e.target.value)} placeholder="8" /></div>
                  <div><Label>Valor estimado ($) *</Label><Input className="mt-1" type="number" value={newValor} onChange={(e) => setNewValor(e.target.value)} placeholder="25" /></div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
                <Button onClick={crearPlantilla} disabled={saving}>{saving ? "Guardando..." : "Crear plantilla"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={pubDialogOpen} onOpenChange={setPubDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" disabled={plantillas.length === 0}><Plus className="mr-1 h-4 w-4" />Publicar bolsa</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Publicar bolsa sorpresa</DialogTitle>
                <DialogDescription>Define cuántas bolsas ofreces hoy y en qué franja horaria.</DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-2">
                <div>
                  <Label>Plantilla *</Label>
                  <Select value={pubPlantilla} onValueChange={setPubPlantilla}>
                    <SelectTrigger className="mt-1"><SelectValue placeholder="Selecciona una plantilla" /></SelectTrigger>
                    <SelectContent>
                      {plantillas.map((p) => (
                        <SelectItem key={p.id} value={p.id}>{p.nombre} (${p.precio})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Fecha *</Label><Input className="mt-1" type="date" value={pubFecha} onChange={(e) => setPubFecha(e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label>Recogida desde</Label><Input className="mt-1" type="time" value={pubInicio} onChange={(e) => setPubInicio(e.target.value)} /></div>
                  <div><Label>Recogida hasta</Label><Input className="mt-1" type="time" value={pubFin} onChange={(e) => setPubFin(e.target.value)} /></div>
                </div>
                <div><Label>Unidades disponibles</Label><Input className="mt-1" type="number" value={pubUnidades} onChange={(e) => setPubUnidades(e.target.value)} min={1} /></div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setPubDialogOpen(false)}>Cancelar</Button>
                <Button onClick={publicar} disabled={saving}>{saving ? "Publicando..." : "Publicar"}</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Bolsas vendidas", value: totalVendidas, icon: Package },
          { label: "Ingresos totales", value: `$${totalIngresos.toFixed(0)}`, icon: TrendingUp },
          { label: "Publicaciones activas", value: activas, icon: Clock },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="flex items-center gap-3 p-3 sm:p-4">
              <div className="rounded-lg bg-primary/10 p-2"><s.icon className="h-4 w-4 text-primary" /></div>
              <div>
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Plantillas */}
      {plantillas.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Plantillas</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {plantillas.map((p) => (
              <Card key={p.id} className={cn(!p.activa && "opacity-50")}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{p.nombre}</CardTitle>
                    <Badge variant="outline">{p.activa ? "Activa" : "Pausada"}</Badge>
                  </div>
                  <CardDescription className="text-xs">{p.descripcion}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-bold text-primary">${p.precio}</span>
                    <span className="text-muted-foreground line-through text-xs">${p.valorEstimado}</span>
                    <span className="text-secondary text-xs font-medium">
                      {Math.round((1 - p.precio / p.valorEstimado) * 100)}% descuento
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Publicaciones */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Publicaciones recientes</h2>
        {publicaciones.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <ShoppingBag className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">Aún no has publicado ninguna bolsa</p>
              <p className="text-xs text-muted-foreground mt-1">Crea una plantilla y publica tu primera bolsa sorpresa</p>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {publicaciones.map((pub) => {
              const disponibles = pub.unidadesTotales - pub.unidadesVendidas
              const pct = Math.round((pub.unidadesVendidas / pub.unidadesTotales) * 100)
              return (
                <Card key={pub.id}>
                  <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground text-sm">{pub.plantillaNombre}</p>
                        <Badge className={cn("text-xs", ESTADO_BADGE[pub.estado])}>{pub.estado}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {pub.fecha} · {pub.franjaInicio}–{pub.franjaFin}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden max-w-32">
                          <div className="h-full rounded-full bg-secondary" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{pub.unidadesVendidas}/{pub.unidadesTotales} vendidas</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{disponibles}</p>
                      <p className="text-xs text-muted-foreground">disponibles</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
