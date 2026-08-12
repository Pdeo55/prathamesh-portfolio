import { CaseStudyLayout } from "@/components/CaseStudyLayout";

const devToolData = {
  hero: {
    category: "AI / Developer Tooling",
    title: "Developer Productivity Tool — Automating code analysis and documentation retrieval with agentic AI workflows.",
  },
  businessProblem: {
    title: "The problem.",
    points: [
      "Developers spend significant time on repetitive code analysis tasks.",
      "Documentation retrieval is fragmented across multiple sources.",
      "Existing tools lack context-aware, agentic automation capabilities.",
      "No unified workflow for combining AI assistance with developer intent.",
    ],
  },
  customerResearch: {
    title: "Key design constraints.",
    sources: ["Modularity", "Context Engineering", "Prompt Skills", "Agentic Workflows"],
  },
  keyInsight: {
    title: "The core insight.",
    statement:
      "Modular prompt 'skill' files combined with context engineering allow the tool to adapt to different codebases and tasks without hardcoded workflows.",
  },
  customSections: [
    {
      label: "Architecture",
      title: "How it's built.",
      variant: "timeline",
      steps: [
        "Node.js runtime with GitHub Copilot API integration",
        "Modular prompt skill files for different tasks",
        "Context engineering layer for codebase awareness",
        "Agentic workflow orchestration for multi-step tasks",
      ],
    },
    {
      label: "Capabilities",
      title: "What it does.",
      variant: "cards",
      items: [
        "Automated code analysis",
        "Documentation retrieval",
        "Context-aware suggestions",
        "Multi-step agentic workflows",
      ],
    },
  ],
  recommendation: {
    title: "The approach.",
    statement:
      "Build a developer tool using the GitHub Copilot API with modular prompt engineering and agentic workflows to automate repetitive engineering tasks.",
    focus: [
      "GitHub Copilot API as the AI backbone",
      "Modular skill files for extensibility",
      "Context engineering for codebase awareness",
      "Agentic orchestration for complex tasks",
    ],
  },
  impact: {
    title: "Outcome.",
    cards: [
      { direction: "Achieved", metric: "Automated Code Analysis" },
      { direction: "Achieved", metric: "Modular Prompt Architecture" },
      { direction: "Achieved", metric: "Agentic Workflow Orchestration" },
      { direction: "Achieved", metric: "Context-Aware Documentation Retrieval" },
    ],
  },
};

export const DevProductivityTool = () => {
  return <CaseStudyLayout data={devToolData} />;
};
