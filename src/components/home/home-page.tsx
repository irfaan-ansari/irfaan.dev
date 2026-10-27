import { ProfileDetails } from "@/components/shared/profile-details"
import { EmailLink } from "@/components/shared/email-link"
import { SERVICES, FAQS, RESUME, PROJECTS } from "@/content/resume"
import { Button, buttonVariants } from "@/components/ui/button"
import { ServiceIcon } from "@/components/home/service-icon"
import { HeadingUnderline } from "@/components/shared/heading-underline"
import { AboutSection } from "@/components/home/about-section"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { WebServices } from "@/components/home/web-services"
import { ProjectCard } from "@/components/work/project-card"
import { Link } from "@tanstack/react-router"
import { Icon } from "@/components/shared/icon"
import { cn } from "@/lib/utils"

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
      {children}
    </p>
  )
}
export function HomePage() {
  return (
    <>
      <section className={cn("site-section", "pt-0 pb-9 sm:pb-10")}>
        <div className="grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-6">
          <div>
            <Eyebrow>Hello, I’m</Eyebrow>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              {RESUME.name}
            </h1>
            <p className="relative mt-0.5 w-fit pb-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {RESUME.role}
              <HeadingUnderline />
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              I build websites, web apps, and business tools that turn everyday
              tasks into simpler experiences. From a new storefront to a custom
              platform, I take it from idea to launch.
            </p>
          </div>
          <ProfileDetails className="w-full max-w-64 md:max-w-none" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {RESUME.tech.map((t) => (
            <TechnologyBadge key={t} className="px-3 text-xs">
              {t}
            </TechnologyBadge>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5">
          <Button
            nativeButton={false}
            render={
              <Link to="/contact">
                Get in touch <Icon name="arrow" className="size-4" />
              </Link>
            }
          />
          <Button
            nativeButton={false}
            variant="outline"
            render={
              <a
                href="https://github.com/irfaan-ansari"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" /> GitHub
              </a>
            }
          />
          <EmailLink className="inline-flex max-w-full items-center gap-2 text-sm text-muted-foreground hover:text-foreground" />
        </div>
      </section>
      <section id="work" className="site-section">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div className="max-w-sm">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              Made to work.
            </h2>
          </div>
          <Button
            variant="link"
            className="px-0"
            render={
              <Link to="/work">
                Explore all work{" "}
                <Icon name="right" className="size-3.5 shrink-0" />
              </Link>
            }
          />
        </div>
        <div id="projects" className="grid gap-6 md:grid-cols-2">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <AboutSection />
      <section
        id="services"
        className={cn(
          "section-border",
          "scroll-mt-36 px-4 py-6 sm:scroll-mt-28 sm:px-8"
        )}
      >
        <WebServices />
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {SERVICES.map((item) => (
            <Card
              key={item.title}
              size="sm"
              className="group/service gap-0 rounded-lg border border-border p-4 shadow-none ring-0"
            >
              <CardContent className="items-start gap-0 p-0">
                <ServiceIcon name={item.icon} />
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section id="faqs" className="site-section">
        <div className="mb-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Have a few questions?
            </h2>
          </div>
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "shrink-0 px-3 text-sm"
            )}
          >
            Ask me directly <Icon name="arrow" className="size-3" />
          </Link>
        </div>
        <Accordion
          multiple={false}
          defaultValue={[FAQS[0].question]}
          className="gap-3 border-0"
        >
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-xl border border-border px-4 transition-colors duration-200 motion-reduce:transition-none sm:px-5 data-open:border-primary/25 data-open:bg-primary/5"
            >
              <AccordionTrigger className="gap-4 py-4 text-sm leading-relaxed font-semibold">
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
