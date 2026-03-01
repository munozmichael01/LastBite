"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function StarRating({
  rating,
  max = 5,
  size = "md",
  interactive = false,
  onChange,
}: {
  rating: number
  max?: number
  size?: "sm" | "md" | "lg"
  interactive?: boolean
  onChange?: (rating: number) => void
}) {
  const sizeMap = { sm: "h-3.5 w-3.5", md: "h-4 w-4", lg: "h-5 w-5" }

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating)
        const half = !filled && i < rating
        return (
          <button
            key={i}
            type="button"
            disabled={!interactive}
            onClick={() => onChange?.(i + 1)}
            className={cn(
              "inline-flex",
              interactive && "cursor-pointer hover:scale-110 transition-transform",
              !interactive && "cursor-default"
            )}
            aria-label={`${i + 1} estrella${i + 1 !== 1 ? "s" : ""}`}
          >
            <Star
              className={cn(
                sizeMap[size],
                filled
                  ? "fill-accent text-accent"
                  : half
                    ? "fill-accent/50 text-accent"
                    : "fill-transparent text-border"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
