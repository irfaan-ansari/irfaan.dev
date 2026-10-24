import { Link } from "@tanstack/react-router"
import {
  footerDescription,
  footerExploreLinks,
  footerSocialLinks,
} from "@/content/navigation"
import { Logo } from "@/components/shared/logo"
import { Icon } from "@/components/shared/icon"
import { Button } from "@/components/ui/button"
import { RiArrowUpLine } from "@remixicon/react"
export function SiteFooter() {
  return (
    <footer className="px-5 pt-8 pb-5 sm:px-10">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-[3fr_1fr_1fr]">
        <div className="col-span-2 sm:col-span-1">
          <Link
            to="/" aria-label="Irfaan home"
            className="inline-flex items-center gap-2 text-lg font-bold tracking-tight"
          >
            <Logo className="size-7" />
          </Link>
          <p className="mt-1 max-w-52 text-sm leading-relaxed text-muted-foreground">
            {footerDescription}
          </p>
          <a
            href={footerSocialLinks[0].href}
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
              <Link
                to="/contact"
                className="hover:text-foreground"
              >
                Contact
              </Link>
            </li>
            {footerSocialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-foreground"
                >
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
            {footerExploreLinks.map((item) => (
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
          size="sm"
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
          Back to top <RiArrowUpLine aria-hidden="true" className="size-4" />
        </Button>
      </div>
    </footer>
  )
}
