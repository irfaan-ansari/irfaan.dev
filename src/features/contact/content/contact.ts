export const contactFields = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    placeholder: "Alex Morgan",
    autoComplete: "name",
    maxLength: 100,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "alex@example.com",
    autoComplete: "email",
    maxLength: 254,
  },
  {
    name: "subject",
    label: "What are you working on?",
    type: "select",
    placeholder: "Select a project type",
    autoComplete: "off",
    maxLength: 120,
  },
  {
    name: "message",
    label: "Tell me about your project",
    type: "textarea",
    placeholder:
      "What do you need help with? Share your goals, scope, and any timeline you have in mind.",
    autoComplete: "off",
    maxLength: 2000,
  },
] as const
export const contactDefaults = { name: "", email: "", subject: "", message: "" }

export const contactFaqs = [
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
      "The form prepares a draft in your email app for you to review and send. Once I receive it, we can discuss your goals, clarify the scope, and agree on next steps before any work begins.",
  },
  {
    question: "Can we work together beyond the initial project?",
    answer:
      "Yes. If you need maintenance, improvements, or new features over time, mention that in your message so we can discuss an arrangement that fits your project.",
  },
] as const

export const contactProjectTypes = [
  { value: "Website", label: "Website" },
  { value: "Web application", label: "Web application" },
  { value: "E-commerce / Shopify", label: "E-commerce / Shopify" },
  { value: "API / integration", label: "API / integration" },
  { value: "Existing project", label: "Existing project" },
  { value: "Something else", label: "Something else" },
]
