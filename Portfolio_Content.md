# Portfolio Content — Prathamesh Deo
Cross-checked against `PORTFOLIO_AUDIT.md` requirements (Section 8 rework list + Section 10 questions).

---

## 1. Professional Identity (for Hero, Meta Tags, Footer)

| Field | Value | Source |
|---|---|---|
| Full Name | Prathamesh Deo | Resume |
| Initials/Logo | "PD." (replacing "SJ.") | Derived |
| Title/Tagline | Software Engineer II — Full Stack Developer | Resume (current role title) |
| Location | Hyderabad, India | Resume |
| Email | prathameshdeo55@gmail.com | Resume |
| Phone | +91-73855-85584 | Resume (optional — most dev portfolios omit phone; your call) |
| LinkedIn | Present in resume as a link label but **no actual URL/handle in the text** | ⚠️ Missing — see Gaps |
| GitHub | Present as a link label but **no actual URL/handle in the text** | ⚠️ Missing — see Gaps |
| Years of Experience | Not explicitly stated. Timeline suggests roughly **3+ years** combined (part-time Jul 2022–Apr 2023, internship Aug–Dec 2023, full-time Jan 2024–present), but this is inferred, not stated | ⚠️ Confirm before using as a stat badge |
| Profile Photo | Not provided | ⚠️ Missing |
| Hero Background | Not provided | ⚠️ Decision needed (keep generic/replace/remove) |
| Resume PDF | The uploaded PDF **can be used directly** as the downloadable resume, solving the current `href="#"` placeholder | ✅ Available |

**Suggested one-line tagline options** (based only on resume facts, for you to pick/edit — not invented credentials):
- "Full Stack Software Engineer building production systems with .NET, React, and cloud-native tooling."
- "Software Engineer II at Verisk Analytics — full-stack delivery, DevOps, and AI-assisted engineering workflows."

---

## 2. Technical Skills (for Skills Marquee/Section)

Directly from resume, grouped as listed:

**Languages:** C#, JavaScript, TypeScript, C++, Java

**Cloud & DevOps:** Git, Azure DevOps (Pipelines & Artifact Publishing), GitHub Actions, CI/CD, Docker, AWS (S3, Lambda, EC2, SNS)

**Backend:** .NET, Node.js, Express.js, REST APIs, PostgreSQL, MongoDB, MySQL

**Architecture & Systems:** System Design, API-first Design, RESTful Services, Microservices, Distributed Systems

**AI/LLMs:** Agentic AI Workflows, AI-Assisted Development, Prompt Engineering, LLMs, MCP

**Frontend:** React.js, Next.js, Redux Toolkit, GraphQL, MUI, Tailwind CSS, Jest, Nx Monorepo

This is a strong, well-rounded, full-stack + cloud + AI-tooling skill set — good marquee material and enough to justify a "full-stack" or "full-stack + platform engineering" positioning.

---

## 3. Work Experience (for Experience Section)

### Verisk Analytics — Software Engineer II
**Jan 2024 – Present | Hyderabad, India**
- Led end-to-end design and delivery of full-stack features spanning .NET REST APIs and React/TypeScript within an Agile team, from requirements through implementation and unit testing; authored 90+ PRs and drove code review standards.
- Led monorepo-wide engineering improvements: ESLint v9 + NX toolchain upgrade, remediation of Snyk-flagged security vulnerabilities, and containerized local dev environments with Docker; published build/release artifacts via Azure DevOps pipelines and debugged production incidents to improve CI/CD stability and build performance.
- Built and shipped production features for an enterprise property-insurance platform used by 80%+ of top US insurance carriers, across React, TypeScript, Redux Toolkit, GraphQL, and .NET backend APIs in a high-traffic shared Nx monorepo.
- Drove React-side development for a core module's Angular-to-React migration, owning component architecture and state management design.

### Kirloskar Pneumatic — Software Engineer Intern
**Aug 2023 – Dec 2023 | Pune, India**
- Designed an end-to-end BOM automation system replacing manual AutoCAD workflows; built an Azure Form Recognizer OCR pipeline to extract scanned engineering diagrams into structured relational SQL data.
- Developed a full-stack dashboard (React + Node.js + MySQL) for engineers to search, configure, and generate component bills with integrated email automation.
- Reduced bill generation time from ~75 minutes to under 10 minutes (87% reduction); deployed internally, actively used by 50+ employees.

