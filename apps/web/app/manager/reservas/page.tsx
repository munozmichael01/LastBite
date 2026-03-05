"use client"

import { useState } from "react"
import {
  CalendarCheck,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  MoreHorizontal,
  UserRound,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ManagerReservation {
  id: string
  name: string
  email: string
  phone: string
  guests: number
  date: string
  time: string
  status: "confirmed" | "seated" | "completed" | "cancelled" | "no_show"
  promotion?: string
  notes?: string
  code: string
}

const TODAY    = "2026-02-14"
const YESTERDAY = "2026-02-13"
const TOMORROW  = "2026-02-15"
const WEEK_DATES = ["2026-02-10", "2026-02-11", "2026-02-12", "2026-02-13", "2026-02-14", "2026-02-15", "2026-02-16"]

const dateFilters = [
  { key: "ayer",   label: "Ayer",        dates: [YESTERDAY] },
  { key: "hoy",    label: "Hoy",         dates: [TODAY] },
  { key: "manana", label: "Mañana",      dates: [TOMORROW] },
  { key: "semana", label: "Esta semana", dates: WEEK_DATES },
  { key: "todos",  label: "Todos",       dates: null },
] as const

type DateFilterKey = typeof dateFilters[number]["key"]

const allReservations: ManagerReservation[] = [
  { id: "R-001", name: "Maria Lopez",      email: "maria@email.com",   phone: "+34 612 345 678", guests: 4, date: TODAY,     time: "13:30", status: "confirmed", promotion: "-30% Almuerzo", code: "LB-A1B2" },
  { id: "R-002", name: "Carlos Ruiz",      email: "carlos@email.com",  phone: "+34 623 456 789", guests: 2, date: TODAY,     time: "14:00", status: "confirmed", code: "LB-C3D4" },
  { id: "R-003", name: "Ana Martinez",     email: "ana@email.com",     phone: "+34 634 567 890", guests: 6, date: TODAY,     time: "14:30", status: "seated",    notes: "Mesa junto a la ventana", code: "LB-E5F6" },
  { id: "R-004", name: "Pedro Sanchez",    email: "pedro@email.com",   phone: "+34 645 678 901", guests: 3, date: TODAY,     time: "20:00", status: "confirmed", promotion: "2x1 Cenas", code: "LB-G7H8" },
  { id: "R-005", name: "Laura Gomez",      email: "laura@email.com",   phone: "+34 656 789 012", guests: 2, date: TODAY,     time: "21:00", status: "confirmed", code: "LB-I9J0" },
  { id: "R-006", name: "Javier Fernandez", email: "javier@email.com",  phone: "+34 667 890 123", guests: 5, date: YESTERDAY, time: "14:00", status: "completed", code: "LB-K1L2" },
  { id: "R-007", name: "Sofia Torres",     email: "sofia@email.com",   phone: "+34 678 901 234", guests: 2, date: YESTERDAY, time: "21:00", status: "no_show",   code: "LB-M3N4" },
  { id: "R-008", name: "Diego Herrera",    email: "diego@email.com",   phone: "+34 689 012 345", guests: 4, date: YESTERDAY, time: "13:30", status: "cancelled",  code: "LB-O5P6" },
  { id: "R-009", name: "Isabel Moreno",    email: "isabel@email.com",  phone: "+34 690 123 456", guests: 4, date: TOMORROW,  time: "14:00", status: "confirmed", code: "LB-Q1R2" },
  { id: "R-010", name: "Ramon Castro",     email: "ramon@email.com",   phone: "+34 691 234 567", guests: 2, date: TOMORROW,  time: "20:30", status: "confirmed", promotion: "-20% Cena romántica", code: "LB-S3T4" },
  { id: "R-011", name: "Marta Iglesias",   email: "marta@email.com",   phone: "+34 692 345 678", guests: 3, date: "2026-02-12", time: "21:00", status: "completed", code: "LB-U5V6" },
  { id: "R-012", name: "Tomas Vega",       email: "tomas@email.com",   phone: "+34 693 456 789", guests: 5, date: "2026-02-11", time: "14:30", status: "completed", code: "LB-W7X8" },
]

const statusConfig = {
  confirmed: { label: "Confirmada", icon: CheckCircle2, color: "bg-blue-100 text-blue-800" },
  seated: { label: "Sentados", icon: UserRound, color: "bg-secondary/10 text-secondary" },
  completed: { label: "Completada", icon: CheckCircle2, color: "bg-muted text-muted-foreground" },
  cancelled: { label: "Cancelada", icon: XCircle, color: "bg-destructive/10 text-destructive" },
  no_show: { label: "No show", icon: AlertTriangle, color: "bg-accent/20 text-accent-foreground" },
}

export default function ManagerReservasPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState<DateFilterKey>("hoy")
  const [reservations, setReservations] = useState(allReservations)

  const activeDateFilter = dateFilters.find((f) => f.key === dateFilter)!

  const filtered = reservations.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.code.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || r.status === statusFilter
    const matchesDate = activeDateFilter.dates === null || activeDateFilter.dates.includes(r.date)
    return matchesSearch && matchesStatus && matchesDate
  })

  function updateStatus(id: string, newStatus: ManagerReservation["status"]) {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    )
    toast.success(`Reserva ${id} actualizada a "${statusConfig[newStatus].label}"`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <CalendarCheck className="h-6 w-6 text-primary" />
          Reservas
        </h1>
        <p className="text-sm text-muted-foreground">Gestiona las reservas de tu restaurante</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        {(["confirmed", "seated", "completed", "cancelled", "no_show"] as const).map((s) => {
          const cfg = statusConfig[s]
          const dateFiltered = activeDateFilter.dates === null
            ? reservations
            : reservations.filter((r) => activeDateFilter.dates!.includes(r.date))
          const count = dateFiltered.filter((r) => r.status === s).length
          return (
            <Card
              key={s}
              className="cursor-pointer transition-colors hover:border-primary/30"
              onClick={() => setStatusFilter(statusFilter === s ? "all" : s)}
            >
              <CardContent className="flex items-center gap-3 p-4">
                <cfg.icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-lg font-bold text-foreground">{count}</p>
                  <p className="text-xs text-muted-foreground">{cfg.label}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Date filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {dateFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setDateFilter(f.key)}
            className={cn(
              "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
              dateFilter === f.key
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-44">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="confirmed">Confirmadas</SelectItem>
            <SelectItem value="seated">Sentados</SelectItem>
            <SelectItem value="completed">Completadas</SelectItem>
            <SelectItem value="cancelled">Canceladas</SelectItem>
            <SelectItem value="no_show">No show</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reservations list */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {filtered.length} reserva{filtered.length !== 1 ? "s" : ""}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {filtered.map((res) => {
              const cfg = statusConfig[res.status]
              return (
                <div
                  key={res.id}
                  className="flex flex-col gap-3 rounded-lg border border-border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground">{res.name}</p>
                      <Badge variant="outline" className="font-mono text-[10px]">
                        {res.code}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span>{res.date}</span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {res.time}
                      </span>
                      <span>&middot;</span>
                      <span>{res.guests} personas</span>
                      {res.promotion && (
                        <>
                          <span>&middot;</span>
                          <Badge variant="secondary" className="text-[10px]">
                            {res.promotion}
                          </Badge>
                        </>
                      )}
                    </div>
                    {res.notes && (
                      <p className="text-xs italic text-muted-foreground">
                        Nota: {res.notes}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={cfg.color}>
                      <cfg.icon className="mr-1 h-3 w-3" />
                      {cfg.label}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Acciones</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {res.status === "confirmed" && (
                          <DropdownMenuItem onClick={() => updateStatus(res.id, "seated")}>
                            Marcar como sentados
                          </DropdownMenuItem>
                        )}
                        {(res.status === "confirmed" || res.status === "seated") && (
                          <DropdownMenuItem onClick={() => updateStatus(res.id, "completed")}>
                            Marcar como completada
                          </DropdownMenuItem>
                        )}
                        {res.status === "confirmed" && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => updateStatus(res.id, "cancelled")} className="text-destructive">
                              Cancelar reserva
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateStatus(res.id, "no_show")} className="text-destructive">
                              Marcar no show
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              )
            })}
            {filtered.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground">
                No se encontraron reservas con estos filtros.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
