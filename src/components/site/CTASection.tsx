import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import logo from "@/assets/ExcellaLogo/Excella-logo.png";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl my-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-ink-foreground p-10 md:p-20 shadow-elegant">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 p-3 shadow-sm">
                <img src={logo} alt="Excella School" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                  Admissions Open
                </p>
                <p className="mt-1 text-sm text-ink-foreground/70">Excella School</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
              Give your child the future they deserve.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-ink-foreground/70 text-lg max-w-2xl">
              Join a community where excellence meets opportunity. Message us on WhatsApp to start
              your admissions journey or schedule a campus visit.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/250788000000?text=Hi%20Excella!%20I'm%20interested%20in%20admissions.%20Can%20you%20help%20me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </a>
              <a
                href="https://wa.me/250788000000?text=Hi%20Excella!%20I'd%20like%20to%20schedule%20a%20campus%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/5 transition"
              >
                <MessageCircle className="h-4 w-4" /> Schedule a Visit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
