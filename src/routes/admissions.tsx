import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ClipboardCheck, FileText, Calendar, GraduationCap, MessageCircle, ChevronDown, Phone } from "lucide-react";
import campus from "@/assets/excella-campus.jpeg";

const steps = [
  { icon: MessageCircle, t: "Inquire", d: "Submit the inquiry form or message us on WhatsApp." },
  { icon: Calendar, t: "Visit", d: "Book a school tour and meet our educators." },
  { icon: FileText, t: "Apply", d: "Complete the application and submit required documents." },
  { icon: ClipboardCheck, t: "Getting approved", d: "Your application is reviewed and approved for enrollment." },
  { icon: GraduationCap, t: "Welcome", d: "Receive your offer and join the Excella family." },
];

const faqs = [
  { q: "What ages do you accept?", a: "Excella accepts students from Early Years through Secondary School. Specific entry ages depend on the selected pathway." },
  { q: "Which curricula do you offer?", a: "Excella offers two pathways. American Montessori is child-led, hands-on, and built around independence, creativity, and confidence, with SAT preparation in secondary. The Rwandan National Curriculum follows Rwanda's national standards and grade progression, with the same premium care and outcomes." },
  { q: "How do I learn about tuition?", a: "Tuition varies by program and grade. Please contact admissions for current fees and placement guidance." },
  { q: "What documents do I need to apply?", a: "A completed application form, recent academic reports, copy of birth certificate/passport, and one passport photo." },
  { q: "When can I visit the campus?", a: "Tours are available Monday–Friday by appointment. Use the form below or WhatsApp to schedule." },
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
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-ink px-5 py-3 text-sm font-semibold hover:opacity-90">
            Start inquiry <ChevronDown className="h-4 w-4 -rotate-90" />
          </Link>
        }
        meta={[
          <span key="1" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Step-by-step</span>,
          <span key="2" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">Family support</span>,
        ]}
      />

      {/* STEPS */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display max-w-2xl">5 simple steps to enrollment.</h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-5 gap-4 relative">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="relative h-full rounded-3xl bg-card border border-border p-6">
                <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold">{i + 1}</div>
                <s.icon className="h-6 w-6 text-primary mt-3" />
                <h3 className="mt-4 text-lg">{s.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="container-px mx-auto max-w-7xl pb-24 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-display">Admission inquiry</h3>
            <p className="mt-2 text-muted-foreground text-sm">Our team responds within 24 hours.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we will be in touch shortly."); }}>
              <Field label="Parent name" required><input className="input" placeholder="Your full name" required /></Field>
              <Field label="Email" required><input type="email" className="input" placeholder="you@email.com" required /></Field>
              <Field label="Phone / WhatsApp" required><input className="input" placeholder="+250 ..." required /></Field>
              <Field label="Student age / grade"><input className="input" placeholder="e.g. 8 / Grade 3" /></Field>
              <Field label="Preferred pathway" className="sm:col-span-2">
                <select className="input" aria-label="Preferred pathway">
                  <option>American Montessori (includes SAT in secondary)</option>
                  <option>Rwandan National Curriculum</option>
                  <option>Not sure — please advise</option>
                </select>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  American Montessori is the child-led pathway that develops independence and creativity.
                  The Rwandan National Curriculum is the national, grade-based pathway aligned to Rwanda's standards.
                </p>
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <textarea rows={4} className="input" placeholder="Tell us about your child or your questions..." />
              </Field>
              <div className="sm:col-span-2 flex flex-wrap gap-3 mt-2">
                <button className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition">Submit Inquiry</button>
                <a href="https://wa.me/250788000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold hover:bg-accent">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5 space-y-5" delay={0.1}>
          <div className="rounded-3xl bg-ink text-ink-foreground p-8">
            <h4 className="text-xl font-display">Tuition & fees</h4>
            <p className="mt-3 text-ink-foreground/70 text-sm leading-relaxed">Tuition varies by program and grade. Contact admissions for current fees, placement guidance, and enrollment details.</p>
            <a href="mailto:admissions@excella.school" className="mt-5 inline-flex text-primary font-semibold hover:opacity-90">admissions@excella.school →</a>
          </div>
          <div className="rounded-3xl border border-border p-8 bg-card">
            <h4 className="text-xl font-display">Book a campus visit</h4>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">Tours available Monday–Friday. Meet our team, see classrooms, and ask anything.</p>
            <a href="tel:+250788000000" className="mt-5 inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary"><Phone className="h-4 w-4" /> +250 788 000 000</a>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-px mx-auto max-w-4xl pb-24">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-display text-center">Frequently asked questions</h2>
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
                  <ChevronDown className={`h-5 w-5 mt-1 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`} />
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

function Field({ label, children, required, className = "" }: { label: string; children: React.ReactNode; required?: boolean; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
