import { PROFILE } from "@/content/profile"
import { cn } from "@/lib/utils"

export function Availability({ className }: { className?: string }) {
  return (
    <p className={cn("flex items-center gap-2 text-sm font-medium", className)}>
      <span
        aria-hidden="true"
        className="inline-flex size-3.5 shrink-0 items-center justify-center"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-primary motion-safe:animate-ping" />
          <span className="relative inline-flex size-full rounded-full bg-primary" />
        </span>
      </span>
      {PROFILE.availability}
    </p>
  )
}
