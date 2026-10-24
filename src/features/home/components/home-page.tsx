import { Button, buttonVariants } from "@/components/ui/button"
import { HandDrawnHighlight } from "@/components/shared/hand-drawn-highlight"
import { ServiceIcon } from "@/features/home/components/service-icon"
import { HeadingUnderline } from "@/components/shared/heading-underline"
import { BuildWorkflow } from "@/features/home/components/build-workflow"
import { AboutSection } from "@/features/home/components/about-section"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { TechnologyBadge } from "@/components/shared/technology-badge"
import { Globe } from "@/features/home/components/globe"
import { ProjectCard } from "@/features/projects/components/project-card"
import { Link } from "@tanstack/react-router"
import { capabilities, faqs } from "@/features/home/content/home"
import { profile } from "@/content/profile"
import { PROJECTS } from "@/features/projects/content/projects"
import { Icon } from "@/components/shared/icon"
import { ProjectPreview } from "@/features/projects/components/project-preview"
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
        <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,1fr)_9rem] sm:gap-6">
          <div>
            <Eyebrow>Hello, I’m</Eyebrow>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              {profile.name}
            </h1>
            <p className="relative mt-0.5 w-fit pb-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {profile.role}
              <HeadingUnderline />
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              I like making the complicated feel simple. I build the interface
              you use, the logic behind it, and the connections that make it all
              work.
            </p>
          </div>
          <div
            aria-hidden="true"
            className="relative hidden flex-col items-center justify-center py-5 sm:flex"
          >
            <BuildWorkflow />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.technologies.map((t) => (
            <TechnologyBadge key={t} className="px-3 text-xs">
              {t}
            </TechnologyBadge>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5">
          <Button
            render={
              <Link to="/contact">
                Get in touch <Icon name="arrow" className="size-4" />
              </Link>
            }
          />
          <Button
            variant="outline"
            render={
              <a
                href="https://github.com/irfanansari"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" /> GitHub
              </a>
            }
          />
        </div>
      </section>
      <section id="work" className={cn("site-section")}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div className="max-w-sm">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              Made to work.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold"
          >
            Explore all work <Icon name="right" className="size-3.5 shrink-0" />
          </Link>
        </div>
        <div id="projects" className="space-y-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <AboutSection />
      <section
        id="capabilities"
        className={cn(
          "section-border",
          "scroll-mt-36 px-4 py-6 sm:scroll-mt-28 sm:px-8"
        )}
      >
        <div className="globe-surface relative isolate overflow-hidden rounded-xl px-6 py-8">
          <Globe />
          <div className="relative z-10 max-w-80">
            <Eyebrow>What I do</Eyebrow>
            <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              Anything and
              <br />
              everything web.
            </h2>
            <p className="mt-3 max-w-72 text-sm leading-relaxed text-muted-foreground">
              From websites and admin platforms to integrations, deployment, and
              ongoing improvements.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                ["code", "Web apps & APIs"],
                ["phone", "Commerce & integrations"],
                ["database", "Deployment & maintenance"],
              ].map(([icon, label]) => (
                <li key={label} className="flex items-center gap-3 text-sm">
                  <span
                    className={cn(
                      "text-primary-text",
                      "rounded-md bg-primary/10 p-2"
                    )}
                  >
                    <Icon name={icon} className="size-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {capabilities.map((item) => (
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
          defaultValue={[faqs[0].question]}
          className="gap-3 border-0"
        >
          {faqs.map((faq) => (
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
      <section
        id="contact"
        className={cn(
          "site-section",
          "relative isolate flex min-h-64 items-center justify-center overflow-hidden py-12 text-center"
        )}
      >
        <div className="pointer-events-none absolute bottom-6 -left-32 hidden w-64 -rotate-6 opacity-40 sm:block">
          <ProjectPreview project={PROJECTS[0]} />
        </div>
        <div className="pointer-events-none absolute top-8 -right-32 hidden w-64 rotate-6 opacity-40 sm:block">
          <ProjectPreview project={PROJECTS[2]} />
        </div>
        <div className="relative">
          <h2 className="text-2xl leading-snug font-bold tracking-tight">
            <span className="mb-1 block">Let’s get your next project</span>

            <HandDrawnHighlight>built and deployed.</HandDrawnHighlight>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            From the first conversation to a working product.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link to="/contact" className={buttonVariants()}>
              Start a project <Icon name="arrow" className="size-4" />
            </Link>
            <a href="#work" className={buttonVariants({ variant: "outline" })}>
              Explore my work
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
