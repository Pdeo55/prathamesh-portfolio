# PORTFOLIO_AUDIT.md

## 1. Tech Stack

| Layer | Details |
|-------|---------|
| React | v19.2.0 |
| Language | JavaScript (JSX) — no TypeScript |
| Build Tool | Vite (via `rolldown-vite@7.2.5` override) with `@vitejs/plugin-react` |
| Styling | Tailwind CSS v4.1.17 (using `@tailwindcss/vite` plugin, `@theme` directive in CSS) |
| Routing | react-router-dom v7.18.2 (BrowserRouter, Routes, Route, Link) |
| Animation | CSS-only (keyframe animations defined in index.css) — no Framer Motion or GSAP |
| Icons | lucide-react v0.556.0 |
| Email | @emailjs/browser v4.4.1 (installed but not currently used in any component) |
| Linting | ESLint v9 with react-hooks and react-refresh plugins |
| Path Alias | `@` → `./src` (configured in vite.config.js) |

## 2. Folder/File Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup, layout wrapper
├── index.css             # Tailwind imports, theme, animations, utilities
├── assets/               # react.svg (unused)
├── components/
│   ├── Button.jsx        # Primary CTA button
│   ├── AnimatedBorderButton.jsx  # SVG-animated outline button
│   └── CaseStudyLayout.jsx       # Data-driven case study template
├── layout/
│   ├── Navbar.jsx        # Fixed header with scroll-to-hash navigation
│   └── Footer.jsx        # Links, copyright, social
├── pages/
│   ├── Home.jsx          # Composes all home sections
│   └── caseStudies/
│       ├── Foxtale.jsx
│       ├── Tira.jsx
│       └── Greenworksbio.jsx
└── sections/
    ├── Hero.jsx
    ├── Projects.jsx
    ├── HowIThink.jsx
    ├── About.jsx
    ├── Experience.jsx
    ├── Education.jsx
    ├── Certifications.jsx
    ├── Testimonials.jsx   # NOT rendered on Home (imported nowhere)
    └── Contact.jsx

public/
├── hero-bg.jpg
├── profile-photo.jpg
├── vite.svg
└── projects/
    ├── project1.png
    ├── project2.png
    ├── project3.png
    └── project4.png
