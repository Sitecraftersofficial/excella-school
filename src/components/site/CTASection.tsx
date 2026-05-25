import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl my-24">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-ink-foreground p-10 md:p-20 shadow-elegant">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Admissions Open</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
              Give your child the future they deserve.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-ink-foreground/70 text-lg max-w-2xl">
              Join a community where excellence meets opportunity. Schedule a tour or begin your application today.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition">
                Apply Today <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/5 transition">
                Book a Tour
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
