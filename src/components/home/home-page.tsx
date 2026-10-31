import { ProfileDetails } from "@/components/shared/profile-details"
import { EmailLink } from "@/components/shared/email-link"
import { SERVICES, FAQS } from "@/content/home"
import { PROFILE } from "@/content/profile"
import { PROJECTS } from "@/content/projects"
import { buttonVariants } from "@/components/ui/button"
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
              {PROFILE.name}
            </h1>
            <p className="relative mt-0.5 w-fit pb-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              {PROFILE.role}
              <HeadingUnderline />
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
              I build websites, web apps, and tools that make everyday work
              easier. Whether you need an online store or a custom platform, I
              can help you plan it, build it, and get it live.
            </p>
          </div>
          <ProfileDetails className="w-full max-w-64 md:max-w-none" />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {PROFILE.tech.map((t) => (
            <TechnologyBadge key={t} className="px-3 text-xs">
              {t}
            </TechnologyBadge>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-5">
          <Link to="/contact" className={buttonVariants()}>
            Get in touch <Icon name="arrow" className="size-4" />
          </Link>

          <a
            href="https://github.com/irfaan-ansari"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            <Icon name="github" /> GitHub
          </a>

          <EmailLink />
        </div>
      </section>
      <section id="work" className="site-section">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div className="max-w-sm">
            <Eyebrow>My work</Eyebrow>
            <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              Projects I’ve built
            </h2>
          </div>
          <Link
            to="/work"
            className={buttonVariants({ variant: "link", className: "px-0" })}
          >
            See all projects <Icon name="right" className="size-3.5 shrink-0" />
          </Link>
        </div>
        <div
          id="projects"
          className="grid gap-6 md:grid-cols-2 md:[&>article:nth-child(4n+3)]:col-span-2 md:[&>article:nth-child(4n+4)]:col-span-2"
        >
          {PROJECTS.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              wide={index % 4 >= 2}
            />
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
              Before we start
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
