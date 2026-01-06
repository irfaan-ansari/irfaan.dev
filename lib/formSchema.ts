import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { error: "Name too short" }),
  phone: z.string().regex(/^\+?[1-9][0-9]{7,14}$/, {
    error: "Invalid phone number",
  }),
  email: z.email({ error: "Invalid email address" }),
  message: z.string().min(2, { error: "Message too short" }),
});

export const contactFormOptions = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "input",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+1 123-xxx-xxxx",
    type: "input",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your-name@email.com",
    type: "input",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Type your message here...",
    type: "textarea",
  },
] as const;

export const bookCallSchema = z.object({
  name: z.string().min(2, { error: "Name too short" }),
  email: z.email({ error: "Invalid email address" }),
  role: z.string().min(2),
  subject: z.string().min(2),
});

export const bookCallOptions = [
  {
    name: "name",
    label: "Name",
    placeholder: "Your name",
    type: "input",
    options: null,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "your-name@email.com",
    type: "input",
    options: null,
  },
  {
    name: "role",
    label: "Select your role",
    placeholder: "Select your role",
    type: "select",
    options: [
      { label: "Founder", value: "Founder" },
      {
        label: "HR / Company Representative",
        value: "HR / Company Representative",
      },
      { label: "Other", value: "Other" },
    ],
  },
  {
    name: "subject",
    label: "Select a subject",
    placeholder: "Select a subject",
    type: "select",
    options: [
      { label: "Job Opportunity", value: "Job Opportunity" },
      { label: "Freelance Project", value: "Freelance Project" },
      { label: "Technical Consultation", value: "Technical Consultation" },
      { label: "Other", value: "Other" },
    ],
  },
] as const;

export type ContactFormType = z.infer<typeof contactSchema>;
export type BookCallFormType = z.infer<typeof bookCallSchema>;
