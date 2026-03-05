"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  CalendarCheck,
  Tag,
  ShoppingBag,
  Settings,
  BarChart3,
  Menu,
  X,
  ChevronLeft,
  LayoutGrid,
  BookOpen,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/manager", label: "Dashboard", icon: LayoutDashboard },
  { href: "/manager/reservas", label: "Reservas", icon: CalendarCheck },
  { href: "/manager/mesas", label: "Mesas", icon: LayoutGrid },
  { href: "/manager/carta", label: "Carta", icon: BookOpen },
  { href: "/manager/promociones", label: "Promociones", icon: Tag },
  { href: "/manager/bolsas", label: "Bolsas sorpresa", icon: ShoppingBag },
  { href: "/manager/estadisticas", label: "Estadisticas", icon: BarChart3 },
  { href: "/manager/ajustes", label: "Ajustes", icon: Settings },
]

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-card pt-16 transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 lg:pt-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4 lg:py-5">
          <div>
            <p className="text-sm font-semibold text-foreground">El Sabor de Casa</p>
            <p className="text-xs text-muted-foreground">Panel de gestion</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-muted-foreground hover:text-foreground lg:hidden"
            aria-label="Cerrar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-border p-3">
          <Link href="/">
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Volver a Last Bite
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <div className="flex h-14 items-center border-b border-border px-4 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="ml-3 text-sm font-semibold text-foreground">Panel de gestion</span>
        </div>
        <div className="flex-1 overflow-auto p-4 pb-24 md:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  )
}
