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
  Clock,
  MapPin,
  ChevronRight,
  MessageSquareQuote,
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";

// Local static assets
import ksuLogo from "@ajira/shared/assets/ksu-logo.png";
import heroImgNew from "@ajira/shared/assets/heroimg.png";

// Member avatars for credibility stack
import avatar1 from "@ajira/shared/assets/g1.jpg";
import avatar2 from "@ajira/shared/assets/g2.jpg";
import avatar3 from "@ajira/shared/assets/g3.jpg";
import avatar4 from "@ajira/shared/assets/g4.jpg";

// Partner logos — official full-colour assets
import logoMinistryICT from "@ajira/shared/assets/logo-ministry-ict.svg";
import logoKEPSA from "@ajira/shared/assets/logo-kepsa.svg";
import logoEmobilis from "@ajira/shared/assets/logo-emobilis.svg";

const institutionalStats = [
  { value: "500+", label: "Students Engaged", icon: Users },
  { value: "20+", label: "Training Sessions", icon: GraduationCap },
  { value: "50+", label: "Opportunities Shared", icon: Briefcase },
  { value: "Kisii", label: "University Chapter", icon: Building2 },
];

const studentJourneyPillars = [
  {
    step: "01",
    title: "LEARN",
    subtitle: "Practical Skill Tracks",
    desc: "Hands-on training cohorts in audio transcription, web development, data entry, and virtual assistance.",
    icon: Code2,
  },
  {
    step: "02",
    title: "BUILD",
    subtitle: "Real Student Projects",
    desc: "Collaborate on regional digitisation projects and build a verified portfolio that proves execution capability.",
    icon: Brain,
  },
  {
    step: "03",
    title: "EARN",
    subtitle: "Online Gig Contracts",
    desc: "Audit Upwork and Fiverr profiles with experienced peer coaches to land international freelance contracts.",
    icon: Briefcase,
  },
  {
    step: "04",
    title: "CONNECT",
    subtitle: "Peer & Alumni Network",
    desc: "Join an active campus community of tech enthusiasts, lab leads, and working alumni mentors.",
    icon: Users,
  },
  {
    step: "05",
    title: "GROW",
    subtitle: "Leadership & Careers",
    desc: "Earn government-certified credentials, advance into track leadership, and launch your digital career.",
    icon: TrendingUp,
  },
];

const keyPrograms = [
  { title: "Software Development", desc: "Full-stack web application development and modern JavaScript frameworks.", icon: Code2 },
  { title: "Cybersecurity", desc: "Network security, ethical hacking fundamentals, and digital asset protection.", icon: ShieldCheck },
  { title: "AI & Data Science", desc: "Data analysis, Python automation, and machine learning fundamentals.", icon: Brain },
  { title: "Cloud Computing", desc: "Infrastructure management, serverless deployments, and DevOps practices.", icon: Cloud },
  { title: "Digital Marketing", desc: "SEO copywriting, social media strategy, and online brand management.", icon: TrendingUp },
  { title: "Freelancing & Gig Work", desc: "Profile setup, proposal writing, contract negotiation, and client management.", icon: Briefcase },
];

