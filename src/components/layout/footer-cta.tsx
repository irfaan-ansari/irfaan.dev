import { Link } from "@tanstack/react-router"
import { PROJECTS } from "@/content/projects"
import { Icon } from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import { ProjectPreview } from "@/components/work/project-preview"
import { HandDrawnHighlight } from "@/components/shared/hand-drawn-highlight"

export function FooterCta() {
  return (
    <section aria-labelledby="footer-cta-heading" className="site-section p-0">
      <div className="relative isolate flex min-h-64 items-center justify-center overflow-hidden py-12 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 -left-32 hidden w-64 -rotate-6 opacity-40 sm:block"
        >
          <ProjectPreview project={PROJECTS[0]} />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 -right-32 hidden w-64 rotate-6 opacity-40 sm:block"
        >
          <ProjectPreview project={PROJECTS[2]} />
        </div>
        <div className="relative">
          <h2
            id="footer-cta-heading"
            className="text-2xl leading-snug font-bold tracking-tight"
          >
            <span className="mb-1 block">Have a project in mind?</span>
            <HandDrawnHighlight>Let’s talk about it.</HandDrawnHighlight>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell me what you need to build. I can help you take it through
            launch.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button
              nativeButton={false}
              render={
                <Link to="/contact">
                  Start a project <Icon name="arrow" className="size-4" />
                </Link>
              }
            />
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link to="/work">View my work</Link>}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
