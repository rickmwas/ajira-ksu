"use client";

import { ArrowRight, CalendarDays, MapPin, Clock, Users, Star, Award } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";

const featImg = "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80";

interface EventItem {
  id: string;
  category: "Bootcamp" | "Workshop" | "Exam Prep" | "Seminar";
  date: string;
  duration: string;
  title: string;
  desc: string;
  loc: string;
  speaker?: string;
  seats?: number;
}

const upcoming: EventItem[] = [
  {
    id: "transcription-ops",
    category: "Bootcamp",
    date: "Jul 12, 2026",
    duration: "2 Days (Weekend)",
    title: "Transcription & Captioning Intensive",
    desc: "An intensive weekend session to prepare students for TranscribeMe and GoTranscript entrance tests. Focuses on spelling rules, audio tagging, and Swahili-to-English translation.",
    loc: "ICT Lab 2, Main Campus",
    speaker: "Denis Kiplagat (Secretary General)",
    seats: 50,
  },
  {
    id: "va-ops",
    category: "Workshop",
    date: "Aug 03, 2026",
    duration: "1 Day (3 Hours)",
    title: "Virtual Assistant Operations",
    desc: "Master administrative online tasks. Learn customer support templates, Shopify order tracking, calendar coordination, and formatting client data logs in Excel.",
    loc: "ICT Lab 1, Main Campus",
    speaker: "Onyango Michael (Chairperson)",
    seats: 35,
  },
  {
    id: "bid-ops",
    category: "Workshop",
    date: "Sep 21, 2026",
    duration: "1 Day (3 Hours)",
    title: "Upwork & Fiverr Bidding Clinic",
    desc: "A hands-on workshop to write proposals, audit online profiles, negotiate hourly rates, and structure escrow milestones for remote online gigs.",
    loc: "ICT Lab 1, Main Campus",
    speaker: "Erik Mwangi (Outreach Lead)",
    seats: 40,
  },
];

const past = [
  {
    date: "Apr 18, 2026",
    title: "Ajira Digital Certification Sprint",
    desc: "A collaborative 3-day sprint in partnership with Ministry of ICT trainers. Over 120 students certified in Content Writing and Virtual Assistance.",
    loc: "Senate Hall",
    stat: "120+ Certified",
  },
  {
    date: "Feb 09, 2026",
    title: "Transcription Lab Launchpad",
    desc: "Introduction to audio typing shortcuts and foot-pedal configurations. Deployed 20 new workstations in ICT Lab 2 for student use.",
    loc: "ICT Lab 2",
    stat: "80+ Students Trained",
  },
  {
    date: "Nov 24, 2025",
    title: "Kenya Digital Economy Panel",
    desc: "A panel featuring veteran online writers and digital marketing agencies, discussing payment setups, taxes, and M-Pesa client integrations.",
    loc: "Senate Hall",
    stat: "180+ Audience",
  },
];

