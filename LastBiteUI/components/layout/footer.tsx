"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UtensilsCrossed } from "lucide-react"

export function Footer() {
  const pathname = usePathname()

  if (pathname.startsWith("/manager")) return null

  return (
    <footer className="border-t border-border bg-card pb-20 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <UtensilsCrossed className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-base font-bold text-foreground">Last Bite</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Reserva mesa en los mejores restaurantes y rescata comida excedente a precios increibles.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Descubre</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/buscar" className="hover:text-foreground">Restaurantes</Link></li>
              <li><Link href="/bolsas" className="hover:text-foreground">Bolsas Sorpresa</Link></li>
              <li><Link href="/buscar" className="hover:text-foreground">Promociones</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Tu cuenta</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/mis-reservas" className="hover:text-foreground">Mis Reservas</Link></li>
              <li><Link href="/mis-bolsas" className="hover:text-foreground">Mis Bolsas</Link></li>
              <li><Link href="/perfil" className="hover:text-foreground">Mi Perfil</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Restaurantes</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/manager" className="hover:text-foreground">Panel de gestion</Link></li>
              <li><Link href="/manager/ficha" className="hover:text-foreground">Registra tu restaurante</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          2026 Last Bite. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