### Cling Multi Solutions Pvt. Ltd. — Jr. Software Developer (Part-Time)
**Jul 2022 – Apr 2023 | Pune, India**
- Integrated AWS services (S3, Lambda, EC2, SNS) to automate deployment/delivery workflows; led code reviews across the engineering team.
- Built features across HR Management, Medical Management, and Brand-Influencer SaaS products (React, Node.js); assumed team-lead responsibilities within four months.

**Note:** All three roles carry strong, quantified impact (90+ PRs, 87% time reduction, 50+ active users, 80%+ market coverage). These numbers are portfolio gold — keep them prominent.

---

## 4. Projects (for Projects/Case Studies Section)

⚠️ **Gap:** The audit (`.md` Section 10, Q11) asks for project title, description, tech stack, **live URL, GitHub URL, and screenshot** for each project. Your resume only has 2 projects, and the live-demo/GitHub links are present as label text ("Live Demo") but the actual URLs weren't included in the resume text extraction. You'll need to supply the real links and screenshots.

### Digi Diary
- **Tech stack:** React 18, TypeScript, Express.js, PostgreSQL, Prisma
- **Description:** Production platform with RESTful, API-first architecture, JWT authentication, and RBAC, on a modular Express.js/Prisma backend over PostgreSQL.
- **Notable detail:** Modernized from a legacy college project into a production-ready full-stack app with end-to-end type safety and server-state caching; deployed across Vercel, Render, and Neon.
- **Live demo:** ⚠️ link label present, actual URL missing — supply it
- **GitHub:** ⚠️ not provided — supply it
- **Screenshot:** ⚠️ not provided

### Developer Productivity Tool (Personal Engineering Project)
- **Tech stack:** Node.js, GitHub Copilot API, Prompt Engineering, Agentic Workflows
- **Description:** A developer productivity tool using the GitHub Copilot API, modular prompt "skill" files, context engineering, and agentic AI workflows to automate code analysis and documentation retrieval.
- **Live demo / GitHub:** ⚠️ not provided
- **Screenshot:** ⚠️ not provided

