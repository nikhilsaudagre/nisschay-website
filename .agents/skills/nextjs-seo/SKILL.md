---
name: nextjs-seo
description: Next.js 16 high-performance technical SEO guidelines, Schema.org JSON-LD structured data generation, OpenGraph/Twitter card audits, crawler accessibility (robots.txt & sitemap), and Generative Engine Optimization (GEO).
---

# Next.js 16 High-Performance SEO Skill

This skill defines the technical standards and audit procedures for implementing enterprise-grade SEO on Next.js 16 App Router websites.

---

## 1. Core Technical Foundations

### A. Dynamic Metadata API
Always leverage Next.js native `Metadata` type from `next`:
- Set `metadataBase` in root `app/layout.tsx` to resolve relative URLs.
- Provide `title.default` and `title.template` (`%s | Brand`).
- Every public page (`page.tsx`) must define `title`, `description`, and `alternates.canonical`.
- Include full `openGraph` and `twitter` objects with absolute or root-relative preview images (recommended aspect ratio: 1200×630).

### B. Robots.txt (`app/robots.ts`)
- Never block `/_next/` or `/static/`. Search crawlers (especially Googlebot) must fetch JavaScript and CSS assets to evaluate responsive layout, mobile-friendliness, and Core Web Vitals.
- Disallow backend/internal paths only (e.g. `/api/`).
- Always declare the absolute URL to `sitemap.xml`.

### C. XML Sitemap (`app/sitemap.ts`)
- Include all public indexable routes.
- Set appropriate `lastModified`, `changeFrequency`, and `priority` values.

---

## 2. Schema.org JSON-LD Structured Data

Render rich schemas via `<script type="application/ld+json">` in `app/layout.tsx` or specific pages:
- **Organization / LocalBusiness**:
  - `name`, `url`, `logo`, `description`, `address`, `geo`, `sameAs`, `contactPoint`, `priceRange`.
- **WebSite**:
  - Root identity and site metadata.
- **Service**:
  - Explicit listings of custom software, SaaS, AI automation, and web development.

---

## 3. Generative Engine Optimization (GEO & AEO)

To maximize citations in Google Gemini, ChatGPT Search, Perplexity, and AI Overviews:
- Maintain clear semantic HTML hierarchies: exact single `<h1>`, followed by logical `<h2>` and `<h3>` tags.
- Provide descriptive `alt` text on every `next/image` component.
- Collocate clear question-and-answer format summaries for core services.

---

## 4. Verification Checklist
Before shipping:
1. Run `npx tsc --noEmit` to verify type safety.
2. Run `npm run build` to confirm all metadata and static routes generate without errors.
3. Validate JSON-LD syntax with the Google Rich Results test format.
