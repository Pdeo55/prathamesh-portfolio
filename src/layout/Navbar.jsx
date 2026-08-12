import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", hash: "", label: "Home" },
  { to: "/", hash: "about", label: "About" },
  { to: "/", hash: "experience", label: "Experience" },
  { to: "/", hash: "projects", label: "Projects" },
  { to: "/", hash: "skills", label: "Skills" },
  { to: "/", hash: "contact", label: "Contact" },
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

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // After navigating to homepage, scroll to the hash
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      setTimeout(() => {
        scrollToHash(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e, link) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToHash(link.hash);
    } else {
      navigate("/", { state: { scrollTo: link.hash } });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, { to: "/", hash: "" })}
          className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
        >
          PD<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              href={link.hash ? `/#${link.hash}` : "/"}
              key={index}
              onClick={(e) => handleNavClick(e, link)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right — Theme Toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={(e) => handleNavClick(e, { to: "/", hash: "contact" })}
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Right — Theme Toggle + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                href={link.hash ? `/#${link.hash}` : "/"}
                key={index}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setIsMobileMenuOpen(false);
                }}
                className="text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2">
              <Button
                className="w-full"
                onClick={(e) => {
                  handleNavClick(e, { to: "/", hash: "contact" });
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
