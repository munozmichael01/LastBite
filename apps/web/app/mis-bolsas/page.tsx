import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { MisBolsasClient } from "./mis-bolsas-client"

export default async function MisBolsasPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/auth/login?callbackUrl=/mis-bolsas")

  const reservas = await prisma.reservaBolsa.findMany({
    where: { clienteId: session.user.id },
    orderBy: { creadoEn: "desc" },
    include: {
      publicacion: {
        include: {
          restaurante: { select: { id: true, nombre: true } },
          plantilla: { select: { nombre: true, precio: true } },
        },
      },
    },
  })

  const data = reservas.map((r) => ({
    id: r.id,
    codigo: r.codigo,
    bagName: r.publicacion.plantilla.nombre,
    restaurantId: r.publicacion.restaurante.id,
    restaurantName: r.publicacion.restaurante.nombre,
    price: r.publicacion.plantilla.precio,
    pickupDate: r.publicacion.fecha.toISOString().split("T")[0],
    pickupFrom: r.publicacion.franjaInicio,
    pickupUntil: r.publicacion.franjaFin,
    unidades: r.unidades,
    estado: r.estado,
  }))

  return <MisBolsasClient compras={data} />
}
