export interface Project {
  id: string
  name: string
  category: string
  description: string
  detail: string
  technologies: readonly string[]
  thumbnail: string
  summary: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: "jimenez-produce",
    thumbnail: "/projects/jimenez-produce.png",
    category: "Foodservice",
    name: "Jimenez Produce",
    description: "Foodservice website + admin",
    detail: "Orders, catalog, customers, and application review.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    summary:
      "A connected foodservice experience with a product catalog, customer management, order workflows, and application review.",
  },
  {
    id: "goldys-nestt",
    thumbnail: "/projects/goldys-nestt.png",
    category: "Retail",
    name: "Goldy’s Nestt",
    description: "Shopify + multi-location retail",
    detail: "Connecting online and offline store operations.",
    technologies: ["Shopify", "Next.js", "TypeScript"],
    summary:
      "A retail storefront paired with the operational tools to connect online shopping and multiple physical locations.",
  },
  {
    id: "blak",
    thumbnail: "/projects/blak.png",
    category: "Transportation",
    name: "BLAK",
    description: "Transportation website + admin",
    detail: "Operator, partner, vehicle, and onboarding workflows.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    summary:
      "A transportation experience supported by admin workflows for operators, partners, vehicle management, and onboarding.",
  },

  {
    id: "folio",
    name: "Folio",
    category: "Creative studio",
    thumbnail: "/projects/folio.png",
    description: "Creative studio website",
    detail:
      "A responsive studio presentation with services, work, and a clear contact path.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "A creative studio website concept focused on bold typography, selected work, and responsive layouts.",
  },
  {
    id: "fluur",
    name: "Fluur",
    category: "Concept",
    thumbnail: "/projects/fluur.png",
    description: "Electric mobility website concept",
    detail: "A fictional brand and responsive automotive landing page.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "A fictional electric mobility brand concept with an expressive landing page and layouts for desktop and mobile.",
  },
  {
    id: "carefinity",
    name: "Carefinity",
    category: "Healthcare",
    thumbnail: "/projects/carefinity.png",
    description: "Healthcare website design",
    detail:
      "A responsive healthcare presentation with services and a consultation call to action.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "A healthcare website concept combining a calm visual direction with responsive layouts and a clear consultation path.",
  },
]
