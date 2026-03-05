"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, ShoppingBag, CalendarDays, User } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/buscar", label: "Buscar", icon: Search },
  { href: "/bolsas", label: "Bolsas", icon: ShoppingBag },
  { href: "/mis-reservas", label: "Reservas", icon: CalendarDays },
  { href: "/perfil", label: "Perfil", icon: User },
]

export function MobileNav() {
  const pathname = usePathname()

  if (pathname.startsWith("/manager") || pathname.startsWith("/mesa") || pathname.startsWith("/cocina")) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href)
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <tab.icon className={cn("h-5 w-5", isActive && "stroke-[2.5]")} />
              <span className="font-medium">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
