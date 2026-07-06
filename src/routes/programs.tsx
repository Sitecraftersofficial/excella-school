import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Sparkles, BookOpen, Languages, Trophy, Brain } from "lucide-react";
import scienceImg from "@/assets/ExcellaGallery/excella-science.jpeg";
import classroom from "@/assets/ExcellaGallery/Classroom.png";
import debate from "@/assets/ExcellaGallery/excella-debate.jpeg";

const stages = [
  {
    tag: "Early Years",
    t: "Montessori-inspired beginnings",
    d: "Curiosity, independence and joy — a foundation that lasts a lifetime.",
    img: classroom,
  },
  {
    tag: "Primary School",
    t: "Academic excellence, with balance",
    d: "Interactive, inquiry-based learning that builds confident, capable scholars.",
    img: scienceImg,
  },
  {
    tag: "Secondary School",
    t: "University-ready leaders",
    d: "Critical thinking, leadership and SAT support — designed for global opportunity.",
    img: debate,
  },
];

const pathways = [
  {
    icon: Sparkles,
    t: "American Montessori",
    d: "Independent learning, creativity, and confidence — guided by trained Montessori educators, with SAT as a core part of secondary Montessori.",
  },
  {
    icon: BookOpen,
    t: "Rwandan National Curriculum",
    d: "Flexible pathway aligned with Rwanda's national standards, delivered with the same premium care and outcomes.",
  },
];

export function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="A premium academic experience, designed for every learner."
        subtitle="Two programs. One school. Every student known, challenged, and supported."
        image={scienceImg}
      />

      {/* STAGES */}
      <section className="container-px mx-auto max-w-7xl py-24 space-y-20">
        {stages.map((s, i) => (
          <Reveal key={i}>
            <div
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6">
                <img
                  src={s.img}
                  alt={s.t}
                  className={`rounded-3xl aspect-4/3 object-cover w-full shadow-elegant ${s.tag === "Secondary School" ? "academics-secondary-image" : ""}`}
                />
              </div>
              <div className="lg:col-span-6">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                  {s.tag}
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-display text-balance">{s.t}</h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PATHWAYS */}
      <section className="bg-ink text-ink-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="relative container-px mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Curriculum options
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-display max-w-3xl">
              Choose the pathway that fits your child.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {pathways.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/3 p-8">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl">{p.t}</h3>
                  <p className="mt-3 text-ink-foreground/70 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            Program comparison
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-display">How the two pathways compare</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Both pathways deliver high-quality teaching and caring support, but they differ in
            approach, assessment, and progression. Below is a concise explanation to help families
            choose the right fit for their child.
          </p>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-border p-6 bg-card h-full">
              <h3 className="text-xl font-display">American Montessori</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                An internationally guided Montessori approach where learning is child-led and
                hands-on. Classrooms often use mixed ages, materials for concrete learning, and an
                emphasis on independence, curiosity and self-paced mastery. Assessment is primarily
                formative and skills-based. At secondary level, Montessori students receive SAT
                preparation to support international university pathways.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-3xl border border-border p-6 bg-card h-full">
              <h3 className="text-xl font-display">Rwandan National Curriculum</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                A standards-aligned national programme with grade-by-grade progression and national
                examinations. It emphasises core competencies, subject knowledge and local context.
                This pathway is ideal for families who prioritise national certification and
                continuity with Rwanda's educational system while benefiting from Excella's premium
                teaching and outcomes.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold">Key differences at a glance</h4>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-muted-foreground">
            <li>
              <strong>Approach:</strong> Montessori — child-led and hands-on; Rwandan —
              standards-based and sequential.
            </li>
            <li>
              <strong>Assessment:</strong> Montessori — formative, mastery-focused; Rwandan —
              grade-level tests and national exams.
            </li>
            <li>
              <strong>Progression:</strong> Montessori — mixed-age, mastery-based; Rwandan —
              grade-by-grade progression.
            </li>
            <li>
              <strong>University pathway:</strong> Montessori — international focus with SAT
              support; Rwandan — national certification and strong local outcomes.
            </li>
            <li>
              <strong>Best fit:</strong> Montessori — families seeking self-directed,
              international-style learning; Rwandan — families preferring national alignment and
              local certification.
            </li>
          </ul>
        </div>
      </section>

      {/* LANGUAGES / SPORTS / CRITICAL */}
      <section className="container-px mx-auto max-w-7xl py-24 grid md:grid-cols-3 gap-5">
        {[
          {
            icon: Languages,
            t: "Languages",
            d: "English, French and Kinyarwanda — preparing students to thrive globally and locally.",
          },
          {
            icon: Trophy,
            t: "Sports Education",
            d: "Teamwork, discipline and resilience through structured athletics programs.",
          },
          {
            icon: Brain,
            t: "Critical Thinking",
            d: "Project-based, inquiry-driven learning that prepares students for university and life.",
          },
        ].map((f, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="rounded-3xl border border-border p-8 h-full bg-card hover:border-primary/40 transition-colors">
              <f.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-5 text-2xl">{f.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <CTASection />
    </>
  );
}
