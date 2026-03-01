"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, Clock, Users, Tag, MapPin, MoreHorizontal, XCircle, Star, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { currentUser } from "@/lib/mock-data"
import { toast } from "sonner"

const statusLabels: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  confirmed: { label: "Confirmada", variant: "default" },
  completed: { label: "Completada", variant: "secondary" },
  cancelled: { label: "Cancelada", variant: "destructive" },
  no_show: { label: "No show", variant: "destructive" },
}

export default function MisReservasPage() {
  const [reservations, setReservations] = useState(currentUser.reservations)

  const upcoming = reservations.filter(
    (r) => r.status === "confirmed" && new Date(r.date) >= new Date()
  )
  const past = reservations.filter(
    (r) => r.status !== "confirmed" || new Date(r.date) < new Date()
  )

  const handleCancel = (id: string) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "cancelled" as const } : r))
    )
    toast.success("Reserva cancelada")
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">Mis Reservas</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Gestiona tus reservas en restaurantes
      </p>

      <Tabs defaultValue="upcoming" className="mt-6">
        <TabsList>
          <TabsTrigger value="upcoming">
            Proximas ({upcoming.length})
          </TabsTrigger>
          <TabsTrigger value="past">
            Pasadas ({past.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4">
          {upcoming.length === 0 ? (
            <div className="py-16 text-center">
              <CalendarDays className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 text-lg font-medium text-foreground">No tienes reservas proximas</p>
              <p className="mt-1 text-sm text-muted-foreground">Busca un restaurante y haz tu primera reserva</p>
              <Link href="/buscar">
                <Button className="mt-4">Buscar restaurantes</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {upcoming.map((res) => (
                <ReservationCard key={res.id} reservation={res} onCancel={handleCancel} showActions />
              ))}
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
              {past.map((res) => (
                <ReservationCard key={res.id} reservation={res} onCancel={handleCancel} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ReservationCard({
  reservation,
  onCancel,
  showActions = false,
}: {
  reservation: (typeof currentUser.reservations)[0]
  onCancel: (id: string) => void
  showActions?: boolean
}) {
  const status = statusLabels[reservation.status]
  const dateObj = new Date(reservation.date)
  const formattedDate = dateObj.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  })

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Link
                href={`/restaurante/${reservation.restaurantId}`}
                className="font-semibold text-foreground hover:text-primary"
              >
                {reservation.restaurantName}
              </Link>
              <Badge variant={status.variant}>{status.label}</Badge>
            </div>

            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span className="capitalize">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {reservation.time}
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                {reservation.guests} persona{reservation.guests !== 1 ? "s" : ""}
              </div>
            </div>

            {reservation.promotion && (
              <div className="mt-2 flex items-center gap-1.5 text-sm">
                <Tag className="h-3.5 w-3.5 text-accent" />
                <span className="text-accent font-medium">{reservation.promotion}</span>
              </div>
            )}

            {reservation.notes && (
              <p className="mt-2 text-xs text-muted-foreground">
                Notas: {reservation.notes}
              </p>
            )}

            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Codigo: {reservation.code}
            </p>
          </div>

          {showActions && reservation.status === "confirmed" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/restaurante/${reservation.restaurantId}`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver restaurante
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-destructive"
                  onClick={() => onCancel(reservation.id)}
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancelar reserva
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {reservation.status === "completed" && (
            <Button variant="outline" size="sm" className="shrink-0">
              <Star className="mr-1 h-3.5 w-3.5" />
              Valorar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
