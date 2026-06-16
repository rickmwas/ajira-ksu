import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  Cpu,
  ShieldCheck,
  Briefcase,
  Rocket,
  Users,
  CalendarDays,
  GraduationCap,
  Globe2,
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
      { property: "og:title", content: "Ajira Digital Club — Kisii University" },
      { property: "og:description", content: "Join a thriving student community building digital careers and impact." },
    ],
  }),
  component: Home,
});

function Home() {
  const { setOpen } = useRegister();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroScale = 1 + Math.min(scrollY, 600) / 2400;
  const parallaxY = Math.min(scrollY, 800) * 0.25;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-brand-black text-white">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `scale(${heroScale})`, transition: "transform 60ms linear" }}
        >
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black" />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_30%,transparent,oklch(0.10_0_0/0.85))]" />
        </div>

        {/* layered floating shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-brand-red/30 blur-3xl animate-float" />
          <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
              Student-led • Future-focused • Kisii University
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Empowering Kisii University Students for the{" "}
              <span className="text-gradient-brand">Digital Future</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/75 leading-relaxed">
              We equip students with practical skills in freelancing, AI, web development,
              cybersecurity, and innovation — and connect them to real online work opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elevated lift lift-hover animate-pulse-glow"
              >
                Register Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-16 z-20 container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border bg-card shadow-elevated">
          {[
            { v: "1,200+", l: "Students Trained", I: GraduationCap },
            { v: "480+", l: "Active Members", I: Users },
            { v: "60+", l: "Events Hosted", I: CalendarDays },
            { v: "350+", l: "Digital Opportunities", I: Globe2 },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="bg-card p-6 sm:p-8 h-full">
                <s.I className="text-brand-red mb-3" size={22} />
                <div className="font-display text-3xl sm:text-4xl font-bold">{s.v}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-x py-24 sm:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">What we do</div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
              Skills, opportunities, and a community that ships.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { I: Code2, t: "Web Development", d: "Modern frontends, full-stack apps, and product engineering with real-world projects." },
            { I: Cpu, t: "AI & Emerging Tech", d: "Hands-on with machine learning, LLMs, automation, and data-driven thinking." },
            { I: ShieldCheck, t: "Cybersecurity", d: "Defensive and offensive fundamentals, secure coding, and ethical hacking practice." },
            { I: Briefcase, t: "Freelancing & Online Work", d: "Upwork, Fiverr, and remote contracts — profile building, pitching, and delivery." },
            { I: Rocket, t: "Entrepreneurship & Innovation", d: "From idea to MVP — design thinking, lean startup, and pitch coaching." },
            { I: Globe2, t: "Digital Career Growth", d: "Mentorship, portfolios, and pathways into Kenya's growing digital economy." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-elevated">
                    <c.I size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER (parallax) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(0, -${parallaxY}px, 0)` }}
        >
          <img src={parallaxImg} alt="" className="h-[140%] w-full object-cover" />
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="container-x relative py-24 sm:py-32 text-center text-white">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Your seat at Kenya's digital table is waiting.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/75">
              Join hundreds of Kisii University students already building real skills,
              real income, and real impact.
            </p>
            <button
              onClick={() => setOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-semibold text-white shadow-elevated lift lift-hover animate-pulse-glow"
            >
              Register & Join the Club <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
