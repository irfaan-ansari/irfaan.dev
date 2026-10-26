import { Globe } from "@/components/home/globe"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"

export function WebOverview() {
  return (
    <div className="globe-surface relative isolate overflow-hidden rounded-xl px-6 py-8">
      <Globe />
      <div className="relative z-10 max-w-80">
        <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          What I do
        </p>
        <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          Anything and
          <br />
          everything web.
        </h2>
        <p className="mt-3 max-w-72 text-sm leading-relaxed text-muted-foreground">
          From websites and admin platforms to integrations, deployment, and
          ongoing improvements.
        </p>
        <ul className="mt-5 space-y-3">
          {(
            [
              ["code", "Web apps & APIs"],
              ["phone", "Commerce & integrations"],
              ["database", "Deployment & maintenance"],
            ] as const
          ).map(([icon, label]) => (
            <li key={label} className="flex items-center gap-3 text-sm">
              <span
                className={cn(
                  "text-primary-text",
                  "rounded-md bg-primary/10 p-2"
                )}
              >
                <Icon name={icon} className="size-4" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
