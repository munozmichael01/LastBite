"use client"

import { useState, useMemo } from "react"
import { CalendarCheck, Search, CheckCircle2, XCircle, Clock, AlertTriangle, MoreHorizontal, UserRound } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type EstadoReserva = "CONFIRMADA" | "MODIFICADA" | "CANCELADA" | "COMPLETADA" | "NO_SHOW"

interface Reserva {
  id: string
  codigo: string
  nombre: string
  email: string
  telefono: string
  comensales: number
  fecha: string
  hora: string
  estado: EstadoReserva
  promocion?: string
  notas?: string
}

const ESTADO_CONFIG: Record<EstadoReserva, { label: string; icon: React.ElementType; className: string }> = {
  CONFIRMADA: { label: "Confirmada",  icon: Clock,         className: "bg-secondary/10 text-secondary" },
  MODIFICADA: { label: "Modificada",  icon: Clock,         className: "bg-amber-100 text-amber-700" },
  CANCELADA:  { label: "Cancelada",   icon: XCircle,       className: "bg-destructive/10 text-destructive" },
  COMPLETADA: { label: "Completada",  icon: CheckCircle2,  className: "bg-muted text-muted-foreground" },
  NO_SHOW:    { label: "No show",     icon: AlertTriangle, className: "bg-orange-100 text-orange-700" },
}

const hoy     = new Date().toISOString().split("T")[0]
const ayer    = new Date(Date.now() - 86400000).toISOString().split("T")[0]
const manana  = new Date(Date.now() + 86400000).toISOString().split("T")[0]
const semana  = Array.from({ length: 7 }, (_, i) => new Date(Date.now() + i * 86400000).toISOString().split("T")[0])

const DATE_FILTERS = [
  { key: "hoy",    label: "Hoy",       dates: [hoy] },
  { key: "ayer",   label: "Ayer",      dates: [ayer] },
  { key: "manana", label: "Mañana",    dates: [manana] },
  { key: "semana", label: "Esta semana", dates: semana },
  { key: "todos",  label: "Todas",     dates: null },
]

export function ReservasManagerClient({ reservas: initialReservas }: { reservas: Reserva[] }) {
  const [reservas, setReservas] = useState(initialReservas)
  const [search, setSearch]   = useState("")
  const [dateFilter, setDateFilter] = useState<string>("hoy")
  const [estadoFilter, setEstadoFilter] = useState<string>("todos")

  const filtered = useMemo(() => {
    const df = DATE_FILTERS.find((f) => f.key === dateFilter)
    return reservas.filter((r) => {
      const matchDate   = !df?.dates || df.dates.includes(r.fecha)
      const matchEstado = estadoFilter === "todos" || r.estado === estadoFilter
      const matchSearch = !search || [r.nombre, r.email, r.codigo].some((v) => v.toLowerCase().includes(search.toLowerCase()))
      return matchDate && matchEstado && matchSearch
    })
  }, [reservas, dateFilter, estadoFilter, search])

  async function changeEstado(id: string, nuevoEstado: EstadoReserva) {
    const res = await fetch(`/api/manager/reservas/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: nuevoEstado }),
    })
    if (res.ok) {
      setReservas((prev) => prev.map((r) => r.id === id ? { ...r, estado: nuevoEstado } : r))
      toast.success(`Reserva ${ESTADO_CONFIG[nuevoEstado].label.toLowerCase()}`)
    } else {
      toast.error("No se pudo actualizar la reserva")
    }
  }

  const totals = useMemo(() => {
    const base = DATE_FILTERS.find((f) => f.key === dateFilter)?.dates
    const day = base ? reservas.filter((r) => base.includes(r.fecha)) : reservas
    return {
      total:      day.filter((r) => r.estado !== "CANCELADA").length,
      comensales: day.filter((r) => r.estado !== "CANCELADA").reduce((a, b) => a + b.comensales, 0),
      noShow:     day.filter((r) => r.estado === "NO_SHOW").length,
    }
  }, [reservas, dateFilter])

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <CalendarCheck className="h-6 w-6 text-primary" />
          Reservas
        </h1>
        <p className="text-sm text-muted-foreground">Gestiona todas las reservas de tu restaurante</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Reservas",    value: totals.total,      sub: dateFilter === "todos" ? "en total" : DATE_FILTERS.find(f=>f.key===dateFilter)?.label.toLowerCase() },
          { label: "Comensales",  value: totals.comensales, sub: "personas esperadas" },
          { label: "No shows",    value: totals.noShow,     sub: "no se presentaron" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="p-3 sm:p-4 text-center">
              <p className="text-xl sm:text-2xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
              <p className="hidden text-xs text-muted-foreground sm:block">{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {DATE_FILTERS.map((f) => (
              <Button
                key={f.key}
                size="sm"
                variant={dateFilter === f.key ? "default" : "outline"}
                onClick={() => setDateFilter(f.key)}
                className="h-7 text-xs"
              >
                {f.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Buscar por nombre, email o código..." className="pl-9 text-sm" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Select value={estadoFilter} onValueChange={setEstadoFilter}>
              <SelectTrigger className="w-36 text-sm">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                {Object.entries(ESTADO_CONFIG).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <UserRound className="mx-auto mb-3 h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">No hay reservas para los filtros seleccionados</p>
            </CardContent>
          </Card>
        ) : (
          filtered.map((r) => {
            const cfg = ESTADO_CONFIG[r.estado]
            const Icon = cfg.icon
            return (
              <Card key={r.id} className={cn("transition-colors", r.estado === "CANCELADA" && "opacity-60")}>
                <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{r.nombre}</p>
                      <Badge variant="outline" className="font-mono text-[10px]">{r.codigo.slice(-6).toUpperCase()}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {r.email}{r.telefono ? ` · ${r.telefono}` : ""}
                    </p>
                    {r.notas && <p className="text-xs italic text-muted-foreground">📝 {r.notas}</p>}
                    {r.promocion && <p className="text-xs text-primary">🏷️ {r.promocion}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{r.fecha} — {r.hora}</p>
                      <p className="text-xs text-muted-foreground">{r.comensales} persona{r.comensales !== 1 ? "s" : ""}</p>
                    </div>
                    <Badge className={cn("gap-1 text-xs", cfg.className)}>
                      <Icon className="h-3 w-3" />
                      {cfg.label}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        {r.estado !== "COMPLETADA" && <DropdownMenuItem onClick={() => changeEstado(r.id, "COMPLETADA")}>Marcar completada</DropdownMenuItem>}
                        {r.estado !== "NO_SHOW"    && <DropdownMenuItem onClick={() => changeEstado(r.id, "NO_SHOW")}>Marcar no show</DropdownMenuItem>}
                        {r.estado !== "CONFIRMADA" && r.estado !== "CANCELADA" && <DropdownMenuItem onClick={() => changeEstado(r.id, "CONFIRMADA")}>Reconfirmar</DropdownMenuItem>}
                        <DropdownMenuSeparator />
                        {r.estado !== "CANCELADA"  && <DropdownMenuItem className="text-destructive" onClick={() => changeEstado(r.id, "CANCELADA")}>Cancelar reserva</DropdownMenuItem>}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}
