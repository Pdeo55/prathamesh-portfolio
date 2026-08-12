import { Search, FileText, Lightbulb, Code, TestTube, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Understand the Problem",
    description: "Clarify requirements, constraints, and user needs before writing code.",
  },
  {
    icon: FileText,
    title: "Design & Architect",
    description: "Plan system structure, API contracts, and data models upfront.",
  },
  {
    icon: Lightbulb,
    title: "Evaluate Trade-offs",
    description: "Choose the right tools and patterns based on context, not hype.",
  },
  {
    icon: Code,
    title: "Build Incrementally",
    description: "Ship small, reviewable changes with clear ownership and intent.",
  },
  {
    icon: TestTube,
    title: "Test & Validate",
    description: "Write tests that catch real bugs and verify expected behavior.",
  },
  {
    icon: Rocket,
    title: "Deploy with Confidence",
    description: "Automate CI/CD pipelines for reliable, repeatable releases.",
  },
  {
    icon: BarChart3,
    title: "Monitor & Measure",
    description: "Track performance, errors, and usage to catch issues early.",
  },
  {
    icon: RefreshCw,
    title: "Iterate & Improve",
    description: "Refactor based on real feedback and evolving requirements.",
  },
];

export const HowIThink = () => {
  return (
    <section id="how-i-think" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Engineering Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            How I{" "}
            <span className="font-serif italic font-normal text-foreground">
              Work.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl text-center animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
