import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, GraduationCap, ShieldCheck, Users, Sparkles, Trophy, Compass, BookOpen, Laptop, Quote, Calendar, Play
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import campusImg from "@/assets/excella-campus.jpeg";
import campus1Img from "@/assets/Excella-campus1.png";
import campus2Img from "@/assets/Excella-campus2.png";
import scienceImg from "@/assets/excella-science.jpeg";
import classroomImg from "@/assets/excella-classroom.jpeg";
import trophiesImg from "@/assets/excella-trophies.jpeg";
import awardsImg from "@/assets/excella-awards.jpeg";
import debateImg from "@/assets/excella-debate.jpeg";
import basketballImg from "@/assets/Excella-basketball.png";
import basketball2Img from "@/assets/Excella-basketball2.png";
import musicClassImg from "@/assets/Excella-musicclass.png";
import chromebookImg from "@/assets/chromebook.png";
import excella1Img from "@/assets/Excella-1.jpeg";
import logoImg from "@/assets/Excella+Am-logo.jpeg";
import excella2Video from "@/assets/Excella-2.mp4";
import virtualTourVideo from "@/assets/Excella-Virtualtour+music.mp4";
import mrsPeaceQuoteImg from "@/assets/mrsPeace+quote.jpeg";
import academicBridgeLogo from "@/assets/academicbridgelogo.png";
import siteCraftersLogo from "@/assets/siteCraftersLogo.png";
import satLogo from "@/assets/sat-logo.jpg";
import universityLogo from "@/assets/university-logopreview.png";
import plpLogo from "@/assets/plp-logo.png";

const carouselSlides = [
  campusImg,
  campus1Img,
  campus2Img,
  scienceImg,
  classroomImg,
  trophiesImg,
  awardsImg,
  debateImg,
  basketballImg,
  basketball2Img,
  musicClassImg,
  chromebookImg,
  excella1Img,
];

const rollingSlides = [...carouselSlides, ...carouselSlides];

const partnersLogos = [academicBridgeLogo, siteCraftersLogo, satLogo, universityLogo, plpLogo];

