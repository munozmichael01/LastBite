import { notFound } from "next/navigation"
import { auth } from "@/auth"
import { getBagById, getRestaurantById } from "@/lib/restaurant-service"
import { BolsaDetailClient } from "./bolsa-detail-client"

export default async function BagDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const bag = await getBagById(id)
  if (!bag) notFound()

  const [restaurant, session] = await Promise.all([
    getRestaurantById(bag.restaurantId),
    auth(),
  ])

  const user = session?.user ? { id: session.user.id } : null

  return <BolsaDetailClient bag={bag} restaurant={restaurant} user={user} />
}
