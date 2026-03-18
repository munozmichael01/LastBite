import { Suspense } from "react"
import { getRestaurants } from "@/lib/restaurant-service"
import { SearchPageClient } from "./search-client"

export default async function SearchPage() {
  const restaurants = await getRestaurants()
  return (
    <Suspense>
      <SearchPageClient restaurants={restaurants} />
    </Suspense>
  )
}
