import { CONTACT_PROJECT_TYPES } from "@/content/resume"
import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(100, "Keep your name under 100 characters.")
    .refine((value) => !/[\r\n]/.test(value), "Enter your name on one line."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(254, "This email address is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  subject: z
    .string()
    .refine(
      (value) => CONTACT_PROJECT_TYPES.some((option) => option.value === value),
      "Please select a project type."
    ),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail.")
    .max(2000, "Keep your message under 2,000 characters."),
})
