import { Download, X, ZoomIn, ZoomOut, ExternalLink, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const rawResumeUrl = import.meta.env.VITE_RESUME_URL;

// Convert Google Drive view URL to embeddable preview URL
function getEmbedUrl(url) {
  if (!url) return "";
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return url;
}

// Get a Google Drive direct download URL if possible
function getDownloadUrl(url) {
  if (!url) return "";
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

const embedUrl = getEmbedUrl(rawResumeUrl);
const downloadUrl = getDownloadUrl(rawResumeUrl);

// Check for reduced motion preference
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ResumeCTA = () => {
  const [phase, setPhase] = useState("idle"); // idle | flying | modal
  const [zoom, setZoom] = useState(100);
  const btnRef = useRef(null);
  const planeRef = useRef(null);
  const sparklesRef = useRef([]);

  const handleClick = () => {
    if (phase !== "idle") return;

    if (prefersReducedMotion()) {
      setPhase("modal");
      return;
    }

    setPhase("flying");
  };

  // Sparkle trail emitter
  useEffect(() => {
    if (phase !== "flying") return;

    const plane = planeRef.current;
    if (!plane) return;

    const interval = setInterval(() => {
      const rect = plane.getBoundingClientRect();
      if (rect.width === 0) return;

      const sparkle = document.createElement("div");
      sparkle.style.position = "fixed";
      sparkle.style.left = `${rect.left + rect.width / 2}px`;
      sparkle.style.top = `${rect.top + rect.height / 2}px`;
      sparkle.style.width = "4px";
      sparkle.style.height = "4px";
      sparkle.style.borderRadius = "50%";
      sparkle.style.background = "var(--color-primary)";
      sparkle.style.boxShadow = "0 0 6px var(--color-primary)";
      sparkle.style.pointerEvents = "none";
      sparkle.style.zIndex = "99998";
      sparkle.style.opacity = "0.7";
      document.body.appendChild(sparkle);
      sparklesRef.current.push(sparkle);

      sparkle.animate(
        [
          { opacity: 0.7, transform: "scale(1)" },
          { opacity: 0, transform: "scale(0.2)" },
        ],
        { duration: 600, easing: "ease-out", fill: "forwards" }
      ).onfinish = () => {
        sparkle.remove();
        sparklesRef.current = sparklesRef.current.filter((s) => s !== sparkle);
      };
    }, 80);

    return () => {
      clearInterval(interval);
      sparklesRef.current.forEach((s) => s.remove());
      sparklesRef.current = [];
    };
  }, [phase]);

  // Animate the plane once phase is "flying"
  useEffect(() => {
    if (phase !== "flying") return;

    const plane = planeRef.current;
    if (!plane) return;

    const btn = btnRef.current;
    const btnRect = btn?.getBoundingClientRect();
    const startX = btnRect ? btnRect.left + btnRect.width / 2 : window.innerWidth / 4;
    const startY = btnRect ? btnRect.top + btnRect.height / 2 : window.innerHeight / 2;

    // Use the Hero section as the coordinate container
    const heroEl = btn?.closest("section");
    const heroRect = heroEl
      ? heroEl.getBoundingClientRect()
      : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };

    const hL = heroRect.left;
    const hT = heroRect.top;
    const hW = heroRect.width;
    const hH = heroRect.height;

    // Irregular organic flight path within the Hero
    const keyframes = [
      {
        left: `${startX}px`,
        top: `${startY}px`,
        transform: "rotate(-15deg) scale(1)",
        opacity: 1,
        offset: 0,
      },
      {
        left: `${hL + hW * 0.55}px`,
        top: `${hT + hH * 0.18}px`,
        transform: "rotate(5deg) scale(1.05)",
        opacity: 1,
        offset: 0.1,
      },
      {
        left: `${hL + hW * 0.78}px`,
        top: `${hT + hH * 0.25}px`,
        transform: "rotate(25deg) scale(1.1)",
        opacity: 1,
        offset: 0.2,
      },
      {
        left: `${hL + hW * 0.88}px`,
        top: `${hT + hH * 0.42}px`,
        transform: "rotate(60deg) scale(1.05)",
        opacity: 1,
        offset: 0.3,
      },
      {
        left: `${hL + hW * 0.82}px`,
        top: `${hT + hH * 0.65}px`,
        transform: "rotate(100deg) scale(1)",
        opacity: 1,
        offset: 0.4,
      },
      {
        left: `${hL + hW * 0.65}px`,
        top: `${hT + hH * 0.82}px`,
        transform: "rotate(140deg) scale(0.95)",
        opacity: 1,
        offset: 0.5,
      },
      {
        left: `${hL + hW * 0.38}px`,
        top: `${hT + hH * 0.78}px`,
        transform: "rotate(190deg) scale(1)",
        opacity: 1,
        offset: 0.6,
      },
      {
        left: `${hL + hW * 0.15}px`,
        top: `${hT + hH * 0.6}px`,
        transform: "rotate(230deg) scale(0.95)",
        opacity: 1,
        offset: 0.7,
      },
      {
        left: `${hL + hW * 0.12}px`,
        top: `${hT + hH * 0.35}px`,
        transform: "rotate(280deg) scale(1)",
        opacity: 1,
        offset: 0.8,
      },
      {
        left: `${hL + hW * 0.3}px`,
        top: `${hT + hH * 0.22}px`,
        transform: "rotate(320deg) scale(0.95)",
        opacity: 1,
        offset: 0.88,
      },
      {
        left: `${hL + hW * 0.5 - 16}px`,
        top: `${hT + hH * 0.45 - 16}px`,
        transform: "rotate(360deg) scale(0.85)",
        opacity: 0.9,
        offset: 1,
      },
    ];

    plane.style.left = `${startX}px`;
    plane.style.top = `${startY}px`;
    plane.style.opacity = "1";

    const animation = plane.animate(keyframes, {
      duration: 3800,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      fill: "forwards",
    });

    animation.onfinish = () => {
      plane.animate(
        [
          { transform: "rotate(360deg) scale(0.85)", opacity: 0.9 },
          { transform: "rotate(360deg) scale(1.4)", opacity: 0.5 },
          { transform: "rotate(360deg) scale(0)", opacity: 0 },
        ],
        { duration: 350, easing: "ease-out", fill: "forwards" }
      ).onfinish = () => {
        setPhase("modal");
      };
    };

    return () => animation.cancel();
  }, [phase]);

  // Close modal
  const closeModal = useCallback(() => {
    setPhase("idle");
    setZoom(100);
  }, []);

  // Escape key closes modal
  useEffect(() => {
    if (phase !== "modal") return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [phase, closeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (phase === "modal") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  if (!rawResumeUrl) return null;

  return (
    <>
      {/* Resume Button */}
      <div ref={btnRef} onClick={handleClick}>
        <AnimatedBorderButton>
          <Download className="w-5 h-5" />
          Download Resume
        </AnimatedBorderButton>
      </div>

      {/* Portal: Plane + Modal rendered into document.body to escape stacking contexts */}
      {(phase === "flying" || phase === "modal") &&
        createPortal(
          <>
            {/* Paper Plane */}
            {phase === "flying" && (
              <div
                ref={planeRef}
                className="fixed z-[99999] pointer-events-none opacity-0"
                style={{ willChange: "left, top, transform, opacity" }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="drop-shadow-[0_0_10px_var(--color-primary)]"
                >
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="color-mix(in srgb, var(--color-primary) 25%, transparent)"
                  />
                  <path
                    d="M22 2L11 13"
                    stroke="var(--color-primary)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}

            {/* Modal */}
            {phase === "modal" && (
              <div
                className="fixed inset-0 z-[99999] flex items-center justify-center p-3 md:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="resume-modal-title"
              >
                {/* Backdrop */}
                <div
                  className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
                  onClick={closeModal}
                />

                {/* Modal Content */}
                <div
                  className="relative glass-strong rounded-2xl flex flex-col animate-fade-in glow-border w-[94vw] h-[90vh] md:w-[85vw] md:h-[88vh] max-w-6xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-border/50 flex-shrink-0">
                    <div>
                      <h2
                        id="resume-modal-title"
                        className="text-lg font-bold text-foreground"
                      >
                        Resume
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        Prathamesh Deo · Software Engineer II
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setZoom((z) => Math.max(75, z - 25))}
                        aria-label="Zoom out"
                        title="Zoom out"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-muted-foreground min-w-[3ch] text-center">
                        {zoom}%
                      </span>
                      <button
                        onClick={() => setZoom((z) => Math.min(150, z + 25))}
                        aria-label="Zoom in"
                        title="Zoom in"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setZoom(100)}
                        aria-label="Reset zoom"
                        title="Reset zoom"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <div className="w-px h-5 bg-border/50 mx-1" />

                      <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download resume"
                        title="Download"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                      <a
                        href={rawResumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open in new tab"
                        title="Open in new tab"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <div className="w-px h-5 bg-border/50 mx-1" />

                      <button
                        onClick={closeModal}
                        aria-label="Close modal"
                        title="Close"
                        className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Resume iframe with zoom */}
                  <div className="flex-1 overflow-auto rounded-b-2xl flex items-center justify-center">
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title="Prathamesh Deo Resume"
                        className="border-0 origin-center transition-transform duration-200"
                        style={{
                          width: `${zoom}%`,
                          height: `${zoom}%`,
                          minWidth: "100%",
                          minHeight: "100%",
                          transform: `scale(${zoom / 100})`,
                          transformOrigin: "center center",
                        }}
                        allow="autoplay"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <p className="text-muted-foreground text-sm">
                          Resume preview unavailable
                        </p>
                        <a
                          href={rawResumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button>Open Resume</Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>,
          document.body
        )}
    </>
  );
};
