"use client"

import { useState } from "react"
import {
  Settings,
  Store,
  Clock,
  MapPin,
  Phone,
  Mail,
  Save,
  ImageIcon,
  Utensils,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

const daysOfWeek = [
  { key: "lun", label: "Lunes" },
  { key: "mar", label: "Martes" },
  { key: "mie", label: "Miercoles" },
  { key: "jue", label: "Jueves" },
  { key: "vie", label: "Viernes" },
  { key: "sab", label: "Sabado" },
  { key: "dom", label: "Domingo" },
]

export default function ManagerAjustesPage() {
  const [saving, setSaving] = useState(false)

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      toast.success("Ajustes guardados correctamente")
    }, 1000)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <Settings className="h-6 w-6 text-primary" />
          Ajustes del restaurante
        </h1>
        <p className="text-sm text-muted-foreground">Configura la informacion y preferencias de tu restaurante</p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        {/* Basic info */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Store className="h-4 w-4 text-primary" />
              Informacion basica
            </CardTitle>
            <CardDescription>Datos principales de tu restaurante</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre del restaurante</Label>
              <Input id="name" defaultValue="El Sabor de Casa" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Descripcion</Label>
              <Textarea
                id="description"
                rows={3}
                defaultValue="Cocina tradicional espanola con toques modernos. Ingredientes frescos de mercado cada dia."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="cuisine">Tipo de cocina</Label>
                <Input id="cuisine" defaultValue="Espanola, Mediterranea" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="price">Rango de precios</Label>
                <Input id="price" defaultValue="EUR EUR EUR" readOnly className="text-muted-foreground" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Caracteristicas</Label>
              <div className="flex flex-wrap gap-2">
                {["Terraza", "WiFi", "Accesible", "Parking", "Reservado privado", "Musica en vivo"].map((f) => (
                  <Badge key={f} variant="outline" className="cursor-pointer hover:bg-muted">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Phone className="h-4 w-4 text-primary" />
              Contacto y ubicacion
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Telefono</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="phone" defaultValue="+34 914 567 890" className="pl-10" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input id="email" type="email" defaultValue="info@elsabordecasa.es" className="pl-10" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="address">Direccion</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="address" defaultValue="Calle Gran Via, 45, 28013 Madrid" className="pl-10" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4 text-primary" />
              Horarios
            </CardTitle>
            <CardDescription>Configura los horarios de apertura</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {daysOfWeek.map((day) => {
                const isClosed = day.key === "dom"
                return (
                  <div
                    key={day.key}
                    className="flex items-center gap-4 rounded-lg border border-border px-4 py-3"
                  >
                    <span className="w-24 text-sm font-medium text-foreground">{day.label}</span>
                    {isClosed ? (
                      <Badge variant="outline" className="text-muted-foreground">Cerrado</Badge>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Input type="time" defaultValue="12:00" className="w-28" />
                        <span className="text-sm text-muted-foreground">-</span>
                        <Input type="time" defaultValue="23:00" className="w-28" />
                      </div>
                    )}
                    <div className="ml-auto flex items-center gap-2">
                      <Switch defaultChecked={!isClosed} />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Capacity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Utensils className="h-4 w-4 text-primary" />
              Capacidad
            </CardTitle>
            <CardDescription>Configura la capacidad maxima del restaurante</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Label htmlFor="tables">Mesas totales</Label>
                <Input id="tables" type="number" defaultValue={18} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="capacity">Aforo maximo</Label>
                <Input id="capacity" type="number" defaultValue={72} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="turnoMin">Duracion turno (min)</Label>
                <Input id="turnoMin" type="number" defaultValue={90} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ImageIcon className="h-4 w-4 text-primary" />
              Galeria
            </CardTitle>
            <CardDescription>Sube fotos del restaurante, platos y ambiente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border py-12">
              <div className="text-center">
                <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Arrastra fotos o haz clic para subir
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG hasta 5MB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="flex justify-end">
          <Button type="submit" disabled={saving} className="min-w-32">
            <Save className="mr-2 h-4 w-4" />
            {saving ? "Guardando..." : "Guardar cambios"}
          </Button>
        </div>
      </form>
    </div>
  )
}
