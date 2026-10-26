import { Availability } from "@/components/shared/availability"
import { FooterCta } from "@/components/layout/footer-cta"
import { EmailLink } from "@/components/shared/email-link"
import { Link } from "@tanstack/react-router"
import {
  RESUME,
  FOOTER_DESCRIPTION,
  FOOTER_EXPLORE_LINKS,
  FOOTER_SOCIAL_LINKS,
} from "@/content/resume"
import { Logo } from "@/components/shared/logo"
import { Icon } from "@/components/shared/icon"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer>
      <FooterCta />
      <div className="px-5 pt-8 pb-5 sm:px-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-[3fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-1">
            <Link
              to="/"
              aria-label="Irfaan home"
              className="inline-flex items-center gap-2 text-lg font-bold tracking-tight"
            >
              <Logo className="size-7" />
            </Link>
            <p className="mt-1 max-w-60 text-sm leading-relaxed text-muted-foreground">
              {FOOTER_DESCRIPTION}
            </p>
            <div className="mt-3 space-y-2.5 text-xs text-muted-foreground">
              <Availability className="text-xs text-foreground" />
              <p className="flex items-center gap-2">
                <Icon name="globe" className="size-3.5 shrink-0" />
                {RESUME.workReach}
              </p>
              <p className="flex items-center gap-2">
                <Icon name="location" className="size-3.5 shrink-0" />
                {RESUME.location}
              </p>
            </div>
            <EmailLink className="mt-3 flex w-fit max-w-full items-center gap-2 text-sm text-muted-foreground hover:text-foreground" />
            <a
              href={FOOTER_SOCIAL_LINKS[0].href}
              aria-label="GitHub"
              className="mt-4 inline-flex"
            >
              <Icon name="github" />
            </a>
          </div>
          <nav aria-label="Connect">
            <p className="mb-3 font-heading text-xs font-medium tracking-wider text-muted-foreground">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              {FOOTER_SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Explore">
            <p className="mb-3 font-heading text-xs font-medium tracking-wider text-muted-foreground">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FOOTER_EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    hash={"hash" in item ? item.hash : undefined}
                    className="hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-7 flex items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()}</p>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Back to top"
            title="Back to top"
            className="size-11 rounded-full"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }}
          >
            <Icon name="up" aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
