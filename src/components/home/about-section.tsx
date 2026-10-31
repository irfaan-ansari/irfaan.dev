import { Link } from "@tanstack/react-router"
import { RESUME } from "@/content/resume"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/shared/icon"

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="site-section scroll-mt-36 sm:scroll-mt-28"
    >
      <p className="mb-5 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        About
      </p>
      <div className="grid gap-5 sm:grid-cols-[0.8fr_1.4fr] sm:gap-8">
        <div>
          <h2
            id="about-heading"
            className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl"
          >
            Hi, I’m {RESUME.name}.
          </h2>
          <p className="mt-3 max-w-48 text-sm leading-relaxed text-muted-foreground">
            A full stack developer
            <br />
            based in New Delhi.
          </p>
        </div>
        <div>
          <div className="space-y-3 text-sm leading-7 text-muted-foreground">
            <p>
              I build websites and web apps, including the tools businesses use
              behind the scenes. I like getting to know how people work before
              deciding what to build for them.
            </p>
            <p>
              When we work together, you’ll be talking directly with me from the
              first conversation through launch. I’ll share progress early and
              explain the choices along the way, so you have room to ask
              questions and shape the result.
            </p>
          </div>
          <Button
            nativeButton={false}
            variant="outline"
            size="sm"
            className="mt-5"
            render={
              <Link to="/contact">
                Let’s work together <Icon name="arrow" className="size-3.5" />
              </Link>
            }
          />
        </div>
      </div>
    </section>
  )
}
