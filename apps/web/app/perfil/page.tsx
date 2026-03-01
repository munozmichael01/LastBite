"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Mail, Phone, Shield, CreditCard, Heart, Leaf, LogOut, ChevronRight, CalendarDays, ShoppingBag } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { currentUser } from "@/lib/mock-data"
import { toast } from "sonner"

const allDietary = ["Sin gluten", "Vegetariano", "Vegano", "Sin lactosa", "Sin frutos secos", "Pescetariano"]

export default function ProfilePage() {
  const [name, setName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [phone, setPhone] = useState(currentUser.phone)
  const [dietary, setDietary] = useState(currentUser.dietaryPreferences)

  const toggleDietary = (d: string) => {
    setDietary((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]))
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-primary text-xl font-bold text-primary-foreground">
            {currentUser.avatar}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{name}</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Link href="/mis-reservas">
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Mis Reservas</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/mis-bolsas">
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <ShoppingBag className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Mis Bolsas</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/buscar">
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <Heart className="h-5 w-5 text-destructive" />
              <span className="text-sm font-medium text-foreground">Favoritos</span>
            </CardContent>
          </Card>
        </Link>
        <Link href="/auth">
          <Card className="transition-shadow hover:shadow-md">
            <CardContent className="flex flex-col items-center gap-2 p-4">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Seguridad</span>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Personal info */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <User className="h-4 w-4 text-primary" />
            Datos personales
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label htmlFor="profile-name">Nombre completo</Label>
            <Input
              id="profile-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="profile-email">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="profile-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="profile-phone">Telefono</Label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="profile-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Button
            className="self-end"
            onClick={() => toast.success("Perfil actualizado")}
          >
            Guardar cambios
          </Button>
        </CardContent>
      </Card>

      {/* Dietary preferences */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Leaf className="h-4 w-4 text-secondary" />
            Preferencias dietarias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allDietary.map((d) => (
              <Badge
                key={d}
                variant={dietary.includes(d) ? "default" : "outline"}
                className={`cursor-pointer ${
                  dietary.includes(d) ? "bg-secondary text-secondary-foreground" : ""
                }`}
                onClick={() => toggleDietary(d)}
              >
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Estas preferencias se usaran para personalizar tus recomendaciones y avisar a los restaurantes.
          </p>
        </CardContent>
      </Card>

      {/* Payment methods */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            Metodos de pago
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-12 items-center justify-center rounded bg-muted text-xs font-bold text-muted-foreground">
                VISA
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">**** **** **** 4521</p>
                <p className="text-xs text-muted-foreground">Exp: 08/28</p>
              </div>
            </div>
            <Badge variant="outline">Principal</Badge>
          </div>
          <Button variant="outline" size="sm" className="mt-3">
            Anadir metodo de pago
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-base">Notificaciones</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Recordatorios de reserva</p>
              <p className="text-xs text-muted-foreground">Recibir recordatorio antes de la reserva</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Nuevas bolsas sorpresa</p>
              <p className="text-xs text-muted-foreground">Avisar cuando haya nuevas bolsas cerca</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Promociones</p>
              <p className="text-xs text-muted-foreground">Ofertas y descuentos de tus restaurantes favoritos</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Logout */}
      <div className="mt-6 pb-4">
        <Button
          variant="ghost"
          className="text-destructive hover:text-destructive"
          onClick={() => toast.info("Cerrando sesion... (demo)")}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesion
        </Button>
      </div>
    </div>
  )
}
