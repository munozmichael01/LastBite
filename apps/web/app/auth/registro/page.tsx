"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { Eye, EyeOff, Mail, Lock, User, Phone, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistroPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [activeTab, setActiveTab] = useState<"cliente" | "restaurante">("cliente")
  const [formError, setFormError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)

    if (!accepted) {
      setFormError("Debes aceptar los términos y condiciones para continuar.")
      return
    }

    const form = e.currentTarget
    const get = (name: string) =>
      ((form.elements.namedItem(name) as HTMLInputElement)?.value ?? "").trim()

    const email    = activeTab === "cliente" ? get("email-c")    : get("email-r")
    const password = activeTab === "cliente" ? get("password-c") : get("password-r")
    const telefono = activeTab === "cliente" ? get("telefono-c") : get("telefono-r")
    const nombre   = activeTab === "cliente"
      ? `${get("nombre")} ${get("apellido")}`.trim()
      : get("contacto-r")
    const rol = activeTab === "cliente" ? "CLIENTE" : "RESTAURANTE"

    setLoading(true)
    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password, telefono, rol }),
      })
      const data = await res.json()

      if (!res.ok) {
        const msg = data.error ?? "Error al crear la cuenta"
        setFormError(msg)

        return
      }

      const login = await signIn("credentials", { email, password, redirect: false })
      setSuccess(true)

      setTimeout(() => {
        if (login?.error) {
          router.push("/auth/login")
        } else {
          router.push(activeTab === "restaurante" ? "/manager" : "/")
          router.refresh()
        }
      }, 1500)
    } catch {
      setFormError("Error de conexión. Verifica tu internet e inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="flex flex-col items-center gap-4 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">¡Cuenta creada!</h2>
              <p className="mt-1 text-sm text-muted-foreground">Bienvenido a Last Bite. Redirigiendo...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-2 text-2xl font-bold text-primary">
            Last Bite
          </Link>
          <CardTitle className="text-xl">Crear cuenta</CardTitle>
          <CardDescription>Unete a Last Bite y empieza a reservar y rescatar</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "cliente" | "restaurante")} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cliente">Cliente</TabsTrigger>
              <TabsTrigger value="restaurante">Restaurante</TabsTrigger>
            </TabsList>

            {/* ── Cliente ── */}
            <TabsContent value="cliente">
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4" onChange={() => setFormError(null)}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input id="nombre" name="nombre" placeholder="Juan" className="pl-10" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input id="apellido" name="apellido" placeholder="Garcia" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email-c">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email-c" name="email-c" type="email" placeholder="tu@email.com" className="pl-10" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="telefono-c">Teléfono</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="telefono-c" name="telefono-c" type="tel" placeholder="+58 412 000 0000" className="pl-10" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password-c">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password-c" name="password-c"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 caracteres"
                      className="pl-10 pr-10"
                      required minLength={8}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="terms-c" checked={accepted} onCheckedChange={(v) => setAccepted(v === true)} />
                  <Label htmlFor="terms-c" className="text-xs leading-relaxed text-muted-foreground">
                    Acepto los{" "}
                    <Link href="#" className="text-primary hover:underline">términos y condiciones</Link>{" "}
                    y la{" "}
                    <Link href="#" className="text-primary hover:underline">política de privacidad</Link>
                  </Label>
                </div>
                {formError && (
                  <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
                <Button type="submit" className="mt-1 w-full" disabled={loading}>
                  {loading ? "Creando cuenta..." : "Crear cuenta"}
                </Button>
              </form>
            </TabsContent>

            {/* ── Restaurante ── */}
            <TabsContent value="restaurante">
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4" onChange={() => setFormError(null)}>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="nombre-r">Nombre del restaurante</Label>
                  <Input id="nombre-r" name="nombre-r" placeholder="Mi Restaurante" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="contacto-r">Persona de contacto</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="contacto-r" name="contacto-r" placeholder="Nombre completo" className="pl-10" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email-r">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="email-r" name="email-r" type="email" placeholder="restaurante@email.com" className="pl-10" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="telefono-r">Teléfono</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input id="telefono-r" name="telefono-r" type="tel" placeholder="+58 212 000 0000" className="pl-10" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="password-r">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password-r" name="password-r"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 caracteres"
                      className="pl-10 pr-10"
                      required minLength={8}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="terms-r" checked={accepted} onCheckedChange={(v) => setAccepted(v === true)} />
                  <Label htmlFor="terms-r" className="text-xs leading-relaxed text-muted-foreground">
                    Acepto los{" "}
                    <Link href="#" className="text-primary hover:underline">términos y condiciones</Link>{" "}
                    y la{" "}
                    <Link href="#" className="text-primary hover:underline">política de privacidad</Link>
                  </Label>
                </div>
                {formError && (
                  <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}
                <Button type="submit" className="mt-1 w-full" disabled={loading}>
                  {loading ? "Registrando restaurante..." : "Registrar restaurante"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-muted-foreground">
            Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              Inicia sesion
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
