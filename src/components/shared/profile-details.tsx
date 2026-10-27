import { RESUME } from "@/content/resume"
import { Availability } from "@/components/shared/availability"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"

export function ProfileDetails({ className }: { className?: string }) {
  return (
    <div className={cn("relative py-2", className)}>
      <Availability className="w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary-text" />
      <div className="mt-5 flex gap-3">
        <div
          aria-hidden="true"
          className="flex w-3.5 shrink-0 flex-col items-center pt-1.5 pb-2"
        >
          <span className="size-1.5 rounded-full border border-primary bg-background" />
          <span className="my-1 min-h-10 w-px flex-1 border-l border-dashed border-border-strong" />
          <Icon name="down" className="size-3.5 text-primary-text" />
        </div>
        <div className="min-w-0">
          <p className="text-xs leading-5 text-muted-foreground">From</p>
          <p className="text-sm font-medium tracking-tight">
            {RESUME.location}
          </p>
          <p className="mt-5 flex items-center gap-1.5 text-sm leading-tight font-semibold tracking-tight">
            {RESUME.workReach}
            <Icon name="arrow" className="size-4 text-primary-text" />
          </p>
        </div>
      </div>
    </div>
  )
}
