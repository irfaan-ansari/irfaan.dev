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
  {
    id: "cbdentistry",
    name: "Central Burlington Dental Care",
    category: "Healthcare",
    description: "Dental practice website",
    detail:
      "Service information, patient guidance, and clear appointment enquiries.",
    summary:
      "A welcoming dental website that brings treatment information, practice details, patient guidance, and appointment calls to action into a clear browsing experience.",
    technologies: [],
    thumbnail: "/projects/cbdentistry.png",
  },
  {
    id: "digiacai",
    name: "Digi Acai",
    category: "Agency",
    description: "SEO and marketing agency website",
    detail:
      "A bold brand presentation with services, client work, and enquiry forms.",
    summary:
      "An expressive agency website with a distinctive purple identity, service information, client stories, and clear paths to start a conversation.",
    technologies: [],
    thumbnail: "/projects/digiacai.png",
  },
  {
    id: "neha-agarwal",
    name: "Neha Agarwal",
    category: "Personal brand",
    description: "Personal brand and speaker website",
    detail: "A personal story, speaking engagements, workshops, and writing.",
    summary:
      "A personal brand website that connects a professional introduction with speaking, workshops, press appearances, and articles in a clean editorial layout.",
    technologies: [],
    thumbnail: "/projects/neha-agarwal.png",
  },
  {
    id: "prerna-ghosh",
    name: "Prerna Ghosh",
    category: "Retail",
    description: "Fashion storefront",
    detail:
      "Collection-led browsing for clothing, accessories, and seasonal edits.",
    summary:
      "An image-led fashion storefront that presents collections and individual pieces through editorial photography, product grids, and straightforward category navigation.",
    technologies: ["Shopify"],
    thumbnail: "/projects/prerna-ghosh.png",
  },
  {
    id: "priyanka-gill",
    name: "Priyanka Gill",
    category: "Personal brand",
    description: "Personal brand and editorial website",
    detail:
      "Biography, career milestones, press, articles, and podcast content.",
    summary:
      "A personal website that brings together a professional journey, writing, media coverage, and podcast content, using blush and yellow accents to create a distinct editorial identity.",
    technologies: [],
    thumbnail: "/projects/priyanka-gill.png",
  },
  {
    id: "sauga-smiles",
    name: "Sauga Smiles Dental",
    category: "Healthcare",
    description: "Dental practice website",
    detail:
      "Treatments, practice information, and appointment calls to action.",
    summary:
      "A calm dental website with a purple visual identity, readable service information, practice photography, and prominent appointment links.",
    technologies: [],
    thumbnail: "/projects/sauga-smiles.png",
  },
  {
    id: "shop-minis",
    name: "Minis",
    category: "Retail",
    description: "Swimwear and resortwear storefront",
    detail: "Campaign photography, collection browsing, and product discovery.",
    summary:
      "A vibrant fashion storefront that combines beach campaign imagery with collections, product grids, and a playful visual identity.",
    technologies: [],
    thumbnail: "/projects/shop-minis.png",
  },
  {
    id: "the-clothing-factory",
    name: "The Clothing Factory",
    category: "Retail",
    description: "Fashion and lifestyle storefront",
    detail:
      "Seasonal campaigns, product collections, and shop-by-occasion browsing.",
    summary:
      "A fashion storefront that organizes a broad collection through campaign imagery, category navigation, product grids, and editorial collection pages.",
    technologies: [],
    thumbnail: "/projects/the-clothing-factory.png",
  },
  {
    id: "the-design-atelier",
    name: "The Design Atelier",
    category: "Interiors",
    description: "Interior design portfolio website",
    detail:
      "An architectural image gallery with studio information and contact.",
    summary:
      "A restrained interiors portfolio that gives project photography room to lead, supported by elegant typography, simple navigation, and studio information.",
    technologies: [],
    thumbnail: "/projects/the-design-atelier.png",
  },
  {
    id: "spline-animation",
    name: "Spline Animation",
    category: "Interactive",
    description: "3D landing page exploration",
    detail:
      "An atmospheric orange sphere and terrain scene with a focused hero layout.",
    summary:
      "An interactive design exploration built around a 3D sphere and terrain scene, bringing depth and motion to a dark landing page.",
    technologies: ["Spline"],
    thumbnail: "/projects/spline-animation.png",
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    category: "Web app",
    description: "Link-shortening interface",
    detail: "A focused URL entry form and a clear link-management entry point.",
    summary:
      "A compact web app interface for link shortening, using a dark canvas and violet-to-cyan accents to keep attention on its URL form.",
    technologies: [],
    thumbnail: "/projects/url-shortener.png",
  },
]

