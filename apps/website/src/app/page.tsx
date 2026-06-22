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
  Award,
  BookOpen,
  Rocket,
  LayoutGrid,
  Star,
  GraduationCap
} from "lucide-react";
import { Reveal } from "@ajira/shared/components/site/Reveal";
import { useRegister } from "@ajira/shared/components/site/RegisterContext";

// Local static assets
import ajiraClubLogo from "@ajira/shared/assets/ajiraLOGO.png";
import ksuLogo from "@ajira/shared/assets/ksu-logo.png";
import heroImgNew from "@ajira/shared/assets/heroimg.png";
import parallaxImg from "@ajira/shared/assets/parallax.jpg";

// Local avatars and backgrounds for hero staircase
import avatar1 from "@ajira/shared/assets/g1.jpg";
import avatar2 from "@ajira/shared/assets/g2.jpg";
import avatar3 from "@ajira/shared/assets/g3.jpg";
import avatar4 from "@ajira/shared/assets/g4.jpg";
import kisiiGateBg from "@ajira/shared/assets/kisiiuniversity_ac_ke.png";

// Partner logos — real full-colour assets
import logoAjiraDigital from "@ajira/shared/assets/logo-ajira-digital.svg";
import logoMinistryICT from "@ajira/shared/assets/logo-ministry-ict.svg";
import logoKEPSA from "@ajira/shared/assets/logo-kepsa.svg";
import logoEmobilis from "@ajira/shared/assets/logo-emobilis.svg";
import logoMastercardFdn from "@ajira/shared/assets/logo-mastercard-foundation.svg";
import logoTerraSept from "@ajira/shared/assets/logo-terrasept.svg";

