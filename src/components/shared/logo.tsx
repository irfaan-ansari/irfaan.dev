import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-flex size-8 shrink-0", className)}
    >
      <img
        src="/logo.svg"
        alt=""
        width={32}
        height={32}
        className="size-full dark:invert"
      />
    </span>
  )
}
