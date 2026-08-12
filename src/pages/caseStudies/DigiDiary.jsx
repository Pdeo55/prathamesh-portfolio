import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const digiDiaryData = {
  hero: {
    category: "Full Stack Application",
    title: "Digi Diary — A production platform with API-first architecture and end-to-end type safety.",
  },
  businessProblem: {
    title: "The starting point.",
    points: [
      "Started as a legacy college project with no clear architecture.",
      "Lacked authentication, authorization, and proper API design.",
      "No type safety across the stack — runtime errors were frequent.",
      "Needed to be rebuilt into a production-ready, deployable application.",
    ],
  },
  customerResearch: {
    title: "Technical requirements gathered.",
    sources: ["API-first Design", "JWT Auth", "RBAC", "Type Safety"],
  },
  keyInsight: {
    title: "The core technical decision.",
    statement:
      "A modular Express.js/Prisma backend over PostgreSQL with end-to-end TypeScript would give us type safety, maintainability, and a clear separation of concerns.",
  },
  customSections: [
    {
      label: "Architecture",
      title: "System design decisions.",
      variant: "cards",
      items: [
        "RESTful, API-first architecture",
        "JWT authentication with RBAC",
        "Modular Express.js + Prisma backend",
        "React 18 frontend with server-state caching",
      ],
    },
    {
      label: "Tech Stack",
      title: "Technologies used.",
      variant: "cards",
      items: [
        "React 18 + TypeScript",
        "Express.js + Prisma ORM",
        "PostgreSQL (Neon)",
        "Deployed on Vercel + Render",
      ],
    },
  ],
  recommendation: {
    title: "The approach.",
    statement:
      "Modernize from legacy code into a production-ready full-stack application with end-to-end type safety, proper auth, and deployed across Vercel, Render, and Neon.",
    focus: [
      "API-first design with clear contracts",
      "JWT + RBAC for secure access control",
      "End-to-end TypeScript for type safety",
      "Cloud deployment across multiple providers",
    ],
  },
  impact: {
    title: "Outcome.",
    cards: [
      { direction: "Achieved", metric: "Production-Ready Deployment" },
      { direction: "Achieved", metric: "End-to-End Type Safety" },
      { direction: "Achieved", metric: "Secure JWT + RBAC Auth" },
      { direction: "Achieved", metric: "Multi-Provider Cloud Deploy" },
    ],
  },
};

export const DigiDiary = () => {
  return <CaseStudyLayout data={digiDiaryData} />;
};
