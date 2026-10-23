import styles from "../styles.css?url"
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { NotFound } from "@/components/layout/not-found"
import { SiteLayout } from "@/components/layout/site-layout"
import { ThemeProvider } from "@/components/theme-provider"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Irfaan builds websites, web applications, and connected systems. Explore selected projects and get in touch.",
      },
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Irfaan | Full Stack Developer",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "irfaan.dev" },
      { property: "og:title", content: "Irfaan | Full Stack Developer" },
      {
        property: "og:description",
        content: "Anything and everything web. Websites, web apps, and connected systems built by Irfaan.",
      },
      { property: "og:image", content: "https://irfaan.dev/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Irfaan, Full Stack Developer. Anything and everything web." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Irfaan | Full Stack Developer" },
      { name: "twitter:description", content: "Anything and everything web. Websites, web apps, and connected systems built by Irfaan." },
      { name: "twitter:image", content: "https://irfaan.dev/og-image.png" },
      { name: "twitter:image:alt", content: "Irfaan, Full Stack Developer. Anything and everything web." },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
      {
        rel: "stylesheet",
        href: styles,
      },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
