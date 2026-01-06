import {
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siExpress,
  siPrisma,
  siPostgresql,
  siDocker,
  siGithub,
  siRedis,
  siFirebase,
  siDrizzle,
  siWordpress,
  siShopify,
  siVercel,
  siPostman,
  siTailwindcss,
  siHono,
  siHtml5,
  siCss,
  siJavascript,
  siPhp,
  siReact,
  siMysql,
  siShadcnui,
  siPython,
  siStrapi,
  siSanity,
  siGit,
  siReactquery,
  siBetterauth,
  siCursor,
} from "simple-icons";

export const RESUME = {
  name: "Irfaan Ansari",
  initials: "i",
  status: "Available for work",
  roles: ["Full-Stack Developer", "Coder", "Problem Solver"],
  about: `I build interactive web applications with a focus on code quality, structure, and long-term maintainability.
I enjoy working close to the details, refining logic, improving performance, and shaping interfaces through  well-written and clear code.`,
  technicalSkills: [
    {
      title: "< Languages />",
      items: [
        { name: "JavaScript", icon: siJavascript },
        { name: "TypeScript", icon: siTypescript },
        { name: "Python", icon: siPython },
        { name: "PHP", icon: siPhp },
      ],
    },
    {
      title: "< Frameworks / Libraries />",
      items: [
        { name: "Next.js", icon: siNextdotjs },
        { name: "Express.js", icon: siExpress },
        { name: "Node.js", icon: siNodedotjs },
        { name: "Hono", icon: siHono },
        { name: "shadcn/ui", icon: siShadcnui },
        { name: "Tailwind CSS", icon: siTailwindcss },
        { name: "TanStack Query", icon: siReactquery },
        { name: "Better Auth", icon: siBetterauth },
      ],
    },
    {
      title: "< Database / ORM />",
      items: [
        { name: "PostgreSQL", icon: siPostgresql },
        { name: "Redis", icon: siRedis },
        { name: "Prisma", icon: siPrisma },
        { name: "Drizzle", icon: siDrizzle },
        { name: "Firebase", icon: siFirebase },
      ],
    },
    {
      title: "< Developer Tools />",
      items: [
        { name: "GitHub", icon: siGithub },
        { name: "Git", icon: siGit },
        { name: "Docker", icon: siDocker },
        { name: "Cursor", icon: siCursor },
        { name: "Postman", icon: siPostman },
      ],
    },
    {
      title: "< CMS / Platforms />",
      items: [
        { name: "Strapi", icon: siStrapi },
        { name: "Sanity", icon: siSanity },
        { name: "Shopify", icon: siShopify },
        { name: "WordPress", icon: siWordpress },
      ],
    },
  ],
  projects: [
    {
      title: "Portfolio",
      href: "https://irfanansari.vercel.app/",
      active: true,
      description:
        "My personal website showcasing selected projects, skills, and professional experience in a clean, modern layout.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Fumadocs",
        "Firebase",
        "Google Sheet API",
        "Framer Motion",
      ],
      source: null,
      image: "/projects/portfolio.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
    {
      title: "Ethnic Fashion E-Commerce Store",
      href: "https://goldysnestt.com",
      active: true,
      description:
        "An elegant online store for an ethnic wear brand, designed to look great on mobile and make shopping smooth and simple.",
      technologies: ["HTML", "CSS", "Liquid", "Web Components", "Shopify CLI"],
      source: null,
      image: "/projects/goldysnestt.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
    {
      title: "Beachwear Fashion Store",
      href: "https://shopminis.in",
      active: true,
      description:
        "A fun, colorful beachwear store built for easy browsing, quick checkout, and a seamless mobile shopping experience.",
      technologies: ["HTML", "CSS", "Liquid", "Web Components", "Shopify CLI"],
      source: null,
      image: "/projects/shopminis.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "Order Management Application",
      href: "https://goldys.vercel.app",
      active: true,
      description:
        "A custom dashboard that brings online and offline orders into one place, helping teams track tasks and manage daily operations easily.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Shadcn UI",
        "Hono.js",
        "JWT",
        "Drizzle ORM",
        "PostgreSQL",
        "Vercel",
      ],
      source: null,
      image: "/projects/webapp.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "Western E-commerce store",
      href: "https://theclothingfactory.in",
      active: true,
      description:
        "A modern fashion store with a clean layout, fast checkout, and a shopping experience that works beautifully across devices.",
      technologies: ["HTML", "CSS", "Liquid", "Web Components", "Shopify CLI"],
      source: null,
      image: "/projects/theclothingfactory.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
    {
      title: "Consultant Portfolio Website",
      href: "https://nehaagarwal.in/",
      active: true,
      description:
        "A personal brand website featuring blogs, workshops, and contact funnels to help turn visitors into leads.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Php",
        "Elementor",
        "Wordpress",
      ],
      source: null,
      image: "/projects/nehaagarwal.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "SEO Agency Website",
      href: "https://digiacai.com/",
      active: true,
      description:
        "A fast-loading agency website designed to attract D2C brands and clearly communicate services and expertise.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Php",
        "Wordpress",
        "Custom Event Tracking",
      ],
      source: null,
      image: "/projects/digiacai.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "Dental Service Website",
      href: "https://saugasmilesdental.com",
      active: true,
      description:
        "A friendly and informative website for a local dental clinic, with clear services and easy appointment booking.",
      technologies: ["HTML", "CSS", "Javascript", "Php", "Wordpress"],
      source: null,
      image: "/projects/saugasmilesdental.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
    {
      title: "Link Shortner Web App",
      href: "https://url-shortner-client-eight.vercel.app/",
      active: true,
      description:
        "A simple and clean URL shortener that makes sharing links easy, with built-in tracking for performance.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Express.js",
        "Prisma",
        "PostgreSQL",
      ],
      source: null,
      image: "/projects/url-shortner.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "Interior Design Website",
      href: "https://thedesignatelier.com",
      active: true,
      description:
        "A visually rich website showcasing high-end interior projects with a strong focus on aesthetics and storytelling.",
      technologies: ["HTML", "CSS", "Javascript", "Php", "Wordpress"],
      source: null,
      image: "/projects/thedesignatelier.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "Indo-Western Fashion Store",
      href: "https://prernaghoshlabel.in",
      active: true,
      description:
        "A luxury fashion website highlighting sarees and dresses, seasonal collections, and special offers.",
      technologies: ["HTML", "CSS", "Liquid", "Web Components", "Shopify CLI"],
      source: null,
      image: "/projects/prernaghoshlabel.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
    {
      title: "Dental Clinic Website",
      href: "https://cbdentistry.ca",
      active: true,
      description:
        "A complete dental website focused on local visibility, clear service information, and online booking.",
      technologies: ["HTML", "CSS", "Javascript", "Php", "Wordpress"],
      source: null,
      image: "/projects/cbdentistry.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },
    {
      title: "3D Interactive Animation",
      href: "https://spline-animation.vercel.app",
      active: true,
      description:
        "An interactive 3D website experience that adds depth and motion to the web using modern animation tools.",
      technologies: ["Next.js", "TailwindCSS", "Spline"],
      source: null,
      image: "/projects/spline-animation.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2",
    },

    {
      title: "Entrepreneur Portfolio",
      href: "https://priyankagill.com",
      active: true,
      description:
        "A personal brand platform featuring blogs, podcasts, and media highlights, built to grow visibility and trust.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Flickity",
        "Custom Theme",
        "WP Query",
        "Custom POST",
        "ACF",
      ],
      source: null,
      image: "/projects/priyankagill.png",
      className:
        "aspect-[1/1.5] **:data-[slot=image]:inset-x-2 **:data-[slot=image]:top-1/2 sm:aspect-video sm:col-span-2 sm:**:data-[slot=info]:max-w-1/2 sm:**:data-[slot=info]:h-full sm:**:data-[slot=info]:pr-10 sm:**:data-[slot=info]:justify-end sm:**:data-[slot=image]:w-1/2 sm:**:data-[slot=image]:right-10 sm:**:data-[slot=image]:top-10 sm:**:data-[slot=image]:left-auto",
    },
  ],
  experiences: [
    {
      company: "Goldys Nestt",
      role: "Full-Stack Developer",
      location: "New Delhi",
      logoUrl: "/logo/gn-logo.png",
      start: "Dec 2022",
      end: undefined,
      technologies: [
        { name: "Next.js", icon: siNextdotjs },
        { name: "Typescript", icon: siTypescript },
        { name: "ShadcnUI", icon: siShadcnui },
        { name: "TailwindCSS", icon: siTailwindcss },
        { name: "PostgreSQL", icon: siPostgresql },
        { name: "Drizzle ORM", icon: siDrizzle },
        { name: "Hono", icon: siHono },
        { name: "Shopify", icon: siShopify },
        { name: "Github", icon: siGithub },
      ],
      description: `- Built multiple production web applications including 
<a href="https://goldysnestt.com" target="_blank" rel="nofollow noopener noreferrer">goldysnestt.com</a>,
<a href="https://theclothingfactory.in" target="_blank" rel="nofollow noopener noreferrer">theclothingfactory.in</a>,
<a href="https://shopminis.in" target="_blank" rel="nofollow noopener noreferrer">shopminis.in</a>, and 
<a href="https://goldys.vercel.app" target="_blank" rel="nofollow noopener noreferrer">app.goldysnestt.com</a>, 
handling development, feature implementation to production deployment.
- Implemented third-party checkout integrations such as (Fastrr and Shopflow), to improve conversion rate and payment efficiency.
- Developed a custom application to unify online and offline data into a single dashboard for centralized visibility.
- Implemented Shopify webhooks to enable real-time event processing and data synchronization.
- Integrated Shiprocket APIs to automate order fulfillment, shipment creation, and delivery status tracking.
- Collaborated cross-functionally with marketing and operations teams to deliver new features, optimize performance, and maintain production stability.
`,
    },
    {
      company: "DigiAcai",
      role: "Shopify & WordPress Developer",
      location: "Remote",
      logoUrl: "/logo/da-logo.png",
      start: "Sep 2021",
      end: "Nov 2022",
      technologies: [
        { name: "HTML", icon: siHtml5 },
        { name: "CSS", icon: siCss },
        { name: "Javascript", icon: siJavascript },
        { name: "Mysql", icon: siMysql },
        { name: "Php", icon: siPhp },
        { name: "Shopify", icon: siShopify },
        { name: "Wordpress", icon: siWordpress },
        { name: "Github", icon: siGithub },
      ],
      description: `- Built websites including 
<a href="https://digiacai.com" target="_blank" rel="nofollow noopener noreferrer">digiacai.com</a>, 
<a href="https://nehaagarwal.in" target="_blank" rel="nofollow noopener noreferrer">nehaagarwal.in</a>, and 
<a href="https://influacai.com" target="_blank" rel="nofollow noopener noreferrer">influacai.com</a>, 
managing development from start to finish.
- Handled client projects end to end, developed customized themes, and third-party integrations.
- Collaborated directly with clients to understand requirements, suggest improvements, and implement requested features.
- Worked with designers and project managers to deliver responsive, SEO-friendly, and conversion-focused websites.
- Handled site migrations, performance improvements, testing, and ongoing maintenance to ensure smooth operation.
`,
    },
    {
      company: "Priyanka Gill",
      role: "Wordpress Developer",
      location: "Remote",
      logoUrl: "/logo/pg-logo.png",
      start: "Oct 2020",
      end: "Aug 2021",
      technologies: [
        { name: "React.js", icon: siReact },
        { name: "HTML", icon: siHtml5 },
        { name: "CSS", icon: siCss },
        { name: "Javascript", icon: siJavascript },
        { name: "Mysql", icon: siMysql },
        { name: "Php", icon: siPhp },
        { name: "Wordpress", icon: siWordpress },
        { name: "Github", icon: siGithub },
      ],
      description: `- Built end-to-end websites including **priyankagill.com**, **jetacapital.io**, and **dreambuildscale.com**.
- Developed custom themes and implemented project-specific features.
- Collaborated with designers to deliver pixel-perfect, responsive websites.
- Optimized performance and ensured cross-browser compatibility and reliable functionality.`,
    },
    {
      company: "Matrix",
      role: "Wordpress Developer",
      location: "New Delhi",
      logoUrl: "/assets/matrix.png",
      start: "Jul 2018",
      end: "Mar 2020",
      technologies: [
        { name: "HTML", icon: siHtml5 },
        { name: "CSS", icon: siCss },
        { name: "Javascript", icon: siJavascript },
        { name: "Php", icon: siPhp },
        { name: "Wordpress", icon: siWordpress },
      ],
      description: `- Developed and modified plugins and third-party integrations.
- Customized WordPress themes using PHP, HTML, CSS, and JavaScript.
- Built responsive, SEO-friendly websites in collaboration with designers and clients.
- Managed migrations, performance optimization, and cross-browser testing.
- Provided ongoing maintenance and technical support.`,
    },
  ],
  education: [
    {
      school: "sikkim Manipal University",
      href: "https://smu.edu.in/",
      degree: "Bachelor of Computer Applications - BCA",
      description:
        "Computer/Information Technology Administration and Management",
      logoUrl: "/assets/smu.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "Learn Code Online",
      href: "https://learncodeonline.in/",
      degree:
        "Hands-on API Development Training – React.js, Express.js, and MongoDB",
      description:
        "Gained hands-on experience building RESTful APIs with Express.js, MongoDB, and React.js, focusing on user authentication, CRUD operations, and state management.",
      logoUrl: "/assets/lco.png",
      start: "2022",
      end: undefined,
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Building Database-Driven Web Applications with PHP & MySQL",
      description:
        "Mastered developing dynamic web applications using PHP and MySQL, with a focus on backend logic and database operations.",
      logoUrl: "/assets/udemy.png",
      start: "2021",
      end: undefined,
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/",
      degree: "Advanced React E-Commerce Development",
      description:
        "Mastered building high-performance e-commerce sites with React, including seamless integration with Shopify for enhanced functionality.",
      logoUrl: "/assets/udemy.png",
      start: "2021",
      end: undefined,
    },
    {
      school: "Oxford Software Institute",
      href: "https://www.oxfordinstitute.in/",
      degree: "C, C++, and Java Programming",
      description:
        "Developed a solid foundation in object-oriented programming (OOP) and algorithms using C, C++, and Java.",
      logoUrl: "/assets/oxford.png",
      start: "2017",
      end: undefined,
    },
  ],
} as const;
