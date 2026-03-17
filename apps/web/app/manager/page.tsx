import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import {
  CalendarCheck, TrendingUp, ShoppingBag, Users,
  Star, Clock, ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default async function ManagerDashboard() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login")

  const restaurante = await prisma.restaurante.findUnique({
    where: { managerId: session.user.id },
    select: { id: true, nombre: true },
  })
  if (!restaurante) redirect("/auth/login")

  const hoy = new Date()
  const inicioDia = new Date(hoy); inicioDia.setHours(0, 0, 0, 0)
  const finDia    = new Date(hoy); finDia.setHours(23, 59, 59, 999)
  const inicioSemana = new Date(hoy); inicioSemana.setDate(hoy.getDate() - 6); inicioSemana.setHours(0, 0, 0, 0)

  const [
    reservasHoy,
    reservasAyer,
    bolsasHoy,
    bolsasAyer,
    comensalesSemana,
    comensalesSemanaPasada,
    proximasReservas,
    ventasBolsas,
  ] = await Promise.all([
    prisma.reservaMesa.count({
      where: { restauranteId: restaurante.id, fecha: { gte: inicioDia, lte: finDia }, estado: { not: "CANCELADA" } },
    }),
    prisma.reservaMesa.count({
      where: {
        restauranteId: restaurante.id,
        fecha: { gte: new Date(inicioDia.getTime() - 86400000), lte: new Date(finDia.getTime() - 86400000) },
        estado: { not: "CANCELADA" },
      },
    }),
    prisma.reservaBolsa.count({
      where: {
        publicacion: { restauranteId: restaurante.id, fecha: { gte: inicioDia, lte: finDia } },
        estado: { not: "CANCELADA" },
      },
    }),
    prisma.reservaBolsa.count({
      where: {
        publicacion: {
          restauranteId: restaurante.id,
          fecha: { gte: new Date(inicioDia.getTime() - 86400000), lte: new Date(finDia.getTime() - 86400000) },
        },
        estado: { not: "CANCELADA" },
      },
    }),
    prisma.reservaMesa.aggregate({
      where: { restauranteId: restaurante.id, fecha: { gte: inicioSemana, lte: finDia }, estado: { not: "CANCELADA" } },
      _sum: { comensales: true },
    }),
    prisma.reservaMesa.aggregate({
      where: {
        restauranteId: restaurante.id,
        fecha: { gte: new Date(inicioSemana.getTime() - 7 * 86400000), lte: new Date(inicioSemana.getTime() - 1) },
        estado: { not: "CANCELADA" },
      },
      _sum: { comensales: true },
    }),
    prisma.reservaMesa.findMany({
      where: { restauranteId: restaurante.id, fecha: { gte: inicioDia, lte: finDia }, estado: { in: ["CONFIRMADA", "MODIFICADA"] } },
      include: { cliente: { select: { nombre: true } } },
      orderBy: { hora: "asc" },
      take: 5,
    }),
    prisma.reservaBolsa.findMany({
      where: {
        publicacion: { restauranteId: restaurante.id },
        estado: { not: "CANCELADA" },
      },
      include: {
        cliente: { select: { nombre: true } },
        publicacion: { include: { plantilla: { select: { nombre: true } } } },
      },
      orderBy: { creadoEn: "desc" },
      take: 3,
    }),
  ])

  const comSem  = comensalesSemana._sum.comensales ?? 0
  const comPrev = comensalesSemanaPasada._sum.comensales ?? 0

  const stats = [
    {
      label: "Reservas hoy",
      value: String(reservasHoy),
      change: reservasAyer > 0 ? `${reservasHoy >= reservasAyer ? "+" : ""}${reservasHoy - reservasAyer} vs ayer` : "Sin datos de ayer",
      trend: reservasHoy >= reservasAyer ? "up" : "down",
      icon: CalendarCheck,
    },
    {
      label: "Bolsas vendidas hoy",
      value: String(bolsasHoy),
      change: bolsasAyer > 0 ? `${bolsasHoy >= bolsasAyer ? "+" : ""}${bolsasHoy - bolsasAyer} vs ayer` : "Sin datos de ayer",
      trend: bolsasHoy >= bolsasAyer ? "up" : "down",
      icon: ShoppingBag,
    },
    {
      label: "Comensales esta semana",
      value: String(comSem),
      change: comPrev > 0 ? `${comSem >= comPrev ? "+" : ""}${comSem - comPrev} vs sem. anterior` : "Primera semana",
      trend: comSem >= comPrev ? "up" : "down",
      icon: Users,
    },
    {
      label: "Rating promedio",
      value: "—",
      change: "Próximamente",
      trend: "up",
      icon: Star,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Resumen de actividad de {restaurante.nombre}</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-start justify-between p-5">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <span className={`flex items-center gap-1 text-xs font-medium ${stat.trend === "up" ? "text-secondary" : "text-destructive"}`}>
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
        {/* Próximas reservas */}
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
            {proximasReservas.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">Sin reservas para hoy</p>
            ) : (
              <div className="flex flex-col gap-3">
                {proximasReservas.map((res) => (
                  <div key={res.id} className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-foreground">{res.cliente.nombre}</p>
                      <p className="text-xs text-muted-foreground">{res.comensales} personas{res.notas ? ` · ${res.notas}` : ""}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">{res.hora}</Badge>
                      <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">Confirmada</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Ventas recientes bolsas */}
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
            {ventasBolsas.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">Aún no hay ventas de bolsas</p>
            ) : (
              <div className="flex flex-col gap-3">
                {ventasBolsas.map((v) => {
                  const mins = Math.floor((Date.now() - new Date(v.creadoEn).getTime()) / 60000)
                  const timeAgo = mins < 60 ? `Hace ${mins} min` : `Hace ${Math.floor(mins / 60)}h`
                  return (
                    <div key={v.id} className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                      <div className="flex flex-col gap-0.5">
                        <p className="text-sm font-medium text-foreground">{v.publicacion.plantilla.nombre}</p>
                        <p className="text-xs text-muted-foreground">
                          {v.cliente.nombre} · {timeAgo}
                        </p>
                      </div>
                      <Badge variant="outline" className="font-mono text-xs">{v.codigo.slice(-8).toUpperCase()}</Badge>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Acciones rápidas */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <TrendingUp className="h-4 w-4 text-accent" />
            Acciones rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Nueva promoción",        desc: "Crea un descuento para atraer más comensales",   href: "/manager/promociones" },
              { label: "Publicar bolsa sorpresa", desc: "Reduce desperdicio y gana ingresos extra",       href: "/manager/bolsas" },
              { label: "Gestionar horarios",      desc: "Ajusta los turnos y capacidad del restaurante",  href: "/manager/ajustes" },
              { label: "Ver estadísticas",        desc: "Analiza el rendimiento de tu restaurante",       href: "/manager/estadisticas" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group flex flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <p className="text-sm font-medium text-foreground group-hover:text-primary">{action.label}</p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
