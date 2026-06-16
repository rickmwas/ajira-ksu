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
  CheckCircle2,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import parallaxImg from "@/assets/parallax.jpg";
import g1 from "@/assets/g1.jpg";
import g3 from "@/assets/g3.jpg";
import g5 from "@/assets/g5.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { useRegister } from "@/components/site/RegisterContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ajira Digital Club — Kisii University" },
      {
        name: "description",
        content:
          "Empowering Kisii University students for the digital future through freelancing, AI, web dev, cybersecurity, and innovation.",
      },
    ],
  }),
  component: Home,
});

const skills = [
  { I: Code2,       t: "Web Development",              d: "Modern frontends, full-stack apps, and product engineering with real-world projects." },
  { I: Cpu,         t: "AI & Emerging Tech",            d: "Hands-on with machine learning, LLMs, automation, and data-driven problem-solving." },
  { I: ShieldCheck, t: "Cybersecurity",                 d: "Defensive and offensive fundamentals, secure coding, and ethical hacking practice." },
  { I: Briefcase,   t: "Freelancing & Online Work",     d: "Upwork, Fiverr, and remote contracts — profile building, pitching, and delivery." },
  { I: Rocket,      t: "Entrepreneurship",              d: "From idea to MVP — design thinking, lean startup methodology, and pitch coaching." },
  { I: Globe2,      t: "Digital Career Growth",         d: "Mentorship, portfolios, and pathways into Kenya's growing digital economy." },
];

const steps = [
  {
    n: "01",
    t: "Register your interest",
    d: "Fill in the short membership form. We accept all Kisii University students regardless of faculty or year.",
  },
  {
    n: "02",
    t: "Attend onboarding",
    d: "Join our monthly orientation session. Meet the team, explore tracks, and find your digital niche.",
  },
  {
    n: "03",
    t: "Build, earn & grow",
    d: "Join workshops, compete in hackathons, take on freelance work, and advance Kenya's digital economy.",
  },
];

