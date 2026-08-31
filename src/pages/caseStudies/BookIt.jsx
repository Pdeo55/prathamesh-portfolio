import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const bookItData = {
  hero: {
    category: "Full Stack Application",
    title:
      "Book-IT — A full-stack event ticketing platform with race-safe booking, payments, and signed QR tickets.",
    subtitle:
      "From publishing an event to admitting attendees at the door: organizers sell tickets (free or paid), attendees book and receive digital tickets, and the whole flow is protected against overselling and double-booking.",
  },
  businessProblem: {
    title: "The problem.",
    points: [
      "Attendees need a trustworthy way to discover events, pay securely, and hold a valid ticket they can actually get in with.",
      "Organizers need to publish events and sell without overselling, then verify tickets at the door without extra hardware.",
      "General-admission and reserved-seating events are genuinely different concurrency problems under the hood.",
      "Both sides had to live in one platform covering the full lifecycle: create, publish, discover, checkout, issue, check-in, and analyze.",
    ],
  },
  customerResearch: {
    title: "Core requirements.",
    sources: ["Overselling Protection", "Reserved-Seat Holds", "Secure Payments", "Door Check-In"],
  },
  keyInsight: {
    title: "The core technical decision.",
    statement:
      "Capacity and seat holds have to be enforced with atomic, guarded PostgreSQL transactions — so two concurrent buyers can never exceed capacity or claim the same seat, no matter the timing.",
    reasons: [
      "Capacity is enforced with a guarded atomic update inside a transaction, so concurrent buyers can't push a sold-out event over capacity.",
      "Reserved seats are held for 10 minutes via an atomic 'claim only if free' update, preventing double-booking during checkout.",
      "A ticket can be admitted at most once, even under two simultaneous scans at the door.",
    ],
  },
  customSections: [
    {
      label: "Architecture",
      title: "System design.",
      variant: "timeline",
      steps: [
        "Next.js 15 frontend (Vercel) talking to an Express REST API over HTTPS",
        "Feature-sliced backend: routes → controller → service → Prisma → PostgreSQL",
        "Short-lived in-memory JWT access token + rotating httpOnly refresh cookie with silent session restore",
        "External services: Razorpay for payments, Cloudinary for event images",
      ],
    },
    {
      label: "Key Features",
      title: "What it does.",
      variant: "cards",
      items: [
        "General-admission and reserved-seating events with a visual seat map",
        "Razorpay payments with server-side HMAC signature verification",
        "HMAC-signed QR tickets that reject forged or tampered codes",
        "Organizer dashboard: revenue, tickets sold, and attendee lists",
      ],
    },
    {
      label: "Tech Stack",
      title: "Technologies used.",
      variant: "cards",
      items: [
        "Next.js 15 + React 19 + TypeScript",
        "Express 4 + Prisma 5 + PostgreSQL",
        "JWT auth, Zod validation, Razorpay, Cloudinary",
        "Vitest + Supertest + Playwright, GitHub Actions CI, Docker",
      ],
    },
  ],
  recommendation: {
    title: "The approach.",
    statement:
      "Build a two-deployable full-stack app in TypeScript throughout, with the concurrency-critical booking logic pushed down into atomic database transactions and security enforced end to end.",
    focus: [
      "Atomic, guarded transactions for overselling and seat holds",
      "Secure auth: in-memory JWT + rotating refresh cookies",
      "Razorpay payments with server-side signature verification",
      "HMAC-signed QR tickets for race-safe door check-in",
    ],
  },
  impact: {
    title: "Outcome.",
    cards: [
      { direction: "Achieved", metric: "Race-Safe Overselling & Double-Booking Protection" },
      { direction: "Achieved", metric: "Secure Payments + Signed QR Tickets" },
      { direction: "Achieved", metric: "Full Auth with JWT + Rotating Refresh" },
      { direction: "Achieved", metric: "CI/CD with Tests + Dockerized Deploy" },
    ],
  },
};

export const BookIt = () => {
  return <CaseStudyLayout data={bookItData} />;
};
