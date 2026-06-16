import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Cpu,
  ShieldCheck,
  Briefcase,
  Rocket,
  Globe2,
  Users,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import parallaxImg from "@/assets/parallax.jpg";
import { Reveal } from "@/components/site/Reveal";
import { useRegister } from "@/components/site/RegisterContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajira Digital Club — Kisii University" },
      { name: "description", content: "Empowering Kisii University students for the digital future through freelancing, AI, web dev, cybersecurity, and innovation." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "1,200+", l: "Students Trained", I: GraduationCap },
  { v: "480+",   l: "Active Members",   I: Users },
  { v: "60+",    l: "Events Hosted",    I: CalendarDays },
  { v: "350+",   l: "Opportunities",    I: Globe2 },
];

const skills = [
  { I: Code2,       t: "Web Development",               d: "Modern frontends, full-stack apps, and product engineering with real-world projects." },
  { I: Cpu,         t: "AI & Emerging Tech",             d: "Hands-on with machine learning, LLMs, automation, and data-driven problem-solving." },
  { I: ShieldCheck, t: "Cybersecurity",                  d: "Defensive and offensive fundamentals, secure coding, and ethical hacking practice." },
  { I: Briefcase,   t: "Freelancing & Online Work",      d: "Upwork, Fiverr, and remote contracts — profile building, pitching, and delivery." },
  { I: Rocket,      t: "Entrepreneurship & Innovation",  d: "From idea to MVP — design thinking, lean startup, and pitch coaching." },
  { I: Globe2,      t: "Digital Career Growth",          d: "Mentorship, portfolios, and pathways into Kenya's growing digital economy." },
];

function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-brand-black text-white">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-brand-black/60" />

        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-20 pb-16 sm:pt-24 sm:pb-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="pill mb-7 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Student-led · Kisii University
            </div>

            <h1 className="font-display text-[2.25rem] leading-[1.08] sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Empowering students<br className="hidden sm:block" />
              {" "}for the digital future.
            </h1>

            <p className="mt-5 text-[0.9375rem] sm:text-base text-white/65 leading-relaxed max-w-xl">
              We equip students with practical skills in freelancing, AI, web development,
              cybersecurity, and innovation — and connect them to real online work opportunities.
            </p>

            <div className="mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Join the Club <ArrowRight size={15} />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 bg-transparent hover:bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
          <span>Scroll</span>
          <span className="h-6 w-px bg-white/30" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="container-x">
          {/* border-t border-l on parent; each cell has border-b border-r — creates perfect grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
            {stats.map((s) => (
              <div key={s.l} className="border-b border-r border-border py-7 px-5 sm:py-9 sm:px-7">
                <s.I size={18} className="text-brand-red mb-3" />
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1.5 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────── */}
      <section className="container-x py-16 sm:py-24 lg:py-32">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 sm:mb-14">
            <div>
              <span className="overline block mb-3">What we do</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold max-w-xl">
                Skills, community, and real opportunities.
              </h2>
            </div>
            <Link
              to="/about"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all self-start sm:self-auto"
            >
              About the club <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px bg-border grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {skills.map((c, i) => (
            <Reveal key={c.t} delay={i * 40}>
              <div className="group bg-white p-6 sm:p-7 h-full hover:bg-surface transition-colors">
                <div className="flex items-start gap-3 mb-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center bg-brand-red text-white">
                    <c.I size={17} />
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug mt-0.5">{c.t}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── AFFILIATION STRIP ────────────────────────────────── */}
      <section className="border-y border-border bg-surface overflow-x-auto">
        <div className="container-x py-6">
          <div className="flex items-center gap-3 min-w-max sm:min-w-0 sm:flex-wrap">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70 shrink-0">
              Affiliated with
            </span>
            <span className="w-px h-4 bg-border shrink-0" />
            {["Ajira Digital Program", "Ministry of ICT, Kenya", "Kisii University", "Digital Economy Blueprint"].map((name, i, arr) => (
              <span key={name} className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{name}</span>
                {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-border shrink-0" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <img
          src={parallaxImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-brand-black/70" />

        <div className="container-x relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="overline text-brand-red mb-5 block">Join us</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Your seat at Kenya's digital table is waiting.
              </h2>
              <p className="mt-4 sm:mt-5 text-white/60 text-[0.9375rem] leading-relaxed max-w-lg">
                Join hundreds of Kisii University students already building real skills,
                real income, and real impact in the digital economy.
              </p>
              <div className="mt-7 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-6 sm:px-7 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Register Now <ArrowRight size={15} />
                </button>
                <Link
                  to="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 hover:bg-white/10 px-6 sm:px-7 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Upcoming Events
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