function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO — Split layout
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden bg-brand-black text-white">
        {/* Background */}
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-brand-black/65" />

        {/* Content grid */}
        <div className="container-x relative z-10 grid min-h-[100svh] grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] items-center gap-10 pt-28 pb-16">

          {/* Left — headline */}
          <div className="animate-fade-up">
            <div className="pill mb-8 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Student-led · Kisii University
            </div>

            <h1 className="font-serif text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[1.06] text-white">
              Kenya's next generation<br />
              of digital{" "}
              <em className="text-brand-red not-italic">professionals</em>
              <br />starts here.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg font-light">
              We equip Kisii University students with practical skills in freelancing,
              AI, web development, cybersecurity, and innovation — and connect them
              to real online work opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 items-center">
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-6 py-3 text-sm font-semibold text-white transition-colors font-display"
              >
                Join the Club <ArrowRight size={15} />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-sm border border-white/25 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition-colors font-display"
              >
                Learn More
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-white/40 font-display uppercase tracking-[0.12em]">
              <span>Affiliated with Ministry of ICT</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Ajira Digital Program</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Since 2020</span>
            </div>
          </div>

          {/* Right — stat panel (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "200ms" }}>

            {/* Stats card */}
            <div className="stat-panel p-6 space-y-5">
              <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-white/40">
                Club at a glance
              </div>

              {[
                { v: 1200, s: "+", l: "Students Trained",    I: GraduationCap },
                { v: 480,  s: "+", l: "Active Members",      I: Users },
                { v: 60,   s: "+", l: "Events Hosted",       I: CalendarDays },
              ].map((st) => (
                <div key={st.l} className="flex items-center gap-3 border-b border-white/8 pb-4 last:border-0 last:pb-0">
                  <div className="grid h-9 w-9 shrink-0 place-items-center bg-brand-red/15 text-brand-red">
                    <st.I size={16} />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-white leading-none">
                      <Counter target={st.v} suffix={st.s} />
                    </div>
                    <div className="text-[11px] text-white/50 mt-0.5 font-display">{st.l}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="stat-panel p-6">
              <div className="quote-mark leading-none mb-2 text-4xl">&ldquo;</div>
              <p className="text-sm text-white/75 leading-relaxed italic font-serif">
                Ajira Digital Club changed how I see my future. I landed my first freelance
                contract three weeks after joining.
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-red text-white text-xs font-bold font-display">
                  OM
                </div>
                <div>
                  <div className="text-xs font-semibold text-white font-display">Onyango Michael</div>
                  <div className="text-[10px] text-white/40 font-display uppercase tracking-wide">Chairperson, 3rd Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-[10px] uppercase tracking-[0.2em] font-display">
          <span>Scroll</span>
          <span className="h-8 w-px bg-white/25" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR — animated counters
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-surface border-b border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {[
              { v: 1200, s: "+", l: "Students Trained",       I: GraduationCap },
              { v: 480,  s: "+", l: "Active Members",         I: Users },
              { v: 60,   s: "+", l: "Events & Workshops",     I: CalendarDays },
              { v: 350,  s: "+", l: "Opportunities Created",  I: Globe2 },
            ].map((st, i) => (
              <Reveal key={st.l} delay={i * 60}>
                <div className="py-9 px-7">
                  <st.I size={18} className="text-brand-red mb-4" />
                  <div className="font-serif text-4xl sm:text-5xl text-ink leading-none">
                    <Counter target={st.v} suffix={st.s} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-display font-medium">{st.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SKILLS — editorial grid
      ═══════════════════════════════════════════════════════ */}
      <section className="container-x py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="overline mb-3">What we do</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl max-w-lg leading-[1.1] font-normal">
                Skills that translate to real income.
              </h2>
            </div>
            <Link
              to="/about"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all font-display"
            >
              About the club <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-px bg-border border border-border sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((c, i) => (
            <Reveal key={c.t} delay={i * 50}>
              <div className="group bg-white hover:bg-surface transition-colors p-7 sm:p-8 h-full">
                <div className="grid h-10 w-10 place-items-center bg-brand-red text-white mb-5">
                  <c.I size={17} />
                </div>
                <h3 className="font-display text-base font-bold mb-2 leading-snug">{c.t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — 3 steps
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-brand-black text-white">
        <div className="container-x py-24 sm:py-32">
          <Reveal>
            <span className="overline text-brand-red mb-4">How it works</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] max-w-xl mb-14">
              Three steps to your digital career.
            </h2>
          </Reveal>

          <div className="grid gap-px bg-white/8 border border-white/10 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="bg-brand-black p-8 sm:p-10 h-full relative overflow-hidden group hover:bg-[#1a1a1a] transition-colors">
                  {/* Large italic serif number */}
                  <div className="font-serif text-[6rem] leading-[0.8] font-normal italic text-brand-red opacity-15 select-none mb-6">
                    {s.n}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-px bg-brand-red" />
                    <span className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-brand-red">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{s.t}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIAL — large pull quote
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-border bg-white">
        <div className="container-x py-24 sm:py-28">
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 items-start mb-8">
                <span className="overline text-brand-red pt-1">Member story</span>
                <span className="section-rule mt-2" />
              </div>

              <blockquote>
                <div className="quote-mark mb-4">&ldquo;</div>
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.35] text-ink max-w-3xl">
                  Before joining Ajira Digital Club, I didn't know you could earn from your laptop.
                  Now I run three Fiverr gigs and fund my own university fees.
                </p>
              </blockquote>

              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-black text-white font-display font-bold text-sm">
                  EK
                </div>
                <div>
                  <div className="font-display font-semibold text-ink">Earnest Kethi</div>
                  <div className="text-xs text-muted-foreground font-display uppercase tracking-[0.12em] mt-0.5">
                    Membership & Engagement Lead · BSc IT
                  </div>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 text-[11px] font-display text-muted-foreground uppercase tracking-[0.12em]">
                  <CheckCircle2 size={14} className="text-brand-green" />
                  Verified member
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PHOTO ROW — editorial
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-surface border-b border-border overflow-hidden">
        <div className="container-x py-12">
          <Reveal>
            <div className="grid grid-cols-3 gap-3">
              {[g1, g3, g5].map((src, i) => (
                <div key={i} className="overflow-hidden aspect-[4/3]">
                  <img
                    src={src}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-xs text-muted-foreground font-display uppercase tracking-[0.12em]">
                From our events & workshops
              </p>
              <Link
                to="/gallery"
                className="text-xs font-semibold text-brand-red hover:gap-2 inline-flex items-center gap-1.5 transition-all font-display"
              >
                View Gallery <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          AFFILIATION STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="border-b border-border bg-white">
        <div className="container-x py-8 flex flex-col sm:flex-row items-center gap-4">
          <div className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-muted-foreground shrink-0">
            Affiliated with
          </div>
          <span className="w-px h-4 bg-border hidden sm:block" />
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-6 gap-y-2">
            {[
              "Ajira Digital Program",
              "Ministry of ICT, Kenya",
              "Kisii University",
              "Digital Economy Blueprint 2025",
            ].map((name) => (
              <span key={name} className="text-xs font-display font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA — dark with photo
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <img
          src={parallaxImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-brand-black/75" />

        <div className="container-x relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="overline text-brand-red mb-6">Join us today</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.1]">
                Your seat at Kenya's digital table is waiting.
              </h2>
              <p className="mt-5 text-white/55 text-base leading-relaxed max-w-lg">
                Join hundreds of Kisii University students already building real skills,
                real income, and real impact in the digital economy.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-7 py-3.5 text-sm font-semibold text-white transition-colors font-display"
                >
                  Register Now <ArrowRight size={15} />
                </button>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/20 hover:bg-white/10 px-7 py-3.5 text-sm font-semibold text-white/80 transition-colors font-display"
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
