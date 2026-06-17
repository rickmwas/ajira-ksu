"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Users,
  Globe,
  Send,
  ShieldCheck,
  Brain,
  Cloud,
  TrendingUp,
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  MessageSquareQuote,
  Award
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { useRegister } from "@/components/site/RegisterContext";

// Local static assets
import ajiraLogo from "@/assets/ajira-logo.svg";
import ksuLogo from "@/assets/ksu-logo.png";
import heroImg from "@/assets/hero.jpg";
import parallaxImg from "@/assets/parallax.jpg";

const stats = [
  { value: "1,200+", label: "Students Trained", desc: "Peer-led cohort graduations" },
  { value: "480+", label: "Active Members", desc: "Weekly campus workshop peers" },
  { value: "60+", label: "Training Labs", desc: "Hands-on bidding sprints" },
  { value: "KSh 2M+", label: "Student Income", desc: "Earned via online work portals" },
];

const whatWeDoCards = [
  {
    title: "Skills Development",
    desc: "Industry-relevant training in tech and digital skills.",
    icon: Code2,
    colorClass: "bg-[#4285F4] text-white",
  },
  {
    title: "Mentorship",
    desc: "Learn from professionals and industry experts.",
    icon: Users,
    colorClass: "bg-[#FBBC05] text-[#0F172A]",
  },
  {
    title: "Community",
    desc: "Join a network of passionate and driven students.",
    icon: Globe,
    colorClass: "bg-[#34A853] text-white",
  },
  {
    title: "Opportunities",
    desc: "Access internships, gigs and career opportunities.",
    icon: Send,
    colorClass: "bg-[#EA4335] text-white",
  },
];

const keyPrograms = [
  { title: "Software Development", icon: Code2 },
  { title: "Cybersecurity", icon: ShieldCheck },
  { title: "AI & Data Science", icon: Brain },
  { title: "Cloud Computing", icon: Cloud },
  { title: "Digital Marketing", icon: TrendingUp },
  { title: "Freelancing & Entrepreneurship", icon: Briefcase },
];

const upcomingEvents = [
  {
    day: "24",
    month: "MAY",
    category: "WORKSHOP",
    title: "Web Development Bootcamp",
    time: "10:00 AM - 2:00 PM",
    location: "KSU ICT Lab",
  },
  {
    day: "07",
    month: "JUN",
    category: "TRAINING",
    title: "AI & Machine Learning Fundamentals",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual",
  },
  {
    day: "21",
    month: "JUN",
    category: "HACKATHON",
    title: "Ajira Hackathon 2025",
    time: "9:00 AM - 5:00 PM",
    location: "KSU Main Campus",
  },
];

const testimonials = [
  {
    quote: "Through the club's Upwork bidding clinics, I set up a Virtual Assistant profile. In my third year, I landed a contract managing order listings for an e-commerce shop.",
    author: "Amani Wanjiku",
    role: "BSc Computer Science '24",
    destination: "Virtual Assistant & Store Administrator",
  },
  {
    quote: "Our transcription labs in ICT Lab 2 prepared me for the TranscribeMe entrance test. I now finance my accommodation costs through Swahili-to-English audio transcribing.",
    author: "Wycliffe Omondi",
    role: "BSc Applied Statistics '25",
    destination: "Certified Audio Transcriptionist",
  },
];

