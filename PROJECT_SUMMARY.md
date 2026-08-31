# Book-IT — Project Summary

> **Tagline:** A full-stack event ticketing platform where organizers publish events and attendees book tickets (free or paid), get signed QR tickets, and get admitted at the door — with real overselling protection and reserved-seat holds.

---

## 1. Problem Statement

Booking tickets for events involves two sides that both have real problems:

- **Attendees** need a trustworthy way to discover events, pay securely, and hold a valid ticket they can actually get in with.
- **Organizers** need to publish events, sell without overselling, track sales/revenue, and verify tickets at the entrance without a separate hardware setup.

Book-IT solves both in one platform. It handles the full lifecycle: event creation → publishing → discovery → checkout (free or paid via Razorpay) → QR ticket issuance → door check-in → sales/attendee analytics. It supports both **general-admission** events (quantity-based) and **reserved-seating** events (pick-your-seat with time-boxed holds), which are two genuinely different concurrency problems under the hood.

**Who it's for:** event organizers who need a lightweight self-serve ticketing tool, and attendees who want a clean booking + digital-ticket experience.

---

## 2. Tech Stack

Everything below is confirmed from `package.json`, config files, and the actual code — not assumed.

### Backend (`Server/`)
- **Language:** TypeScript (strict), Node.js 20
- **Framework:** Express 4
- **ORM / DB:** Prisma 5 over **PostgreSQL** (Neon in prod, Postgres 15 via Docker locally)
- **Auth:** `jsonwebtoken` (JWT access tokens) + opaque DB-stored refresh tokens, `bcryptjs` (password hashing, cost 12)
- **Validation:** Zod (request schemas + environment validation)
- **Payments:** Razorpay SDK
- **Media:** Cloudinary + Multer (image uploads)
- **Tickets:** `qrcode` (QR generation), Node `crypto` (HMAC signing)
- **Security/infra middleware:** Helmet, CORS, `express-rate-limit`, `cookie-parser`, Morgan (logging), Winston (structured logs)
- **Testing:** Vitest + Supertest (unit + integration)

### Frontend (`Frontend/`)
- **Framework:** Next.js 15 (App Router), React 19
- **Language:** TypeScript
- **State:** Redux Toolkit + React-Redux (auth slice + async thunks)
- **HTTP:** Axios (with a custom auth/refresh interceptor)
- **Styling:** Tailwind CSS 4 + CSS custom properties, `clsx`, `tailwind-merge`
- **Icons/Dates:** `lucide-react`, `date-fns`

### Tooling / DevOps
- **Monorepo:** `Server/`, `Frontend/`, `e2e/`
- **CI:** GitHub Actions (lint, type-check, tests, build; Postgres service container for integration tests)
- **Containerization:** Multi-stage Docker build for the backend
- **E2E:** Playwright (`e2e/happy-path.spec.ts`)
- **Deploy targets:** Backend → Railway (Docker), Frontend → Vercel

---

## 3. Architecture Overview

Book-IT is a **two-deployable full-stack app**: a Next.js frontend and an Express REST API, talking over HTTPS, with PostgreSQL behind Prisma.

```
Browser (Next.js on Vercel)
   |  HTTPS  (NEXT_PUBLIC_API_BASE_URL, credentials for refresh cookie)
   v
Express REST API (Railway, Docker)
   |  Prisma
   v
PostgreSQL (Neon)

External services: Razorpay (payments), Cloudinary (images)
```

**Backend is feature-sliced.** Each domain (`auth`, `event`, `booking`, `seat`, `organizer`, `upload`, `user`) is a self-contained module with the same layers:

```
routes → controller → service → (Prisma) DB
```

- **Routes** wire up middleware (`authenticate`, `authorize`, `validate`).
- **Controllers** are thin — parse the request, call a service, shape the HTTP response.
- **Services** hold all the business logic and own the transactions.
- Cross-cutting concerns live in `middleware/` (auth, RBAC, Zod validation, rate limiting, central error handler) and `utils/` (JWT, QR signing, booking codes, logging, error classes).

**Auth model:** short-lived JWT **access token held in memory on the client**, plus a **rotating opaque refresh token in an httpOnly cookie**. On page load the frontend silently restores the session by calling `/auth/refresh` with the cookie, then fetching the user.

**Frontend structure:** App Router pages under `app/`, reusable views in `components/`, and API-call modules grouped by feature under `features/`. Only auth uses a global Redux slice; other features use per-page data fetching with local component state. A single Axios client centralizes token attachment and automatic refresh-on-401.

---

## 4. Key Features

