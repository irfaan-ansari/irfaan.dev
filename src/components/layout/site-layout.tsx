import type { ReactNode } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { FooterCta } from "./footer-cta"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div
      id="top"
      className="relative min-h-screen bg-background font-sans text-foreground selection:bg-foreground selection:text-background dark:selection:bg-foreground dark:selection:text-background [&_h1]:font-heading [&_h2]:font-heading [&_h3]:font-heading"
    >
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col px-4 pt-10 sm:px-8 sm:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-4 left-4 border-x-2 border-dashed border-border-strong sm:right-8 sm:left-8"
        />
        <SiteHeader />
        <main id="main-content" className="relative mx-0.5 flex-1">
          {children}
        </main>
        <div className="relative mx-0.5">
          <FooterCta />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
