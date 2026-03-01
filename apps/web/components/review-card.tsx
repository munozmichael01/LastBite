import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarRating } from "@/components/star-rating"
import type { Review } from "@/lib/mock-data"

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex gap-4 rounded-lg border border-border bg-card p-4">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarFallback className="bg-muted text-sm font-medium text-muted-foreground">
          {review.userAvatar}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">{review.userName}</p>
          <time className="text-xs text-muted-foreground">{review.date}</time>
        </div>
        <div className="mt-1">
          <StarRating rating={review.rating} size="sm" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span>Comida: {review.aspects.food}/5</span>
          <span>Servicio: {review.aspects.service}/5</span>
          <span>Ambiente: {review.aspects.ambience}/5</span>
          <span>Precio: {review.aspects.value}/5</span>
        </div>
      </div>
    </div>
  )
}
