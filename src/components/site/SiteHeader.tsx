import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Excella School" className="h-9 md:h-10 w-auto rounded-sm" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center justify-center rounded-full bg-ink text-ink-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Apply Now
          </Link>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass border-t border-border/60">
          <nav className="container-px mx-auto max-w-7xl py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
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
    </header>
  );
}