export default function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="relative bg-white pt-24 pb-16 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Decorative Circles */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & Buttons & Logos */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                <span className="text-brand-gold font-mono text-xs font-bold uppercase tracking-widest block mb-3">
                  Ajira Club Kisii University
                </span>
                <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem] font-bold text-ink tracking-tight">
                  Empowering KSU Students. Building Digital Futures.
                </h1>
                <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  We equip students with in-demand digital skills, mentorship, and opportunities to thrive in the global digital economy.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3.5 text-xs font-bold text-white transition-colors uppercase tracking-wider shadow-md hover:shadow-lg"
                  >
                    Join Ajira Club KSU
                  </button>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-transparent hover:bg-surface px-6 py-3.5 text-xs font-bold text-ink transition-colors uppercase tracking-wider"
                  >
                    Learn More <ArrowRight size={14} className="text-brand-blue" />
                  </Link>
                </div>
              </Reveal>

              {/* Powered By logo strip */}
              <div className="mt-16 pt-8 border-t border-border/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 block mb-4">
                  Powered by
                </span>
                <div className="flex flex-wrap items-center gap-6 opacity-85">
                  <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all">
                    <Image src={ajiraLogo} alt="Ajira Digital" width={80} height={24} className="h-6 w-auto" />
                  </div>
                  
                  {/* Styled Mock Republic of Kenya badge */}
                  <div className="flex items-center gap-1.5 grayscale hover:grayscale-0 transition-all font-mono text-[9px] text-[#22C55E] font-bold border-l border-border pl-3">
                    <div className="flex flex-col">
                      <span className="text-ink text-[8px] leading-none uppercase">Republic of Kenya</span>
                      <span className="text-muted-foreground text-[7px] leading-none font-semibold mt-0.5">Ministry of ICT</span>
                    </div>
                  </div>

                  {/* Styled Mock KEPSA badge */}
                  <div className="grayscale hover:grayscale-0 transition-all font-sans text-xs font-black text-[#003366] border-l border-border pl-3 tracking-tight">
                    KEPSA
                  </div>

                  {/* Styled Mock eMobilis badge */}
                  <div className="grayscale hover:grayscale-0 transition-all font-sans text-xs font-bold text-[#E01E26] border-l border-border pl-3">
                    e<span className="text-[#0056A6]">Mobilis</span>
                  </div>

                  <div className="flex items-center gap-2 border-l border-border pl-3 grayscale hover:grayscale-0 transition-all">
                    <Image src={ksuLogo} alt="Kisii University" width={24} height={24} className="h-6 w-auto" />
                    <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-ink">KSU</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image Card */}
            <div className="lg:col-span-6 flex justify-center">
              <Reveal delay={100} className="w-full max-w-lg">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-overlay border-4 border-white bg-surface ring-1 ring-border">
                  <Image
                    src={heroImg}
                    alt="Smiling students working on a laptop"
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO SECTION ───────────────────────────────── */}
      <section className="bg-surface py-16 sm:py-24 border-y border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">What We Do</h2>
                <p className="text-xs text-muted-foreground mt-2 max-w-md leading-relaxed">
                  We create a supportive community that helps students learn, build and grow.
                </p>
              </div>
              <Link
                href="/programs"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:gap-2.5 transition-all self-start md:self-auto font-mono"
              >
                View Programs <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          {/* 4 Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={idx * 40}>
                  <div className="bg-white border border-border p-6 rounded-sm shadow-card hover:border-brand-blue/20 transition-all group flex flex-col justify-between h-full">
                    <div>
                      <div className={`grid h-10 w-10 place-items-center rounded-sm mb-6 ${card.colorClass}`}>
                        <Icon size={16} />
                      </div>
                      <h3 className="font-display text-sm font-bold text-ink leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR KEY PROGRAMS (DARK THEME) ───────────────────── */}
      <section className="bg-brand-black text-white py-16 sm:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Headings */}
            <div className="lg:col-span-4 space-y-4">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3.5xl font-bold tracking-tight">
                  Our Key Programs
                </h2>
                <p className="text-xs text-white/50 leading-relaxed max-w-xs">
                  Industry in-demand skills for the digital world.
                </p>
                <div className="pt-2">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold hover:gap-2.5 transition-all font-mono"
                  >
                    Explore All <ChevronRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Col: 6 Program Grid Cards */}
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {keyPrograms.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={p.title} delay={idx * 30}>
                      <div className="border border-white/10 hover:border-brand-gold/40 bg-white/5 p-5 rounded-sm hover:bg-white/8 transition-all h-full flex flex-col justify-between">
                        <Icon size={18} className="text-brand-gold mb-4" />
                        <h4 className="font-display text-[13px] font-bold leading-tight text-white/90">
                          {p.title}
                        </h4>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────── */}
      <section className="container-x py-16 sm:py-24 border-b border-border">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">Upcoming Events</h2>
              <p className="text-xs text-muted-foreground mt-2 max-w-md leading-relaxed">
                Don't miss our next events and grow with the community.
              </p>
            </div>
            <Link
              href="/events"
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:underline font-mono"
            >
              View All Events <ChevronRight size={14} />
            </Link>
          </div>
        </Reveal>

        {/* Horizontal Card Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((e, idx) => (
            <Reveal key={e.title} delay={idx * 40}>
              <div className="bg-white border border-border p-5 rounded-sm shadow-card flex flex-col justify-between h-full hover:border-brand-blue/20 transition-all group">
                <div>
                  {/* Event Meta with Left Block Date */}
                  <div className="flex items-start gap-4 mb-5">
                    {/* Left: Date Badge */}
                    <div className="bg-[#0B1528] text-white p-3 rounded-sm flex flex-col items-center justify-center w-14 shrink-0 text-center font-mono shadow-sm">
                      <span className="text-lg font-black leading-none">{e.day}</span>
                      <span className="text-[9px] font-bold mt-1 text-brand-gold leading-none">{e.month}</span>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-1">
                      <span className="inline-block text-[8px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 border border-brand-blue/15 px-2 py-0.5 rounded-sm">
                        {e.category}
                      </span>
                      <h3 className="font-display text-[13px] font-bold text-ink leading-snug group-hover:text-brand-blue transition-colors pt-1">
                        {e.title}
                      </h3>
                    </div>
                  </div>

                  {/* Foot Details */}
                  <div className="border-t border-border/60 pt-4 flex items-center justify-between text-[10px] text-muted-foreground font-mono mt-auto">
                    <span className="flex items-center gap-1">
                      <Clock size={11} className="text-brand-gold" /> {e.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-brand-blue" /> {e.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── STATS SECTION ───────────────────────────────────── */}
      <section className="bg-surface py-12 border-b border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 border-l border-border">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 30}>
                <div className="border-b border-r border-border py-8 px-6 sm:py-10 sm:px-8 bg-white hover:bg-surface/30 transition-colors">
                  <div className="font-display text-2xl sm:text-3.5xl font-black tracking-tight text-ink leading-none font-mono">
                    {s.value}
                  </div>
                  <div className="text-xs font-bold text-foreground mt-2">{s.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-1 font-mono">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI IMPACT TESTIMONIALS ────────────────────── */}
      <section className="container-x py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-lg mx-auto mb-12 sm:mb-16">
            <span className="overline block mb-3 font-mono">Student Success</span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold">Freelance Alumni Success</h2>
            <p className="text-xs text-muted-foreground mt-2">
              Success stories of Kisii University peers who secured online contracts after completing our Ajira training cohorts.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 60}>
              <div className="bg-white border border-border p-6 sm:p-8 rounded-sm relative flex flex-col justify-between shadow-card">
                <span className="absolute top-4 right-4 text-brand-blue/10">
                  <MessageSquareQuote size={40} className="stroke-[1.5]" />
                </span>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic pr-6">"{t.quote}"</p>

                <div className="border-t border-border pt-4 mt-6 flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-black text-white text-xs font-bold font-display">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-display font-bold text-xs text-ink">{t.author}</div>
                    <div className="text-[9px] text-muted-foreground mt-0.5 font-mono">
                      {t.role} · <span className="text-brand-green font-semibold">{t.destination}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-black text-white">
        <Image
          src={parallaxImg}
          alt="Laptops and tech"
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brand-black/80" />

        <div className="container-x relative py-16 sm:py-24 lg:py-32 text-center">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <span className="overline text-brand-gold mb-4 block font-mono">Join Us</span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Unlock your digital career.
              </h2>
              <p className="mt-4 sm:mt-5 text-white/65 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Access peer-led transcription labs, Upwork profile auditing, and official government-sponsored ICT certifications at Kisii University.
              </p>
              <div className="mt-8 flex flex-col xs:flex-row justify-center gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-7 py-3.5 text-xs font-bold text-white transition-colors uppercase tracking-wider"
                >
                  Join the Chapter <ArrowRight size={14} />
                </button>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 hover:bg-white/10 px-7 py-3.5 text-xs font-bold text-white transition-colors uppercase tracking-wider"
                >
                  Explore Workshop Schedule
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
