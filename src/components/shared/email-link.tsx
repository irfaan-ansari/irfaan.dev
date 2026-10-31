import { Icon } from "@/components/shared/icon"
import { RESUME } from "@/content/resume"
import { cn } from "@/lib/utils"

export function EmailLink({ className }: { className?: string }) {
  return (
    <a
      href={RESUME.email}
      className={cn(
        "group/email relative inline-flex max-w-full items-center gap-1.5 rounded-sm text-sm outline-offset-4 transition-colors duration-100 ease-out hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring",
        className
      )}
    >
      <Icon name="mail" className="size-3.5" />
      <span className="break-all">{RESUME.email.replace(/^mailto:/, "")}</span>
      <span
        aria-hidden="true"
        className="flex size-4 shrink-0 items-center overflow-hidden"
      >
        <Icon
          name="arrow"
          className="size-4 -translate-x-0.5 text-primary opacity-0 transition-[transform,opacity] duration-100 ease-out group-hover/email:translate-x-0 group-hover/email:opacity-100 group-focus-visible/email:translate-x-0 group-focus-visible/email:opacity-100 motion-reduce:transform-none motion-reduce:transition-none"
        />
      </span>
    </a>
  )
}
