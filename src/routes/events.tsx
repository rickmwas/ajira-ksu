import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import parallaxImg from "@/assets/parallax.jpg";
import featImg from "@/assets/g2.jpg";
import { useRegister } from "@/components/site/RegisterContext";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Upcoming workshops, hackathons, and trainings hosted by Ajira Digital Club at Kisii University." },
      { property: "og:title", content: "Events — Ajira Digital Club" },
      { property: "og:description", content: "Join our upcoming hackathons, bootcamps, and digital career events." },
    ],
  }),
  component: Events,
});

const upcoming = [
  { date: "Jul 12, 2026", title: "AI for Builders Bootcamp", tag: "Upcoming", desc: "A two-day intensive on building real apps with modern AI tools and LLM APIs.", loc: "Main Hall, Kisii University" },
  { date: "Aug 03, 2026", title: "Freelance Launchpad", tag: "Upcoming", desc: "Set up your Upwork & Fiverr profile, learn pitching, and land your first client.", loc: "ICT Lab 2" },
  { date: "Sep 21, 2026", title: "CyberSec CTF Challenge", tag: "Upcoming", desc: "Compete in our annual Capture-the-Flag tournament with prizes and recruiter scouts.", loc: "ICT Lab 1" },
];

const past = [
  { date: "Apr 18, 2026", title: "Hack the Hill 2026", desc: "Our flagship 36-hour hackathon — 28 teams, 6 winners, countless ideas.", loc: "Main Hall" },
  { date: "Feb 09, 2026", title: "Web Dev Weekend", desc: "From HTML to deployed app in two days — over 80 students participated.", loc: "ICT Lab 2" },
  { date: "Nov 24, 2025", title: "Career Day with Industry Mentors", desc: "Engineers and founders shared paths into Kenya's tech economy.", loc: "Senate Hall" },
];

function Events() {
  const { setOpen } = useRegister();
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-black text-white pt-36 pb-24">
        <div className="absolute inset-0 will-change-transform" style={{ transform: `translate3d(0, ${y * 0.2}px, 0)` }}>
          <img src={parallaxImg} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 to-brand-black" />
        </div>
        <div className="container-x relative">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Events</div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold max-w-3xl">Where skills meet community.</h1>
            <p className="mt-5 max-w-xl text-white/75">From hackathons to keynote sessions — explore where we've been and what's coming up.</p>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-20">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Featured event</div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-4 grid md:grid-cols-5 gap-0 overflow-hidden rounded-3xl border bg-card shadow-elevated">
            <div className="md:col-span-3 relative">
              <img src={featImg} alt="" loading="lazy" className="h-full w-full object-cover aspect-[16/10]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent md:hidden" />
            </div>
            <div className="md:col-span-2 p-8 sm:p-10 flex flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 text-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Flagship
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold">Hack the Hill 2026 — Edition II</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                36 hours. Real problems. Mentors from Kenya's top tech companies. Build, ship, and pitch
                for a chance to win seed funding and internship offers.
              </p>
              <div className="mt-5 space-y-2 text-sm">
                <div className="flex items-center gap-2"><CalendarDays size={16} className="text-brand-green" /> October 17–18, 2026</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-brand-green" /> Kisii University Main Hall</div>
              </div>
              <button
                onClick={() => setOpen(true)}
                className="mt-auto pt-8"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-elevated lift lift-hover">
                  Register Interest <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Upcoming */}
      <section className="container-x pb-20">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Upcoming events</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <EventCard {...e} onRegister={() => setOpen(true)} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Past */}
      <section className="container-x pb-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Past events</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {past.map((e, i) => (
            <Reveal key={e.title} delay={i * 80}>
              <EventCard {...e} tag="Past" muted />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function EventCard({
  date, title, desc, loc, tag = "Upcoming", muted, onRegister,
}: {
  date: string; title: string; desc: string; loc: string;
  tag?: string; muted?: boolean; onRegister?: () => void;
}) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border bg-card p-6 lift lift-hover relative">
      <div className={`absolute inset-x-0 top-0 h-1 ${muted ? "bg-muted-foreground/30" : "bg-gradient-brand"}`} />
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{date}</div>
        <span className={`text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-1 ${muted ? "bg-muted text-muted-foreground" : "bg-brand-green/10 text-brand-green"}`}>{tag}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><MapPin size={14} className="text-brand-red" /> {loc}</div>
      {!muted && (
        <button onClick={onRegister} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:gap-2.5 transition-all">
          Register <ArrowRight size={14} />
        </button>
      )}
    </div>
  );
}
