import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Users,
  Sparkles,
  Compass,
  BookOpen,
  Laptop,
  Quote,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  MessageCircle,
  Sun,
  Bus,
  FlaskConical,
  Utensils,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import campusImg from "@/assets/ExcellaGallery/Excella-campus3.png";
import scienceImg from "@/assets/ExcellaGallery/Excella-science2.jpg";
import classroomImg from "@/assets/ExcellaGallery/Classroom.png";
import debateImg from "@/assets/ExcellaGallery/ClassroomLife.png";
import basketballImg from "@/assets/ExcellaGallery/OutdoorClassActivity2.png";
import musicClassImg from "@/assets/ExcellaGallery/Trip.png";
import chromebookImg from "@/assets/ExcellaGallery/Excella-Bus.png";

import mrsPeaceQuoteImg from "@/assets/ExcellaTeam/MrsPeaceUwineza.jpg";

const heroSlides = [
  { img: campusImg, quote: "Where every child's journey begins with a smile." },
  { img: scienceImg, quote: "Curiosity is the engine of discovery." },
  { img: classroomImg, quote: "Small classes. Big thinking." },
  { img: basketballImg, quote: "Strong bodies build stronger character." },
  { img: musicClassImg, quote: "Every child carries a talent waiting to be discovered." },
  { img: debateImg, quote: "Confidence, built one voice at a time." },
  { img: chromebookImg, quote: "Learning today for the digital world of tomorrow." },
];

export function Home() {
  const reduce = useReducedMotion();
  const [slide, setSlide] = useState(0);

  const next = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  const prev = useCallback(
    () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length),
    [],
  );

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(next, 5500);
    return () => window.clearInterval(id);
  }, [next, reduce]);

  const current = heroSlides[slide];

  return (
    <>
      {/* HERO — image-only slideshow */}
      <section className="relative h-[95vh] flex items-end overflow-hidden bg-ink text-ink-foreground">
        {heroSlides.map((s, i) => (
          <motion.img
            key={s.img}
            src={s.img}
            alt="Excella School students"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "center 30%" }}
            initial={false}
            animate={{ opacity: i === slide ? 1 : 0, scale: i === slide ? 1 : 1.04 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: "easeOut" }}
          />
        ))}

        <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/35 to-ink/10" />
        <div className="absolute inset-0 gradient-radial opacity-30" />

        <div className="relative container-px mx-auto max-w-7xl px-16 pb-20 pt-32 md:px-24 md:pb-24 w-full">
          <motion.div
            key={slide}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Admissions Open
              · Kigali, Rwanda
            </div>
            <p className="mt-5 max-w-3xl text-4xl md:text-6xl lg:text-7xl font-display leading-[1.05] text-balance">
              {current.quote}
            </p>
            <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-white/75">
              A joyful place to learn, grow, and discover what is possible.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-90 transition shadow-glow"
              >
                See Tuition & Fees <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/virtual-life-visit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-semibold backdrop-blur hover:bg-white/10 transition"
              >
                <PlayCircle className="h-4 w-4" /> Virtual Life Visit
              </Link>
            </div>
          </motion.div>
        </div>

        {/* side arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur transition hover:bg-ink/60 md:left-6 md:h-12 md:w-12"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur transition hover:bg-ink/60 md:right-6 md:h-12 md:w-12"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* page dots — bottom center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all ${i === slide ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </section>

      {/* VISUAL TOUR PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-14 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Visual tour
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display text-balance">
              Step inside a day at Excella — without leaving home.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              From the morning check-in at the gate to the final school bus ride home, our Virtual
              Life Visit walks you through every part of a school day: classrooms, science labs,
              break time, lunch, and the people who make it all happen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/virtual-life-visit"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
              >
                <PlayCircle className="h-4 w-4" /> Start the Virtual Tour
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold hover:bg-accent transition"
              >
                View more photos
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Sun, t: "Morning check-in", d: "Every child welcomed at the gate" },
                { icon: FlaskConical, t: "Labs & classrooms", d: "Hands-on, curious learning" },
                { icon: Utensils, t: "Break & lunch", d: "Shared meals, real friendships" },
                { icon: Bus, t: "Safe dismissal", d: "Buses home, every day" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-5 shadow-elegant"
                >
                  <f.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-semibold">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOLISTIC APPROACH */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <Reveal className="lg:col-span-7">
            <Quote className="h-9 w-9 text-primary" />
            <blockquote className="mt-3 text-2xl md:text-4xl font-display leading-snug text-balance">
              “Educating the mind without educating the heart is no education at all.”
            </blockquote>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              — Aristotle
            </p>
            <h2 className="mt-8 text-3xl md:text-5xl font-display text-balance">
              We go far beyond academics and textbooks.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-muted-foreground text-lg">
              At Excella, a child's growth is measured in more than grades. Our whole-child approach
              recognises that academic growth, social development, and moral formation belong
              together — so every child learns to think critically, live responsibly, and grow
              happily.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: GraduationCap,
              t: "Whole-child development",
              d: "We nurture academic growth, social maturity, and spiritual balance so children grow into whole adults.",
            },
            {
              icon: ShieldCheck,
              t: "Positive support",
              d: "A secure, encouraging environment where children are guided with care and can learn confidently.",
            },
            {
              icon: Users,
              t: "Life skills and character",
              d: "Practical lessons, responsibility, and leadership experiences that prepare students for everyday life.",
            },
            {
              icon: Compass,
              t: "Independent-minded futures",
              d: "Children learn to think critically, solve problems, and become balanced young adults ready for the world.",
            },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACADEMIC PATHWAYS */}
      <section className="bg-ink text-ink-foreground py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Academic pathways
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
                One school. Two programs. Endless futures.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-ink-foreground/70 text-lg">
                Flexible programs tailored to every student — designed for confidence, mastery, and
                global opportunity.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Sparkles,
                badge: "International",
                t: "American Montessori",
                d: "An internationally guided Montessori approach: child-led, hands-on learning that builds independence, creativity and lifelong curiosity. Secondary students receive SAT preparation as part of the pathway.",
              },
              {
                icon: BookOpen,
                badge: "National",
                t: "Rwandan Curriculum",
                d: "Rwanda's national curriculum, focused on core competencies and local context — delivered with the same premium teaching, standards, and measurable outcomes.",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 hover:bg-white/6 transition-colors">
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">
                      {p.badge}
                    </span>
                    <div className="mt-4 h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl">{p.t}</h3>
                    <p className="mt-3 text-ink-foreground/70 leading-relaxed">{p.d}</p>
                    <Link
                      to="/programs"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPUTY DIRECTOR */}
      <section className="container-px mx-auto max-w-7xl pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-8 border border-border bg-card flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <img
              src={mrsPeaceQuoteImg}
              alt="Mrs. Peace Uwineza, Deputy Director"
              className="h-72 w-full shrink-0 rounded-2xl object-cover object-top shadow-elegant md:h-96 md:w-2/5"
            />
            <div className="md:flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
                Deputy Director
              </p>
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-5 text-xl leading-relaxed font-display text-foreground">
                “Experience a family-driven, friendly, and intimate atmosphere at Excella School,
                where children are not just educated but also nurtured to be happy and fulfilled.”
              </blockquote>
              <p className="mt-4 font-semibold text-foreground">
                Mrs Peace Uwineza
                <br />
                Deputy Director, Excella School
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
