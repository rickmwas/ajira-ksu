import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import featImg from "@/assets/g2.jpg";
import { useRegister } from "@/components/site/RegisterContext";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Ajira Digital Club, Kisii University" },
      { name: "description", content: "Upcoming workshops, hackathons, and trainings hosted by Ajira Digital Club at Kisii University." },
    ],
  }),
  component: Events,
});

const upcoming = [
  {
    date: "Jul 12, 2026",
    duration: "2 days",
    title: "AI for Builders Bootcamp",
    desc: "A two-day intensive on building real apps with modern AI tools and LLM APIs.",
    loc: "Main Hall, Kisii University",
  },
  {
    date: "Aug 03, 2026",
    duration: "1 day",
    title: "Freelance Launchpad",
    desc: "Set up your Upwork & Fiverr profile, learn pitching, and land your first client.",
    loc: "ICT Lab 2",
  },
  {
    date: "Sep 21, 2026",
    duration: "1 day",
    title: "CyberSec CTF Challenge",
    desc: "Compete in our annual Capture-the-Flag tournament with prizes and recruiter scouts.",
    loc: "ICT Lab 1",
  },
];

const past = [
  {
    date: "Apr 18, 2026",
    title: "Hack the Hill 2026",
    desc: "Our flagship 36-hour hackathon — 28 teams, 6 winners, countless ideas built.",
    loc: "Main Hall",
  },
  {
    date: "Feb 09, 2026",
    title: "Web Dev Weekend",
    desc: "From HTML to deployed app in two days — over 80 students participated.",
    loc: "ICT Lab 2",
  },
  {
    date: "Nov 24, 2025",
    title: "Career Day with Industry Mentors",
    desc: "Engineers and founders shared paths into Kenya's tech economy.",
    loc: "Senate Hall",
  },
];

function Events() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-red block mb-4 sm:mb-5">Events</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Where skills meet community.
            </h1>
            <p className="mt-5 max-w-lg text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              From hackathons to keynote sessions — explore where we've been
              and what's coming up next.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED EVENT ───────────────────────────────── */}
      <section className="container-x py-14 sm:py-20">
        <Reveal>
          <span className="overline block mb-5 sm:mb-6">Featured event</span>
        </Reveal>
        <Reveal delay={80}>
          <div className="border border-border overflow-hidden grid grid-cols-1 md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-3 relative">
              <img
                src={featImg}
                alt="Hack the Hill 2026"
                loading="lazy"
                className="w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-auto md:h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="md:col-span-2 p-6 sm:p-8 md:p-10 flex flex-col bg-surface">
              <span className="inline-flex w-fit items-center rounded-sm bg-brand-red/10 text-brand-red px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] mb-4 sm:mb-5">
                Flagship Event
              </span>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
                Hack the Hill 2026 — Edition II
              </h2>
              <p className="mt-3 sm:mt-4 text-sm text-muted-foreground leading-relaxed">
                36 hours. Real problems. Mentors from Kenya's top tech companies.
                Build, ship, and pitch for a chance to win seed funding and internship offers.
              </p>
              <div className="mt-5 space-y-2.5 text-sm border-t border-border pt-4 sm:pt-5">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <CalendarDays size={14} className="text-brand-green shrink-0" />
                  October 17–18, 2026
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <MapPin size={14} className="text-brand-green shrink-0" />
                  Kisii University Main Hall
                </div>
              </div>
              <div className="mt-6 sm:mt-auto sm:pt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-sm bg-brand-red hover:bg-brand-red-dark px-5 sm:px-6 py-3 text-sm font-semibold text-white transition-colors"
                >
                  Register Interest <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── UPCOMING ─────────────────────────────────────── */}
      <section className="container-x pb-14 sm:pb-20">
        <Reveal>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Upcoming events</h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <EventCard {...e} onRegister={() => setOpen(true)} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PAST ─────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">Past events</h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <PastCard {...e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EventCard({
  date, duration, title, desc, loc, onRegister,
}: {
  date: string; duration: string; title: string; desc: string; loc: string; onRegister: () => void;
}) {
  return (
    <div className="bg-white border border-border p-5 sm:p-6 flex flex-col h-full hover:border-brand-red/25 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-sm">
          Upcoming
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
          <Clock size={11} /> {duration}
        </span>
      </div>
      <div className="text-xs text-muted-foreground mb-2 font-medium">{date}</div>
      <h3 className="font-display text-base sm:text-lg font-bold mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground min-w-0">
          <MapPin size={11} className="text-brand-red shrink-0" />
          <span className="truncate">{loc}</span>
        </div>
        <button
          onClick={onRegister}
          className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:gap-2 transition-all"
        >
          Register <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}

function PastCard({ date, title, desc, loc }: {
  date: string; title: string; desc: string; loc: string;
}) {
  return (
    <div className="bg-white border border-border p-5 sm:p-6 flex flex-col h-full">
      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground/60 bg-muted px-2.5 py-1 rounded-sm w-fit mb-3">
        Past
      </div>
      <div className="text-xs text-muted-foreground mb-2 font-medium">{date}</div>
      <h3 className="font-display text-base sm:text-lg font-bold mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
      <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin size={11} className="shrink-0" /> <span className="truncate">{loc}</span>
      </div>
    </div>
  );
}
