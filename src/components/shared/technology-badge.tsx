import { Icon, type IconName } from "@/components/shared/icon"
import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TECHNOLOGY_ICONS: Record<string, IconName> = {
  TypeScript: "code",
  JavaScript: "javascript",
  React: "react",
  "Next.js": "nextjs",
  "Node.js": "nodejs",
  PostgreSQL: "database",
  Shopify: "shopping",
  "shadcn/ui": "layout",
}

const TECHNOLOGY_COLORS: Record<string, string> = {
  TypeScript: "text-technology-typescript",
  JavaScript: "text-technology-javascript",
  React: "text-technology-react",
  "Next.js": "text-foreground",
  "Node.js": "text-technology-node",
  PostgreSQL: "text-technology-postgres",
  Shopify: "text-technology-shopify",
  "shadcn/ui": "text-foreground",
}

export function TechnologyBadge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const icon =
    typeof children === "string" ? TECHNOLOGY_ICONS[children] : undefined
  const colors =
    typeof children === "string" ? TECHNOLOGY_COLORS[children] : undefined

  return (
    <Badge
      variant="secondary"
      className={cn(
        "h-auto gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {icon && (
        <Icon
          name={icon}
          aria-hidden={true}
          className={cn("size-4 shrink-0", colors)}
        />
      )}
      {children}
    </Badge>
  )
}
