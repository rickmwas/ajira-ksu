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
  { I: Code2,      t: "Web Development",              d: "Modern frontends, full-stack apps, and product engineering with real-world projects." },
  { I: Cpu,        t: "AI & Emerging Tech",            d: "Hands-on with machine learning, LLMs, automation, and data-driven problem-solving." },
  { I: ShieldCheck,t: "Cybersecurity",                 d: "Defensive and offensive fundamentals, secure coding, and ethical hacking practice." },
  { I: Briefcase,  t: "Freelancing & Online Work",     d: "Upwork, Fiverr, and remote contracts — profile building, pitching, and delivery." },
  { I: Rocket,     t: "Entrepreneurship & Innovation", d: "From idea to MVP — design thinking, lean startup, and pitch coaching." },
  { I: Globe2,     t: "Digital Career Growth",         d: "Mentorship, portfolios, and pathways into Kenya's growing digital economy." },
];

function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-brand-black text-white">
        {/* Background photo */}
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        {/* Solid dark overlay — no gradient */}
        <div className="absolute inset-0 bg-brand-black/60" />

        {/* Content */}
        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-24 pb-20">
          <div className="max-w-2xl animate-fade-up">
            {/* Category pill */}
            <div className="pill mb-8 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Student-led · Kisii University
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Empowering students<br />for the digital future.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
              We equip students with practical skills in freelancing, AI, web development,
              cybersecurity, and innovation — and connect them to real online work opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Join the Club <ArrowRight size={15} />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-transparent hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
          <span>Scroll</span>
          <span className="h-7 w-px bg-white/30" />
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section className="relative z-10 -mt-1 bg-surface border-y border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <div className="py-10 px-6 sm:px-8">
                  <s.I size={20} className="text-brand-red mb-4" />
                  <div className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1.5 font-medium">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────────── */}
      <section className="container-x py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="overline block mb-3">What we do</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold max-w-xl">
                Skills, community, and real opportunities.
              </h2>
            </div>
            <Link
              to="/about"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all"
            >
              About the club <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
          {skills.map((c, i) => (
            <Reveal key={c.t} delay={i * 50}>
              <div className="group relative bg-white p-7 sm:p-8 h-full hover:bg-surface transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center bg-brand-red text-white">
                    <c.I size={18} />
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug">{c.t}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PARTNERSHIP STRIP ─────────────────────────────────── */}
      <section className="border-y border-border bg-surface">
        <div className="container-x py-10 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground shrink-0">Affiliated with</div>
          <div className="w-px h-5 bg-border hidden sm:block" />
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-default">Ajira Digital Program</span>
            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <span className="hover:text-foreground transition-colors cursor-default">Ministry of ICT, Kenya</span>
            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <span className="hover:text-foreground transition-colors cursor-default">Kisii University</span>
            <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
            <span className="hover:text-foreground transition-colors cursor-default">Digital Economy Blueprint</span>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <img
          src={parallaxImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-brand-black/70" />

        <div className="container-x relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="overline text-brand-red mb-6 block">Join us</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight">
                Your seat at Kenya's digital table is waiting.
              </h2>
              <p className="mt-5 text-white/60 text-base leading-relaxed max-w-lg">
                Join hundreds of Kisii University students already building real skills,
                real income, and real impact in the digital economy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors"
                >
                  Register Now <ArrowRight size={15} />
                </button>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/25 hover:bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition-colors"
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
