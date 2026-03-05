"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { MenuItem } from "./mock-data"

export interface Comensal {
  nombre: string
  apellido: string
  email?: string
}

export interface ItemCarrito {
  item: MenuItem
  cantidad: number
  nota?: string
  comensalNombre: string
}

export interface PedidoEnviado {
  id: string
  items: ItemCarrito[]
  estado: "enviado" | "en_preparacion" | "listo" | "servido"
  hora: string
}

interface MesaContextValue {
  restauranteId: string
  mesaId: string
  mesaNumero: number
  restaurantName: string
  restaurantImage?: string
  comensal: Comensal | null
  carrito: ItemCarrito[]
  pedidos: PedidoEnviado[]
  cuentaSolicitada: boolean
  setComensal: (c: Comensal) => void
  agregarItem: (item: MenuItem) => void
  quitarItem: (itemId: string) => void
  actualizarCantidad: (itemId: string, cantidad: number) => void
  confirmarPedido: () => void
  solicitarCuenta: () => void
  totalCarrito: number
  totalSesion: number
  cantidadEnCarrito: (itemId: string) => number
}

const MesaContext = createContext<MesaContextValue | null>(null)

export function useMesa() {
  const ctx = useContext(MesaContext)
  if (!ctx) throw new Error("useMesa must be used within MesaProvider")
  return ctx
}

interface MesaProviderProps {
  restauranteId: string
  mesaId: string
  mesaNumero: number
  restaurantName: string
  restaurantImage?: string
  children: React.ReactNode
}

export function MesaProvider({
  restauranteId,
  mesaId,
  mesaNumero,
  restaurantName,
  restaurantImage,
  children,
}: MesaProviderProps) {
  const storageKey = `lb-mesa-${restauranteId}-${mesaId}`

  const [comensal, setComensal_] = useState<Comensal | null>(null)
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [pedidos, setPedidos] = useState<PedidoEnviado[]>([])
  const [cuentaSolicitada, setCuentaSolicitada] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        const data = JSON.parse(stored)
        if (data.comensal) setComensal_(data.comensal)
        if (data.carrito) setCarrito(data.carrito)
        if (data.pedidos) setPedidos(data.pedidos)
        if (data.cuentaSolicitada) setCuentaSolicitada(data.cuentaSolicitada)
      }
    } catch {}
    setHydrated(true)
  }, [storageKey])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem(
      storageKey,
      JSON.stringify({ comensal, carrito, pedidos, cuentaSolicitada })
    )
  }, [comensal, carrito, pedidos, cuentaSolicitada, hydrated, storageKey])

  const setComensal = (c: Comensal) => setComensal_(c)

  const agregarItem = (item: MenuItem) => {
    setCarrito((prev) => {
      const existing = prev.find((i) => i.item.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      }
      return [
        ...prev,
        {
          item,
          cantidad: 1,
          comensalNombre: comensal ? comensal.nombre : "Anónimo",
        },
      ]
    })
  }

  const quitarItem = (itemId: string) => {
    setCarrito((prev) => prev.filter((i) => i.item.id !== itemId))
  }

  const actualizarCantidad = (itemId: string, cantidad: number) => {
    if (cantidad <= 0) {
      quitarItem(itemId)
      return
    }
    setCarrito((prev) =>
      prev.map((i) => (i.item.id === itemId ? { ...i, cantidad } : i))
    )
  }

  const confirmarPedido = () => {
    if (carrito.length === 0) return
    const nuevoPedido: PedidoEnviado = {
      id: `p-${Date.now()}`,
      items: [...carrito],
      estado: "enviado",
      hora: new Date().toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    setPedidos((prev) => [...prev, nuevoPedido])
    setCarrito([])

    // Simular progresión de estado
    setTimeout(() => {
      setPedidos((prev) =>
        prev.map((p) =>
          p.id === nuevoPedido.id ? { ...p, estado: "en_preparacion" } : p
        )
      )
    }, 4000)
    setTimeout(() => {
      setPedidos((prev) =>
        prev.map((p) =>
          p.id === nuevoPedido.id ? { ...p, estado: "listo" } : p
        )
      )
    }, 10000)
  }

  const solicitarCuenta = () => setCuentaSolicitada(true)

  const cantidadEnCarrito = (itemId: string) =>
    carrito.find((i) => i.item.id === itemId)?.cantidad ?? 0

  const totalCarrito = carrito.reduce(
    (sum, i) => sum + i.item.price * i.cantidad,
    0
  )
  const totalSesion =
    pedidos.reduce(
      (sum, p) =>
        sum + p.items.reduce((s, i) => s + i.item.price * i.cantidad, 0),
      0
    ) + totalCarrito

  return (
    <MesaContext.Provider
      value={{
        restauranteId,
        mesaId,
        mesaNumero,
        restaurantName,
        restaurantImage,
        comensal,
        carrito,
        pedidos,
        cuentaSolicitada,
        setComensal,
        agregarItem,
        quitarItem,
        actualizarCantidad,
        confirmarPedido,
        solicitarCuenta,
        totalCarrito,
        totalSesion,
        cantidadEnCarrito,
      }}
    >
      {children}
    </MesaContext.Provider>
  )
}
