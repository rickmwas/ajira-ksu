import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRegister } from "./RegisterContext";
import ajiraLogo from "@/assets/ajira-logo.svg";
import ksuLogo from "@/assets/ksu-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function Navbar() {
  const { setOpen } = useRegister();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white border-b border-border"
          : "bg-white/95 border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[60px] items-center justify-between gap-6">

        {/* Brand — Ajira logo + KSU badge */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="Ajira Digital Club — Kisii University">
          <img
            src={ajiraLogo}
            alt="Ajira Digital"
            className="h-9 w-auto"
            loading="eager"
          />
          <span className="hidden sm:block w-px h-7 bg-border" />
          <div className="hidden sm:flex items-center gap-2">
            <img
              src={ksuLogo}
              alt="Kisii University"
              className="h-8 w-auto"
              loading="eager"
            />
            <div className="leading-tight">
              <div className="text-[11px] font-semibold text-ink tracking-tight leading-none">Kisii University</div>
              <div className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">Chapter</div>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-3.5 py-2 text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors rounded-sm hover:bg-muted"
              activeProps={{ className: "text-foreground bg-muted" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="hidden md:inline-flex items-center rounded-sm bg-brand-red hover:bg-brand-red-dark px-4 py-2 text-[13px] font-semibold text-white transition-colors"
          >
            Join the Club
          </button>
          <button
            onClick={() => setMobile((v) => !v)}
            className="md:hidden p-2 rounded-sm hover:bg-muted transition-colors"
            aria-label={mobile ? "Close menu" : "Open menu"}
          >
            {mobile ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobile && (
        <div className="md:hidden bg-white border-t border-border animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                activeProps={{ className: "text-foreground bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobile(false); setOpen(true); }}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-brand-red hover:bg-brand-red-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors"
            >
              Join the Club
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
