export interface Project {
  id: string
  title: string
  category: string
  description: string
  details: string
  technologies: readonly string[]
  thumbnail: string
  website?: string
}

export const PROJECTS: readonly Project[] = [
  {
    id: "jimenez-produce",
    website: "https://jimenezproduce.com/",
    thumbnail: "/projects/jimenez-produce.jpg",
    category: "Foodservice",
    title: "Foodservice Website, Ordering & Admin Platform",
    description:
      "Foodservice website and ordering and admin portals with role-based access.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Better Auth",
      "Resend",
    ],
    details: `## About the project

I built the public website and two connected portals: one for customers to order from and one for staff to manage operations. In the ordering portal, customers can browse the catalog, place orders, and reorder from saved order guides. They can also review orders and returns, access invoices and statements, and see their spending over time.

### What it includes

The admin portal brings orders, returns, invoices, customer accounts, and products into one workspace. Staff can view live carts, manage order guides, and track orders by status. It also includes messaging, promotions, organization and member management, tax rules, and price levels. Role-based permissions control access, and staff can view a customer’s account to help with ordering. The public website includes forms, with application reviews handled by staff. The platform sends emails through Resend and generates PDFs. I used Next.js and TypeScript with PostgreSQL and Redis, plus Better Auth for authentication.`,
  },
  {
    id: "goldys-nestt",
    website: "https://www.goldysnestt.com/",
    thumbnail: "/projects/goldys-nestt.jpg",
    category: "Retail operations",
    title: "Shopify Store & Retail Platform",
    description:
      "Shopify store and a platform for store operations, with inventory sync between the online shop and physical locations.",
    technologies: ["Shopify", "Next.js", "TypeScript"],
    details: `## About the project

A retail business with several physical locations needs to manage more than its online storefront. I built the Shopify store and a platform for store operations, with inventory sync between the online shop and physical locations.

### What it includes

Shopify webhooks keep inventory in sync across locations. Role-based permissions control staff access to the platform. The build uses Next.js and TypeScript alongside Shopify.`,
  },
  {
    id: "blak",
    website: "https://www.rideblak.com/",
    thumbnail: "/projects/blak.jpg",
    category: "Transportation",
    title: "Luxury Transportation Website & Operations Platform",
    description:
      "A website for first-class transportation, with an operations platform for managing operators, partners, and vehicles.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    details: `## About the project

I built a website for a luxury, first-class transportation service and an operations platform for the people managing it. The public site introduces the business. In the admin area, staff can onboard operators and partners, add vehicles, and manage their records.

### What it includes

The platform includes onboarding workflows and ongoing record management for operators, partners, and vehicles. The website and platform use Next.js and TypeScript, with PostgreSQL for data storage.`,
  },

  {
    id: "folio",
    title: "Creative Studio Website Concept",
    category: "Creative studio",
    thumbnail: "/projects/folio.jpg",
    description:
      "Give prospective clients a closer look at the work. A responsive studio concept with services, projects, and contact enquiries.",
    technologies: ["Next.js", "shadcn/ui"],
    details: `## About the project

This creative studio concept puts services and selected projects together so visitors can see what the studio offers before getting in touch. Bold typography gives the work room to stand out across desktop and mobile layouts.

### What it includes

The concept includes service information, selected projects, and a contact link for enquiries. It uses Next.js and shadcn/ui.`,
  },
  {
    id: "fluur",
    title: "Electric Mobility Website Concept",
    category: "Concept",
    thumbnail: "/projects/fluur.jpg",
    description:
      "An expressive introduction to a mobility brand. A fictional automotive landing page for desktop and mobile.",
    technologies: ["Next.js", "shadcn/ui"],
    details: `## About the project

This landing page explores how a fictional electric mobility brand could introduce itself online. The expressive visual style carries through the automotive presentation, with layouts for desktop and mobile.

### What it includes

The work covers the fictional brand presentation and responsive landing page. It uses Next.js and shadcn/ui.`,
  },
  {
    id: "carefinity",
    title: "Healthcare Website Concept",
    category: "Healthcare",
    thumbnail: "/projects/carefinity.jpg",
    description:
      "Help visitors understand the care available. A responsive concept with service details and consultation enquiries.",
    technologies: ["Next.js", "shadcn/ui"],
    details: `## About the project

This healthcare concept gives visitors a place to read about services before enquiring about a consultation. A calm visual style keeps the service content central, with layouts that adapt to different screen sizes.

### What it includes

The concept includes healthcare service content and a consultation enquiry call to action. It uses Next.js and shadcn/ui.`,
  },
  {
    id: "cbdentistry",
    website: "https://www.cbdentistry.ca/",
    title: "Dental Practice Website",
    category: "Healthcare",
    description:
      "Give patients information before they enquire. Treatment details, patient guidance, and appointment enquiry links.",
    details: `## About the project

The website gives prospective patients a way to learn about the practice and its treatments before making an appointment enquiry. Patient guidance sits alongside the service information.

### What it includes

The site includes treatment details, information about the practice, and guidance for patients. Visitors can follow appointment enquiry links when they are ready to contact the practice.`,
    technologies: [],
    thumbnail: "/projects/cbdentistry.jpg",
  },
  {
    id: "digiacai",
    website: "https://digiacai.com/",
    title: "SEO & Marketing Agency Website",
    category: "Agency",
    description:
      "Let prospective clients explore the agency’s work. Services and client stories, with forms for project enquiries.",
    details: `## About the project

Visitors can read about the agency’s SEO and marketing services and explore client stories before making an enquiry. The website brings the service information and project examples into one place.

### What it includes

The site includes agency information, client projects, and enquiry forms. A purple palette carries across the pages.`,
    technologies: [],
    thumbnail: "/projects/digiacai.jpg",
  },
  {
    id: "neha-agarwal",
    website: "https://nehaagarwal.in/",
    title: "Speaker & Workshop Website",
    category: "Personal brand",
    description:
      "A place to explore speaking, workshops, and writing. An editorial site with a personal story, articles, and press appearances.",
    details: `## About the project

The website introduces a speaker through her background and professional work. Visitors can explore speaking engagements and workshops, then read her articles and press appearances for more context.

### What it includes

The editorial layout includes a biography, speaking engagements, workshop information, and writing. Press appearances sit alongside the rest of her work.`,
    technologies: [],
    thumbnail: "/projects/neha-agarwal.jpg",
  },
  {
    id: "prerna-ghosh",
    title: "Fashion & Accessories Store",
    category: "Ecommerce",
    description:
      "From seasonal collections to individual pieces. A Shopify store with editorial photography and category browsing.",
    details: `## About the project

Shoppers can explore clothing and accessories through seasonal edits or browse by category. Editorial photography introduces the collections before visitors take a closer look at individual pieces.

### What it includes

The Shopify storefront includes collection pages and product grids, supported by category navigation. Photography carries through the collection and product presentation.`,
    technologies: ["Shopify"],
    thumbnail: "/projects/prerna-ghosh.jpg",
  },
  {
    id: "priyanka-gill",
    website: "https://www.priyankagill.com/",
    title: "Personal Website & Writing",
    category: "Personal brand",
    description:
      "A place for a career story and published work. Biography, writing, media coverage, and podcasts in an editorial layout.",
    details: `## About the project

The website brings a biography and career milestones together with published work. Visitors can read the personal introduction, then explore articles, media coverage, and podcasts.

### What it includes

The editorial layout gives the biography and writing their own space alongside press and podcast content. Blush and yellow accents run through the pages.`,
    technologies: [],
    thumbnail: "/projects/priyanka-gill.jpg",
  },
  {
    id: "sauga-smiles",
    website: "https://saugasmilesdental.com/",
    title: "Dental Services Website",
    category: "Healthcare",
    description:
      "Help patients get to know the practice. Treatment information and photography, with appointment enquiry links.",
    details: `## About the project

Patients can read about treatments and learn about the practice before enquiring about an appointment. Practice photography gives them a closer look alongside the written information.

### What it includes

The site includes treatment descriptions, practice details, and appointment enquiry links. A purple palette runs through the pages.`,
    technologies: [],
    thumbnail: "/projects/sauga-smiles.jpg",
  },
  {
    id: "shop-minis",
    website: "https://www.shopminis.in/",
    title: "Swimwear & Resortwear Store",
    category: "Ecommerce",
    description:
      "Explore the collection, then find a piece. Beach campaign photography with collections and product browsing.",
    details: `## About the project

Beach campaign photography introduces the swimwear and resortwear collections. Shoppers can browse the range and open individual products for a closer look, with a playful visual style throughout.

### What it includes

The storefront includes collection browsing and product grids. Campaign imagery connects the brand presentation with the shopping pages.`,
    technologies: [],
    thumbnail: "/projects/shop-minis.jpg",
  },
  {
    id: "the-clothing-factory",
    website: "https://theclothingfactory.in/",
    title: "Fashion & Lifestyle Store",
    category: "Ecommerce",
    description:
      "Shop by collection, category, or occasion. Seasonal campaigns and editorial pages lead into product browsing.",
    details: `## About the project

The storefront gives shoppers several ways to browse a fashion and lifestyle range. They can start with a seasonal collection, choose a category, or look for something for a particular occasion.

### What it includes

The store includes product grids, campaign imagery, and editorial collection pages. Seasonal collections and occasion-based browsing sit alongside category navigation.`,
    technologies: [],
    thumbnail: "/projects/the-clothing-factory.jpg",
  },
  {
    id: "the-design-atelier",
    website: "https://thedesignatelier.com/",
    title: "Interior Design Portfolio",
    category: "Interiors",
    description:
      "Let prospective clients explore the studio’s work. A project gallery with studio details and contact information.",
    details: `## About the project

Architectural project photography leads this interior design portfolio. Visitors can look through the work, learn about the studio, and find its contact details.

### What it includes

The site includes a project image gallery and studio information. Understated typography and simple navigation keep the photography prominent while making the written details available.`,
    technologies: [],
    thumbnail: "/projects/the-design-atelier.jpg",
  },
  {
    id: "spline-animation",
    website: "https://spline-animation.vercel.app/",
    title: "Interactive 3D Landing Page",
    category: "Interactive",
    description:
      "Explore motion and depth in a landing page. An interactive Spline scene with a sphere and terrain animation.",
    details: `## About the project

This landing page exploration uses an interactive 3D scene as its main visual. An orange sphere moves within a terrain scene against a dark background, adding depth to the hero.

### What it includes

The work covers the sphere and terrain scene and the landing page around it. Spline provides the interactive 3D element.`,
    technologies: ["Spline"],
    thumbnail: "/projects/spline-animation.jpg",
  },
  {
    id: "url-shortener",
    website: "https://url-shortner-client-eight.vercel.app/",
    title: "Link Shortener Interface",
    category: "Interface concept",
    description:
      "A focused interface for entering a link. A URL form and link-management entry point in a compact layout.",
    details: `## About the project

This interface exploration keeps URL entry central, with an entry point for managing links. The compact layout gives the form most of the space.

### What it includes

The interface includes a URL entry form and access to link management. Violet-to-cyan accents draw attention to the form against a dark background.`,
    technologies: [],
    thumbnail: "/projects/url-shortener.jpg",
  },
]
