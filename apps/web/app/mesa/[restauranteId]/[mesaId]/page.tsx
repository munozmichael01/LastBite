"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { UtensilsCrossed, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMesa } from "@/lib/mesa-context"

export default function MesaLandingPage() {
  const router = useRouter()
  const params = useParams()
  const { restauranteId, mesaId } = params as { restauranteId: string; mesaId: string }

  const { comensal, setComensal, mesaNumero, restaurantName, restaurantImage } = useMesa()

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  // Si ya hay comensal guardado, ir directo a la carta
  useEffect(() => {
    if (comensal) {
      router.replace(`/mesa/${restauranteId}/${mesaId}/carta`)
    }
  }, [comensal, restauranteId, mesaId, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nombre.trim() || !apellido.trim()) {
      setError("Nombre y apellido son obligatorios")
      return
    }
    setComensal({
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      email: email.trim() || undefined,
    })
    router.push(`/mesa/${restauranteId}/${mesaId}/carta`)
  }

  if (comensal) return null

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Restaurant header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-2xl shadow-md">
            {restaurantImage ? (
              <Image
                src={restaurantImage}
                alt={restaurantName}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary/10">
                <UtensilsCrossed className="h-8 w-8 text-primary" />
              </div>
            )}
          </div>
          <h1 className="text-xl font-bold text-foreground">{restaurantName}</h1>
          <span className="mt-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Mesa {mesaNumero}
          </span>
          <p className="mt-3 text-sm text-muted-foreground">
            Bienvenido. Dinos cómo te llamas para empezar a pedir.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                Nombre <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="nombre"
                  placeholder="Juan"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="pl-9"
                  autoComplete="given-name"
                />
              </div>
            </div>
            <div className="flex-1">
              <Label htmlFor="apellido" className="mb-1.5 block text-sm font-medium">
                Apellido <span className="text-destructive">*</span>
              </Label>
              <Input
                id="apellido"
                placeholder="García"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                autoComplete="family-name"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email{" "}
              <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="juan@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-9"
                autoComplete="email"
              />
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">
              Recibe ofertas y descuentos exclusivos de {restaurantName}
            </p>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="mt-2 w-full" size="lg">
            Ver la carta
          </Button>
        </form>
      </div>
    </div>
  )
}
