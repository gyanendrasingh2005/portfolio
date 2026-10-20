# Gyanendra Singh — Software Engineer & Full-Stack Developer Portfolio

An editorial-grade, Swiss-inspired software engineering portfolio built with React 19, TypeScript, Vite, and Tailwind CSS.

Designed with a restrained, high-contrast palette: **Warm Ivory (`#F7F5F0`)**, **Near-Black (`#191919`)**, **Secondary Charcoal (`#66645F`)**, and **Burnt Orange (`#C65D36`)**. Zero AI gradients, zero blue/purple accents, and zero generic cards.

---

## Architecture & Completed Phases (15/15)

1. **Master Design System & Art Direction** — Global tokens, Swiss 12-column grid guidelines, Space Grotesk/Inter/JetBrains Mono typography, accessible focus indicators (`:focus-visible`), and custom scrollbar.
2. **Navigation & Personal Brand Header** — 3-zone layout with GS monogram, active section tracking via `IntersectionObserver`, live availability indicator, and accessible mobile navigation drawer.
3. **Editorial Hero Section** — Asymmetric headline composition, verified metadata strip, dual CTAs with smooth scrolling, social links, and 4-tier system topology diagram.
4. **Editorial Achievements Strip** — 4-column data strip featuring verified metrics: `1,300+` algorithmic problems solved, `Full-stack` systems, `K3` community leadership, and `2023–2027` undergraduate tenure.
5. **About Section** — The Engineer Behind the Code: authentic narrative, 3 focus areas (Frontend & UX, Backend & Data, Algorithms), and 3 core engineering principles.
6. **Selected Work (Flagship: CodeCore)** — Dark showcase canvas (`#20211F`) with live interactive compilation runner simulator, technical pillars, and secondary case study cards for **Career Connect** and **Thriviefy**.
7. **Project Case Studies & Technical Storytelling** — Zero-dependency hash routing (`#/case-study/:id`) featuring deep architecture diagrams, authentic C++/Docker code snippets, design trade-offs, and honest engineering limitations.
8. **Technical Skills & Engineering Toolkit** — 5 curated categories with practical application context, plus a 4-step request-to-sandbox architectural pipeline flow.
9. **Problem Solving & Competitive Programming** — Prominent `1,300+` verified achievement, curated platform integration (LeetCode, HackerRank, Codeforces), 3-step constraint-driven approach, with zero CodeChef references.
10. **Leadership & Community Building** — Featured K3 (KIET Koder's Korner) profile as President & Problem Setter, CodeHurdle contest highlight (400+ registrations, national reach), and peer mentorship initiatives.
11. **Education & Professional Development** — B.Tech in Information Technology at KIET Group of Institutions (2023–2027), verified 8.1 CGPA, configurable AWS Cloud certification, and 4-area "Learning by building" framework.
12. **Engineering Notes & Technical Journal** — Publication-style technical notes with featured Docker sandboxing memo, syntax-highlighted Alpine/cgroups configuration, and full `ArticleReaderModal`.
13. **Contact & Let's Connect** — Direct mailto inquiry CTA with prepopulated templates, channel specifications table, contact methods list, and typographic GS monogram.
14. **Custom Footer & Brand Signature** — 3-column dark charcoal (`#20211F`) footer with GS wordmark, directory navigation with smooth scrolling, social links, dynamic copyright year, and accessible "Back to top" button.
15. **Final Professional Audit & Production Readiness** — Open Graph & Twitter Card SEO metadata, SVG favicon, `.env` git protection, zero lint warnings, clean build artifacts, and responsive verification across mobile, tablet, and desktop viewports.

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
npm install
```

### Development Server
Starts the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the next available port).

### Production Build
Type-checks TypeScript definitions (`tsc -b`) and generates optimized production bundles via Vite:
```bash
npm run build
```
Production assets are output to the `dist/` directory.

### Preview Production Build
Locally tests the production build:
```bash
npm run preview
```

### Linting
Runs Oxlint for high-speed static code analysis:
```bash
npm run lint
```

---

## Configuration & Customization Checklist

Before deploying to a public domain, update the following configurations with your verified credentials:

1. **Resume File**: Place your official PDF resume at `public/resume.pdf` and set `isAvailable: true` in `src/constants/navigation.ts`.
2. **Email Address**: Set `emailAddress` in `src/constants/contact.ts` to your verified email address (e.g. `gyanendrasingh1027@gmail.com`) and toggle `isConfigured: true`.
3. **GitHub & LinkedIn URLs**: Update the profile URLs in `src/constants/brand.ts` and `src/constants/contact.ts`.
4. **Coding Profiles**: When public profiles are ready, configure `username` and `profileUrl` in `src/constants/problemSolving.ts`.
5. **AWS Certification**: Add the official AWS credential ID and verification URL in `src/constants/education.ts`.
6. **SEO Canonical URL**: If deploying to a custom domain (e.g., `https://gyanendrasingh.dev`), update canonical links and Open Graph URL tags in `index.html`.

---

## License

Personal Developer Portfolio of **Gyanendra Singh**. All rights reserved.
