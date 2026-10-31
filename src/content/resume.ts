export interface Project {
  id: string
  name: string
  category: string
  description: string
  detail: string
  technologies: readonly string[]
  thumbnail: string
  website?: string
  summary: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: "jimenez-produce",
    website: "https://jimenezproduce.com/",
    thumbnail: "/projects/jimenez-produce.png",
    category: "Foodservice",
    name: "Foodservice Catalog & Admin",
    description: "Foodservice catalog and order management",
    detail:
      "A product catalog backed by tools for handling orders and customer applications.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    summary:
      "Customers can browse the foodservice catalog, while staff manage orders and customer accounts through the admin area. Application review is part of the same set of tools.",
  },
  {
    id: "goldys-nestt",
    website: "https://www.goldysnestt.com/",
    thumbnail: "/projects/goldys-nestt.png",
    category: "Retail",
    name: "Shopify Store & Retail Tools",
    description: "Online shopping and store operations",
    detail:
      "A Shopify storefront with retail tools for multiple physical locations.",
    technologies: ["Shopify", "Next.js", "TypeScript"],
    summary:
      "The Shopify storefront sits alongside tools for running multiple retail locations. It connects the online shop with operations in the physical stores.",
  },
  {
    id: "blak",
    website: "https://www.rideblak.com/",
    thumbnail: "/projects/blak.png",
    category: "Transportation",
    name: "Transportation Website & Admin",
    description: "Transport operations and onboarding",
    detail:
      "A public website with tools for managing operators, partners, and vehicles.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    summary:
      "The transportation website includes an admin area for operators, partners, and vehicle records. Onboarding workflows cover the steps involved in adding them to the platform.",
  },

  {
    id: "folio",
    name: "Creative Studio Website",
    category: "Creative studio",
    thumbnail: "/projects/folio.png",
    description: "A website concept for a creative studio",
    detail:
      "Studio services and selected projects, with layouts for desktop and mobile.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "Folio is a creative studio website concept. Bold typography introduces the services and selected projects, with responsive layouts and a contact link for enquiries.",
  },
  {
    id: "fluur",
    name: "Electric Mobility Concept",
    category: "Concept",
    thumbnail: "/projects/fluur.png",
    description: "A landing page for an electric mobility brand",
    detail: "A fictional automotive concept designed for desktop and mobile.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "Fluur explores a website for a fictional electric mobility brand. The landing page uses an expressive visual style, adapted for desktop and mobile screens.",
  },
  {
    id: "carefinity",
    name: "Healthcare Website Concept",
    category: "Healthcare",
    thumbnail: "/projects/carefinity.png",
    description: "A healthcare website concept",
    detail:
      "Service information and a consultation enquiry, arranged for different screen sizes.",
    technologies: ["Next.js", "shadcn/ui"],
    summary:
      "Carefinity is a responsive healthcare website concept. A calm visual style supports the service information, with a consultation enquiry as the next step for visitors.",
  },
  {
    id: "cbdentistry",
    website: "https://www.cbdentistry.ca/",
    name: "Dental Practice Website",
    category: "Healthcare",
    description: "A website for a dental practice",
    detail:
      "Treatment details and patient guidance, with links to enquire about an appointment.",
    summary:
      "Visitors can read about treatments and the practice before making an appointment enquiry. Patient guidance sits alongside the service information.",
    technologies: [],
    thumbnail: "/projects/cbdentistry.png",
  },
  {
    id: "digiacai",
    website: "https://digiacai.com/",
    name: "SEO & Marketing Agency Website",
    category: "Agency",
    description: "A website for an SEO and marketing agency",
    detail:
      "Agency services, client stories, and enquiry forms in a purple brand palette.",
    summary:
      "Digi Acai uses a purple visual identity across its agency website. Service information and client stories explain the work, with enquiry forms for prospective clients.",
    technologies: [],
    thumbnail: "/projects/digiacai.png",
  },
  {
    id: "neha-agarwal",
    website: "https://nehaagarwal.in/",
    name: "Speaker & Workshop Website",
    category: "Personal brand",
    description: "A speaker’s personal website",
    detail:
      "Her story and writing alongside speaking engagements, workshops, and press.",
    summary:
      "The website introduces Neha Agarwal through her personal story and professional work. Speaking engagements and workshops sit alongside articles and press appearances in an editorial layout.",
    technologies: [],
    thumbnail: "/projects/neha-agarwal.png",
  },
  {
    id: "prerna-ghosh",
    name: "Fashion & Accessories Store",
    category: "Retail",
    description: "A fashion store built on Shopify",
    detail:
      "Clothing and accessories organized into collections and seasonal edits.",
    summary:
      "Editorial photography introduces the fashion collections and individual pieces. Shoppers can browse clothing, accessories, and seasonal edits through product grids and category navigation.",
    technologies: ["Shopify"],
    thumbnail: "/projects/prerna-ghosh.png",
  },
  {
    id: "priyanka-gill",
    website: "https://www.priyankagill.com/",
    name: "Personal Website & Writing",
    category: "Personal brand",
    description: "A personal website for her work and writing",
    detail:
      "Biography and career milestones alongside press coverage, articles, and podcasts.",
    summary:
      "Priyanka Gill’s website brings her biography and career milestones together with writing, media coverage, and podcasts. Blush and yellow accents run through the editorial layout.",
    technologies: [],
    thumbnail: "/projects/priyanka-gill.png",
  },
  {
    id: "sauga-smiles",
    website: "https://saugasmilesdental.com/",
    name: "Dental Services Website",
    category: "Healthcare",
    description: "A dental website with patient information",
    detail:
      "Treatments and practice details, with links for appointment enquiries.",
    summary:
      "A purple palette and practice photography give the dental website its visual style. Patients can read treatment information, learn about the practice, and follow links to enquire about appointments.",
    technologies: [],
    thumbnail: "/projects/sauga-smiles.png",
  },
  {
    id: "shop-minis",
    website: "https://www.shopminis.in/",
    name: "Swimwear & Resortwear Store",
    category: "Retail",
    description: "An online store for swimwear and resortwear",
    detail:
      "Beach campaign photography leads into collections and individual products.",
    summary:
      "Minis uses beach campaign imagery and a playful visual identity across its storefront. Collection browsing and product grids let shoppers explore the swimwear and resortwear.",
    technologies: [],
    thumbnail: "/projects/shop-minis.png",
  },
  {
    id: "the-clothing-factory",
    website: "https://theclothingfactory.in/",
    name: "Fashion & Lifestyle Store",
    category: "Retail",
    description: "A fashion and lifestyle store",
    detail:
      "Seasonal campaigns and collections, with browsing by category and occasion.",
    summary:
      "The storefront organizes fashion and lifestyle products through seasonal campaigns, category navigation, and product grids. Editorial collection pages and occasion-based browsing provide other routes into the range.",
    technologies: [],
    thumbnail: "/projects/the-clothing-factory.png",
  },
  {
    id: "the-design-atelier",
    website: "https://thedesignatelier.com/",
    name: "Interior Design Portfolio",
    category: "Interiors",
    description: "An interior design studio’s portfolio",
    detail:
      "Project photography takes the lead, with studio details and contact information.",
    summary:
      "The Design Atelier’s portfolio puts architectural project photography first. Understated typography and simple navigation support the gallery, with information about the studio and how to contact it.",
    technologies: [],
    thumbnail: "/projects/the-design-atelier.png",
  },
  {
    id: "spline-animation",
    website: "https://spline-animation.vercel.app/",
    name: "Interactive 3D Landing Page",
    category: "Interactive",
    description: "A dark landing page with an interactive 3D scene",
    detail: "An orange sphere and terrain animation built with Spline.",
    summary:
      "This landing page exploration uses Spline for an interactive sphere and terrain scene. The orange sphere is the focal point against a dark background, with motion adding depth to the hero layout.",
    technologies: ["Spline"],
    thumbnail: "/projects/spline-animation.png",
  },
  {
    id: "url-shortener",
    website: "https://url-shortner-client-eight.vercel.app/",
    name: "Link Shortener",
    category: "Web app",
    description: "An interface for shortening and managing links",
    detail:
      "A URL form with a link-management entry point on a dark background.",
    summary:
      "The interface centers on entering a URL, with an entry point for managing links. Violet-to-cyan accents draw attention to the form against the dark background.",
    technologies: [],
    thumbnail: "/projects/url-shortener.png",
  },
]

