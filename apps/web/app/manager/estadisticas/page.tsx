"use client"

import { BarChart3, TrendingUp, Users, ShoppingBag, UtensilsCrossed, Leaf } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const monthlyData = [
  { month: "Sep", reservas: 120, bolsas: 45, ingresos: 2400 },
  { month: "Oct", reservas: 145, bolsas: 62, ingresos: 3100 },
  { month: "Nov", reservas: 132, bolsas: 58, ingresos: 2850 },
  { month: "Dic", reservas: 180, bolsas: 75, ingresos: 3900 },
  { month: "Ene", reservas: 155, bolsas: 80, ingresos: 3500 },
  { month: "Feb", reservas: 98, bolsas: 56, ingresos: 2200 },
]

const topPromotions = [
  { name: "Almuerzo entre semana -30%", uses: 142, revenue: 4260 },
  { name: "2x1 en Cenas", uses: 67, revenue: 3350 },
  { name: "Descuento San Valentin", uses: 18, revenue: 720 },
]

export default function ManagerEstadisticasPage() {
  const totalReservas = monthlyData.reduce((s, d) => s + d.reservas, 0)
  const totalBolsas = monthlyData.reduce((s, d) => s + d.bolsas, 0)
  const totalIngresos = monthlyData.reduce((s, d) => s + d.ingresos, 0)
  const maxReservas = Math.max(...monthlyData.map((d) => d.reservas))

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground">
          <BarChart3 className="h-6 w-6 text-primary" />
          Estadisticas
        </h1>
        <p className="text-sm text-muted-foreground">Rendimiento de los ultimos 6 meses</p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-lg bg-primary/10 p-2.5">
              <UtensilsCrossed className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalReservas}</p>
              <p className="text-xs text-muted-foreground">Reservas totales</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-lg bg-secondary/10 p-2.5">
              <ShoppingBag className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalBolsas}</p>
              <p className="text-xs text-muted-foreground">Bolsas vendidas</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-lg bg-accent/20 p-2.5">
              <TrendingUp className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalIngresos.toLocaleString()} EUR</p>
              <p className="text-xs text-muted-foreground">Ingresos promocion</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-5">
            <div className="rounded-lg bg-secondary/10 p-2.5">
              <Leaf className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{(totalBolsas * 0.8).toFixed(0)} kg</p>
              <p className="text-xs text-muted-foreground">Comida rescatada</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart - Simple bar chart via divs */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Reservas por mes</CardTitle>
          <CardDescription>Evolucion de reservas en los ultimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-3 sm:gap-4">
            {monthlyData.map((d) => (
              <div key={d.month} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-medium text-foreground">{d.reservas}</span>
                <div
                  className="w-full rounded-t-md bg-primary transition-all"
                  style={{
                    height: `${(d.reservas / maxReservas) * 160}px`,
                    minHeight: 20,
                  }}
                />
                <span className="text-xs text-muted-foreground">{d.month}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top promotions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Promociones mas utilizadas</CardTitle>
            <CardDescription>Ranking por numero de usos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {topPromotions.map((promo, i) => (
                <div
                  key={promo.name}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{promo.name}</p>
                      <p className="text-xs text-muted-foreground">{promo.uses} usos</p>
                    </div>
                  </div>
                  <Badge variant="outline">{promo.revenue} EUR</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Audience insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-4 w-4 text-primary" />
              Perfil de comensales
            </CardTitle>
            <CardDescription>Datos agregados de tus clientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tamano medio grupo</span>
                <span className="text-sm font-semibold text-foreground">3.2 personas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Hora mas popular</span>
                <span className="text-sm font-semibold text-foreground">14:00 - 15:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dia mas popular</span>
                <span className="text-sm font-semibold text-foreground">Sabados</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">% clientes recurrentes</span>
                <span className="text-sm font-semibold text-foreground">34%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tasa de no-show</span>
                <span className="text-sm font-semibold text-destructive">8.2%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Tasa de cancelacion</span>
                <span className="text-sm font-semibold text-foreground">12.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
