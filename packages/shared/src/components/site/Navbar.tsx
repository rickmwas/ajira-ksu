"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Menu, X, LayoutDashboard, LogOut, RefreshCw } from "lucide-react";
import { useRegister } from "./RegisterContext";
import { usePortal } from "../../hooks/usePortalState";
import Image from "next/image";
import ajiraLogo from "@ajira/shared/assets/ajira-logo.svg";
import ksuLogo from "@ajira/shared/assets/ksu-logo.png";

export function Navbar() {
  const { setOpen } = useRegister();
  const { user, logout, register } = usePortal();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const handleMockLogin = () => {
    register({
      name: "Onyango Michael",
      email: "onyango@kisiiuniversity.ac.ke",
      phone: "0741 145 911",
      course: "BSc Computer Science",
      year: "3rd Year",
      interest: "Web Design",
      bio: "Passionate campus writer and WordPress designer learning digital tools.",
    });
    setDropdownOpen(false);
    router.push("/portal/dashboard");
  };

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    ...(user ? [{ href: "/portal/dashboard", label: "Portal" }] : []),
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 font-sans ${
        scrolled ? "bg-white border-b border-border shadow-sm" : "bg-white/95 border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[60px] items-center justify-between gap-6">
        {/* Brand — Ajira logo + KSU badge */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="Ajira Digital Club — Kisii University">
          <Image src={ajiraLogo} alt="Ajira Digital Logo" width={112} height={36} className="h-9 w-auto" priority />
          <span className="hidden sm:block w-px h-7 bg-border" />
          <div className="hidden sm:flex items-center gap-2">
            <Image src={ksuLogo} alt="Kisii University Seal" width={32} height={32} className="h-8 w-auto" priority />
            <div className="leading-tight">
              <div className="text-[11px] font-semibold text-ink tracking-tight leading-none">Kisii University</div>
              <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5 font-mono">
                Chapter
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-[13px] font-semibold transition-colors rounded-sm hover:bg-surface ${
                  isActive ? "text-brand-blue bg-surface-2" : "text-foreground/75 hover:text-brand-blue"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3 relative">
          {user ? (
            /* SLEEK ACCOUNT DROPDOWN */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 border border-border p-1 pr-2.5 rounded-sm hover:border-brand-blue/40 transition-colors"
                aria-label="User profile menu"
              >
                <div className="grid h-7 w-7 place-items-center rounded-sm bg-brand-black text-white text-xs font-bold font-display">
                  {getInitials(user.name)}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-foreground/80 max-w-[100px] truncate">
                  {user.name.split(" ")[0]}
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-sm border border-border bg-white p-1.5 shadow-overlay animate-scale-in text-xs text-foreground shrink-0 z-50">
                  <div className="px-2.5 py-2 border-b border-border mb-1.5">
                    <p className="font-bold truncate text-[13px] font-display">{user.name}</p>
                    <p className="text-[9px] text-muted-foreground truncate font-mono">{user.regId}</p>
                  </div>

                  <Link
                    href="/portal/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="flex w-full items-center gap-2 rounded-sm px-2.5 py-2 text-left hover:bg-surface font-semibold transition-colors"
                  >
                    <LayoutDashboard size={14} className="text-brand-blue" />
                    Ajira Learning Portal
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-sm px-2.5 py-2 text-left hover:bg-surface font-semibold text-brand-blue transition-colors"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Desktop quick login testing tool */}
              <button
                onClick={handleMockLogin}
                title="Quick Student Portal Login"
                className="hidden lg:inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-white text-muted-foreground hover:bg-surface hover:text-brand-blue transition-colors"
              >
                <RefreshCw size={13} />
              </button>

              <button
                onClick={() => setOpen(true)}
                className="hidden md:inline-flex items-center rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-5 py-2 text-[13px] font-bold text-white transition-colors"
              >
                Join the Club
              </button>
            </div>
          )}

          <button
            onClick={() => setMobile((v) => !v)}
            className="md:hidden p-2 rounded-sm hover:bg-muted transition-colors border border-transparent"
            aria-label={mobile ? "Close menu" : "Open menu"}
          >
            {mobile ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in shadow-lg">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobile(false)}
                  className={`px-3 py-2.5 text-sm font-semibold rounded-sm transition-colors ${
                    isActive ? "text-brand-blue bg-surface-2" : "text-foreground/80 hover:text-brand-blue hover:bg-surface"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}

            {user ? (
              <button
                onClick={() => {
                  setMobile(false);
                  handleLogout();
                }}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border border-brand-blue/30 px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5 transition-colors"
              >
                <LogOut size={15} />
                Sign Out
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2 mt-3">
                <button
                  onClick={() => {
                    setMobile(false);
                    handleMockLogin();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-border px-3 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-surface transition-colors"
                >
                  <RefreshCw size={12} />
                  Mock Login
                </button>
                <button
                  onClick={() => {
                    setMobile(false);
                    setOpen(true);
                  }}
                  className="inline-flex items-center justify-center rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-3 py-2.5 text-xs font-bold text-white transition-colors"
                >
                  Join the Club
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
