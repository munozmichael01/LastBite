"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, Clock, Users, Tag, ArrowLeft, ArrowRight, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import type { Restaurant } from "@/lib/mock-data"

const dates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() + i + 1)
  return {
    value: d.toISOString().split("T")[0],
    label: d.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" }),
  }
})

interface Confirmed {
  codigo: string
  fecha: string
  hora: string
  comensales: number
  restaurantName: string
  restaurantAddress: string
}

export function ReservarClient({
  restaurant,
  initialUser,
}: {
  restaurant: Restaurant
  initialUser: { name: string; email: string } | null
}) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [guests, setGuests] = useState("2")
  const [promotion, setPromotion] = useState("")
  const [name, setName] = useState(initialUser?.name ?? "")
  const [email, setEmail] = useState(initialUser?.email ?? "")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [saving, setSaving] = useState(false)
  const [confirmed, setConfirmed] = useState<Confirmed | null>(null)

  const activePromos = restaurant.promotions.filter((p) => p.status === "active")
  const selectedPromo = activePromos.find((p) => p.id === promotion)

  // Generate time slots from restaurant turnos/hours
  const timeSlots: string[] = []
  if (restaurant.hours.length > 0) {
    for (const h of restaurant.hours) {
      const [startH, startM] = h.open.split(":").map(Number)
      const [endH, endM] = h.close.split(":").map(Number)
      let cur = startH * 60 + startM
      const end = endH * 60 + endM - 30 // stop 30 min before close
      while (cur <= end) {
        const hh = String(Math.floor(cur / 60)).padStart(2, "0")
        const mm = String(cur % 60).padStart(2, "0")
        const slot = `${hh}:${mm}`
        if (!timeSlots.includes(slot)) timeSlots.push(slot)
        cur += 30
      }
    }
  }
  if (timeSlots.length === 0) {
    // fallback slots
    ;["13:00","13:30","14:00","14:30","15:00","20:00","20:30","21:00","21:30","22:00"].forEach((t) => timeSlots.push(t))
  }

  const canProceedStep1 = selectedDate && selectedTime && guests
  const canProceedStep2 = name && email

  async function handleConfirm() {
    setSaving(true)
    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          restauranteId: restaurant.id,
          fecha: selectedDate,
          hora: selectedTime,
          comensales: parseInt(guests),
          notas: notes || null,
          promocionId: promotion || null,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.error ?? "Error al confirmar la reserva")
        return
      }
      setConfirmed({
        codigo: data.reserva.codigo,
        fecha: selectedDate,
        hora: selectedTime,
        comensales: parseInt(guests),
        restaurantName: data.reserva.restaurante.nombre,
        restaurantAddress: data.reserva.restaurante.direccion,
      })
    } catch {
      toast.error("Error de conexión")
    } finally {
      setSaving(false)
    }
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Check className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">¡Reserva confirmada!</h1>
          <p className="mt-2 text-muted-foreground">
            Muestra este código en el restaurante al llegar
          </p>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Código de reserva</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold font-mono text-primary">
                    {confirmed.codigo.slice(-8).toUpperCase()}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(confirmed.codigo.slice(-8).toUpperCase())
                      toast.success("Código copiado")
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground">{confirmed.restaurantName}</h3>
                <p className="text-sm text-muted-foreground">{confirmed.restaurantAddress}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Fecha</p>
                  <p className="text-sm font-medium text-foreground">{confirmed.fecha}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Hora</p>
                  <p className="text-sm font-medium text-foreground">{confirmed.hora}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Comensales</p>
                  <p className="text-sm font-medium text-foreground">{confirmed.comensales}</p>
                </div>
              </div>
              {selectedPromo && (
                <div className="rounded-lg bg-accent/10 p-3">
                  <p className="text-sm font-medium text-foreground">
                    Promoción aplicada: {selectedPromo.name} (-{selectedPromo.discount}%)
                  </p>
                </div>
              )}
              {notes && (
                <div>
                  <p className="text-xs text-muted-foreground">Notas</p>
                  <p className="text-sm text-foreground">{notes}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Link href="/mis-reservas" className="flex-1">
            <Button variant="outline" className="w-full">Ver mis reservas</Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button className="w-full">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <Link href={`/restaurante/${restaurant.id}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Volver a {restaurant.name}
      </Link>

      <h1 className="mt-4 text-2xl font-bold text-foreground">Reservar mesa</h1>
      <p className="mt-1 text-sm text-muted-foreground">{restaurant.name}</p>

      {/* Step indicator */}
      <div className="mt-6 flex items-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <Check className="h-4 w-4" /> : s}
            </div>
            {s < 3 && <div className={`h-0.5 w-8 ${step > s ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
        <span className="ml-2 text-sm text-muted-foreground">
          {step === 1 ? "Fecha y hora" : step === 2 ? "Datos personales" : "Confirmar"}
        </span>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarDays className="h-4 w-4 text-primary" />
              Selecciona fecha y hora
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div>
              <Label className="text-sm font-medium">Fecha</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {dates.slice(0, 7).map((d) => (
                  <Button
                    key={d.value}
                    variant={selectedDate === d.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDate(d.value)}
                    className="h-auto py-2"
                  >
                    <span className="text-xs capitalize">{d.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-muted-foreground" />
                Hora
              </Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {timeSlots.map((t) => (
                  <Button
                    key={t}
                    variant={selectedTime === t ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Users className="h-4 w-4 text-muted-foreground" />
                Comensales
              </Label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="mt-2 w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "persona" : "personas"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {activePromos.length > 0 && (
              <div>
                <Label className="flex items-center gap-2 text-sm font-medium">
                  <Tag className="h-4 w-4 text-accent" />
                  Promoción (opcional)
                </Label>
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    variant={promotion === "" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPromotion("")}
                    className="justify-start"
                  >
                    Sin promoción
                  </Button>
                  {activePromos.map((p) => (
                    <Button
                      key={p.id}
                      variant={promotion === p.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPromotion(p.id)}
                      className="justify-start"
                    >
                      {p.name} (-{p.discount}%) {p.conditions && `— ${p.conditions}`}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button onClick={() => setStep(2)} disabled={!canProceedStep1} className="self-end">
              Siguiente <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Datos personales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono (opcional)</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="notes">Notas para el restaurante (opcional)</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Alergias, celebraciones, preferencias de mesa..."
                className="mt-1"
              />
            </div>
            <div className="flex gap-2 self-end">
              <Button variant="outline" onClick={() => setStep(1)}>
                <ArrowLeft className="mr-1 h-4 w-4" /> Atrás
              </Button>
              <Button onClick={() => setStep(3)} disabled={!canProceedStep2}>
                Revisar reserva <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Confirmar reserva</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground">{restaurant.name}</h3>
              <p className="text-sm text-muted-foreground">{restaurant.address}</p>
              <div className="mt-3 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Fecha</p>
                  <p className="text-sm font-medium text-foreground">{selectedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Hora</p>
                  <p className="text-sm font-medium text-foreground">{selectedTime}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Comensales</p>
                  <p className="text-sm font-medium text-foreground">{guests}</p>
                </div>
              </div>
              {selectedPromo && (
                <Badge className="mt-3 bg-accent text-accent-foreground">
                  {selectedPromo.name} (-{selectedPromo.discount}%)
                </Badge>
              )}
            </div>
            <div className="rounded-lg border border-border p-4 text-sm">
              <p className="text-foreground"><strong>Nombre:</strong> {name}</p>
              <p className="text-foreground"><strong>Email:</strong> {email}</p>
              {phone && <p className="text-foreground"><strong>Teléfono:</strong> {phone}</p>}
              {notes && <p className="mt-1 text-muted-foreground"><strong>Notas:</strong> {notes}</p>}
            </div>
            <div className="flex gap-2 self-end">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="mr-1 h-4 w-4" /> Modificar
              </Button>
              <Button onClick={handleConfirm} disabled={saving}>
                <Check className="mr-1 h-4 w-4" />
                {saving ? "Confirmando..." : "Confirmar reserva"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
