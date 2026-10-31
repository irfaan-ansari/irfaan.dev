import { EmailLink } from "@/components/shared/email-link"
import { CONTACT_FAQS } from "@/content/resume"
import { ContactForm } from "@/components/contact/contact-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function ContactPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0 pb-10 sm:pb-12")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Contact
        </p>
        <h1 className="max-w-lg text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          Let’s talk about
          <br />
          your project.
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          Tell me what you want to build or what needs improving in your
          existing website or app. We can work through the details together.
        </p>
      </section>
      <section className="site-section py-10 sm:py-12">
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-10">
          <aside className="min-w-0 space-y-6">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Email me</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Send me a short description of your project and where you need
                help. Include a timeline or budget if you have one.
              </p>
            </div>
            <EmailLink className="inline-flex max-w-full items-center gap-2 text-sm font-medium" />
          </aside>
          <ContactForm />
        </div>
      </section>
      <section
        className="site-section py-10 sm:py-12"
        aria-labelledby="contact-faq-heading"
      >
        <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Before you reach out
        </p>
        <h2
          id="contact-faq-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          Common questions
        </h2>
        <Accordion multiple={false} className="mt-7 gap-3">
          {CONTACT_FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border border-border px-4 transition-colors duration-200 motion-reduce:transition-none sm:px-5 data-open:border-primary/25 data-open:bg-primary/5"
            >
              <AccordionTrigger className="py-4 text-sm leading-relaxed font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                keepMounted
                className="pr-11 pb-5 text-sm leading-7 text-muted-foreground"
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  )
}