export default function Events() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="bg-brand-black text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container-x">
          <Reveal>
            <span className="overline text-brand-gold block mb-4 sm:mb-5 font-mono">University Schedule</span>
            <h1 className="font-display text-[2rem] leading-[1.07] sm:text-5xl lg:text-6xl font-bold max-w-2xl">
              Fostering peer digital skills.
            </h1>
            <p className="mt-5 max-w-lg text-white/60 leading-relaxed text-[0.9375rem] sm:text-base">
              Participate in weekly transcription labs, virtual assistant bootcamps, and government ICT certification
              workshops.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURED FLAGSHIP EVENT ───────────────────────── */}
      <section className="container-x py-14 sm:py-20">
        <Reveal>
          <span className="overline block mb-5 sm:mb-6 font-mono">Flagship Event</span>
        </Reveal>
        <Reveal delay={80}>
          <div className="border border-border overflow-hidden grid grid-cols-1 md:grid-cols-5 bg-white shadow-card">
            {/* Image */}
            <div className="md:col-span-3 relative bg-brand-black min-h-[300px]">
              <Image
                src={featImg}
                alt="Ajira Digitization Sprint"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={14} className="text-brand-gold fill-brand-gold" />
                  <span className="text-[10px] font-bold tracking-widest uppercase font-mono text-white/90">
                    Main Campus Event
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold">KSU Ajira Certification Drive 2026</h3>
              </div>
            </div>
            {/* Content */}
            <div className="md:col-span-2 p-6 sm:p-8 md:p-10 flex flex-col bg-surface justify-between">
              <div>
                <span className="inline-flex w-fit items-center rounded-sm bg-brand-blue/10 text-brand-blue px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] mb-4 sm:mb-5 font-mono border border-brand-blue/15">
                  Registration Open
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join the county's largest digital work registration event. Under the guidance of Ministry of ICT
                  trainers, set up your national Ajira portal profiles, complete your training checks, and get official
                  online work credentials.
                </p>
                <div className="mt-6 space-y-3 text-xs border-t border-border pt-5">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <CalendarDays size={13} className="text-brand-green shrink-0" />
                    October 17–19, 2026
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground font-semibold text-foreground/80">
                    <MapPin size={13} className="text-brand-blue shrink-0" />
                    Senate Hall & ICT Lab 1
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-5 py-3.5 text-xs font-bold text-white transition-colors uppercase tracking-wider"
                >
                  Register Free Account <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── UPCOMING EVENTS DIRECTORY ────────────────────── */}
      <section className="container-x pb-14 sm:pb-20">
        <Reveal>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-ink">
            Upcoming Sessions
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e, i) => (
            <Reveal key={e.id} delay={i * 60}>
              <div className="bg-white border border-border p-5 sm:p-6 flex flex-col h-full hover:border-brand-blue/25 transition-colors shadow-card justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-sm border border-brand-green/15 font-mono">
                      {e.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono shrink-0">
                      <Clock size={11} /> {e.duration}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mb-2 font-mono">{e.date}</div>
                  <h3 className="font-display text-base font-bold mb-2.5 leading-snug text-ink">{e.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
                </div>

                <div className="pt-4 border-t border-border mt-4">
                  {e.speaker && (
                    <div className="text-[10px] text-muted-foreground/85 mb-3 flex items-center gap-1.5">
                      <Users size={11} className="text-brand-blue shrink-0" />
                      <span>
                        Led by: <span className="font-semibold text-foreground/80">{e.speaker}</span>
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-3 text-[10px]">
                    <div className="flex items-center gap-1.5 text-muted-foreground min-w-0">
                      <MapPin size={11} className="text-brand-blue shrink-0" />
                      <span className="truncate">{e.loc}</span>
                    </div>
                    <button
                      onClick={() => setOpen(true)}
                      className="shrink-0 inline-flex items-center gap-1 font-bold text-brand-blue hover:gap-1.5 transition-all text-xs font-mono uppercase"
                    >
                      REGISTER <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PAST SESSIONS HISTORICAL LOG ─────────────────── */}
      <section className="bg-surface border-t border-border">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <span className="overline text-muted-foreground/80 block mb-2 font-mono">Archive</span>
            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-ink">
              Past Milestones
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {past.map((e, i) => (
              <Reveal key={e.title} delay={i * 60}>
                <div className="bg-white border border-border p-5 sm:p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground/60 bg-muted px-2 py-0.5 rounded-sm w-fit mb-3">
                      Completed
                    </div>
                    <div className="text-[10px] text-muted-foreground mb-1.5 font-mono">{e.date}</div>
                    <h3 className="font-display text-base font-bold mb-2 leading-snug text-ink">{e.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{e.desc}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1 truncate min-w-0">
                      <MapPin size={11} className="shrink-0" /> <span className="truncate">{e.loc}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-brand-green bg-brand-green/5 px-2 py-0.5 rounded-sm shrink-0 border border-brand-green/10 font-mono text-[9px]">
                      <Award size={10} /> {e.stat.toUpperCase()}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
