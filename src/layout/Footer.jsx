import { Linkedin, Github } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;

const socialLinks = [
  linkedinUrl && { icon: Linkedin, href: linkedinUrl, label: "LinkedIn" },
  githubUrl && { icon: Github, href: githubUrl, label: "GitHub" },
].filter(Boolean);

const footerLinks = [
  { hash: "projects", label: "Projects" },
  { hash: "how-i-think", label: "How I Work" },
  { hash: "experience", label: "Experience" },
  { hash: "contact", label: "Contact" },
];

const scrollToHash = (hash) => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToHash(hash);
    } else {
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "")}
              className="text-xl font-bold tracking-tight"
            >
              PD<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Prathamesh Deo. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.hash}
                href={`/#${link.hash}`}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
