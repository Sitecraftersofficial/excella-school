import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  Play,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

import campusImg from "@/assets/ExcellaGallery/excella-campus.jpeg";
import campus1Img from "@/assets/ExcellaGallery/Excella-campus1.png";
import campus2Img from "@/assets/ExcellaGallery/Excella-campus2.png";
import scienceImg from "@/assets/ExcellaGallery/excella-science.jpeg";
import classroomImg from "@/assets/ExcellaGallery/Classroom.png";
import trophiesImg from "@/assets/ExcellaGallery/excella-trophies.jpeg";
import awardsImg from "@/assets/ExcellaGallery/excella-awards.jpeg";
import debateImg from "@/assets/ExcellaGallery/excella-debate.jpeg";
import basketballImg from "@/assets/ExcellaGallery/Excella-basketball.png";
import musicClassImg from "@/assets/ExcellaGallery/Excella-musicclass.png";
import chromebookImg from "@/assets/ExcellaGallery/chromebook.png";
import excella1Img from "@/assets/ExcellaGallery/Excella-campus1.png";

import heroBgVideo from "@/assets/Excella-BgHeroVid.mp4";
import virtualTourVideo from "@/assets/Excella-Virtualtour.mp4";

import mrsPeaceQuoteImg from "@/assets/mrsPeace+quote.jpeg";

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
  musicClassImg,
  chromebookImg,
  excella1Img,
];

const rollingSlides = [...carouselSlides, ...carouselSlides];

const educationalQuotes = [
  { q: "Education is the kindling of a flame, not the filling of a vessel.", a: "Socrates" },
  { q: "I cannot teach anybody anything, I can only make them think.", a: "Socrates" },
  { q: "Educating the mind without educating the heart is no education at all.", a: "Aristotle" },
  {
    q: "The purpose of education is to replace an empty mind with an open one.",
    a: "M. S. Forbes",
  },
  {
    q: "To educate a man in mind, and not in morals, is to educate a menace to society.",
    a: "President Theodore Roosevelt",
  },
  {
    q: "Education is that which remains when you have forgotten all you have learnt in school.",
    a: "Albert Einstein",
  },
  {
    q: "Education is not the learning of facts, but rather the training of the mind to think.",
    a: "Albert Einstein",
  },
  { q: "Teaching kids to count is fine. But teaching them what counts is best.", a: "Bob Talbert" },
  { q: "The whole purpose of education is to turn mirrors into windows.", a: "Sydney Harris" },
  { q: "Do not educate your child to be rich. Educate him to be happy.", a: "Anonymous" },
  {
    q: "If you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid.",
    a: "Albert Einstein",
  },
  {
    q: "A good teacher is like a candle - it consumes itself to light the way for others.",
    a: "Kemal Atatürk",
  },
];

function HomeCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const images = carouselSlides;
  const visibleCount = 3;

  const prev = () => setStartIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setStartIndex((i) => (i + 1) % images.length);

  return (
    <section className="container-px mx-auto max-w-7xl pb-24 md:pb-32">
      <div className="relative rounded-3xl border border-border bg-card p-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous images"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-border bg-ink/60 hover:bg-ink/80 text-white grid place-items-center shadow-elegant"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next images"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full border border-border bg-ink/60 hover:bg-ink/80 text-white grid place-items-center shadow-elegant"
        >
          ›
        </button>

        <div className="grid grid-cols-3 gap-0">
          {Array.from({ length: visibleCount }).map((_, offset) => {
            const idx = (startIndex + offset) % images.length;
            const src = images[idx];

            return (
              <img
                key={`${idx}-${offset}`}
                src={src}
                alt="Excella School campus"
                className="h-64 w-full object-cover object-center md:h-80"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  const reduce = useReducedMotion();
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const tourVideoRef = useRef<HTMLVideoElement>(null);

  const tourSeekingRef = useRef(false);
  const tourWasPlayingBeforeSeekRef = useRef(false);
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
              autoPlay
              muted
              loop
              playsInline
              poster={campusImg}
              className="h-full w-full object-cover"
            >
              <source src={heroBgVideo} type="video/mp4" />
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
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Admissions Open
              · Kigali, Rwanda
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] text-balance">
              Where excellence
              <br />
              meets <em className="text-primary not-italic">opportunity</em>.
            </h1>
            <p className="mt-7 max-w-2xl text-lg md:text-xl text-ink-foreground/80 text-balance">
              A premium school in the heart of Kigali — offering American Montessori and the Rwandan
              National Curriculum. SAT is a core part of the secondary Montessori program.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/250788000000?text=Hi%20Excella!%20I'm%20interested%20in%20admissions.%20Can%20you%20help%20me?"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:opacity-90 transition shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </a>
              <a
                href="https://wa.me/250788000000?text=Hi%20Excella!%20I'd%20like%20to%20inquire%20about%20your%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-semibold backdrop-blur hover:bg-white/10 transition"
              >
                <MessageCircle className="h-4 w-4" /> Ask About Programs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAMPUS EXPERIENCE */}
      <section className="container-px mx-auto max-w-7xl pb-6 md:pb-10 -mt-6 md:-mt-10 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] items-stretch">
          <Reveal className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-elegant">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Campus experience
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display text-balance max-w-2xl">
              Discover the campus experience from the start.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              This virtual tour offers a general look at the campus, including athletics, the
              community environment, and the exterior setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/250788000000?text=Hi%20Excella!%20I'd%20like%20to%20schedule%20a%20campus%20visit.%20When%20are%20tours%20available?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
              >
                <MessageCircle className="h-4 w-4" /> Book a Tour
              </a>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold hover:bg-accent transition"
              >
                <Play className="h-4 w-4" /> View more photos
              </Link>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative overflow-hidden rounded-3xl border border-border bg-black shadow-elegant min-h-72 sm:min-h-88 lg:min-h-104"
          >
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
              controls
              playsInline
              preload="metadata"
              poster={campus2Img}
              className="h-full w-full object-cover"
              onPlay={() => {
                tourSeekingRef.current = false;
                tourWasPlayingBeforeSeekRef.current = false;
                setTourPlaying(true);
              }}
              onSeeking={() => {
                tourWasPlayingBeforeSeekRef.current = tourPlaying;
                tourSeekingRef.current = true;
              }}
              onSeeked={() => {
                tourSeekingRef.current = false;

                if (tourWasPlayingBeforeSeekRef.current) {
                  void tourVideoRef.current?.play().catch(() => {
                    tourWasPlayingBeforeSeekRef.current = false;
                    setTourPlaying(false);
                  });
                }
              }}
              onPause={() => {
                if (!tourSeekingRef.current) {
                  setTourPlaying(false);
                }
              }}
              onEnded={() => {
                tourSeekingRef.current = false;
                tourWasPlayingBeforeSeekRef.current = false;
                setTourPlaying(false);
              }}
            >
              <source src={virtualTourVideo} type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </section>

      {/* WHY EXCELLA */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <Reveal className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
              Why parents choose Excella
            </p>
            <h2 className="mt-4 text-4xl md:text-6xl font-display text-balance">
              A school built around your child's{" "}
              <em className="text-primary not-italic">potential</em>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-muted-foreground text-lg">
              Our whole-child approach recognises that academic growth, social development, and
              moral formation belong together. We help each child improve, grow, and thrive without
              reducing progress to rankings alone.
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

      <HomeCarousel />

      {/* ACADEMIC PATHWAYS */}
      <section className="bg-ink text-ink-foreground py-24 md:py-32 relative overflow-hidden">
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
                      to="/academics"
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
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-8 border border-border bg-card flex flex-col md:flex-row items-center gap-8">
            <img
              src={mrsPeaceQuoteImg}
              alt="Mrs. Peace Uwineza, Deputy Director"
              className="rounded-3xl w-full md:w-3/5 lg:w-1/2 h-auto object-cover object-center shadow-elegant max-h-160"
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

