"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Menu, X, LayoutDashboard, LogOut, ChevronDown, User, ArrowRight, BookOpen, Calendar, Image as GalleryIcon, Users, PhoneCall, Sparkles } from "lucide-react";
import { useRegister } from "./RegisterContext";
import { usePortal } from "../../hooks/usePortalState";
import Image from "next/image";
import ajiraClubLogo from "@ajira/shared/assets/ajiraLOGO.png";
import { TopPartnerBar } from "./TopPartnerBar";

export function Navbar() {
  const { setOpen } = useRegister();
  const { user, logout } = usePortal();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    router.push("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 font-sans ${
        scrolled ? "bg-white border-b border-slate-200 shadow-sm" : "bg-white/95 border-b border-slate-100 backdrop-blur-md"
      }`}
    >
      <TopPartnerBar />
      
      <div className="container-x flex h-16 sm:h-20 items-center justify-between gap-6">
        {/* Brand — Ajira Club KSU logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Ajira Club Kisii University">
          <Image
            src={ajiraClubLogo}
            alt="Ajira Club Kisii University"
            width={320}
            height={64}
            className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-[1.01]"
            priority
          />
        </Link>

        {/* Desktop Navigation (Grouped Information Architecture) */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {/* Programs */}
          <Link
            href="/programs"
            className={`px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
              pathname === "/programs"
                ? "text-brand-blue font-bold bg-slate-50"
                : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
            }`}
          >
            Programs
          </Link>

          {/* Community Group */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("community")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
                pathname === "/events" || pathname === "/gallery"
                  ? "text-brand-blue font-bold bg-slate-50"
                  : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Community <ChevronDown size={14} className="opacity-60" />
            </button>

            {activeMenu === "community" && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-md shadow-overlay p-1.5 animate-fade-in z-50">
                <Link
                  href="/events"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <Calendar size={14} className="text-brand-blue" />
                  <span>Workshops & Events</span>
                </Link>
                <Link
                  href="/gallery"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <GalleryIcon size={14} className="text-brand-gold" />
                  <span>Campus Photo Gallery</span>
                </Link>
              </div>
            )}
          </div>

          {/* Impact Group */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("impact")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
                pathname === "/blog"
                  ? "text-brand-blue font-bold bg-slate-50"
                  : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              Impact <ChevronDown size={14} className="opacity-60" />
            </button>

            {activeMenu === "impact" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-slate-200 rounded-md shadow-overlay p-1.5 animate-fade-in z-50">
                <Link
                  href="/#member-projects"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <Sparkles size={14} className="text-brand-gold" />
                  <span>Member Showcase</span>
                </Link>
                <Link
                  href="/blog"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <BookOpen size={14} className="text-brand-blue" />
                  <span>Articles & Stories</span>
                </Link>
              </div>
            )}
          </div>

          {/* About Group */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold transition-colors rounded-md ${
                pathname === "/about" || pathname === "/leadership" || pathname === "/contact"
                  ? "text-brand-blue font-bold bg-slate-50"
                  : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              About <ChevronDown size={14} className="opacity-60" />
            </button>

            {activeMenu === "about" && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-md shadow-overlay p-1.5 animate-fade-in z-50">
                <Link
                  href="/about"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <Users size={14} className="text-brand-blue" />
                  <span>About KSU Ajira</span>
                </Link>
                <Link
                  href="/leadership"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <User size={14} className="text-ksu-maroon" />
                  <span>Student Leadership</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-sm"
                >
                  <PhoneCall size={14} className="text-brand-gold" />
                  <span>Contact & Location</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right Utility Actions: Portal Button + Join CTA */}
        <div className="flex items-center gap-3">
          {user ? (
            /* ACCOUNT MENU WHEN LOGGED IN */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2.5 border border-slate-200 bg-slate-50 p-1.5 pr-3 rounded-md hover:border-brand-blue/50 transition-colors"
                aria-label="User profile menu"
              >
                <div className="grid h-7 w-7 place-items-center rounded-sm bg-ajira-navy text-white text-xs font-bold font-display">
                  {getInitials(user.name)}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-slate-800 max-w-[120px] truncate">
                  {user.name.split(" ")[0]}
                </span>
                <ChevronDown size={14} className="text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md border border-slate-200 bg-white p-1.5 shadow-overlay animate-scale-in text-xs text-slate-800 shrink-0 z-50">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="font-bold truncate text-sm font-display text-slate-900">{user.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-0.5 truncate">{user.regId}</p>
                  </div>

                  <Link
                    href="/portal/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-left hover:bg-slate-50 font-semibold transition-colors text-brand-blue"
                  >
                    <LayoutDashboard size={14} />
                    Member Portal
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2.5 rounded-sm px-3 py-2 text-left hover:bg-slate-50 font-semibold text-rose-600 transition-colors"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Member Portal Button */}
              <Link
                href="/portal/login"
                className="hidden sm:inline-flex items-center justify-center border border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:text-slate-900 px-4 py-2 text-xs font-bold transition-all rounded-md"
              >
                Portal Login
              </Link>

              {/* Join Ajira CTA */}
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold text-white transition-all rounded-md group shadow-sm"
              >
                <span>Join Ajira</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform text-white/90" />
              </button>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMobile((v) => !v)}
            className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-700 transition-colors"
            aria-label={mobile ? "Close menu" : "Open menu"}
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobile && (
        <div className="lg:hidden bg-white border-t border-slate-200 animate-fade-in shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="container-x py-6 flex flex-col gap-5">
            {/* Direct Portal CTA */}
            {!user && (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setMobile(false);
                    setOpen(true);
                  }}
                  className="flex-1 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold py-3 rounded-md text-center"
                >
                  Join the Club
                </button>
                <Link
                  href="/portal/login"
                  onClick={() => setMobile(false)}
                  className="flex-1 border border-slate-200 text-slate-800 text-xs font-bold py-3 rounded-md text-center hover:bg-slate-50"
                >
                  Portal Login
                </Link>
              </div>
            )}

            {/* Mobile Nav Links Grouped */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Main</div>
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    href="/programs"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Training Programs
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Community & Impact</div>
                <div className="space-y-1">
                  <Link
                    href="/events"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Workshops & Events
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Campus Photo Gallery
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Articles & Stories
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">About Kisii Chapter</div>
                <div className="space-y-1">
                  <Link
                    href="/about"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    About KSU Ajira
                  </Link>
                  <Link
                    href="/leadership"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Student Leadership
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobile(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-md"
                  >
                    Contact & Location
                  </Link>
                </div>
              </div>
            </div>

            {user && (
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <Link
                  href="/portal/dashboard"
                  onClick={() => setMobile(false)}
                  className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-brand-blue bg-slate-50 rounded-md"
                >
                  <LayoutDashboard size={16} />
                  Open Member Portal
                </Link>
                <button
                  onClick={() => {
                    setMobile(false);
                    handleLogout();
                  }}
                  className="flex w-full items-center gap-2 px-3 py-2.5 text-sm font-semibold text-rose-600 hover:bg-slate-50 rounded-md"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

