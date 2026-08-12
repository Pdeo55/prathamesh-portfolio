import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Information Technology — CGPA: 9.13",
    institution: "Vishwakarma Institute of Information Technology, Pune, India",
    period: "2021 — 2024",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 animate-fade-in animation-delay-100 text-secondary-foreground">
            Academic{" "}
            <span className="font-serif italic font-normal text-foreground">
              foundation.
            </span>
          </h2>

          <div className="space-y-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.degree}</h3>
                    <p className="text-muted-foreground">{item.institution}</p>
                    <span className="text-sm text-primary font-medium mt-1 inline-block">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
