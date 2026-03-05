import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Restaurant } from "@/lib/mock-data"
import { priceRangeLabel } from "@/lib/mock-data"

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const activePromo = restaurant.promotions.find((p) => p.status === "active")

  return (
    <Link href={`/restaurante/${restaurant.id}`}>
      <Card className="group overflow-hidden border-border transition-shadow hover:shadow-lg">
        <div className="relative h-44 overflow-hidden">
          {restaurant.image ? (
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${restaurant.coverGradient} flex items-center justify-center`}>
              <span className="text-4xl font-bold text-white/30">{restaurant.name.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {activePromo && (
            <div className="absolute left-3 top-3">
              <Badge className="bg-accent text-accent-foreground shadow-sm">
                {activePromo.type === "2x1"
                  ? "2x1"
                  : `-${activePromo.discount}%`}
              </Badge>
            </div>
          )}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-card/90 text-card-foreground backdrop-blur">
              {priceRangeLabel(restaurant.priceRange)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="truncate text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {restaurant.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {restaurant.cuisine.join(" · ")}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-medium text-foreground">{restaurant.rating}</span>
              <span className="text-xs text-muted-foreground">({restaurant.reviewCount})</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {restaurant.neighborhood}
            </div>
          </div>
          {activePromo && (
            <p className="mt-2 truncate text-xs font-medium text-primary">
              {activePromo.name}: {activePromo.conditions}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
