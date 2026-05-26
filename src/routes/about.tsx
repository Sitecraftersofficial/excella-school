import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import campus from "@/assets/excella-campus.jpeg";
import awards from "@/assets/excella-awards.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Excella"
        title="A school built on excellence, character, and opportunity."
        subtitle="From our founding, Excella has stood for one promise: every child deserves an education that prepares them for the world — and shapes the world they'll create."
        image={campus}
      />

      <section className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our story</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">Global education with local relevance.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Excella School was founded with a bold idea: that students in Rwanda deserve a school that competes with the very best, anywhere. Today, we are proud to deliver American Montessori and the Rwandan National Curriculum — all under one roof, with SAT as a core part of the secondary Montessori program.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            More than programs, we cultivate a culture — one of curiosity, courage, and care. Our students learn to think critically, lead boldly, and serve generously.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={0.1}>
          <img src={awards} alt="Excella community" className="rounded-3xl aspect-4/3 object-cover object-center w-full shadow-elegant" />
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, t: "Our Mission", d: "To nurture confident, disciplined, future-ready learners through flexible academic pathways and a culture of excellence." },
            { icon: Eye, t: "Our Vision", d: "To be Rwanda's most trusted premium school — recognized internationally for academic excellence and character." },
            { icon: Heart, t: "Our Values", d: "Excellence, integrity, respect, curiosity, leadership, and service to community." },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-card border border-border p-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Why Excella is different</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display max-w-3xl text-balance">A complete philosophy of student success.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Award, t: "Internationally benchmarked", d: "Standards aligned with leading global schools." },
            { icon: Users, t: "Small, attentive classes", d: "Each child known by name — and by potential." },
            { icon: BookOpen, t: "Two programs, one school", d: "American Montessori and the Rwandan National Curriculum delivered with excellence." },
            { icon: Heart, t: "Whole-child approach", d: "Academics, character, arts, and athletics in harmony." },
            { icon: Target, t: "University & career ready", d: "Counseling and SAT prep from early secondary." },
            { icon: Eye, t: "Parent partnership", d: "Open communication and transparent reporting." },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-border p-7 h-full hover:border-primary/40 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Leadership</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display max-w-3xl">Educators who care, and lead.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { name: "Madam Peace", role: "Deputy Director", img: awards },
            { name: "Mr. Theo", role: "Director", img: classroom },
            { name: "Madam Marie", role: "Secretary", img: awards },
            { name: "TR Godfrey", role: "Director of Studies", img: classroom },
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group rounded-3xl overflow-hidden bg-card border border-border">
                <div className="aspect-4/5 overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