const stats = [
  { value: "500+", label: "Active Members", icon: Users, color: "text-blue-600 bg-blue-50" },
  { value: "20+", label: "Programs & Workshops", icon: GraduationCap, color: "text-green-600 bg-green-50" },
  { value: "50+", label: "Global Opportunities", icon: Globe, color: "text-purple-600 bg-purple-50" },
  { value: "95%", label: "Success Rate", icon: Star, color: "text-amber-500 bg-amber-50" },
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
      <section className="relative bg-[#FAF9F6] bg-noise pt-24 pb-8 overflow-hidden min-h-[92vh] flex items-center border-b border-slate-100">
        {/* Subtle Horizontal & Vertical Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

        {/* Modern Blue-ish & Violet Glows */}
        <div className="absolute top-0 right-0 w-[45%] h-[60%] bg-[radial-gradient(circle_at_70%_20%,rgba(0,86,166,0.08),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[radial-gradient(circle_at_20%_80%,rgba(0,86,166,0.04),transparent_60%)] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Text, Buttons, Avatars */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 text-brand-blue font-sans text-xs font-semibold mb-5 bg-brand-blue/5 border border-brand-blue/10 px-3.5 py-1.5 rounded-full w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                  Empowering KSU Students
                </span>
                <h1 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-extrabold text-ink tracking-tight">
                  Empowering Students.<br />
                  Building <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">Digital Futures.</span>
                </h1>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed max-w-xl">
                  Ajira Club Kisii University equips students with in-demand digital skills, mentorship, and opportunities to thrive in the global digital economy.
                </p>

                <div className="mt-7 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue hover:bg-brand-blue-dark px-6 py-3.5 text-xs font-bold text-white transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/10 uppercase tracking-wider"
                  >
                    Join Ajira Club KSU <ArrowRight size={14} />
                  </button>
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-6 py-3.5 text-xs font-bold text-slate-700 transition-all transform hover:-translate-y-0.5 uppercase tracking-wider shadow-sm hover:shadow-md"
                  >
                    Explore Programs
                  </Link>
                </div>

                {/* Overlapping Avatar pile */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={avatar1} alt="Member 1" width={32} height={32} />
                    <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={avatar2} alt="Member 2" width={32} height={32} />
                    <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={avatar3} alt="Member 3" width={32} height={32} />
                    <Image className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={avatar4} alt="Member 4" width={32} height={32} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-extrabold text-ink leading-tight">500+</span>
                    <span className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">Active Members</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: High-fidelity Staircase Cards and Collage */}
            <div className="lg:col-span-7 flex justify-center items-center relative min-h-[530px] w-full">
              {/* Stepped Cards staircase (Visible only on lg screens) */}
              <div className="relative w-full h-[530px] max-w-[580px] hidden lg:block">
                
                {/* Purple/Blue glowing background behind the cards */}
                <div className="absolute right-[10%] bottom-[15%] w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(0,86,166,0.12),transparent_70%)] blur-2xl pointer-events-none z-0 animate-pulse" />
                <div className="absolute right-[2%] top-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)] blur-2xl pointer-events-none z-0" />

                {/* SVG Connecting Paths with Dotted Curves and Arrowheads */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 580 530" fill="none">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill="#0056A6" opacity="0.6" />
                    </marker>
                  </defs>

                  {/* 01 Learn -> 02 Build */}
                  <path d="M 110 440 C 130 400, 160 395, 180 390" stroke="#0056A6" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" opacity="0.4" />
                  
                  {/* 02 Build -> 03 Connect */}
                  <path d="M 285 330 C 310 310, 315 280, 335 270" stroke="#0056A6" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" opacity="0.4" />

                  {/* 03 Connect -> 04 Earn */}
                  <path d="M 390 220 C 410 200, 420 170, 440 155" stroke="#0056A6" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" opacity="0.4" />

                  {/* 04 Earn -> 05 Grow */}
                  <path d="M 455 110 C 470 85, 490 80, 510 75" stroke="#0056A6" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" opacity="0.4" />
                </svg>

                {/* Card 01: Learn */}
                <div className="absolute bottom-[4%] left-[2%] z-20 w-[185px] bg-white/80 backdrop-blur-md border border-slate-200/50 p-3.5 rounded-2xl shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-black text-brand-blue font-mono">01</span>
                    <BookOpen size={14} className="text-brand-blue" />
                  </div>
                  <h4 className="font-display text-[12px] font-bold text-ink mb-0.5">Learn</h4>
                  <p className="text-[9.5px] text-slate-500 font-medium leading-relaxed">Access practical training and industry-relevant digital skills.</p>
                </div>

                {/* Card 02: Build */}
                <div className="absolute bottom-[23%] left-[21%] z-20 w-[185px] bg-white/80 backdrop-blur-md border border-slate-200/50 p-3.5 rounded-2xl shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-black text-brand-blue font-mono">02</span>
                    <LayoutGrid size={14} className="text-brand-blue" />
                  </div>
                  <h4 className="font-display text-[12px] font-bold text-ink mb-0.5">Build</h4>
                  <p className="text-[9.5px] text-slate-500 font-medium leading-relaxed">Work on real projects and build a strong portfolio that stands out.</p>
                </div>

                {/* Card 03: Connect */}
                <div className="absolute bottom-[43%] left-[36%] z-30 w-[210px] bg-white/80 backdrop-blur-md border border-slate-200/50 p-3 rounded-2xl shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600 shrink-0 mt-0.5">
                    <Users size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-[11px] font-bold text-ink mb-0.5">Connect</h4>
                    <p className="text-[9px] text-slate-500 font-medium leading-normal">Join a community of innovators, mentors and like-minded students.</p>
                  </div>
                </div>

                {/* Card 04: Earn */}
                <div className="absolute top-[22%] right-[13%] z-30 w-[210px] bg-white/80 backdrop-blur-md border border-slate-200/50 p-3 rounded-2xl shadow-lg hover:translate-y-[-2px] transition-all duration-300 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-amber-100 text-amber-600 shrink-0 mt-0.5">
                    <Briefcase size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-[11px] font-bold text-ink mb-0.5">Earn</h4>
                    <p className="text-[9px] text-slate-500 font-medium leading-normal">Discover gigs, freelance opportunities and monetize your skills.</p>
                  </div>
                </div>

                {/* Card 05: Grow */}
                <div className="absolute top-[2%] right-[0%] z-20 w-[185px] bg-white/80 backdrop-blur-md border border-slate-200/50 p-3.5 rounded-2xl shadow-lg hover:translate-y-[-2px] transition-all duration-300">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-black text-brand-blue font-mono">05</span>
                    <Rocket size={14} className="text-brand-blue" />
                  </div>
                  <h4 className="font-display text-[12px] font-bold text-ink mb-0.5">Grow</h4>
                  <p className="text-[9.5px] text-slate-500 font-medium leading-relaxed">Advance your career and impact the world with technology.</p>
                </div>

                {/* Large composite Student Card */}
                <div className="absolute bottom-[4%] right-[0%] w-[340px] h-[250px] rounded-3xl border border-slate-200/40 shadow-xl overflow-hidden bg-white z-10">
                  {/* Gate screenshot background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={kisiiGateBg}
                      alt="Kisii University Campus Background"
                      fill
                      sizes="340px"
                      className="object-cover object-[center_60%] blur-[1px] opacity-35"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
                  </div>

                  {/* Students foreground overlay */}
                  <div className="absolute inset-0 z-10 flex items-end justify-center">
                    <Image
                      src={heroImgNew}
                      alt="Ajira Club Members"
                      className="w-full h-auto object-contain max-h-[92%] hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

              </div>

              {/* Mobile Fallback: Standard image with white bg */}
              <div className="block lg:hidden w-full max-w-md">
                <Reveal delay={100} className="w-full">
                  <div className="relative p-2 rounded-3xl bg-white/40 backdrop-blur-md border border-slate-200/40 shadow-2xl">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full filter blur-xl pointer-events-none" />
                    <Image
                      src={heroImgNew}
                      alt="Ajira Digital Club Kisii University"
                      priority
                      className="w-full h-auto max-h-[350px] object-contain rounded-2xl relative z-10"
                    />
                  </div>
                </Reveal>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar Card */}
          <div className="mt-10 bg-white border border-slate-100 rounded-[2rem] shadow-xl p-5 md:p-6 relative z-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              {stats.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className={`flex items-center gap-4 ${idx > 0 ? "lg:border-l lg:border-slate-100 lg:pl-8" : ""} ${idx % 2 !== 0 ? "pl-2 sm:pl-4 lg:pl-8" : ""}`}>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${s.color}`}>
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                    <div>
                      <div className="font-display text-xl sm:text-2xl font-extrabold text-ink leading-none">
                        {s.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-1 tracking-wide">{s.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trusted Partners */}
          <div className="mt-8 text-center relative z-20">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-slate-400 block mb-5">
              Trusted Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {/* Partner 1: Ministry of ICT */}
              <div className="flex items-center gap-3">
                <Image src={logoMinistryICT} alt="Republic of Kenya Ministry of ICT" width={40} height={40} className="h-9 w-auto object-contain" />
                <div className="flex flex-col text-left text-[9px] font-sans text-slate-600 font-bold uppercase tracking-wide leading-tight">
                  <span className="text-[10px] font-extrabold text-slate-800">Republic of Kenya</span>
                  <span className="text-[8px] font-medium text-slate-400 normal-case font-semibold">Ministry of ICT &</span>
                  <span className="text-[8px] font-medium text-slate-400 normal-case font-semibold">The Digital Economy</span>
                </div>
              </div>

              {/* Partner 2: KEPSA */}
              <div className="flex items-center">
                <Image src={logoKEPSA} alt="KEPSA" width={90} height={28} className="h-6 w-auto object-contain" />
              </div>

              {/* Partner 3: eMobilis */}
              <div className="flex items-center">
                <Image src={logoEmobilis} alt="eMobilis" width={90} height={28} className="h-6 w-auto object-contain" />
              </div>

              {/* Partner 4: Kisii University */}
              <div className="flex items-center gap-2">
                <Image src={ksuLogo} alt="Kisii University" width={28} height={28} className="h-8 w-auto object-contain" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 font-sans">Kisii University</span>
              </div>
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
