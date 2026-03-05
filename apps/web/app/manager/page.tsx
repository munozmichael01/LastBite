import {
  CalendarCheck,
  TrendingUp,
  ShoppingBag,
  Users,
  Star,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const stats = [
  {
    label: "Reservas hoy",
    value: "12",
    change: "+3 vs ayer",
    trend: "up" as const,
    icon: CalendarCheck,
  },
  {
    label: "Bolsas vendidas hoy",
    value: "8",
    change: "+2 vs ayer",
    trend: "up" as const,
    icon: ShoppingBag,
  },
  {
    label: "Comensales esta semana",
    value: "87",
    change: "-5 vs sem. anterior",
    trend: "down" as const,
    icon: Users,
  },
  {
    label: "Valoracion media",
    value: "4.6",
    change: "+0.1 este mes",
    trend: "up" as const,
    icon: Star,
  },
]

const upcomingReservations = [
  { id: "R001", name: "Maria Lopez", guests: 4, time: "13:30", status: "confirmed" },
  { id: "R002", name: "Carlos Ruiz", guests: 2, time: "14:00", status: "confirmed" },
  { id: "R003", name: "Ana Martinez", guests: 6, time: "14:30", status: "confirmed" },
  { id: "R004", name: "Pedro Sanchez", guests: 3, time: "20:00", status: "confirmed" },
  { id: "R005", name: "Laura Gomez", guests: 2, time: "21:00", status: "confirmed" },
]

const recentBagSales = [
  { id: "B001", bag: "Bolsa Mediterranea", buyer: "Sofia R.", time: "Hace 15 min", code: "LB-9A3F" },
  { id: "B002", bag: "Bolsa Tapas Clasicas", buyer: "Javier M.", time: "Hace 45 min", code: "LB-7B2D" },
  { id: "B003", bag: "Bolsa del Chef", buyer: "Elena P.", time: "Hace 1h", code: "LB-5C1E" },
]

export default function ManagerDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Resumen de actividad de El Sabor de Casa
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-start justify-between p-5">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <span
                  className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trend === "up" ? "text-secondary" : "text-destructive"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <div className="rounded-lg bg-primary/10 p-2.5">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Reservations */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4 text-primary" />
                Próximas reservas
              </CardTitle>
              <Link href="/manager/reservas">
                <Button variant="ghost" size="sm" className="h-7 gap-0.5 px-2 text-xs text-muted-foreground hover:text-foreground">
                  Ver todas <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
            <CardDescription>Reservas confirmadas para hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {upcomingReservations.map((res) => (
                <div
                  key={res.id}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-foreground">{res.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {res.guests} personas
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {res.time}
                    </Badge>
                    <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                      Confirmada
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Bag Sales */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-base">
                <ShoppingBag className="h-4 w-4 text-secondary" />
                Ventas de bolsas recientes
              </CardTitle>
              <Link href="/manager/bolsas">
                <Button variant="ghost" size="sm" className="h-7 gap-0.5 px-2 text-xs text-muted-foreground hover:text-foreground">
                  Ver historial <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
            <CardDescription>Últimas bolsas sorpresa vendidas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {recentBagSales.map((sale) => (
                <div
                  key={sale.id}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                >
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-foreground">{sale.bag}</p>
                    <p className="text-xs text-muted-foreground">
                      Comprado por {sale.buyer} &middot; {sale.time}
                    </p>
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">
                    {sale.code}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Quick summary */}
            <div className="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-muted/50 p-4">
              <div className="text-center">
                <p className="text-lg font-bold text-foreground">24</p>
                <p className="text-xs text-muted-foreground">Esta semana</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-secondary">156</p>
                <p className="text-xs text-muted-foreground">Este mes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-primary">468 EUR</p>
                <p className="text-xs text-muted-foreground">Ingresos mes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-accent" />
            Acciones rapidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Nueva promocion", desc: "Crea un descuento para atraer comensales", href: "/manager/promociones" },
              { label: "Publicar bolsa sorpresa", desc: "Reduce desperdicio y gana ingresos extra", href: "/manager/bolsas" },
              { label: "Gestionar horarios", desc: "Ajusta los turnos y capacidad del restaurante", href: "/manager/ajustes" },
              { label: "Ver estadisticas", desc: "Analiza el rendimiento de tu restaurante", href: "/manager/estadisticas" },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="group flex flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-primary">
                  {action.label}
                </p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
