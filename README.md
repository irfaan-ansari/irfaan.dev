# Irfaan’s portfolio

TanStack Start, React, TypeScript, Tailwind CSS v4, and shadcn/Base UI. Initialized with:

```sh
pnpm dlx shadcn@latest init --preset bIkg51d --template start --pointer
```

## Development

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

The development server runs at http://localhost:3000.

## Feature structure

```text
src/
  features/
    home/          # Homepage, services, FAQ, cursor artwork, workflow animation
    projects/      # Project data, listing, detail page, previews, cards
    writings/      # Markdown files, loading, listing, article renderer
    contact/       # Form, Zod schema, project options, email draft helpers
    navigation/    # Desktop/mobile navigation, active state, link styling
  components/
    layout/        # Shared header, footer, page frame, navigation
    shared/        # Logo, icons, accent underline, technology badge
    ui/            # shadcn/Base UI primitives
  content/         # Shared profile and navigation content
  hooks/           # Theme context, initialization, scrolling, and mobile hooks
  lib/             # Theme constants and shared utilities
  routes/          # TanStack route definitions, loaders, metadata
public/
  projects/        # Named project thumbnails
```

Features own their components, content, hooks, and helpers. Navigation includes the mobile popover and desktop menu; both use one link configuration. The hero includes the logo and an animated idea/build/ship workflow. Appearance controls and ThemeProvider live in src/components, with useTheme in src/hooks/use-theme.ts and theme constants in src/lib/theme.ts. Routes import page components from features. Shared profile data lives in `src/content/profile.ts`. Styling uses Tailwind utilities; `src/styles.css` contains font imports and the generated shadcn theme.

## Projects

Edit `src/features/projects/content/projects.ts`. `/projects` lists all projects with category filters; `/projects/<id>` shows an overview. The homepage features the first three entries.

Six supplied thumbnails are named and linked under `public/projects/`: Jimenez Produce, Goldy’s Nestt, BLAK, Folio, Fluur, and Carefinity. Folio, Fluur, and Carefinity are presented as website concepts based on the supplied images. External project URLs were not provided; thumbnails link to the corresponding portfolio detail page.

## Markdown writings

Add `.md` files directly in `src/features/writings/content/`. The filename becomes the article slug at `/writings/<slug>`. Featured articles appear first at `/writings`, followed by publication date.

```markdown
---
title: Your article title
description: A short summary for the listing and search metadata.
date: "2026-10-23"
tags:
  - Development
draft: false
featured: false
---

Your introduction.

## A section

Write ordinary Markdown here.
```

Title, description, and a quoted `YYYY-MM-DD` date are required. Tags and the boolean featured flag are optional. `draft: true` excludes an article from the listing and its route. Rebuild after editing or adding Markdown files.

Markdown supports headings, links, images, lists, blockquotes, code blocks, and GitHub-style tables. Raw HTML is not rendered.

## Contact

`/contact` uses TanStack Form with Zod validation. Field definitions and select options are in `src/features/contact/content/contact.ts`; the schema and email helpers are in that feature’s `lib/` folder.

The form validates name, email, project type, and message. Submission opens a prefilled email draft for the visitor to review and send. It does not send or store messages on a server. A copy-message fallback is provided. Connect an email endpoint in `src/features/contact/components/contact-form.tsx` if server delivery is needed later.

## UI components

Shared primitives in `src/components/ui/` use the shadcn Base UI preset. Cards, badges, FAQs, and appearance controls follow ReUI’s compositions:

- https://reui.io/components/card
- https://reui.io/components/badge
- https://reui.io/components/accordion/c-accordion-3
- https://reui.io/components/popover/c-popover-10

Confirm the contact email and social profile links in shared content before publication.
