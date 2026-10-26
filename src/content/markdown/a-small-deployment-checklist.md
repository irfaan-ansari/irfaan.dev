---
title: A small checklist before deploying
description: A practical starting point for checking the paths visitors actually use.
date: "2026-10-22"
tags:
  - Development
  - Deployment
---

A successful build is a useful check. A release also deserves a quick walkthrough of the experience it delivers.

## Check the main journey

Start at the landing page and follow the primary action. Navigate with the keyboard, open the mobile layout, and reload a nested URL directly.

- Can a visitor reach the intended destination?
- Are buttons and links clearly labeled?
- Does the interface show loading and error states where needed?
- Are there any placeholder URLs or unfinished pieces of copy?

## Run the project checks

For this portfolio, the basic checks are:

```sh
pnpm typecheck
pnpm build
```

Keep secrets out of the repository and confirm that the deployment environment has the configuration it needs.

## Check the deployed version

Open the actual deployed URL and repeat the main journey. A local check and a deployment check answer different questions: both are useful.

Keep a record of what changed and a way to return to the previous version if a release needs to be rolled back.
