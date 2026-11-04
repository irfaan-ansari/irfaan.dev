import { defineConfig } from "vite"
import { devtools } from "@tanstack/devtools-vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { nitro } from "nitro/vite"
import { VitePWA } from "vite-plugin-pwa"
import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: null,
      // TanStack Start renders the document head rather than a Vite index.html.
      manifest: false,
      outDir: ".output/public",
      workbox: {
        globPatterns: [],
        additionalManifestEntries: [
          {
            url: "/offline.html",
            revision: createHash("sha256")
              .update(
                readFileSync(new URL("./public/offline.html", import.meta.url))
              )
              .digest("hex"),
          },
        ],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: ({ request, url, sameOrigin }) =>
              sameOrigin &&
              request.mode === "navigate" &&
              !/^\/api(?:\/|$)/.test(url.pathname),
            handler: "NetworkOnly",
            options: {
              precacheFallback: { fallbackURL: "/offline.html" },
            },
          },
        ],
        cleanupOutdatedCaches: true,
      },
    }),
  ],
})

export default config