**Assessment vs. audit requirement:** The current portfolio structure has **3** case study pages (`Foxtale`, `Tira`, `Greenworksbio`) using a detailed `CaseStudyLayout` template (Business Problem, Research, Insight, Recommendation, Execution, Impact). You currently have **2** projects. Options:
1. Build out both as full case studies and drop the third case-study slot, or
2. Add a third project (if one exists but wasn't listed on the resume) to preserve the 3-case-study layout, or
3. Convert `CaseStudyLayout`'s marketing-flavored section labels into engineering-flavored ones (e.g., "Problem", "System Design", "Key Technical Decisions", "Implementation", "Outcome/Impact") and use it for only 2 in-depth entries.

---

## 5. Achievements (for About/Experience or a dedicated Achievements block)

- **Early promotion:** SWE-I → SWE-II, six months ahead of the standard cycle at Verisk Analytics (Mar 2026).
- **Mentorship:** Mentored a junior engineer for six months, resulting in a successful full-time conversion.
- **Recognition:** Received the "Way to Go" award at Verisk for sustained delivery, cross-team collaboration, and engineering ownership.

These work well as a compact "Achievements" strip or as callouts inside the Experience section rather than a separate heavy section.

---

## 6. Education (for Education Section)

**B.Tech in Information Technology — CGPA: 9.13**
Vishwakarma Institute of Information Technology, Pune, India
Jan 2021 – May 2024

Single entry — straightforward swap for the existing MSc/BBA content.

---

## 7. Certifications

⚠️ **Gap:** No certifications are listed on your resume, but the audit's Certifications section (and Q14) expects some (the previous portfolio had 4). Options: omit the section entirely, or list any certs you have that weren't on the resume (AWS, Azure, etc.) if they exist.

---

## 8. "How I Think" / Engineering Philosophy Section

⚠️ **Gap:** The audit flags this section as needing a full replacement (currently an 8-step PMM framework) and explicitly asks (Q15) whether you want this section and what your process is. **Nothing in your resume describes a working philosophy or process** — this can't be inferred from experience bullets alone without guessing. You'll need to provide this, or we can draft one collaboratively based on patterns visible in your work (e.g., migration ownership, CI/CD discipline, AI-assisted workflows) — but I won't invent it outright.

---

## 9. Testimonials

⚠️ **Gap:** No testimonials exist in your resume or the current site (the "Pedro" testimonial is leftover template data per the audit). Recommend either omitting this section or sourcing 1–3 quotes from managers/colleagues if available.

---

## 10. Strengths Summary (synthesized from resume facts only)

- **Full-stack range:** Comfortable across .NET, Node.js/Express, React/Next.js, and multiple databases (PostgreSQL, MongoDB, MySQL) — genuinely full-stack, not front-end-leaning.
- **Production ownership at scale:** Ships features on a platform used by 80%+ of top US insurance carriers, in a shared, high-traffic Nx monorepo.
- **DevOps/platform maturity:** Owns CI/CD pipelines, containerization, dependency/security remediation, and toolchain upgrades — not just feature work.
- **Migration & architecture experience:** Led React-side work on an Angular-to-React migration, including component architecture and state design.
- **Modern AI tooling fluency:** Practical experience with agentic workflows, Copilot API, prompt/context engineering, MCP — relevant and current, worth emphasizing given how new this skill category is.
- **Quantified, credible impact:** Every major bullet has a number attached (90+ PRs, 87% reduction, 50+ users, early promotion timeline) — rare and valuable for a portfolio; keep these front and center rather than diluting them into vague claims.

---

## 11. Master List of Gaps (cross-referenced to `PORTFOLIO_AUDIT.md` Section 10)

| # | Audit Question | Status |
|---|---|---|
| 1 | Full name | ✅ Have it |
| 2 | Title/tagline | ⚠️ Draft options given above — confirm final wording |
| 3 | Location | ✅ Have it |
| 4 | Years of experience | ⚠️ Not explicitly stated; inferred ~3+ yrs — confirm |
| 5 | Email | ✅ Have it |
| 6 | LinkedIn/GitHub URLs | ⚠️ Labels present in resume, actual URLs missing |
| 7 | Resume PDF | ✅ Uploaded PDF can be linked directly |
| 8 | Profile photo | ⚠️ Missing |
| 9 | Hero background image | ⚠️ Decision needed |
| 10 | Tech skills list | ✅ Have it (Section 2 above) |
| 11 | Projects (with live/GitHub URLs, screenshots) | ⚠️ Only 2 projects; URLs and screenshots missing |
| 12 | Work experience | ✅ Have it (Section 3 above) |
| 13 | Education | ✅ Have it (Section 6 above) |
| 14 | Certifications | ⚠️ None on resume |
| 15 | "How I Think" content | ⚠️ Not derivable from resume — needs your input |
| 16 | Case studies (which projects) | ⚠️ Only 2 candidates vs. 3 slots in current layout |
| 17 | Testimonials | ⚠️ None available |
| 18 | Color theme preference | ⚠️ Your call (design decision, not resume data) |
| 19 | Contact method (form vs. links) | ⚠️ Your call |
| 20 | Sections to add/remove | ⚠️ Your call |

---

## 12. Recommendations

1. **Lead with impact numbers, not just tech lists** — "90+ PRs," "87% reduction," "80%+ of top US insurance carriers" are stronger hero/about copy than a generic skills marquee alone.
2. **Position the AI/LLM skill cluster deliberately** — Agentic workflows, MCP, and Copilot-API tooling are differentiators; don't bury them at the bottom of the skills list.
3. **Resolve the 2-vs-3 case study mismatch before development starts** — either scope a third project or adapt `CaseStudyLayout` to gracefully support 2 detailed entries.
4. **Get real links before build** — GitHub, LinkedIn, and both project demo/repo URLs are structurally required (navbar, footer, project cards) and currently unresolved.
5. **Treat "How I Think" and testimonials as optional/deferred** rather than blocking sections — nothing in your resume supports them yet, and it's better to ship without them than to fabricate content.
