import { PROFILE } from "@/content/profile"
import styles from "../styles.css?url"
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { NotFound } from "@/components/layout/not-found"
import { SiteLayout } from "@/components/layout/site-layout"
import { ThemeProvider } from "@/components/theme-provider"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Irfaan — Full Stack Developer" },
      {
        name: "description",
        content:
          "Websites, online stores, and custom platforms built by Irfaan.",
      },
      { property: "og:site_name", content: PROFILE.name },
      { property: "og:image", content: `${PROFILE.siteUrl}/og-image.png?v=5` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Irfaan, Full Stack Developer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${PROFILE.siteUrl}/og-image.png?v=5` },
      { name: "twitter:image:alt", content: "Irfaan, Full Stack Developer" },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico?v=7",
        sizes: "16x16 32x32 48x48 64x64 128x128 256x256",
      },
      { rel: "icon", href: "/favicon.svg?v=7", type: "image/svg+xml" },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png?v=7",
        sizes: "180x180",
      },
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
    <html
      lang="en"
      className="scroll-smooth motion-reduce:scroll-auto"
      suppressHydrationWarning
    >
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
