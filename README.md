# Irfaan · Full Stack Developer

A personal portfolio for the websites, web applications, and connected systems I build. Designed around clear typography, practical work, and a simple browsing experience.

**[Visit the live site →](https://irfaan.vercel.app/)** · [Work](https://irfaan.vercel.app/work) · [Writing](https://irfaan.vercel.app/writings) · [Contact](https://irfaan.vercel.app/contact)

## Preview

<a href="https://irfaan.vercel.app/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/images/homepage-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="docs/images/homepage-light.png">
    <img src="docs/images/homepage-light.png" alt="Irfaan’s portfolio homepage with the introduction, technology badges, and selected work" width="1280">
  </picture>
</a>

Screenshots of the deployed homepage. The preview follows your light or dark appearance.

## What’s inside

- **Selected work:** project cards linking to live websites or image previews.
- **About and capabilities:** an introduction, working approach, and services.
- **Writing:** Markdown posts with tags, read times, featured entries, and draft support.
- **Appearance controls:** light, dark, and system themes with ten accent choices and saved preferences.
- **Responsive navigation:** desktop links, mobile popovers, and active section highlighting.
- **Contact:** a validated project enquiry form with server-side Google Sheets submission.
- **Shared design system:** reusable buttons, cards, badges, FAQs, and a custom SVG mark.

## Stack

| Layer                   | Technology                                         |
| ----------------------- | -------------------------------------------------- |
| Application and routing | TanStack Start, TanStack Router, React, TypeScript |
| Styling                 | Tailwind CSS v4, CSS theme variables               |
| Components              | shadcn/ui, Base UI, Remix Icon                     |
| Forms                   | TanStack Form, Zod                                 |
| Posts                   | Markdown, react-markdown, remark-gfm               |
| Motion                  | Motion and CSS, with reduced-motion support        |
| Build and hosting       | Vite, Nitro, Vercel                                |

## Run locally

Use **Node.js 24** and **pnpm**.

```sh
git clone https://github.com/irfaan-ansari/irfaan.dev.git
cd irfaan.dev
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

To preview on a phone connected to the same Wi-Fi:

```sh
pnpm dev --host 0.0.0.0
```

Open the network URL printed by Vite on your phone.

### Useful commands

| Command                | Purpose                               |
| ---------------------- | ------------------------------------- |
| `pnpm dev`             | Start the development server          |
| `pnpm typecheck`       | Check TypeScript types                |
| `pnpm build`           | Create the production build           |
| `pnpm preview`         | Preview the production build          |
| `pnpm generate-routes` | Regenerate the TanStack route tree    |
| `pnpm test`            | Run post parsing and navigation tests |

## Make it yours

| Content                            | Location                                  |
| ---------------------------------- | ----------------------------------------- |
| Name, role, email, technologies    | `src/content/profile.ts`                  |
| Header navigation                  | `src/content/navigation.ts`               |
| Footer navigation and social links | `src/content/navigation.ts`               |
| About copy and working approach    | `src/components/home/about-section.tsx`   |
| Services and FAQs                  | `src/content/home.ts`                     |
| Work entries                       | `src/content/projects.ts`                 |
| Project thumbnails                 | `public/projects/`                        |
| Posts                              | `src/content/posts/`                      |
| Contact fields                     | `src/components/contact/contact-form.tsx` |
| Contact validation                 | `src/lib/contact-schema.ts`               |
| Theme colors and button shadows    | `src/styles.css`                          |
| Theme options and constants        | `src/lib/theme.ts`                        |
| Logo, favicon, and sharing image   | `public/`                                 |

### Content files

- `src/content/profile.ts`: personal information and technologies.
- `src/content/projects.ts`: all project entries and their retained detailed copy.
- `src/content/home.ts`: services, FAQs, and approach.
- `src/content/contact.ts`: contact FAQs.
- `src/content/navigation.ts`: navigation and footer links.
- `src/lib/contact-schema.ts`: contact validation and project-type options.

### Add work

Add an entry to `src/content/projects.ts` and its thumbnail to `public/projects/`. Keep each project’s title, description, category, Markdown details, links, and technologies in its `PROJECTS` entry. The first four entries appear on the homepage. Detailed copy is retained for editing; individual project pages are not currently rendered.

The listing lives at `/work`. Cards open the live website when one is provided, or the project thumbnail otherwise.

### Publish a post

Create a Markdown file in `src/content/posts/`. Its filename becomes the slug at `/writings/<slug>`.

```markdown
---
title: A useful post title
description: A short summary for readers and search engines.
date: "2026-10-24"
tags:
  - Development
featured: false
draft: false
---

Your introduction.

## A section

Your post content.
```

Title, description, and a quoted `YYYY-MM-DD` date are required. Tags, `featured`, and `draft` are optional. Featured posts sort first, followed by publication date. Drafts are excluded from the listing and post routes. Rebuild after adding or editing posts. Post bodies are loaded on the server; listing and adjacent-post links receive summaries only.

### Contact form

Copy `.env.example` to `.env`, set `GOOGLE_SHEET_CONTACT_URL`, and configure the same variable in your hosting environment.

The form validates the visitor’s name, email, project type, and message on the client and server. The server sends a JSON POST to the endpoint configured in `GOOGLE_SHEET_CONTACT_URL`, using the same environment variable as the original integration. Set it in your local `.env` and hosting environment to your deployed Google Apps Script contact endpoint. The URL stays on the server. Without it, the form shows an error and keeps the message so the visitor can retry or email directly.

## Project structure

```text
src/
  components/
    layout/        Shared header, footer, and page frame
    shared/        Logo, icons, highlights, technology badges
    ui/            Reusable UI primitives
    home/          Hero, About, capabilities, and FAQs
    work/          Work listing, cards, and previews
    writing/       Post listings and Markdown rendering
    contact/       Contact form and page
    navigation/    Desktop and mobile menus
  content/         Profile, projects, home, contact, navigation, and posts
  hooks/           Theme, scrolling, and viewport hooks
  lib/             Contact validation, Markdown parsing, and theme utilities
  server/          Contact submission and server-only post loading
  routes/          Route definitions, loaders, and page metadata
  styles.css       Theme tokens and global styles
public/            Static branding assets and project thumbnails
docs/images/       README screenshots
```

## SEO

`src/lib/seo.ts` holds titles and descriptions for the main pages and builds canonical and social metadata. The canonical origin is `https://irfaan.vercel.app`, configured in `src/content/profile.ts`.

Published posts use their frontmatter for titles, descriptions, and `BlogPosting` structured data. `/sitemap.xml` lists the main pages and published posts, and `public/robots.txt` points to it. Draft posts and removed project detail pages are excluded.

## Deploy on Vercel

The live site is hosted at **[irfaan.vercel.app](https://irfaan.vercel.app/)**.

Import the repository into Vercel, use the repository root, and select the **TanStack Start** framework preset with the default build and output settings. `vercel.json` declares the framework; Nitro generates the server function and routing for deployment.

To check the Vercel build output locally in PowerShell:

```powershell
$env:NITRO_PRESET = "vercel"
pnpm build
Remove-Item Env:NITRO_PRESET
```

The output is generated under `.vercel/output/` and is ignored by Git.
