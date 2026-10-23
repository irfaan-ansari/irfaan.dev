import { PROJECTS } from "@/features/projects/content/projects"

export const capabilities = [
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
export const faqs = [
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

export const heroRotationInterval = 5_000
export const heroImages = PROJECTS.map((project) => ({
  id: project.id,
  src: project.thumbnail,
}))
