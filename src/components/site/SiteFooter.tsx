import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/ExcellaLogo/Excella+Ams-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground mt-24">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Excella School" className="h-12 w-auto rounded-sm bg-white p-1.5" />
          <p className="mt-5 text-sm text-ink-foreground/70 leading-relaxed max-w-xs">
            Global education with local relevance. One premium school. Two strong programs for
            success.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 grid place-items-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li>
              <Link to="/about" className="hover:text-white">
                About Excella
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-white">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-white">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/student-life" className="hover:text-white">
                Student Life
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Kigali, Rwanda
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> +250 788 000 000
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> admissions@excella.school
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-ink-foreground/55">
          <p>
            © {new Date().getFullYear()} Excella School. Member of the American Montessori Society.
            All rights reserved.
          </p>
          <p>
            Made in Rwanda by{" "}
            <a
              href="https://www.sitecraftersz.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-foreground hover:text-primary"
            >
              Sitecrafters Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
