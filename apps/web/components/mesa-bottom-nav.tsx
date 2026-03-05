"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UtensilsCrossed, ShoppingBag, Receipt } from "lucide-react"
import { useMesa } from "@/lib/mesa-context"
import { cn } from "@/lib/utils"

export function MesaBottomNav() {
  const pathname = usePathname()
  const { restauranteId, mesaId, carrito, pedidos } = useMesa()

  const base = `/mesa/${restauranteId}/${mesaId}`
  const cartCount = carrito.reduce((s, i) => s + i.cantidad, 0)
  const pedidosActivos = pedidos.filter((p) => p.estado !== "servido").length

  const tabs = [
    {
      href: `${base}/carta`,
      label: "Carta",
      icon: UtensilsCrossed,
      badge: 0,
    },
    {
      href: `${base}/pedido`,
      label: "Pedido",
      icon: ShoppingBag,
      badge: cartCount,
    },
    {
      href: `${base}/cuenta`,
      label: "Cuenta",
      icon: Receipt,
      badge: pedidosActivos,
    },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur safe-area-bottom">
      <div className="mx-auto flex max-w-2xl">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          const Icon = tab.icon
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "relative flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="relative">
                <Icon className="h-5 w-5" />
                {tab.badge > 0 && (
                  <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span>{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
