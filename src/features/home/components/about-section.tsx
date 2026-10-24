import { Link } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import { Icon } from "@/components/shared/icon"

const APPROACH = [
  {
    step: "Understand",
    title: "Define the scope",
    description: "Turn your goals into a clear plan for what to build.",
  },
  {
    step: "Build",
    title: "Build together",
    description: "See the work take shape and share feedback along the way.",
  },
  {
    step: "Improve",
    title: "Keep improving",
    description: "Launch, learn from real use, and refine what matters.",
  },
] as const

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="site-section scroll-mt-36 sm:scroll-mt-28"
    >
      <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        About
      </p>
      <div className="mt-5 space-y-8">
        <div>
          <h2
            id="about-heading"
            className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl"
          >
            Built with care.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            I’m Irfaan, a full stack developer. I help turn ideas into websites
            and web applications, taking care of both the experience people see
            and the systems they rely on. I like working closely with the people
            behind a project, asking questions early and making the decisions
            clear along the way.
          </p>
        </div>
        <ol aria-label="How I work" className="grid gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border">
          {APPROACH.map((item) => (
            <li
              key={item.step}
              className="flex flex-col items-start sm:px-5 sm:first:pl-0 sm:last:pr-0"
            >
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
        <Link
          to="/contact"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          Let’s talk about your idea <Icon name="arrow" className="size-3.5" />
        </Link>
      </div>
    </section>
  )
}
