import { Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/Button";
import { ResumeCTA } from "@/components/ResumeCTA";

const email = import.meta.env.VITE_EMAIL;
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's Build Something{" "}
            <span className="font-serif italic font-normal text-foreground">
              Great Together.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Currently open to full-stack engineering roles and interesting
            collaboration opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 glow-border animate-fade-in animation-delay-300">
            <div className="flex flex-col items-center gap-6">
              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {linkedinUrl && (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </Button>
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`}>
                    <Button size="lg">
                      <Mail className="w-5 h-5" />
                      Email
                    </Button>
                  </a>
                )}
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                      <Github className="w-5 h-5" />
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
              <ResumeCTA />
            </div>
          </div>

          {/* Availability Card */}
          <div className="glass rounded-3xl p-8 border border-primary/30 mt-8 text-center animate-fade-in animation-delay-400">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Open to full-time Software Engineering roles — full-stack,
              backend, or platform engineering positions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
