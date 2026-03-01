import Link from "next/link"
import { Clock, Leaf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { SurplusBag } from "@/lib/mock-data"
import { formatCurrency } from "@/lib/mock-data"

export function BagCard({ bag }: { bag: SurplusBag }) {
  const isSoldOut = bag.status === "sold_out"

  return (
    <Link href={`/bolsas/${bag.id}`}>
      <Card className={`group overflow-hidden border-border transition-shadow hover:shadow-lg ${isSoldOut ? "opacity-60" : ""}`}>
        <div className={`relative h-32 bg-gradient-to-br ${bag.coverGradient}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Leaf className="h-10 w-10 text-white/30" />
          </div>
          <div className="absolute left-3 top-3">
            <Badge className="bg-secondary text-secondary-foreground shadow-sm">
              -{bag.discount}%
            </Badge>
          </div>
          {isSoldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
              <span className="rounded-lg bg-card px-3 py-1 text-sm font-semibold text-foreground">
                Agotado
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <p className="text-xs font-medium text-secondary">{bag.restaurantName}</p>
          <h3 className="mt-0.5 truncate text-base font-semibold text-foreground group-hover:text-secondary transition-colors">
            {bag.name}
          </h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-lg font-bold text-secondary">
              {formatCurrency(bag.price)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(bag.originalPrice)}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {bag.pickupFrom} - {bag.pickupUntil}
            </div>
            {!isSoldOut && (
              <span className="text-xs font-medium text-primary">
                {bag.available} disponible{bag.available !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