- **Two event types:** general admission (quantity-based capacity) and reserved seating (individual seat selection with a visual seat map).
- **Overselling protection:** capacity is enforced with a guarded atomic DB update inside a transaction, so concurrent buyers can't push a sold-out event over capacity.
- **Reserved-seat holds:** seats are held for a user for 10 minutes during checkout via an atomic "claim only if free" update, preventing double-booking.
- **Payments:** Razorpay order creation + server-side HMAC signature verification. Free events skip payment and confirm instantly.
- **Signed QR tickets:** every confirmed booking gets a QR encoding an HMAC-signed payload, so forged/tampered tickets are rejected before any DB lookup.
- **Human-friendly booking codes** (`BKT-XXXXXXXX`) that organizers can type manually for door check-in if scanning fails.
- **Race-safe door check-in:** a ticket can be admitted at most once, even under two simultaneous scans.
- **Organizer dashboard:** revenue, tickets sold, capacity utilization, per-event stats, and paginated attendee lists.
- **Event lifecycle state machine:** DRAFT → PUBLISHED → COMPLETED/CANCELLED with enforced transitions.
- **Auth & RBAC:** register/login/refresh/logout, USER vs ORGANIZER vs ADMIN roles.
- **Cursor-based pagination** across all list endpoints.
- **Image uploads** for event banners via Cloudinary (gracefully disabled with a clear error if not configured).

---

## 5. My Role / Contribution

Built **solo, end to end** (git history shows a single author across all commits). That covers:

- Database schema design in Prisma (users, events, sections, seats, bookings, refresh tokens) with indexes and money stored as `Decimal`.
- The entire backend REST API: feature-sliced modules, JWT + rotating-refresh auth, RBAC, Zod validation, central error handling, rate limiting.
- The concurrency-critical parts: atomic overselling protection, seat-hold system, and race-safe ticket redemption.
- Payment integration with Razorpay including server-side signature verification.
- HMAC-signed QR ticket generation and validation.
- The full Next.js frontend: auth flow with silent refresh, event browsing, checkout, seat selection UI, organizer dashboard, and the door check-in screen.
- Testing (Vitest + Supertest integration tests, Playwright E2E), CI pipeline, and Dockerized deployment.

---

## 6. Resume Bullet Points

Metrics-driven where honest metrics exist; phrased truthfully where they don't (this is a personal project with seed data, not production traffic).

- **Built a full-stack event ticketing platform (Next.js 15, React 19, Express, Prisma, PostgreSQL, TypeScript)** supporting both general-admission and reserved-seating events, with the complete lifecycle from event creation to QR-based door check-in.
- **Engineered overselling and double-booking protection using atomic, guarded PostgreSQL transactions**, enforcing capacity and 10-minute seat holds under concurrent checkout so two buyers can never claim the same seat or exceed capacity.
- **Implemented secure auth and payments**: short-lived in-memory JWT access tokens with rotating httpOnly refresh cookies, bcrypt password hashing, Razorpay integration with server-side HMAC signature verification, and HMAC-SHA256-signed QR tickets that reject forged/tampered codes before any DB lookup.
- **Set up a CI/CD and quality pipeline** with GitHub Actions (lint, type-check, Vitest/Supertest integration tests against a Postgres service container, Next.js build) and a multi-stage Docker image, deployable to Railway + Vercel.

---

## 7. Portfolio Description (≈130 words)

Book-IT is a full-stack event ticketing platform I built solo to handle the entire journey from publishing an event to admitting attendees at the door. Organizers create general-admission or reserved-seating events, sell tickets (free or paid through Razorpay), and check people in by scanning HMAC-signed QR tickets or typing a short booking code. Attendees browse events, pick seats on a live seat map, pay, and receive a digital ticket.

The interesting engineering is in concurrency: I used atomic, guarded PostgreSQL transactions to make overselling and double-booking impossible, plus a 10-minute seat-hold system for reserved events. The stack is Next.js 15 / React 19 on the front and Express + Prisma + PostgreSQL on the back, in TypeScript throughout, with JWT auth, Zod validation, integration tests, GitHub Actions CI, and Docker-based deployment.

---

## 8. Live Links & Repo Structure

**Live links:** The README lists Vercel (frontend) and Railway (backend) as the intended deploy targets, but the URLs are still placeholders — treat this as deployment-ready rather than currently live. The backend exposes a health check at `/api/health`.

**Repo structure (high level):**

```
Book-IT/
├── Server/                      # Express + TypeScript backend
│   ├── src/
│   │   ├── app.ts               # Express app: middleware chain + route mounting
│   │   ├── server.ts            # HTTP server bootstrap
│   │   ├── config/              # env (Zod-validated), db, razorpay, cloudinary
│   │   ├── middleware/          # authenticate, authorize, validate, errorHandler, rateLimiter
│   │   ├── modules/             # feature slices: auth, event, booking, seat, organizer, upload, user
│   │   │   └── <feature>/       #   .routes / .controller / .service / .schema
│   │   └── utils/               # jwt, qrcode (HMAC), bookingCode, errors, logger, response
│   ├── prisma/                  # schema.prisma, migrations, seed.ts
│   └── tests/                   # Vitest unit + Supertest integration tests
├── Frontend/                    # Next.js 15 App Router frontend
│   ├── app/                     # routes (events, booking, checkout, organizer, etc.) + Redux store
│   ├── components/              # layout, providers, shared views, ui primitives
│   ├── features/                # per-feature API modules + auth Redux slice
│   └── lib/                     # apiClient (axios + refresh), razorpay loader, utils
├── e2e/                         # Playwright end-to-end happy-path test
├── .github/workflows/ci.yml     # CI: lint, type-check, test, build
└── docker-compose.yml           # local Postgres
```
