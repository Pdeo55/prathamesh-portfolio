import { Layers, Server, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Full Stack",
    description:
      "End-to-end delivery across .NET, React, Node.js, and multiple databases — genuinely full-stack.",
  },
  {
    icon: Server,
    title: "Platform & DevOps",
    description:
      "CI/CD pipelines, containerization, security remediation, and toolchain upgrades — not just feature work.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    description:
      "AWS services (S3, Lambda, EC2, SNS), Azure DevOps pipelines, and production-grade deployments.",
  },
  {
    icon: Brain,
    title: "AI-Assisted Engineering",
    description:
      "Agentic workflows, Copilot API, prompt engineering, and MCP — practical AI tooling fluency.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Engineering software,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                delivering impact.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I build and ship production features for enterprise platforms,
                working across the full stack — from .NET REST APIs and React/TypeScript
                frontends to CI/CD pipelines and cloud infrastructure. I care about
                code quality, system design, and delivering measurable outcomes.
              </p>
              <p>
                My experience spans high-traffic monorepos, Angular-to-React
                migrations, BOM automation systems, and AI-powered developer
                tooling. I focus on shipping reliable software that solves real
                problems — whether that means writing 90+ PRs in a quarter or
                reducing manual processes by 87%.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
