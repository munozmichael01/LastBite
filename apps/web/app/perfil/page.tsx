import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { PerfilClient } from "./perfil-client"

export default async function ProfilePage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login")

  const user = await prisma.usuario.findUnique({
    where: { id: session.user.id },
    select: { nombre: true, email: true, telefono: true, dietaPreferencia: true },
  })
  if (!user) redirect("/auth/login")

  return (
    <PerfilClient
      nombre={user.nombre}
      email={user.email}
      telefono={user.telefono}
      dietaryPreferences={user.dietaPreferencia}
    />
  )
}
