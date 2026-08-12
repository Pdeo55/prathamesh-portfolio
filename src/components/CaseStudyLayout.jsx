import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const CaseStudyLayout = ({ data }) => {
  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <div className="max-w-4xl animate-fade-in">
            {data.hero.category && (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-6">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {data.hero.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {data.hero.title}
            </h1>
            {data.hero.subtitle && (
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
                {data.hero.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Business Problem */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Business Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
              {data.businessProblem.title || "What went wrong."}
            </h2>
            <div className="space-y-4 animate-fade-in animation-delay-200">
              {data.businessProblem.points.map((point, idx) => (
                <div key={idx} className="glass p-4 rounded-xl">
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Research */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Customer Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
              {data.customerResearch.title || "What customers said."}
            </h2>
            {data.customerResearch.description && (
              <p className="text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                {data.customerResearch.description}
              </p>
            )}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {data.customerResearch.sources.map((source, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl text-center animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <p className="font-semibold">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      {data.keyInsight && (
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Key Insight
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
                {data.keyInsight.title || "The core finding."}
              </h2>
              <div className="glass rounded-2xl p-8 glow-border animate-fade-in animation-delay-200">
                <p className="text-xl font-medium italic text-foreground">
                  "{data.keyInsight.statement}"
                </p>
              </div>
              {data.keyInsight.reasons && data.keyInsight.reasons.length > 0 && (
                <div className="mt-8 space-y-3 animate-fade-in animation-delay-300">
                  <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    Major reasons
                  </p>
                  {data.keyInsight.reasons.map((reason, idx) => (
                    <div key={idx} className="glass p-4 rounded-xl">
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {data.customSections && data.customSections.map((section, sIdx) => (
        <section key={sIdx} className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                {section.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-200">
                  {section.description}
                </p>
              )}

              {/* Cards variant */}
              {section.variant === "cards" && section.items && (
                <div className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-200">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl">
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Timeline variant */}
              {section.variant === "timeline" && section.steps && (
                <div className="relative animate-fade-in animation-delay-200">
                  <div className="timeline-glow absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />
                  <div className="space-y-8">
                    {section.steps.map((step, idx) => (
                      <div key={idx} className="relative pl-12">
                        <div className="absolute left-4 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />
                        <div className="glass p-4 rounded-xl">
                          <p className="font-semibold">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison variant (single) */}
              {section.variant === "comparison" && section.before && section.after && (
                <div className="grid sm:grid-cols-2 gap-8 animate-fade-in animation-delay-200">
                  <div className="glass p-6 rounded-2xl border border-border/50">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Before</span>
                    <p className="text-lg font-semibold mt-2">{section.before}</p>
                  </div>
                  <div className="glass p-6 rounded-2xl border border-primary/30 glow-border">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">After</span>
                    <p className="text-lg font-semibold mt-2">{section.after}</p>
                  </div>
                </div>
              )}

              {/* Multi-comparison variant */}
              {section.variant === "multi-comparison" && section.comparisons && (
                <div className="space-y-6 animate-fade-in animation-delay-200">
                  {section.comparisons.map((comp, idx) => (
                    <div key={idx} className="grid sm:grid-cols-2 gap-4">
                      <div className="glass p-6 rounded-2xl border border-border/50">
                        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Before</span>
                        <p className="text-lg font-semibold mt-2">{comp.before}</p>
                      </div>
                      <div className="glass p-6 rounded-2xl border border-primary/30 glow-border">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">After</span>
                        <p className="text-lg font-semibold mt-2">{comp.after}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Detailed cards variant (title + sub-items) */}
              {section.variant === "detailed-cards" && section.cards && (
                <div className={`grid gap-4 animate-fade-in animation-delay-200 ${section.cards.length === 3 ? "sm:grid-cols-2 md:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {section.cards.map((card, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl">
                      <h3 className="font-semibold mb-1">{card.title}</h3>
                      {card.subtitle && (
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{card.subtitle}</span>
                      )}
                      {card.items && (
                        <ul className="mt-3 space-y-1">
                          {card.items.map((item, iIdx) => (
                            <li key={iIdx} className="text-sm text-muted-foreground">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Table variant */}
              {section.variant === "table" && section.columns && section.rows && (
                <div className="overflow-x-auto animate-fade-in animation-delay-200">
                  <div className="glass rounded-2xl overflow-hidden min-w-[600px]">
                    <div className="grid border-b border-border/50" style={{ gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))` }}>
                      {section.columns.map((col, idx) => (
                        <div key={idx} className="p-4 text-sm font-semibold text-primary">
                          {col}
                        </div>
                      ))}
                    </div>
                    {section.rows.map((row, rIdx) => (
                      <div key={rIdx} className="grid border-b border-border/30 last:border-b-0" style={{ gridTemplateColumns: `repeat(${section.columns.length}, minmax(0, 1fr))` }}>
                        {row.map((cell, cIdx) => (
                          <div key={cIdx} className="p-4 text-sm text-muted-foreground">
                            {cell}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Recommendation */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Recommendation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 animate-fade-in animation-delay-100 text-secondary-foreground">
              {data.recommendation.title || "The strategic shift."}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-200">
              {data.recommendation.statement}
            </p>
            {data.recommendation.focus && data.recommendation.focus.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-4 animate-fade-in animation-delay-300">
                {data.recommendation.focus.map((item, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <span className="text-primary font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Execution / GTM */}
      {data.execution && (
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                Execution / GTM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
                {data.execution.title || "How it comes together."}
              </h2>
              <div className="relative animate-fade-in animation-delay-200">
                <div className="timeline-glow absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />
                <div className="space-y-8">
                  {data.execution.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-12">
                      <div className="absolute left-4 top-1 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />
                      <div className="glass p-4 rounded-xl">
                        <p className="font-semibold">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expected Business Impact */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Expected Business Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 animate-fade-in animation-delay-100 text-secondary-foreground">
              {data.impact.title || "What success looks like."}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {data.impact.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {card.direction}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{card.metric}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
