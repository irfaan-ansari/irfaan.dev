import type { ReactNode } from "react"
import {
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiJavascriptFill,
  RiLayoutLine,
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
  RiShoppingBag3Line,
} from "@remixicon/react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const technologyIcons: Record<string, typeof RiCodeSSlashLine> = {
  TypeScript: RiCodeSSlashLine,
  JavaScript: RiJavascriptFill,
  React: RiReactjsLine,
  "Next.js": RiNextjsFill,
  "Node.js": RiNodejsLine,
  PostgreSQL: RiDatabase2Line,
  Shopify: RiShoppingBag3Line,
  "shadcn/ui": RiLayoutLine,
}

const technologyColors: Record<string, string> = {
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
  const TechnologyIcon =
    typeof children === "string" ? technologyIcons[children] : undefined
  const colors =
    typeof children === "string" ? technologyColors[children] : undefined

  return (
    <Badge
      variant="secondary"
      className={cn(
        "h-auto gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {TechnologyIcon && (
        <TechnologyIcon aria-hidden={true} className={cn("size-4 shrink-0", colors)} />
      )}
      {children}
    </Badge>
  )
}
