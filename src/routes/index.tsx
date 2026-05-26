import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, GraduationCap, ShieldCheck, Users, Sparkles, Globe, Trophy, Compass, BookOpen, Laptop, Quote, Calendar, Play
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import campusImg from "@/assets/excella-campus.jpeg";
import scienceImg from "@/assets/excella-science.jpeg";
import classroomImg from "@/assets/excella-classroom.jpeg";
import trophiesImg from "@/assets/excella-trophies.jpeg";
import awardsImg from "@/assets/excella-awards.jpeg";
import debateImg from "@/assets/excella-debate.jpeg";
import excella2Video from "@/assets/Excella-2.mp4";
import virtualTourVideo from "@/assets/Excella-Virtualtour.mp4";

const carouselSlides = [
  campusImg,
  scienceImg,
  classroomImg,
  trophiesImg,
  awardsImg,
  debateImg,
];

const rollingSlides = [...carouselSlides, ...carouselSlides];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(end * eased));

          if (p < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{val}{suffix}</span>;
}

function HomeCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
      <div className="overflow-hidden rounded-3xl">
        <div className={reduceMotion ? "flex w-max" : "marquee-track flex w-max"}>
          {rollingSlides.map((slide, i) => (
            <img
              key={i}
              src={slide}
              alt="Excella School campus"
              className="h-88 w-88 shrink-0 object-cover object-center md:h-112 md:w-md lg:h-128 lg:w-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const reduce = useReducedMotion();
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-dvh flex items-end overflow-hidden bg-ink text-ink-foreground">
        <video
          ref={heroVideoRef}
          autoPlay muted loop playsInline poster={campusImg}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source src={excella2Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 gradient-radial opacity-60" />
        <div className="relative container-px mx-auto max-w-7xl pb-20 pt-40 md:pb-28 md:pt-44 w-full">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-semibold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Admissions Open · Kigali, Rwanda
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] text-balance">
              Where excellence<br />meets <em className="text-primary not-italic">opportunity</em>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-foreground/80 text-balance">
              A premium school in the heart of Kigali — blending American Montessori, SAT preparation, and the Rwandan National Curriculum. One school. Multiple pathways. Limitless futures.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/admissions" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-90 transition shadow-glow">
                Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-semibold backdrop-blur hover:bg-white/10 transition">
                <Play className="h-4 w-4" /> Book a School Tour
              </Link>
              <Link to="/academics" className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-ink-foreground/80 hover:text-white transition">
                Explore Programs →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <div className="container-px mx-auto max-w-7xl py-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {[
            { n: 15, s: "+", label: "Years of excellence" },
            { n: 200, s: "+", label: "Student achievements" },
            { n: 20, s: "+", label: "Clubs & activities" },
            { n: 100, s: "%", label: "Academic success" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.08} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-display text-ink">
                <Counter end={stat.n} suffix={stat.s} />
              </div>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY EXCELLA */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Why parents choose Excella</p>
            <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
              A school built around your child's <em className="text-primary not-italic">potential</em>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-muted-foreground text-lg">
              We combine global standards with deep local relevance — nurturing confident, disciplined, and future-ready learners ready for university and life.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: GraduationCap, t: "Strong Academics", d: "Rigorous, internationally benchmarked curriculum." },
            { icon: ShieldCheck, t: "Safe Environment", d: "Caring, secure campus and qualified educators." },
            { icon: Users, t: "Leadership Culture", d: "Clubs, councils, and real responsibility." },
            { icon: Compass, t: "Future-Ready", d: "Critical thinking, SAT prep, and university guidance." },
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

      <HomeCarousel />

      {/* ACADEMIC PATHWAYS */}
      <section className="bg-ink text-ink-foreground py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial opacity-50" />
        <div className="relative container-px mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Academic pathways</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
                One school. Multiple pathways to success.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-ink-foreground/70 text-lg">
                Flexible programs tailored to every student — designed for confidence, mastery, and global opportunity.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { icon: Sparkles, badge: "Foundation", t: "American Montessori", d: "Student-centered learning that builds independence, creativity, and confident academic foundations." },
              { icon: Globe, badge: "Global", t: "SAT Preparation", d: "Structured preparation for international university opportunities with expert guidance." },
              { icon: BookOpen, badge: "National", t: "Rwandan Curriculum", d: "Rwanda's national standards delivered with the same premium care and excellence." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 hover:bg-white/6 transition-colors">
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold">{p.badge}</span>
                    <div className="mt-4 h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                      <p.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl">{p.t}</h3>
                    <p className="mt-3 text-ink-foreground/70 leading-relaxed">{p.d}</p>
                    <Link to="/academics" className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:gap-3 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN LEARNING */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Modern learning experience</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
            Technology that <em className="text-primary not-italic">supports</em> education — not replaces it.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From Chromebooks to research-driven projects, our students learn in modern environments where curiosity meets craftsmanship.
          </p>
          <ul className="mt-7 space-y-3">
            {["Chromebook-equipped classrooms", "Guided online and digital assignments", "Research-based, inquiry learning", "Interactive, collaborative pedagogy"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/85">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {item}
              </li>
            ))}
          </ul>
          <Link to="/academics" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-ink-foreground px-6 py-3.5 font-semibold hover:opacity-90">
            Discover our approach <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal className="lg:col-span-6 order-1 lg:order-2" delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={scienceImg} alt="Student in science lab" className="rounded-2xl aspect-3/4 object-cover object-center w-full shadow-elegant" />
              <img src={classroomImg} alt="Excella classroom" className="rounded-2xl aspect-square object-cover object-center w-full" />
            </div>
            <div className="space-y-4 pt-10">
              <img src={debateImg} alt="Student leadership" className="rounded-2xl aspect-square object-cover object-top w-full" />
              <div className="rounded-2xl bg-ink text-ink-foreground p-6 aspect-3/4 flex flex-col justify-between">
                <Laptop className="h-7 w-7 text-primary" />
                <div>
                  <p className="text-3xl font-display">1:1</p>
                  <p className="text-sm text-ink-foreground/70 mt-1">Chromebook-equipped learning</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STUDENT LIFE */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Student life</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance max-w-2xl">
              Beyond the classroom, character is built.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/student-life" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
              Explore student life <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-6 gap-4">
          <Reveal className="md:col-span-4">
            <div className="group relative overflow-hidden rounded-3xl aspect-16/10">
              <img src={trophiesImg} alt="Trophies and competitions" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 p-8 text-ink-foreground">
                <Trophy className="h-6 w-6 text-primary" />
                <h3 className="mt-2 text-2xl md:text-3xl">Champions on every stage</h3>
                <p className="mt-1 text-ink-foreground/80 max-w-md">Debate, science, arts, and athletics — our students compete nationally and internationally.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl aspect-16/10 md:aspect-auto md:h-full">
              <img src={awardsImg} alt="Award ceremony" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-ink-foreground">
                <h3 className="text-xl">Recognition</h3>
                <p className="text-sm text-ink-foreground/80">A culture of celebration.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.15}>
            <div className="group relative overflow-hidden rounded-3xl aspect-square">
              <img src={classroomImg} alt="Classroom" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 to-transparent" />
              <div className="absolute bottom-0 p-6 text-ink-foreground">
                <h3 className="text-xl">House Spirit</h3>
              </div>
            </div>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.2}>
            <div className="group relative overflow-hidden rounded-3xl aspect-square md:aspect-2/1">
              <img src={debateImg} alt="Debate" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-8 text-ink-foreground">
                <h3 className="text-2xl">Voices that lead</h3>
                <p className="text-sm text-ink-foreground/80 mt-1">Debate, MUN, public speaking and student-led initiatives.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold text-center">Voices of Excella</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance text-center max-w-3xl mx-auto">
              Trusted by parents. Loved by students.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { q: "Excella has given my daughter the confidence and discipline to dream bigger. The teachers truly know each child.", a: "Aline U.", r: "Parent · Primary" },
              { q: "I love the balance — strong academics, leadership, and friendships that feel like family.", a: "Kevin N.", r: "Student · Secondary" },
              { q: "The Montessori foundation combined with SAT prep made our decision easy. A truly future-ready school.", a: "Diane M.", r: "Parent · Secondary" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="h-full rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-elegant transition-shadow">
                  <Quote className="h-7 w-7 text-primary" />
                  <blockquote className="mt-5 text-lg leading-relaxed font-display text-foreground">"{t.q}"</blockquote>
                  <figcaption className="mt-6 pt-6 border-t border-border">
                    <p className="font-semibold">{t.a}</p>
                    <p className="text-sm text-muted-foreground">{t.r}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img src={awardsImg} alt="School leadership" className="rounded-3xl aspect-4/5 object-cover object-center w-full shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl max-w-50 shadow-glow hidden md:block">
              <Quote className="h-5 w-5" />
              <p className="mt-2 text-sm font-semibold leading-snug">Every child has the right to soar.</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Principal's message</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
            "We don't just teach subjects. We grow people."
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            At Excella, we believe true education combines mastery with meaning. Our students leave us prepared not only for university — but for life. With strong values, sharp minds, and the confidence to lead, they go on to shape Rwanda and the world.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We invite you to visit our campus and feel for yourself the warmth, discipline, and ambition that define the Excella experience.
          </p>
          <div className="mt-8">
            <p className="font-display text-xl">Mrs. M. Uwase</p>
            <p className="text-sm text-muted-foreground">Head of School</p>
          </div>
        </Reveal>
      </section>

      {/* CAMPUS */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl aspect-21/9">
            <img src={campusImg} alt="Excella campus" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 text-ink-foreground">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Campus experience</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-display max-w-2xl">A campus designed for inspiration.</h2>
              <a href={virtualTourVideo} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold hover:opacity-90">
                Take a visual tour <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NEWS */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">News & events</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-display">Latest from Excella</h2>
          </Reveal>
          <Link to="/news" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
            All news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { date: "Nov 18", tag: "Achievement", t: "Excella debaters take regional finals", img: debateImg },
            { date: "Nov 12", tag: "Event", t: "Annual Science & Innovation Fair returns", img: scienceImg },
            { date: "Nov 04", tag: "Announcement", t: "Admissions for January 2026 now open", img: campusImg },
          ].map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="group rounded-3xl overflow-hidden border border-border bg-card hover:shadow-elegant transition-shadow">
                <div className="aspect-16/10 overflow-hidden">
                  <img src={n.img} alt={n.t} className={n.img === debateImg ? "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" : "h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold uppercase tracking-wider"><Calendar className="h-3 w-3" /> {n.date}</span>
                    <span>·</span>
                    <span className="uppercase tracking-wider">{n.tag}</span>
                  </div>
                  <h3 className="mt-3 text-xl leading-snug group-hover:text-primary transition-colors">{n.t}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
