import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/excella-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student Life" },
  { to: "/news", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMainHeader, setShowMainHeader] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const desktopLinkTone = scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white";
  const mobileLinkTone = scrolled ? "text-foreground/80 hover:bg-accent" : "text-ink-foreground/90 hover:bg-white/10";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setShowMainHeader(true), reduceMotion ? 160 : 1200);
    return () => window.clearTimeout(timeoutId);
  }, [reduceMotion]);

  return (
    <>
      <AnimatePresence>
        {!showMainHeader && (
          <motion.div
            className="fixed top-0 inset-x-0 z-60 h-20 md:h-24 overflow-hidden bg-ink border-b border-border/60"
            initial={reduceMotion ? false : { opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -120, scale: 0.96 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-20 scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/55 to-ink/85" />
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              <img src={logo} alt="Excella School" className="h-12 md:h-14 w-auto rounded-sm shadow-elegant" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showMainHeader && (
        <motion.header
          className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-border/60" : "bg-transparent border-b-2 border-primary/80"
            }`}
          initial={reduceMotion ? false : { opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
            <motion.div
              className="flex items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Excella School" className="h-9 md:h-10 w-auto rounded-sm" />
              </Link>
            </motion.div>
            <motion.nav
              className="hidden lg:flex items-center gap-1"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors relative group ${isActive ? "text-primary" : desktopLinkTone
                    }`
                  }
                >
                  {item.label}
                  <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                </NavLink>
              ))}
            </motion.nav>
            <motion.div
              className="hidden lg:flex items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-ink text-ink-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
            </motion.div>
            <motion.button
              aria-label={open ? "Close menu" : "Open menu"}
              className={`lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border ${scrolled ? "border-border" : "border-white/40 text-white"}`}
              onClick={() => setOpen((v) => !v)}
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
          {open && (
            <div className="lg:hidden glass border-t border-border/60">
              <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
                {nav.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `px-3 py-3 rounded-md text-sm font-medium ${isActive ? "text-primary" : mobileLinkTone
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Link
                  to="/admissions"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-ink text-ink-foreground px-5 py-3 text-sm font-semibold"
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          )}
        </motion.header>
      )}
    </>
  );
}
