import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";
import awards from "@/assets/excella-awards.jpeg";
import classroom from "@/assets/excella-classroom.jpeg";
import campus2 from "@/assets/Excella-campus2.png";

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Excella"
        title="A school built on excellence, character, and opportunity."
        subtitle="Excella follows a whole-child philosophy: academic growth, character, social maturity, and personal wellbeing work together so every child can become a balanced adult."
        image={campus2}
        imageFit="contain"
        variant="split"
        meta={[
          <span key="1" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Founded on care</span>,
          <span key="2" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Two programs</span>,
        ]}
      />

      <section className="container-px mx-auto max-w-7xl py-24 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Our story</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">Global education with local relevance.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Excella School was founded on a simple conviction: children do not come to school empty-headed. They bring knowledge from home, family, and daily life, and education should build on that foundation with care, curiosity, and encouragement. Today we offer American Montessori and the Rwandan National Curriculum under one roof, with SAT preparation included in the secondary Montessori pathway.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            More than programmes, we cultivate a whole-child culture — one that values academic achievement, pastoral care, life skills, hygiene, safety, responsibility, and balanced growth.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-6" delay={0.1}>
          <img src={awards} alt="Excella community" className="rounded-3xl aspect-4/3 object-cover object-center w-full shadow-elegant" />
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-px mx-auto max-w-7xl grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, t: "Our Mission", d: "To offer an all-round education in an exciting and conducive atmosphere that builds confidence, nurtures diverse talents, and supports both social and academic development." },
            { icon: Eye, t: "Our Vision", d: "To nurture creative and independent-minded adults who can productively contribute to Rwanda and to the wider world." },
            { icon: Heart, t: "Our Values", d: "Balance, encouragement, respect, responsibility, curiosity, integrity, and service to community." },
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
          <h2 className="mt-4 text-4xl md:text-5xl font-display max-w-3xl text-balance">A complete philosophy of balanced education.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Award, t: "Assessment that supports growth", d: "We grade achievement without ranking children against one another, so reporting encourages improvement rather than fear." },
            { icon: Users, t: "Each child known and valued", d: "Children arrive with different kinds of knowledge, and we build on what they already know with care and encouragement." },
            { icon: BookOpen, t: "Two programmes, one philosophy", d: "American Montessori and the Rwandan National Curriculum are delivered through the same whole-child vision." },
            { icon: Heart, t: "Mind, body, and spirit", d: "What affects one affects the other, so academics, wellbeing, and character are developed together." },
            { icon: Target, t: "Life skills for the real world", d: "Students leave with practical wisdom, confidence, and independent-mindedness — not only exam results." },
            { icon: Eye, t: "Partnership with parents", d: "We keep communication open so families understand the path and the progress of each child." },
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
                <div className="aspect-4/5 overflow-hidden relative">
                  <div aria-hidden="true" className="h-full w-full bg-linear-to-br from-slate-300 to-slate-500" />
                  <div className="absolute inset-0 flex items-end justify-center p-3">
                    <span className="bg-black/70 text-white text-xs px-2 py-1 rounded">Image coming soon</span>
                  </div>
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