```

## 3. Current Page/Section Structure (render order)

**Home page (`/`):**
1. Hero
2. Projects (Case Studies)
3. HowIThink (PMM Framework)
4. About
5. Experience
6. Education
7. Certifications
8. Contact

**Case Study pages (`/case-study/*`):**
- `/case-study/foxtale`
- `/case-study/tira`
- `/case-study/greenworksbio`

**Testimonials section exists but is NOT rendered anywhere.**

## 4. Current Design Analysis

| Aspect | Details |
|--------|---------|
| Theme | Light/warm editorial — cream/beige background, warm brown text |
| Background | `#FDFBF7` (warm off-white) |
| Foreground | `#2B2522` (dark brown) |
| Primary | `#EF7A26` (orange) |
| Muted | `#7A6E63` (warm gray) |
| Accent colors | Coral `#EC845F`, Pink `#F7A8C0`, Peach `#F3A583`, Lavender `#B89AFF`, Sky `#D0BCFF` |
| Fonts | Body: Inter (sans-serif); Display/italic: Fraunces (serif) — loaded via Google Fonts |
| Layout | Container-based (`container mx-auto px-6`), responsive grid (lg:grid-cols-2), generous spacing (py-32) |
| Cards | Glass-morphism style (`glass` utility — semi-transparent bg, backdrop blur, subtle border) |
| Glow effects | `glow-border` (box-shadow with primary color), `glow-text`, `timeline-glow` |
| Animations | fade-in (translateY + blur), float, marquee, slow-drift (particles), animated-border (SVG stroke dash) |
| Responsive | Mobile hamburger menu, grid collapse to single column, responsive text sizing (text-5xl → md:text-6xl → lg:text-7xl) |

## 5. Current Functionality

| Feature | Implementation |
|---------|---------------|
| Navigation | Fixed navbar with scroll-to-hash on homepage; cross-page navigation via `navigate("/", { state: { scrollTo } })` |
| Mobile menu | Hamburger toggle with animated dropdown |
| Scroll detection | Navbar gets `glass-strong` background after 50px scroll |
| Routing | 4 routes total: `/`, `/case-study/foxtale`, `/case-study/tira`, `/case-study/greenworksbio` |
| Contact form | None — only LinkedIn link and mailto link |
| Resume download | Placeholder (`href="#"`) with TODO comment |
| EmailJS | Installed in package.json but not used in any component |
| Animations | CSS keyframes only — no scroll-triggered animations (all fire on mount via `animation-delay`) |
| Testimonials carousel | Implemented (useState-based prev/next) but component is not rendered |
| Case study pages | Data-driven via `CaseStudyLayout` — supports multiple section variants (cards, timeline, comparison, multi-comparison, detailed-cards, table) |
| External links | LinkedIn: `https://www.linkedin.com/in/shuddhita-jain/` |
| Social | Only LinkedIn (in Footer) |

## 6. Reusable Components/Utilities Worth Preserving

- **`Button.jsx`** — Clean, size-variant primary button with consistent styling
- **`AnimatedBorderButton.jsx`** — SVG animated border outline button (good for secondary CTAs)
- **`CaseStudyLayout.jsx`** — Versatile data-driven template supporting 6+ section variants (cards, timeline, comparison, multi-comparison, detailed-cards, table) — excellent architecture, easily repurposed for project case studies
- **Glass utility classes** — `.glass`, `.glass-strong`, `.glow-border`, `.glow-text`
- **Animation utilities** — fade-in, float, marquee, slow-drift, animated-border, timeline-glow
- **Navbar scroll-to-hash system** — Works across pages with state-based navigation
- **Tailwind theme system** — Well-structured CSS custom properties via `@theme`

## 7. Current Content Belonging to Previous Person

- **Name:** Shuddhita Jain
- **Initials/Logo:** "SJ."
- **Profession:** Product Marketing Manager (PMM)
- **Location:** Mumbai, India
- **Experience:** 4+ years
- **LinkedIn:** https://www.linkedin.com/in/shuddhita-jain/
- **Email:** shuddhitajain7@gmail.com
- **Title tag:** "Shuddhita Jain — Product Marketing Portfolio"
- **Profile photo:** `/public/profile-photo.jpg`
- **Hero background:** `/public/hero-bg.jpg`
- **Education:** MSc International Business (SKEMA, Paris), BBA (Prestige Institute)
- **Certifications:** L'Oréal Brandstorm, Inside LVMH, Google Ads, Brand Management (Uni of London)
- **Experience entries:** Greenworksbio, PICE, Stellantis, Star India Container Line, Infogravity Consultancy
- **Case studies:** Foxtale (skincare retention), Tira (beauty platform), Greenworksbio (sustainable packaging)
- **Project images:** `/public/projects/project1-4.png`
- **Testimonials data:** References a "Pedro" (leftover from a template — not the portfolio owner)

## 8. Sections/Content Tied to Previous Profession (Need Developer Rework)

| Section | What needs to change |
|---------|---------------------|
| Hero | Skills marquee (Product Marketing, GTM, etc.) → developer skills; tagline; subtitle; badge text |
| About | Entire section is PMM-focused (positioning, consumer research, GTM, messaging highlights) |
| HowIThink | "My PMM Thinking" framework — 8 steps are all marketing-specific → replace with engineering/development process |
| Projects | 3 case studies are marketing projects → replace with software projects; tags are marketing terms |
| Experience | All 5 roles are marketing/business roles → replace with engineering roles |
| Education | Business degrees → your education |
| Certifications | Marketing certifications → your certifications |
| Contact | "Product Marketing opportunities across Beauty, FMCG and Consumer Brands" copy |
| Case Study pages | All 3 are marketing case studies → replace with engineering project deep-dives |
| CaseStudyLayout | Section labels (Business Problem, Customer Research, Key Insight, Recommendation, Execution, Expected Business Impact) are marketing-flavored — section names may need developer-oriented renaming |
| Navbar links | "Case Studies" and "My PMM Thinking" labels |
| Footer | Copyright name, LinkedIn link |

## 9. Technical Issues Actually Present

1. **Testimonials section has leftover template data** — References "Pedro" (not Shuddhita), uses unsplash placeholder avatars. This is a template artifact that was never personalized.
2. **Testimonials component not rendered** — Imported nowhere in `Home.jsx`.
3. **Resume download is a broken placeholder** — `href="#"` with TODO comment in Hero and Contact.
4. **EmailJS installed but unused** — Dead dependency, no contact form exists.
5. **Missing React key prop** — In `Testimonials.jsx`, the dot indicators use `map` with no `key` prop on the `<button>` elements.
6. **No scroll-triggered animations** — All `animate-fade-in` classes fire on mount regardless of viewport position. Sections below the fold animate before they're visible.
7. **No 404/fallback route** — Unmatched URLs render empty `<main>`.
8. **Hero particles use `Math.random()` in render** — Creates new positions on every re-render (no memoization).
9. **No meta tags** — No description, OG tags, or SEO metadata beyond title.
10. **`vite` overridden to `rolldown-vite`** — Experimental/pre-release build tool; may have edge-case issues.

## 10. Questions/Information Needed From You

1. **Full name** — For branding, title, footer, meta tags
2. **Professional title/tagline** — e.g., "Full Stack Engineer", "Frontend Developer", etc.
3. **Location** — For the floating badge
4. **Years of experience** — For the stats badge
5. **Email address** — For contact section
6. **LinkedIn URL** — Or other social links (GitHub, Twitter/X, etc.)
7. **Resume PDF** — Do you have one to link, or should we skip the download button?
8. **Profile photo** — Will you provide a new one?
9. **Hero background image** — Keep, replace, or remove?
10. **Tech skills list** — For the marquee/skills section (languages, frameworks, tools)
11. **Projects** — How many? For each: title, description, tech stack, live URL, GitHub URL, screenshot
12. **Work experience** — Roles, companies, dates, descriptions
13. **Education** — Degrees, institutions, dates
14. **Certifications** — Any relevant ones (AWS, etc.)?
15. **"How I Think" section** — Do you want a development process/philosophy section? If so, what's your approach?
16. **Case studies** — Do you want detailed project deep-dives (like the current case study pages)? If so, for which projects?
17. **Testimonials** — Do you have any to include?
18. **Color theme preference** — Keep the warm orange/cream theme or change?
19. **Contact method** — Email form (use EmailJS), or just links?
20. **Any sections to add or remove?** — e.g., blog, open source, speaking, etc.
