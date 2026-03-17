import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { ReservasManagerClient } from "./reservas-client"

export default async function ManagerReservasPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login")

  const restaurante = await prisma.restaurante.findUnique({
    where: { managerId: session.user.id },
    select: { id: true },
  })
  if (!restaurante) redirect("/auth/login")

  const reservas = await prisma.reservaMesa.findMany({
    where: { restauranteId: restaurante.id },
    include: { cliente: { select: { nombre: true, email: true, telefono: true } }, promocion: { select: { nombre: true } } },
    orderBy: [{ fecha: "desc" }, { hora: "asc" }],
    take: 200,
  })

  const data = reservas.map((r) => ({
    id: r.id,
    codigo: r.codigo,
    nombre: r.cliente.nombre,
    email: r.cliente.email,
    telefono: r.cliente.telefono ?? "",
    comensales: r.comensales,
    fecha: r.fecha.toISOString().split("T")[0],
    hora: r.hora,
    estado: r.estado,
    promocion: r.promocion?.nombre,
    notas: r.notas ?? undefined,
  }))

  return <ReservasManagerClient reservas={data} />
}
