import { getRestaurant, getMesa } from "@/lib/mock-data"
import { MesaProvider } from "@/lib/mesa-context"
import { notFound } from "next/navigation"

export default async function MesaLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ restauranteId: string; mesaId: string }>
}) {
  const { restauranteId, mesaId } = await params
  const restaurant = getRestaurant(restauranteId)
  const mesa = getMesa(mesaId)

  if (!restaurant || !mesa) notFound()

  return (
    <MesaProvider
      restauranteId={restauranteId}
      mesaId={mesaId}
      mesaNumero={mesa.numero}
      restaurantName={restaurant.name}
      restaurantImage={restaurant.image}
    >
      {children}
    </MesaProvider>
  )
}
