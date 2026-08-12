import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const digiDiaryUrl = import.meta.env.VITE_DIGI_DIARY_URL;

const projects = [
  {
    title: "Digi Diary",
    description:
      "Production platform with RESTful, API-first architecture, JWT authentication, and RBAC — modernized from a legacy college project into a full-stack app with end-to-end type safety.",
    category: "FULL STACK APPLICATION",
    image: "/projects/project1.png",
    tags: ["React 18", "TypeScript", "Express.js", "PostgreSQL", "Prisma"],
    route: "/case-study/digi-diary",
    liveUrl: digiDiaryUrl,
  },
  {
    title: "Developer Productivity Tool",
    description:
      "A developer productivity tool using the GitHub Copilot API, modular prompt 'skill' files, context engineering, and agentic AI workflows to automate code analysis and documentation retrieval.",
    category: "AI / DEVELOPER TOOLING",
    image: "/projects/project2.png",
    tags: ["Node.js", "GitHub Copilot API", "Prompt Engineering", "Agentic Workflows"],
    route: "/case-study/dev-productivity-tool",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Work that
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              ships & scales.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects demonstrating full-stack delivery,
            system design, and modern engineering practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <Link to={project.route} className="block">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                   to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                    <Link to={project.route}>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mt-1">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                  <Link to={project.route}>
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1 
                     group-hover:-translate-y-1 transition-all"
                    />
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Live Demo button */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