export const SERVICES = [
  {
    icon: "code",
    title: "Full-stack development",
    description: "End-to-end web applications using modern technologies.",
  },
  {
    icon: "phone",
    title: "Responsive interfaces",
    description: "Clean, accessible experiences that work everywhere.",
  },
  {
    icon: "database",
    title: "Connected systems",
    description: "Integrations, APIs, and data that work together.",
  },
  {
    icon: "cloud",
    title: "Reliable deployments",
    description: "Production-ready builds and hosting setup.",
  },
  {
    icon: "message",
    title: "Clear communication",
    description: "Straightforward updates throughout the process.",
  },
  {
    icon: "chart",
    title: "Ongoing improvements",
    description: "Iterate, optimize, and add new features over time.",
  },
] as const

export const FAQS = [
  {
    question: "What kind of projects do you build?",
    answer:
      "Websites, web applications, admin platforms, and integrations built around real business needs.",
  },
  {
    question: "Can you work on an existing project?",
    answer:
      "Yes. I can help improve an existing website or application, build new features, and connect it to the systems you already use.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send me a message with a little about your project, your goals, and your timeline. We’ll talk through the scope and next steps.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I can help with maintenance, deployments, performance improvements, and new features as your project grows.",
  },
]

export const CONTACT_FAQS = [
  {
    question: "What should I include in my message?",
    answer:
      "Tell me what you’re building, who it’s for, and what you need help with. If you have a timeline, budget range, or an existing website, include those too.",
  },
  {
    question: "Can I reach out without a detailed brief?",
    answer:
      "Absolutely. A rough idea and a few goals are enough to start. We can work through the details together.",
  },
  {
    question: "What happens after I reach out?",
    answer:
      "The form is currently a demo and does not send messages. Email me directly so we can discuss your goals and next steps.",
  },
  {
    question: "Can we work together beyond the initial project?",
    answer:
      "Yes. If you need maintenance, improvements, or new features over time, mention that in your message so we can discuss an arrangement that fits your project.",
  },
] as const

export const CONTACT_PROJECT_TYPES = [
  { value: "Website", label: "Website" },
  { value: "Web application", label: "Web application" },
  { value: "E-commerce / Shopify", label: "E-commerce / Shopify" },
  { value: "API / integration", label: "API / integration" },
  { value: "Existing project", label: "Existing project" },
  { value: "Something else", label: "Something else" },
]

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", to: "/" },
  { id: "work", label: "Work", to: "/work" },
  { id: "about", label: "About", to: "/", hash: "about" },
  { id: "writing", label: "Writing", to: "/writings" },
] as const

export const FOOTER_DESCRIPTION =
  "Building practical web applications that solve real problems."

export const FOOTER_EXPLORE_LINKS = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/", hash: "about" },
  { label: "Writing", to: "/writings" },
  { label: "FAQs", to: "/", hash: "faqs" },
] as const

export const FOOTER_SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/irfaan-ansari" },
] as const

export const APPROACH = [
  {
    step: "Understand",
    title: "Define the scope",
    description: "Turn your goals into a clear plan for what to build.",
  },
  {
    step: "Build",
    title: "Build together",
    description: "See the work take shape and share feedback along the way.",
  },
  {
    step: "Improve",
    title: "Keep improving",
    description: "Launch, learn from real use, and refine what matters.",
  },
] as const

export const RESUME = {
  name: "Irfaan",
  brand: "irfaan.dev",
  siteUrl: "https://irfaan.vercel.app",
  role: "Full Stack Developer",
  location: "New Delhi, India",
  workReach: "Working worldwide",
  availability: "Available",
  description:
    "I build websites, web apps, and the systems behind them. From customer-facing experiences to the tools that keep businesses running.",
  email: "mailto:idevirfan@gmail.com",
  tech: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  projects: PROJECTS,
  services: SERVICES,
  faqs: FAQS,
  approach: APPROACH,
  navigation: NAVIGATION_ITEMS,
  footer: {
    description: FOOTER_DESCRIPTION,
    links: FOOTER_EXPLORE_LINKS,
    socials: FOOTER_SOCIAL_LINKS,
  },
  contact: {
    faqs: CONTACT_FAQS,
    projectTypes: CONTACT_PROJECT_TYPES,
  },
}