const educationalQuotes = [
  { q: "Education is the kindling of a flame, not the filling of a vessel.", a: "Socrates" },
  { q: "I cannot teach anybody anything, I can only make them think.", a: "Socrates" },
  { q: "Educating the mind without educating the heart is no education at all.", a: "Aristotle" },
  { q: "The purpose of education is to replace an empty mind with an open one.", a: "M. S. Forbes" },
  { q: "To educate a man in mind, and not in morals, is to educate a menace to society.", a: "President Theodore Roosevelt" },
  { q: "Education is that which remains when you have forgotten all you have learnt in school.", a: "Albert Einstein" },
  { q: "Education is not the learning of facts, but rather the training of the mind to think.", a: "Albert Einstein" },
  { q: "Teaching kids to count is fine. But teaching them what counts is best.", a: "Bob Talbert" },
  { q: "The whole purpose of education is to turn mirrors into windows.", a: "Sydney Harris" },
  { q: "Do not educate your child to be rich. Educate him to be happy.", a: "Anonymous" },
  { q: "If you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid.", a: "Albert Einstein" },
  { q: "A good teacher is like a candle - it consumes itself to light the way for others.", a: "Kemal Atatürk" },
];

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      setVal(end);
      return;
    }

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
  const tourVideoRef = useRef<HTMLVideoElement>(null);
  const [tourPlaying, setTourPlaying] = useState(false);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[72vh] md:min-h-[78vh] flex items-end overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <img
            src={campus1Img}
            alt="Excella campus 1"
            className="h-full w-full object-cover object-center"
          />
          <div className="relative h-full w-full overflow-hidden">
            <video
              ref={heroVideoRef}
              autoPlay muted loop playsInline poster={campusImg}
              className="h-full w-full object-cover"
            >
              <source src={excella2Video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-linear-to-l from-ink/50 via-ink/20 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
          <div className="absolute inset-0 gradient-radial opacity-60" />
        </div>
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
              A premium school in the heart of Kigali — offering American Montessori and the Rwandan National Curriculum. SAT is a core part of the secondary Montessori program.
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

      {/* CAMPUS EXPERIENCE */}
      <section className="container-px mx-auto max-w-7xl pb-6 md:pb-10 -mt-6 md:-mt-10 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] items-stretch">
          <Reveal className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Campus experience</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display text-balance max-w-2xl">
              Discover the campus experience from the start.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              This virtual tour offers a general look at the campus, including athletics, the community environment, and the exterior setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow">
                Book a tour <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold hover:bg-accent transition">
                View more photos <Play className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative overflow-hidden rounded-3xl border border-border bg-black shadow-elegant min-h-72 sm:min-h-88 lg:min-h-104">
            {!tourPlaying && (
              <button
                type="button"
                onClick={async () => {
                  try {
                    await tourVideoRef.current?.play();
                  } catch {
                    setTourPlaying(false);
                  }
                }}
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/35 text-white transition hover:bg-black/45"
                aria-label="Play virtual tour video"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-sm shadow-2xl transition-transform duration-300 hover:scale-105">
                  <Play className="h-8 w-8 fill-current ml-1" />
                </span>
              </button>
            )}
            <video
              ref={tourVideoRef}
              controls={tourPlaying}
              playsInline
              preload="metadata"
              poster={campus2Img}
              className="h-full w-full object-cover"
              onPlay={() => setTourPlaying(true)}
              onPause={() => setTourPlaying(false)}
              onEnded={() => setTourPlaying(false)}
            >
              <source src={virtualTourVideo} type="video/mp4" />
            </video>
          </Reveal>
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
              Our whole-child approach recognises that academic growth, social development, and moral formation belong together. We help each child improve, grow, and thrive without reducing progress to rankings alone.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: GraduationCap, t: "Whole-child development", d: "We nurture academic growth, social maturity, and spiritual balance so children grow into whole adults." },
            { icon: ShieldCheck, t: "Positive support", d: "A secure, encouraging environment where children are guided with care and can learn confidently." },
            { icon: Users, t: "Life skills and character", d: "Practical lessons, responsibility, and leadership experiences that prepare students for everyday life." },
            { icon: Compass, t: "Independent-minded futures", d: "Children learn to think critically, solve problems, and become balanced young adults ready for the world." },
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
                One school. Two programs. Endless futures.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-ink-foreground/70 text-lg">
                Flexible programs tailored to every student — designed for confidence, mastery, and global opportunity.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {[
              { icon: Sparkles, badge: "International", t: "American Montessori", d: "An internationally guided Montessori approach: child-led, hands-on learning that builds independence, creativity and lifelong curiosity. Secondary students receive SAT preparation as part of the pathway." },
              { icon: BookOpen, badge: "National", t: "Rwandan Curriculum", d: "Rwanda's national curriculum, focused on core competencies and local context — delivered with the same premium teaching, standards, and measurable outcomes." },
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

      <section className="container-px mx-auto max-w-7xl py-24 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Modern learning experience</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
            Technology that <em className="text-primary not-italic">supports</em> education — not replaces it.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We recognise that children do not come to school empty-headed. They arrive with knowledge from home, family, and experience — and our teachers build on that foundation with care, curiosity, and encouragement.
          </p>
          <ul className="mt-7 space-y-3">
            {["Teaching from the heart, not only from the book", "Children learn through encouragement and praise", "Academic, social, and spiritual growth", "A balanced approach to assessment and progress"].map((item) => (
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
              <div className="relative overflow-hidden rounded-2xl aspect-3/4 bg-ink shadow-elegant">
                <img src={chromebookImg} alt="Chromebook equipped learning" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ink-foreground">
                  <Laptop className="h-7 w-7 text-primary" />
                  <p className="text-sm text-ink-foreground/80 mt-1">Chromebook-equipped learning</p>
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
            </div>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.2}>
            <div className="group relative overflow-hidden rounded-3xl aspect-square md:aspect-2/1">
              <img src={basketballImg} alt="House spirit" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-8 text-ink-foreground">
                <h3 className="text-2xl">Voices that lead</h3>
                <p className="mt-1 text-sm text-ink-foreground/80">Cheering, competing, and showing pride for every house.</p>
                <p className="text-sm text-ink-foreground/80 mt-1">Debate, MUN, public speaking and student-led initiatives.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* WISDOM LAB */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Wisdom Lab</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">Life lessons led by our director.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Wisdom Lab translates our whole-child philosophy into practice. Through inspiring quotes, reflection, and discussion, students learn that education is not only about facts — it is about building character, confidence, discipline, and a balanced life.</p>
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
            <p className="mt-6 text-muted-foreground">At the end of every term students sit a Life Skills exam that reflects the lessons, ideas, and reflections from Wisdom Lab sessions. The aim is not to compare children harshly, but to help each learner grow into a thoughtful and confident person.</p>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col items-center text-center shadow-elegant">
              <div className="relative">
                <div aria-hidden="true" className="h-40 w-40 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 border border-border shadow-md" />
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <span className="bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded">Image coming soon</span>
                </div>
              </div>
              <p className="mt-5 font-display text-xl">Mr. Theo</p>
              <p className="text-sm text-muted-foreground">School Director</p>
              <blockquote className="mt-4 text-sm italic text-muted-foreground">“We do not just fill minds with facts. We help children grow into whole people.”</blockquote>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Life skills at Excella School</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">A glimpse of our pursuit of balanced education.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              In keeping with our vision of holistic or whole-child development, students are exposed to a wide range of experiences beyond the traditional academic subjects. We equip them with practical life skills so they can confidently face the world outside school.
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
                  <li key={item} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
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
            <div aria-hidden="true" className="w-full rounded-3xl aspect-4/5 bg-gradient-to-br from-slate-300 to-slate-500 border border-border shadow-md" />
            <div className="absolute inset-0 flex items-end justify-start p-4 pointer-events-none">
              <span className="bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded">Director's image coming soon</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Director's message</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance">
            An overview of the educational thinking and practice at Excella School.
          </h2>
          <blockquote className="mt-6 border-l-4 border-primary pl-5 text-lg md:text-xl font-display leading-relaxed text-balance">
            "High quality education is priceless and timeless: fame and beauty fade away, riches quickly vanish, but, here is the unchanging truth - no one whomsoever can take away your education from you!!"
          </blockquote>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We shall endeavour to highlight our delivery in our educational philosophy, our vision and mission, our preferred teaching-learning methodologies, and our assessment and evaluation methodologies.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We draw our inspiration from great thinkers such as Dr. Albert Einstein and Dr. Maria Montessori. Their wisdom reminds us to teach Excella children how to be creative learners. Likewise, the courage of Nelson Mandela, Dr. Rev. Martin Luther King Jr., and Mahatma Gandhi reminds us to nurture independent-minded learners.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Creativity and independent-mindedness are at the very heart of our education vision. If you have any questions or need clarification, please contact me on 0788306086.
          </p>
          <div className="mt-8">
            <p className="font-display text-xl">Théo Turatsinze</p>
            <p className="text-sm text-muted-foreground">Mr. Theo, Director, Excella School</p>
            <p className="text-sm text-muted-foreground">M.Ed, Univ. of Bath, U.K.</p>
          </div>
        </Reveal>
      </section>

      {/* DEPUTY DIRECTOR */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-8 border border-border bg-card flex flex-col md:flex-row items-center gap-8">
            <img src={mrsPeaceQuoteImg} alt="Mrs. Peace Uwineza, Deputy Director" className="rounded-3xl w-full md:w-3/5 lg:w-1/2 h-auto object-cover object-center shadow-elegant max-h-[640px]" />
            <div className="md:flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Deputy Director</p>
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-5 text-xl leading-relaxed font-display text-foreground">“Experience a family-driven, friendly, and intimate
                atmosphere at Excella School, where children are not just
                educated but also nurtured to be happy and fulfilled.”</blockquote>
              <p className="mt-4 font-semibold text-foreground">Mrs Peace Uwineza<br />Deputy Director, Excella School</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EDUCATIONAL QUOTES */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Educational quotes</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-display text-balance max-w-3xl">Quotes that inspire Excella School's holistic education.</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-3xl">These are the ideas that shape our whole-child thinking, our mission, and our daily teaching practice.</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {educationalQuotes.map((quote, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05}>
              <figure className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm hover:shadow-elegant transition-shadow">
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-5 text-lg leading-relaxed font-display text-foreground">“{quote.q}”</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="font-semibold text-foreground">{quote.a}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

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

      {/* PARTNERS */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold text-center">Our partners</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-display text-center">Trusted collaborations</h2>
        </Reveal>
        <div className="mt-10 flex flex-nowrap items-start justify-center gap-6 md:gap-10 overflow-x-auto pb-4">
          {partnersLogos.map((logo, i) => {
            const topRow = i % 2 === 0;

            return (
              <Reveal key={i} delay={i * 0.04}>
                <div className={`shrink-0 rounded-2xl border border-border bg-card p-6 flex items-center justify-center hover:border-primary/40 transition-colors ${topRow ? "mt-0" : "mt-14 md:mt-20"}`}>
                  <img src={logo} alt="Partner logo" className="h-12 md:h-16 w-auto object-contain" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}

// Wisdom Lab: special life-skills lecture section (director-led)