const upcomingEvents = [
  {
    day: "24",
    month: "MAY",
    category: "WORKSHOP",
    title: "Web Development Bootcamp",
    time: "10:00 AM - 2:00 PM",
    location: "KSU ICT Lab 2",
  },
  {
    day: "07",
    month: "JUN",
    category: "TRAINING",
    title: "AI & Machine Learning Fundamentals",
    time: "10:00 AM - 2:00 PM",
    location: "Virtual / Hybrid",
  },
  {
    day: "21",
    month: "JUN",
    category: "HACKATHON",
    title: "Ajira Campus Hackathon 2025",
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

const opportunityHighlights = [
  { type: "Internship", title: "Frontend Developer Intern", organization: "TechNova Solutions", location: "Remote" },
  { type: "Freelance", title: "Swahili Audio Transcriber", organization: "Ajira Digital Hub", location: "Remote" },
  { type: "Part-Time", title: "Campus Data Entry Specialist", organization: "KSU Registry Office", location: "Kisii Campus" },
];

export default function Home() {
  const { setOpen } = useRegister();

  return (
    <>
      {/* ── 01 EDITORIAL HERO SECTION ───────────────────────────────── */}
      <section className="relative bg-[#FAFAFA] pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border overflow-hidden">
        {/* Restrained architectural background grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Messaging */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <Reveal>
                {/* Overline subhead with Gold accent bar */}
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-8 h-0.5 bg-brand-gold rounded-full" />
                  <span className="text-[11px] font-mono font-extrabold uppercase tracking-[0.2em] text-slate-700">
                    EMPOWERING KSU STUDENTS
                  </span>
                </div>

                {/* Editorial Display Headline */}
                <h1 className="font-display text-[2.75rem] leading-[1.08] sm:text-5xl lg:text-[3.75rem] font-extrabold text-ink tracking-tight">
                  Building the{" "}
                  <span className="text-brand-blue underline decoration-brand-gold/60 underline-offset-4">digital</span>
                  <br />
                  future of Kisii University
                  <span className="text-brand-gold">.</span>
                </h1>

                {/* Clear Explanatory Copy */}
                <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
                  Ajira Club equips Kisii University students with practical digital skills, peer mentorship, and verified online work opportunities to create, earn, and build a lasting impact.
                </p>

                {/* Dual Restrained CTAs */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-brand-black hover:bg-brand-black/90 px-7 py-4 text-xs font-bold text-white transition-all uppercase tracking-wider group shadow-sm"
                  >
                    Join Ajira Club{" "}
                    <ArrowRight size={14} className="text-brand-gold group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-slate-300 bg-white hover:bg-slate-50 px-7 py-4 text-xs font-bold text-slate-800 transition-all uppercase tracking-wider shadow-sm group"
                  >
                    Explore Programs{" "}
                    <ArrowRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Credibility Indicator */}
                <div className="mt-10 pt-6 border-t border-slate-200/80 flex items-center gap-4">
                  <div className="flex -space-x-2 overflow-hidden shrink-0">
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={avatar1} alt="Student Member 1" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={avatar2} alt="Student Member 2" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="Student Member 3" width={36} height={36} />
                    <Image className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="Student Member 4" width={36} height={36} />
                  </div>
                  <div className="text-xs">
                    <span className="font-extrabold text-ink font-mono text-sm block leading-none">500+ Active Members</span>
                    <span className="text-[11px] text-slate-500 font-medium mt-0.5 block">Student-led community at Main Campus</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Asymmetric Editorial Geometric Photo Composition */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <Reveal delay={80} className="w-full">
                <div className="relative w-full max-w-[540px] mx-auto">

                  {/* Background Geometric Dot Matrix Motif */}
                  <div className="absolute -top-6 -right-6 w-36 h-36 bg-[radial-gradient(#0056A6_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[radial-gradient(#F4B400_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-35 pointer-events-none" />

                  {/* Vertical Text Watermark Badge (Right Edge) */}
                  <div className="hidden sm:block absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-slate-400 pointer-events-none select-none">
                    LEARN • BUILD • EARN • CONNECT • GROW
                  </div>

                  {/* Primary Asymmetric Framed Photograph */}
                  <div className="relative z-10 bg-white p-2 sm:p-3 border border-slate-200 shadow-xl clip-path-polygon rounded-sm overflow-hidden">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={heroImgNew}
                        alt="Ajira Digital Club Students collaborating at Kisii University"
                        fill
                        sizes="(max-width: 768px) 100vw, 540px"
                        priority
                        className="object-cover object-center hover:scale-[1.01] transition-transform duration-700"
                      />

                      {/* Code Tag Badge Overlay */}
                      <div className="absolute bottom-4 left-4 bg-brand-black/90 text-brand-gold px-3 py-1.5 rounded-sm text-xs font-mono font-bold flex items-center gap-2 backdrop-blur-sm border border-white/10">
                        <Code2 size={15} />
                        <span>ICT LAB 2 · KSU</span>
                      </div>
                    </div>
                  </div>

                  {/* Yellow/Gold Accent Block (Bottom Corner Frame Accent) */}
                  <div className="absolute -bottom-4 -right-2 z-20 w-32 h-12 bg-brand-gold border border-brand-black/20 shadow-md flex items-center justify-center font-mono text-[11px] font-bold text-brand-black uppercase tracking-wider">
                    KSU CHAPTER
                  </div>

                  {/* Circular Stamp Badge Annotation (Top Left) */}
                  <div className="absolute -top-5 -left-5 z-20 w-20 h-20 bg-white border border-slate-200 rounded-full shadow-lg flex items-center justify-center p-1 text-center">
                    <div className="w-full h-full rounded-full border border-dashed border-brand-blue/40 flex flex-col items-center justify-center text-[8px] font-mono font-extrabold text-brand-blue leading-tight">
                      <span>COMMUNITY</span>
                      <ArrowUpRight size={12} className="text-brand-gold my-0.5" />
                      <span>IMPACT</span>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 02 INSTITUTIONAL METRICS & PURPOSE STRIP ─────────────────── */}
      <section className="bg-white border-b border-border py-8 sm:py-10">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            {institutionalStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-3.5 ${
                    idx > 0 ? "md:border-l md:border-slate-200 md:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center text-brand-blue shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-ink leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold mt-1 font-mono uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 5th Column Text Banner (Desktop only) */}
            <div className="hidden lg:block lg:border-l lg:border-slate-200 lg:pl-6 text-xs text-slate-600 leading-relaxed font-medium">
              A student-led community driving digital transformation on campus and beyond.
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 INSTITUTIONAL PARTNERS SECTION ──────────────────────── */}
      <section className="bg-surface py-10 border-b border-border">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                In partnership with
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
              {/* Partner 1: Ministry of ICT */}
              <div className="flex items-center gap-3">
                <Image src={logoMinistryICT} alt="Republic of Kenya Ministry of ICT" width={38} height={38} className="h-9 w-auto object-contain" />
                <div className="flex flex-col text-left text-[9px] font-sans text-slate-700 font-bold uppercase tracking-wide leading-tight">
                  <span className="text-[10px] font-extrabold text-slate-900">Republic of Kenya</span>
                  <span className="text-[8px] font-medium text-slate-500 normal-case">Ministry of ICT & The Digital Economy</span>
                </div>
              </div>

              {/* Partner 2: KEPSA */}
              <div className="flex items-center">
                <Image src={logoKEPSA} alt="KEPSA" width={85} height={26} className="h-6 w-auto object-contain" />
              </div>

              {/* Partner 3: eMobilis */}
              <div className="flex items-center">
                <Image src={logoEmobilis} alt="eMobilis" width={85} height={26} className="h-6 w-auto object-contain" />
              </div>

              {/* Partner 4: Kisii University */}
              <div className="flex items-center gap-2.5">
                <Image src={ksuLogo} alt="Kisii University" width={28} height={28} className="h-8 w-auto object-contain" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 font-sans">Kisii University</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 THE STUDENT JOURNEY (LEARN / BUILD / EARN / CONNECT / GROW) ── */}
      <section className="py-20 sm:py-28 bg-white border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue block mb-3">
                STUDENT EXPERIENCE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                How Ajira transforms your university journey.
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Rather than generic online lectures, Ajira Club structures your path from practical skill acquisition to verified contract delivery.
              </p>
            </div>
          </Reveal>

          {/* 5-Column Editorial Pillar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {studentJourneyPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={idx * 40} className="h-full">
                  <div className="bg-white p-6 sm:p-7 h-full flex flex-col justify-between hover:bg-slate-50/80 transition-colors group">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs font-black text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-sm">
                          {p.step}
                        </span>
                        <Icon size={18} className="text-slate-400 group-hover:text-brand-blue transition-colors" />
                      </div>

                      <h3 className="font-display text-base font-extrabold text-ink mb-1 group-hover:text-brand-blue transition-colors">
                        {p.title}
                      </h3>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold mb-3">
                        {p.subtitle}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-brand-blue transition-colors">
                      <span>Explore Track</span>
                      <ChevronRight size={12} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 05 KEY TRAINING TRACKS (DARK INSTITUTIONAL SECTION) ──────── */}
      <section className="bg-brand-black text-white py-20 sm:py-28 border-b border-white/10">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <Reveal>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-gold block mb-3">
                  CURRICULUM & SKILLS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Industry Training Tracks
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
                  Practical, peer-led modules designed to make students competitive in global online marketplaces.
                </p>
              </div>
            </Reveal>

            <Reveal delay={40}>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-xs font-bold text-white transition-all uppercase tracking-wider font-mono shrink-0"
              >
                View Full Syllabus <ChevronRight size={14} className="text-brand-gold" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyPrograms.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <Reveal key={prog.title} delay={idx * 30}>
                  <div className="border border-white/10 bg-white/5 p-6 rounded-sm hover:border-brand-gold/50 hover:bg-white/[0.07] transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center text-brand-gold mb-5 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                      <span>Hands-on Labs</span>
                      <span className="text-brand-gold">KSU ICT Lab</span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 06 UPCOMING EVENTS & WORKSHOPS ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue block mb-3">
                  CAMPUS SCHEDULE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                  Upcoming Workshops & Hackathons
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                  Join physical sessions in ICT Lab 2 or online interactive webinars with expert trainers.
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blue-dark font-mono shrink-0"
              >
                View Full Event Calendar <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((evt, idx) => (
              <Reveal key={evt.title} delay={idx * 40}>
                <div className="bg-white border border-slate-200 p-6 rounded-sm shadow-card hover:border-brand-blue/30 transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      {/* Date Badge Block */}
                      <div className="bg-brand-black text-white p-3 rounded-sm flex flex-col items-center justify-center w-14 shrink-0 text-center font-mono">
                        <span className="text-xl font-black leading-none">{evt.day}</span>
                        <span className="text-[9px] font-bold mt-1 text-brand-gold leading-none">{evt.month}</span>
                      </div>

                      <div>
                        <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-sm mb-1.5">
                          {evt.category}
                        </span>
                        <h3 className="font-display text-sm font-bold text-ink leading-snug group-hover:text-brand-blue transition-colors">
                          {evt.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-brand-gold" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-brand-blue" /> {evt.location}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 STUDENT STORIES & VERIFIED OUTCOMES ─────────────────── */}
      <section className="py-20 sm:py-28 bg-surface border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-xl mx-auto mb-16">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue block mb-3">
                PROOF OF IMPACT
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                Verified Freelance Outcomes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Direct experiences from Kisii University students earning online income after completing our Ajira training cohorts.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((test, i) => (
              <Reveal key={test.author} delay={i * 60}>
                <div className="bg-white border border-slate-200 p-7 sm:p-8 rounded-sm relative flex flex-col justify-between shadow-card">
                  <span className="absolute top-6 right-6 text-slate-200">
                    <MessageSquareQuote size={44} className="stroke-[1.2]" />
                  </span>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pr-6 relative z-10">
                    "{test.quote}"
                  </p>

                  <div className="border-t border-slate-100 pt-5 mt-6 flex items-center gap-3.5 relative z-10">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-black text-white text-xs font-bold font-display">
                      {test.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs text-ink">{test.author}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                        {test.role} · <span className="text-brand-blue font-semibold">{test.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 LIVE OPPORTUNITIES PREVIEW ─────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-border">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-blue block mb-3">
                  OPPORTUNITIES BOARD
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
                  Recent Gigs & Internships
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md leading-relaxed">
                  Verified contract openings, transcription tasks, and campus digitization sprints for active members.
                </p>
              </div>

              <Link
                href="/portal/login"
                className="inline-flex items-center gap-2 rounded-sm bg-slate-100 hover:bg-slate-200 border border-slate-300 px-5 py-3 text-xs font-bold text-slate-800 transition-colors uppercase tracking-wider font-mono shrink-0"
              >
                Access Portal Board <ChevronRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {opportunityHighlights.map((opp, idx) => (
              <Reveal key={opp.title} delay={idx * 30}>
                <div className="border border-slate-200 p-5 rounded-sm hover:border-brand-blue/30 transition-all bg-white flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-sm mb-3">
                      {opp.type}
                    </span>
                    <h3 className="font-display text-sm font-bold text-ink leading-snug mb-1">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {opp.organization}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{opp.location}</span>
                    <span className="text-brand-blue font-bold">Verified Contract</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 & 10 FINAL INSTITUTIONAL JOIN CTA ───────────────────────── */}
      <section className="relative bg-brand-black text-white py-24 sm:py-32 overflow-hidden">
        {/* Architectural background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-x relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-brand-gold">
                  JOIN AJIRA CLUB KSU
                </span>
                <span className="w-6 h-0.5 bg-brand-gold rounded-full" />
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Unlock your digital potential today.
              </h2>

              <p className="mt-5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-normal">
                Access structured transcription labs, Upwork profile auditing, and official government-sponsored ICT certifications at Kisii University Main Campus.
              </p>

              <div className="mt-9 flex flex-col xs:flex-row justify-center gap-4">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-8 py-4 text-xs font-bold text-white transition-all uppercase tracking-wider shadow-lg group"
                >
                  Join the Chapter <ArrowRight size={14} className="text-brand-gold group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  href="/events"
                  className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-white/25 hover:bg-white/10 px-8 py-4 text-xs font-bold text-white transition-all uppercase tracking-wider"
                >
                  View Event Schedule
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
