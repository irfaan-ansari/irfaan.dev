import { ContactForm } from "@/features/contact/components/contact-form"
import { contactFaqs } from "@/features/contact/content/contact"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icon } from "@/components/shared/icon"
import { profile } from "@/content/profile"
import { cn } from "@/lib/utils"

export function ContactPage() {
  return (
    <>
      <section className={cn("site-section", "pt-0")}>
        <p className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Let’s talk
        </p>
        <h1 className="max-w-lg text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          What are you
          <br />
          building next?
        </h1>
        <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
          A new idea, an existing project, or a system that needs to work
          better. Tell me a little about it.
        </p>
      </section>
      <section className="site-section">
        <div className="grid items-start gap-8 sm:grid-cols-[1fr_1.7fr]">
          <aside className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">
                Start a conversation.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Share what you want to build, who it’s for, and where you need a
                hand. A rough idea is a good place to start.
              </p>
            </div>
            <a
              href={profile.email}
              className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
            >
              {profile.email.replace("mailto:", "")}
              <Icon name="arrow" className="size-4" />
            </a>
          </aside>
          <ContactForm />
        </div>
      </section>
      <section className="site-section" aria-labelledby="contact-faq-heading">
        <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Before you reach out
        </p>
        <h2
          id="contact-faq-heading"
          className="text-2xl font-bold tracking-tight sm:text-3xl"
        >
          A few things you might be wondering.
        </h2>
        <Accordion multiple={false} className="mt-7 gap-3">
          {contactFaqs.map((faq) => (
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
