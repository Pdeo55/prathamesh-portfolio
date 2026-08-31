import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const digiDiaryUrl = import.meta.env.VITE_DIGI_DIARY_URL;
const bookItUrl = import.meta.env.VITE_BOOK_IT_URL;

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
  {
    title: "Book-IT",
    description:
      "A full-stack event ticketing platform with atomic overselling protection, timed reserved-seat holds, Razorpay payments, and HMAC-signed QR tickets for race-safe door check-in.",
    category: "FULL STACK APPLICATION",
    image: "/projects/project3.png",
    tags: ["Next.js 15", "React 19", "TypeScript", "Express", "Prisma", "PostgreSQL"],
    route: "/case-study/book-it",
    liveUrl: bookItUrl,
  },
];

/**
 * How long one full loop of the carousel takes, in seconds.
 * Higher = slower / more readable. Tune this to taste.
 */
const MARQUEE_DURATION_SECONDS = 60;

const gradientFallback =
  "linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-violet), var(--color-accent-purple))";

const handleImageError = (event) => {
  // If a project screenshot hasn't been added yet, fall back to an
  // on-brand gradient instead of showing a broken image.
  event.currentTarget.style.display = "none";
  const parent = event.currentTarget.parentElement;
  if (parent) parent.style.background = gradientFallback;
};

const ProjectCard = ({ project }) => {
  const hasRoute = Boolean(project.route);
  // Cards with an internal case study link to the route; others (e.g. Book-IT)
  // link straight to the live demo so clicks still go somewhere useful.
  const ImageWrapper = hasRoute ? Link : "a";
  const imageWrapperProps = hasRoute
    ? { to: project.route }
    : project.liveUrl
    ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: undefined };

  const TitleWrapper = hasRoute ? Link : "a";
  const titleWrapperProps = hasRoute
    ? { to: project.route }
    : project.liveUrl
    ? { href: project.liveUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: undefined };

  return (
    <div className="group glass rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Image */}
      <ImageWrapper {...imageWrapperProps} className="block">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            onError={handleImageError}
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
      </ImageWrapper>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs text-primary font-medium uppercase tracking-wider">
              {project.category}
            </span>
            <TitleWrapper {...titleWrapperProps}>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mt-1">
                {project.title}
              </h3>
            </TitleWrapper>
          </div>
          <TitleWrapper {...titleWrapperProps}>
            <ArrowUpRight
              className="w-5 h-5 
            text-muted-foreground group-hover:text-primary
             group-hover:translate-x-1 
             group-hover:-translate-y-1 transition-all"
            />
          </TitleWrapper>
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        {/* Footer: tags + live demo, anchored to the bottom so every card
            aligns regardless of description length or a missing demo link. */}
        <div className="mt-auto space-y-4 pt-2">
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
          {/* Live Demo button — reserve the space even when absent so all
              cards keep the same height. */}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <div className="h-[38px]" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  // Duplicate the set so the marquee loops seamlessly (translateX -50%).
  const marqueeProjects = [...projects, ...projects];

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
      </div>

      {/* Projects Carousel — infinite auto-scroll marquee (pauses on hover) */}
      <div className="relative overflow-hidden animate-fade-in animation-delay-300">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-32
         bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-32
         bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"
        />
        <div
          className="flex w-max gap-8 px-8 marquee-track"
          style={{ "--marquee-duration": `${MARQUEE_DURATION_SECONDS}s` }}
        >
          {marqueeProjects.map((project, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[420px] md:w-[480px] flex-shrink-0"
              aria-hidden={idx >= projects.length ? true : undefined}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
