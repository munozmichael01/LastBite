import { Suspense } from "react"
import { getActiveBags } from "@/lib/restaurant-service"
import { BolsasClient } from "./bolsas-client"

export default async function BagsPage() {
  const bags = await getActiveBags()
  return (
    <Suspense>
      <BolsasClient bags={bags} />
    </Suspense>
  )
}
