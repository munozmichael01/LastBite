import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { ManagerLayoutClient } from "./layout-client"

export default async function ManagerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  const restaurante = session?.user?.id
    ? await prisma.restaurante.findUnique({
        where: { managerId: session.user.id },
        select: { nombre: true },
      })
    : null

  return (
    <ManagerLayoutClient restauranteName={restaurante?.nombre ?? "Mi Restaurante"}>
      {children}
    </ManagerLayoutClient>
  )
}
