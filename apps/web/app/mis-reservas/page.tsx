import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { MisReservasClient } from "./mis-reservas-client"

export default async function MisReservasPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login?callbackUrl=/mis-reservas")

  const reservas = await prisma.reservaMesa.findMany({
    where: { clienteId: session.user.id },
    orderBy: { fecha: "desc" },
    include: {
      restaurante: { select: { id: true, nombre: true, direccion: true } },
      promocion: { select: { nombre: true, valor: true } },
    },
  })

  const data = reservas.map((r) => ({
    id: r.id,
    codigo: r.codigo,
    restaurantId: r.restaurante.id,
    restaurantName: r.restaurante.nombre,
    restaurantAddress: r.restaurante.direccion,
    fecha: r.fecha.toISOString().split("T")[0],
    hora: r.hora,
    comensales: r.comensales,
    estado: r.estado,
    notas: r.notas ?? undefined,
    promocion: r.promocion ? `${r.promocion.nombre} (-${r.promocion.valor}%)` : undefined,
  }))

  return <MisReservasClient reservas={data} />
}
