"use client"

import { useState } from "react"
import Link from "next/link"
import { User, Mail, Phone, Shield, CreditCard, Heart, Leaf, LogOut, CalendarDays, ShoppingBag } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { toast } from "sonner"
import { signOut } from "next-auth/react"

const ALL_DIETARY = ["Sin gluten", "Vegetariano", "Vegano", "Sin lactosa", "Sin frutos secos", "Pescetariano"]

interface PerfilClientProps {
  nombre: string
  email: string
  telefono: string | null
  dietaryPreferences: string[]
}

export function PerfilClient({ nombre, email, telefono, dietaryPreferences }: PerfilClientProps) {
  const [name, setName]       = useState(nombre)
  const [mail, setMail]       = useState(email)
  const [phone, setPhone]     = useState(telefono ?? "")
  const [dietary, setDietary] = useState(dietaryPreferences)

  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()

  const toggleDietary = (d: string) =>
    setDietary((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d])

  async function handleSave() {
    const res = await fetch("/api/me", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: name, telefono: phone, dietaPreferencia: dietary }),
    })
    if (res.ok) toast.success("Perfil actualizado")
    else toast.error("No se pudo guardar. Intenta de nuevo.")
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-primary text-xl font-bold text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{name}</h1>
          <p className="text-sm text-muted-foreground">{mail}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { href: "/mis-reservas", icon: CalendarDays,  label: "Mis Reservas",  color: "text-primary" },
          { href: "/mis-bolsas",   icon: ShoppingBag,   label: "Mis Bolsas",    color: "text-secondary" },
          { href: "/buscar",       icon: Heart,         label: "Favoritos",     color: "text-destructive" },
          { href: "/auth",         icon: Shield,        label: "Seguridad",     color: "text-muted-foreground" },
        ].map(({ href, icon: Icon, label, color }) => (
          <Link key={href} href={href}>
            <Card className="transition-shadow hover:shadow-md">
              <CardContent className="flex flex-col items-center gap-2 p-4">
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

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
            <Input id="profile-name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="profile-email">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="profile-email" type="email" value={mail} onChange={(e) => setMail(e.target.value)} className="pl-10" disabled />
            </div>
          </div>
          <div>
            <Label htmlFor="profile-phone">Teléfono</Label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="profile-phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-10" />
            </div>
          </div>
          <Button className="self-end" onClick={handleSave}>Guardar cambios</Button>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Leaf className="h-4 w-4 text-secondary" />
            Preferencias dietarias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {ALL_DIETARY.map((d) => (
              <Badge
                key={d}
                variant={dietary.includes(d) ? "default" : "outline"}
                className={`cursor-pointer ${dietary.includes(d) ? "bg-secondary text-secondary-foreground" : ""}`}
                onClick={() => toggleDietary(d)}
              >
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Estas preferencias se usarán para personalizar tus recomendaciones.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            Métodos de pago
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Próximamente podrás gestionar tus métodos de pago aquí.</p>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader><CardTitle className="text-base">Notificaciones</CardTitle></CardHeader>
        <CardContent className="flex flex-col gap-4">
          {[
            { label: "Recordatorios de reserva", desc: "Recibir recordatorio antes de la reserva", defaultChecked: true },
            { label: "Nuevas bolsas sorpresa",   desc: "Avisar cuando haya nuevas bolsas cerca",   defaultChecked: true },
            { label: "Promociones",              desc: "Ofertas de tus restaurantes favoritos",     defaultChecked: false },
          ].map((n, i) => (
            <div key={n.label}>
              {i > 0 && <Separator className="mb-4" />}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <Switch defaultChecked={n.defaultChecked} />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 pb-4">
        <Button variant="ghost" className="text-destructive hover:text-destructive" onClick={() => signOut({ callbackUrl: "/" })}>
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}
