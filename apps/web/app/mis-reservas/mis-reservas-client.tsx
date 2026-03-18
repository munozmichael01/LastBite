"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, Clock, Users, Tag, MapPin, MoreHorizontal, XCircle, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type EstadoReserva = "CONFIRMADA" | "MODIFICADA" | "CANCELADA" | "COMPLETADA" | "NO_SHOW"

interface Reserva {
  id: string
  codigo: string
  restaurantId: string
  restaurantName: string
  restaurantAddress: string
  fecha: string
  hora: string
  comensales: number
  estado: EstadoReserva
  notas?: string
  promocion?: string
}

const ESTADO_CONFIG: Record<EstadoReserva, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  CONFIRMADA: { label: "Confirmada", variant: "default" },
  MODIFICADA:  { label: "Modificada", variant: "outline" },
  CANCELADA:   { label: "Cancelada", variant: "destructive" },
  COMPLETADA:  { label: "Completada", variant: "secondary" },
  NO_SHOW:     { label: "No show", variant: "destructive" },
}

export function MisReservasClient({ reservas: initialReservas }: { reservas: Reserva[] }) {
  const [reservas, setReservas] = useState(initialReservas)
  const today = new Date().toISOString().split("T")[0]

  const upcoming = reservas.filter(
    (r) => (r.estado === "CONFIRMADA" || r.estado === "MODIFICADA") && r.fecha >= today
  )
  const past = reservas.filter(
    (r) => !upcoming.find((u) => u.id === r.id)
  )

  async function cancelar(id: string) {
    const res = await fetch(`/api/mis-reservas/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: "CANCELADA" }),
    })
    if (res.ok) {
      setReservas((prev) => prev.map((r) => r.id === id ? { ...r, estado: "CANCELADA" } : r))
      toast.success("Reserva cancelada")
    } else {
      toast.error("No se pudo cancelar la reserva")
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">Mis Reservas</h1>
      <p className="mt-1 text-sm text-muted-foreground">Gestiona tus reservas en restaurantes</p>

      <Tabs defaultValue="upcoming" className="mt-6">
        <TabsList>
          <TabsTrigger value="upcoming">Próximas ({upcoming.length})</TabsTrigger>
          <TabsTrigger value="past">Pasadas ({past.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4">
          {upcoming.length === 0 ? (
            <div className="py-16 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 text-lg font-medium text-foreground">No tienes reservas próximas</p>
              <p className="mt-1 text-sm text-muted-foreground">Busca un restaurante y haz tu primera reserva</p>
              <Link href="/buscar">
                <Button className="mt-4">Buscar restaurantes</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {upcoming.map((r) => <ReservaCard key={r.id} reserva={r} onCancel={cancelar} showActions />)}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-4">
          {past.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-foreground">No tienes reservas pasadas</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {past.map((r) => <ReservaCard key={r.id} reserva={r} onCancel={cancelar} />)}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ReservaCard({
  reserva,
  onCancel,
  showActions = false,
}: {
  reserva: Reserva
  onCancel: (id: string) => void
  showActions?: boolean
}) {
  const cfg = ESTADO_CONFIG[reserva.estado]
  const dateObj = new Date(reserva.fecha + "T12:00:00") // noon to avoid timezone day-shift
  const formattedDate = dateObj.toLocaleDateString("es-ES", {
    weekday: "long", day: "numeric", month: "long",
  })

  return (
    <Card className={cn(reserva.estado === "CANCELADA" && "opacity-60")}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link href={`/restaurante/${reserva.restaurantId}`} className="font-semibold text-foreground hover:text-primary">
                {reserva.restaurantName}
              </Link>
              <Badge variant={cfg.variant}>{cfg.label}</Badge>
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {reserva.restaurantAddress}
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span className="capitalize">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {reserva.hora}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {reserva.comensales} persona{reserva.comensales !== 1 ? "s" : ""}
              </div>
            </div>

            {reserva.promocion && (
              <div className="mt-2 flex items-center gap-1.5 text-sm">
                <Tag className="h-3.5 w-3.5 text-accent" />
                <span className="text-accent font-medium">{reserva.promocion}</span>
              </div>
            )}
            {reserva.notas && (
              <p className="mt-2 text-xs text-muted-foreground">Notas: {reserva.notas}</p>
            )}
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Código: {reserva.codigo.slice(-8).toUpperCase()}
            </p>
          </div>

          {showActions && (reserva.estado === "CONFIRMADA" || reserva.estado === "MODIFICADA") && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/restaurante/${reserva.restaurantId}`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver restaurante
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive" onClick={() => onCancel(reserva.id)}>
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancelar reserva
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
