import { CTASection } from "@/components/site/CTASection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Laptop, Quote } from "lucide-react";
import classroomImg from "@/assets/ExcellaGallery/Classroom.png";
import debateImg from "@/assets/ExcellaGallery/excella-debate.jpeg";
import scienceImg from "@/assets/ExcellaGallery/excella-science.jpeg";
import chromebookImg from "@/assets/ExcellaGallery/chromebook.png";
import mrsPeaceQuoteImg from "@/assets/mrsPeace+quote.jpeg";

export function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student Life"
        title="Where character meets confidence."
        subtitle="A look at the learning experiences that shape our students beyond the classroom."
        image={scienceImg}
      />

      {/* MODERN LEARNING EXPERIENCE (from Home) */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            Modern learning experience
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
            Technology that <em className="text-primary not-italic">supports</em> education — not
            replaces it.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We recognise that children do not come to school empty-headed. They arrive with
            knowledge from home, family, and experience — and our teachers build on that foundation
            with care, curiosity, and encouragement.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Teaching from the heart, not only from the book",
              "Children learn through encouragement and praise",
              "Academic, social, and spiritual growth",
              "A balanced approach to assessment and progress",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/85">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={scienceImg}
                alt="Student in science lab"
                className="rounded-2xl aspect-3/4 object-cover object-center w-full shadow-elegant"
              />
              <img
                src={classroomImg}
                alt="Excella classroom"
                className="rounded-2xl aspect-square object-cover object-center w-full"
              />
            </div>
            <div className="space-y-4 pt-10">
              <img
                src={debateImg}
                alt="Student leadership"
                className="rounded-2xl aspect-square object-cover object-top w-full"
              />
              <div className="relative overflow-hidden rounded-2xl aspect-3/4 bg-ink shadow-elegant">
                <img
                  src={chromebookImg}
                  alt="Chromebook equipped learning"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ink-foreground">
                  <Laptop className="h-7 w-7 text-primary" />
                  <p className="text-sm text-ink-foreground/80 mt-1">
                    Chromebook-equipped learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WISDOM LAB (from Home) */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Wisdom Lab
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              Life lessons led by our director.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Wisdom Lab translates our whole-child philosophy into practice. Through inspiring
              quotes, reflection, and discussion, students learn that education is not only about
              facts — it is about building character, confidence, discipline, and a balanced life.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {[
                "Leadership",
                "Balance",
                "Responsibility",
                "Perseverance",
                "Integrity",
                "Personal growth",
              ].map((v) => (
                <li key={v} className="flex items-center gap-3 text-foreground/85">
                  <span className="h-2 w-2 rounded-full bg-primary" /> {v}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              At the end of every term students sit a Life Skills exam that reflects the lessons,
              ideas, and reflections from Wisdom Lab sessions. The aim is not to compare children
              harshly, but to help each learner grow into a thoughtful and confident person.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col items-center text-center shadow-elegant">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="h-40 w-40 rounded-full bg-linear-to-br from-slate-300 to-slate-500 border border-border shadow-md"
                />
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <span className="bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">
                    Image coming soon
                  </span>
                </div>
              </div>
              <p className="mt-5 font-display text-xl">Mr. Theo</p>
              <p className="text-sm text-muted-foreground">School Director</p>
              <blockquote className="mt-4 text-sm italic text-muted-foreground">
                “We do not just fill minds with facts. We help children grow into whole people.”
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIFE SKILLS AT EXCELLA (from Home) */}
      <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Life skills at Excella School
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
              A glimpse of our pursuit of balanced education.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              In keeping with our vision of holistic or whole-child development, students are
              exposed to a wide range of experiences beyond the traditional academic subjects. We
              equip them with practical life skills so they can confidently face the world outside
              school.
            </p>
            <div className="mt-8 rounded-3xl border border-border bg-card p-7">
              <blockquote className="text-lg md:text-xl font-display leading-relaxed text-foreground">
                “Children learn what they live.”
              </blockquote>
              <p className="mt-3 text-sm text-muted-foreground">Dorothy Law Nolte</p>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-3xl border border-border bg-secondary p-8">
              <h3 className="text-2xl font-display">What life skills look like at Excella</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Encouraging students to live with confidence, fairness, acceptance, and friendship.",
                  "Teaching through praise, encouragement, and positive energy instead of intimidation.",
                  "Helping children grow socially, academically, and spiritually as part of one balanced journey.",
                  "Showing that grades are only one part of progress, while character, care, and discipline matter too.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

