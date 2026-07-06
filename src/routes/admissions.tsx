import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  ClipboardCheck,
  FileText,
  Calendar,
  GraduationCap,
  MessageCircle,
  ChevronDown,
  Phone,
} from "lucide-react";
import campus from "@/assets/ExcellaGallery/excella-campus.jpeg";

const steps = [
  {
    icon: MessageCircle,
    t: "Inquire / Visit",
    d: "Message us on WhatsApp for guidance, or visit our campus Monday–Friday (8:00 AM–4:00 PM).",
  },
  {
    icon: FileText,
    t: "Apply",
    d: "Complete the application form and submit required documents.",
  },
  {
    icon: ClipboardCheck,
    t: "Getting approval",
    d: "Your application is reviewed and approved for enrollment.",
  },
  {
    icon: GraduationCap,
    t: "Welcome",
    d: "Receive your offer and join the Excella family.",
  },
];

const faqs = [
  {
    q: "What educational levels does Excella School offer?",
    a: "Excella School offers nursery, primary, and secondary education. Nursery and primary are Montessori-based, while the secondary program offers both National and Montessori pathways.",
  },
  {
    q: "Where are you located?",
    a: "We are located in Kimironko, Gasabo Kigali on KG 103 ST.",
  },
  {
    q: "What languages are used for teaching at Excella School?",
    a: "Teaching is primarily in English. French is offered as a subject, so students can build strong English foundations while also developing French language skills.",
  },
  {
    q: "What is Excella School's assessment approach?",
    a: "Our assessment approach focuses on internal testing and coursework-driven evaluations to provide a holistic view of student progress and growth.",
  },
  {
    q: "When can I visit the campus?",
    a: "You can visit the campus Monday to Friday between 8:00 AM and 4:00 PM. For guidance before you come, message us on WhatsApp.",
  },
];

export function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Join a school where your child is known, challenged, and inspired."
        subtitle="A clear, supportive admissions process — designed with busy families in mind."
        image={campus}
        variant="split"
        actions={
          <a
            href="https://wa.me/250788000000?text=Hi%20Excella!%20I'm%20interested%20in%20admissions.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
          </a>
        }
      />

      {/* TUITION & FEES */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-display">Tuition & Fees</h3>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Excella School offers your child the opportunity to receive high-quality education
              through either the Rwanda National Curriculum or the American Montessori Education
              System. With Excella, your child will have access to endless opportunities and avenues
              for lifelong learning.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 h-full flex flex-col">
              <h4 className="text-xl font-display">American Montessori Program (Grade 7-10)</h4>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
                Discover the tuition details for the American Montessori (Grade 7-10) Program.
                Enroll now and invest in your child's future.
              </p>
              <a
                href="/assets/American-Montesory-Program-Grade-7-10-TuitionFees.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition w-fit"
              >
                View Tuition Details
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 h-full flex flex-col">
              <h4 className="text-xl font-display">American Montessori Program (Secondary)</h4>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed flex-grow">
                View the tuition details for the American Montessori (Secondary) Program. Enroll now
                and invest in your child's future.
              </p>
              <a
                href="/assets/American-Montessory-program-Secondary-TuitionFees.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition w-fit"
              >
                View Tuition Details
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="container-px mx-auto max-w-7xl pb-24">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-display">How to Apply</h3>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                To apply for your child, visit our school campus Monday to Friday, between 8:00 AM
                and 4:00 PM. Alternatively, you can call us or message us on WhatsApp to get
                additional information.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h4 className="font-display text-lg flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" /> Contact Numbers
                  </h4>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li>
                      <a
                        href="tel:+250788306085"
                        className="block hover:text-primary transition-colors"
                      >
                        <span className="font-semibold">School Director:</span>
                        <br />
                        +250 788 306 085
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+250786546676"
                        className="block hover:text-primary transition-colors"
                      >
                        <span className="font-semibold">School Deputy Director:</span>
                        <br />
                        +250 786 546 676
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <h4 className="font-display text-lg flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" /> Other Contact Ways
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <li>• WhatsApp: +250 788 000 000</li>
                    <li>• Email: admissions@excella.school</li>
                    <li>• Campus: Kigali, Rwanda</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/250788000000?text=Hi%20Excella!%20I'm%20interested%20in%20admissions.%20Can%20you%20help%20me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition shadow-glow"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="container-px mx-auto max-w-7xl pb-12">
        <Reveal>
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-8">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              <span className="font-semibold text-primary">Important:</span> At Excella School, we
              do not conduct entrance exams for our students. Please provide accurate and up-to-date
              information about your child's academic background and achievements when applying.
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-4xl pb-24">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display text-center">
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <details
                className="w-full rounded-none"
                open={openFaq === i}
                onToggle={(e) => setOpenFaq((e.target as HTMLDetailsElement).open ? i : null)}
              >
                <summary className="w-full text-left py-5 flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="font-medium text-lg">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 mt-1 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                  />
                </summary>
                <div className="grid transition-all overflow-hidden grid-rows-[1fr] pb-5">
                  <p className="min-h-0 text-muted-foreground leading-relaxed pr-10">{f.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          transition: border-color 0.2s;
        }
        .input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent); }
      `}</style>
    </>
  );
}

function Field({
  label,
  children,
  required,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
