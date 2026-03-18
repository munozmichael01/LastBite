import { notFound } from "next/navigation"
import { auth } from "@/auth"
import { getRestaurantById } from "@/lib/restaurant-service"
import { ReservarClient } from "./reservar-client"

export default async function ReservationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [restaurant, session] = await Promise.all([
    getRestaurantById(id),
    auth(),
  ])
  if (!restaurant) notFound()

  const user = session?.user
    ? { name: session.user.name ?? "", email: session.user.email ?? "" }
    : null

  return <ReservarClient restaurant={restaurant} initialUser={user} />
}
