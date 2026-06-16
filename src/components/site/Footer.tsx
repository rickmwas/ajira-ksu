import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import ajiraLogo from "@/assets/ajira-logo.svg";
import ksuLogo from "@/assets/ksu-logo.png";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container-x py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={ajiraLogo} alt="Ajira Digital" className="h-9 w-auto brightness-0 invert" />
            <span className="w-px h-8 bg-white/20" />
            <div className="flex items-center gap-2">
              <img src={ksuLogo} alt="Kisii University" className="h-8 w-auto" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">Kisii University</div>
                <div className="text-[9px] uppercase tracking-[0.15em] text-white/50">Chapter</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-sm border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-x py-12 grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-white/60 max-w-sm">
            A student-led digital innovation community equipping Kisii University students
            with future-ready skills, online work opportunities, and a culture of entrepreneurship.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Navigation</div>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/events", l: "Events" },
              { to: "/gallery", l: "Gallery" },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="text-white/60 hover:text-white transition-colors">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand-red" />
              <span>Kisii University, Main Campus</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-brand-red" />
              <span>ajira@kisiiuniversity.ac.ke</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-brand-red" />
              <span>0741 145 911</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Ajira Digital Club — Kisii University. All rights reserved.</div>
          <div>Built by students. Powered by ambition.</div>
        </div>
      </div>
    </footer>
  );
}
