"use client"

import { useState, use } from "react"
import Link from "next/link"
import { CalendarDays, Clock, Users, Tag, ArrowLeft, ArrowRight, Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getRestaurant } from "@/lib/mock-data"
import { toast } from "sonner"

const timeSlots = [
  "13:00", "13:30", "14:00", "14:30", "15:00",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
]

const dates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() + i + 1)
  return {
    value: d.toISOString().split("T")[0],
    label: d.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" }),
    dayName: d.toLocaleDateString("es-ES", { weekday: "long" }),
  }
})

export default function ReservationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const restaurant = getRestaurant(id)

  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [guests, setGuests] = useState("2")
  const [promotion, setPromotion] = useState("")
  const [name, setName] = useState("Maria Lopez")
  const [email, setEmail] = useState("maria.lopez@email.com")
  const [phone, setPhone] = useState("+34 612 345 678")
  const [notes, setNotes] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  if (!restaurant) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="text-lg font-medium text-foreground">Restaurante no encontrado</p>
        <Link href="/buscar">
          <Button variant="outline" className="mt-4">Volver a buscar</Button>
        </Link>
      </div>
    )
  }

  const activePromos = restaurant.promotions.filter((p) => p.status === "active")
  const selectedPromo = activePromos.find((p) => p.id === promotion)
  const code = `LB-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

  const canProceedStep1 = selectedDate && selectedTime && guests
  const canProceedStep2 = name && email && phone

  const handleConfirm = () => {
    setConfirmed(true)
    toast.success("Reserva confirmada!")
  }

  if (confirmed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <Check className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Reserva confirmada!</h1>
          <p className="mt-2 text-muted-foreground">
            Te hemos enviado la confirmacion a {email}
          </p>
        </div>

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Codigo de reserva</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold font-mono text-primary">{code}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(code)
                      toast.success("Codigo copiado")
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="font-semibold text-foreground">{restaurant.name}</h3>
                <p className="text-sm text-muted-foreground">{restaurant.address}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Fecha</p>
                  <p className="text-sm font-medium text-foreground">
                    {dates.find((d) => d.value === selectedDate)?.label}
                  </p>
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
                <div className="rounded-lg bg-accent/10 p-3">
                  <p className="text-sm font-medium text-foreground">
                    Promocion aplicada: {selectedPromo.name} (-{selectedPromo.discount}%)
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
      <Link href={`/restaurante/${id}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
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
                step >= s
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {step > s ? <Check className="h-4 w-4" /> : s}
            </div>
            {s < 3 && (
              <div className={`h-0.5 w-8 ${step > s ? "bg-primary" : "bg-muted"}`} />
            )}
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
                    className="flex flex-col h-auto py-2"
                  >
                    <span className="text-xs capitalize">{d.label.split(",")[0]}</span>
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
                  Promocion (opcional)
                </Label>
                <div className="mt-2 flex flex-col gap-2">
                  <Button
                    variant={promotion === "" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPromotion("")}
                    className="justify-start"
                  >
                    Sin promocion
                  </Button>
                  {activePromos.map((p) => (
                    <Button
                      key={p.id}
                      variant={promotion === p.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPromotion(p.id)}
                      className="justify-start"
                    >
                      {p.name} ({p.type === "2x1" ? "2x1" : `-${p.discount}%`}) - {p.conditions}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="self-end"
            >
              Siguiente
              <ArrowRight className="ml-1 h-4 w-4" />
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
              <Label htmlFor="phone">Telefono</Label>
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
                <ArrowLeft className="mr-1 h-4 w-4" />
                Atras
              </Button>
              <Button onClick={() => setStep(3)} disabled={!canProceedStep2}>
                Revisar reserva
                <ArrowRight className="ml-1 h-4 w-4" />
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
                  <p className="text-sm font-medium text-foreground">
                    {dates.find((d) => d.value === selectedDate)?.label}
                  </p>
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
              <p className="text-foreground"><strong>Telefono:</strong> {phone}</p>
              {notes && <p className="mt-1 text-muted-foreground"><strong>Notas:</strong> {notes}</p>}
            </div>
            <div className="flex gap-2 self-end">
              <Button variant="outline" onClick={() => setStep(2)}>
                <ArrowLeft className="mr-1 h-4 w-4" />
                Modificar
              </Button>
              <Button onClick={handleConfirm}>
                <Check className="mr-1 h-4 w-4" />
                Confirmar reserva
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
