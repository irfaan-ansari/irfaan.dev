import type { ContactValues } from "@/features/contact/lib/contact-schema"

export function buildContactDraft(values: ContactValues) {
  return `Hi Irfaan,\n\n${values.message}\n\nFrom: ${values.name}\nReply to: ${values.email}`
}

export function buildContactMailto(recipient: string, values: ContactValues) {
  const address = recipient.replace(/^mailto:/, "")
  return `mailto:${address}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(buildContactDraft(values))}`
}

export const contactInputClass =
  "w-full rounded-lg border border-input bg-muted/60 px-3 py-2.5 text-sm text-foreground shadow-none outline-none transition-colors placeholder:text-muted-foreground hover:border-border-strong focus:border-ring focus:ring-2 focus:ring-ring/20 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 aria-invalid:border-destructive aria-invalid:focus:ring-destructive/15 aria-invalid:focus-visible:ring-destructive/15"
