import { createServerFn } from "@tanstack/react-start"
import { contactSchema } from "@/lib/contact-schema"

export const submitContact = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const failure = {
      success: false,
      message:
        "Your message couldn’t be sent. Please try again or email me directly.",
    } as const

    const url = process.env.GOOGLE_SHEET_CONTACT_URL
    if (!url) return failure

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) return failure

      return {
        success: true,
        message: "Message sent. I’ll get back to you by email.",
      } as const
    } catch {
      return failure
    }
  })
