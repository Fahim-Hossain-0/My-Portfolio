# Fahim Hossain — Portfolio

A Next.js 14 (App Router) rebuild of the portfolio design, with dark/light theme
toggle, Framer Motion animations, per-project case study pages, and SEO
built in.

## Stack

- **Next.js 14** (App Router, static generation)
- **Tailwind CSS** for styling, with light/dark theme tokens as CSS variables
- **Framer Motion** for scroll-reveal and page animations
- **next-themes** for the dark/light toggle (no flash on load)
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.js            Root layout: metadata, theme provider, GA
  page.js               Home page (assembles all sections)
  projects/[slug]/page.js   Case study page for each project
  sitemap.js / robots.js    Auto-generated SEO files
components/              One file per section (Hero, About, TechStack, ...)
lib/
  data.js               ALL editable content: projects, skills, testimonials,
                         services, process steps, experience, tech stack
  siteConfig.js         Site name, description, contact info, social links
public/
  favicon.svg, og-image.png, site.webmanifest
```

## Editing content

Almost everything on the site — project details, testimonials, skills,
experience, services — lives in **`lib/data.js`**. Edit the arrays there and
the whole site updates. Site-wide info (email, phone, social links, SEO
description) lives in **`lib/siteConfig.js`**.

To add a new project, add an entry to the `projects` array in `lib/data.js`
with a unique `slug` — a case study page is generated automatically at
`/projects/your-slug`.

## Google Analytics

1. Create a GA4 property and copy its Measurement ID (starts with `G-`).
2. Copy `.env.local.example` to `.env.local`.
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`.
4. Restart the dev server (or redeploy). Page views are tracked automatically
   on every route, including project case study pages.

Without a Measurement ID set, the GA scripts simply don't load — nothing
breaks in local development.

## SEO

- Per-page `<title>`, meta description, Open Graph and Twitter card tags are
  set in `app/layout.js` (site-wide) and `app/projects/[slug]/page.js`
  (per-project, generated from your project data).
- `app/sitemap.js` and `app/robots.js` generate `/sitemap.xml` and
  `/robots.txt` automatically at build time — no extra config needed.
- JSON-LD structured data (`Person` on the home page, `CreativeWork` on each
  project) is included for richer search results.
- Update `siteConfig.url` in `lib/siteConfig.js` to your real production
  domain before deploying — this feeds the canonical URLs, sitemap and OG
  tags.
- Replace `public/og-image.png` with a real 1200×630 social preview image
  when you have one (a placeholder is included).

## Theme

Dark mode is the default. Colors are defined as CSS variables in
`app/globals.css` under `:root` (light) and `.dark` (dark) — edit those to
adjust the palette without touching component code. The toggle in the navbar
persists the user's choice in `localStorage` and respects
`prefers-reduced-motion` for accessibility.

## Deploying

The site is a standard Next.js app — deploy to Vercel, Netlify, or any Node
host:

```bash
npm run build
npm start
```

On Vercel: push to a Git repo, import the project, and add
`NEXT_PUBLIC_GA_MEASUREMENT_ID` as an environment variable in the project
settings.

## Fonts

The site uses the OS system font stack (`-apple-system`, `Segoe UI`, `Roboto`,
etc.) — this means zero extra network requests for type, which keeps the
site fast and avoids any layout shift while fonts load. If you'd rather use
a specific typeface like Inter:

1. `import { Inter } from "next/font/google";` in `app/layout.js`
2. `const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });`
3. Add `className={inter.variable}` to the `<html>` tag.

This requires an internet connection at build time (Next.js self-hosts the
font files during `next build`).

## Notes

- `Download resume` button in the hero links to `/resume.pdf` — add your
  actual resume file to the `public/` folder with that name (or update the
  link in `components/Hero.js`).
- Social links, email and phone number are in `lib/siteConfig.js`.
- Project "View live" / "View code" links are placeholders (`#`) in
  `lib/data.js` — fill in real URLs per project.