export const SERVICES = [
  {
    icon: "code",
    title: "Full-stack development",
    description: "I build the interface and the systems behind your web app.",
  },
  {
    icon: "phone",
    title: "Responsive interfaces",
    description: "Accessible interfaces that work across screen sizes.",
  },
  {
    icon: "database",
    title: "Connected systems",
    description: "I connect your tools through APIs so they can share data.",
  },
  {
    icon: "cloud",
    title: "Reliable deployments",
    description: "I prepare your app for production and set up its hosting.",
  },
  {
    icon: "message",
    title: "Clear communication",
    description: "You get regular updates on the work as it progresses.",
  },
  {
    icon: "chart",
    title: "Ongoing improvements",
    description: "I improve performance and add features as your needs change.",
  },
] as const

export const FAQS = [
  {
    question: "What kind of projects do you build?",
    answer:
      "I build websites, web apps, and admin platforms. I also connect them to the other tools your business uses.",
  },
  {
    question: "Can you work on an existing project?",
    answer:
      "Yes. I can improve your existing website or app, add features, or connect it to the systems you already use.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell me about your project, what you want it to do, and when you need it. We’ll work out the scope and next steps together.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. I can maintain and deploy your app, improve its performance, and add features as your project grows.",
  },
]

export const CONTACT_FAQS = [
  {
    question: "What should I include in my message?",
    answer:
      "Tell me what you need help with and who will use the website or app. A link to your existing site is useful, along with any timeline or budget you have in mind.",
  },
  {
    question: "Can I reach out without a detailed brief?",
    answer:
      "Yes. Tell me what you have in mind, even if you’re still figuring it out. We can talk through the details together.",
  },
  {
    question: "How should I get in touch?",
    answer: "Email me directly to discuss your project and next steps.",
  },
  {
    question: "Can we work together beyond the initial project?",
    answer:
      "Yes. I can help with maintenance and improvements after launch. Mention what support you need when you get in touch, and we’ll discuss how to handle it.",
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
  "I build web applications to help with everyday business tasks."

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
