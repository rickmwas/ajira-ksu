import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, ExternalLink } from "lucide-react";
import Image from "next/image";
import ajiraClubLogoReversed from "@ajira/shared/assets/ajiraLOGO.png";

export function Footer() {
  return (
    <footer className="bg-[#0B192C] text-slate-300 font-sans border-t border-slate-800">
      {/* Top bar — Brand Logo + Social Media Links */}
      <div className="border-b border-slate-800/80">
        <div className="container-x py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center">
            <Image
              src={ajiraClubLogoReversed}
              alt="Ajira Digital Club Kisii University"
              width={360}
              height={72}
              className="h-14 sm:h-16 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
              { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
              { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md border border-slate-700 bg-slate-800/50 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Navigation & Info */}
      <div className="container-x py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        {/* Mission Column */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-display text-base font-bold text-white">Ajira Digital Club — Kisii University</h3>
          <p className="text-xs leading-relaxed text-slate-400 max-w-md">
            A practical campus community equipping Kisii University students with hands-on digital skills, 
            freelancing mentorship, audio transcription training, and access to online work opportunities.
          </p>
          <div className="pt-2 text-xs font-semibold text-amber-400 flex items-center gap-2">
            <span>Official Chapter · Main Campus ICT Lab 2</span>
          </div>
        </div>

        {/* Quick Navigation Column */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Navigation</div>
          <ul className="space-y-2 text-xs font-medium">
            {[
              { href: "/", l: "Home" },
              { href: "/programs", l: "Training Programs" },
              { href: "/events", l: "Workshops & Events" },
              { href: "/gallery", l: "Campus Photo Gallery" },
              { href: "/blog", l: "Stories & Articles" },
              { href: "/leadership", l: "Student Leadership" },
            ].map((x) => (
              <li key={x.href}>
                <Link href={x.href} className="text-slate-400 hover:text-white transition-colors">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Partner Portals Column */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">Contact & Location</div>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand-blue" />
              <span>Kisii University Main Campus, ICT Lab 2, Kisii County, Kenya</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={15} className="mt-0.5 shrink-0 text-brand-blue" />
              <span className="break-all">ajira@kisiiuniversity.ac.ke</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={15} className="mt-0.5 shrink-0 text-brand-blue" />
              <span>+254 741 145 911</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/50">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <div>© {new Date().getFullYear()} Ajira Digital Club — Kisii University. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://ajiradigital.go.ke" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors inline-flex items-center gap-1">
              National Portal <ExternalLink size={11} />
            </a>
            <a href="https://kisiiuniversity.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors inline-flex items-center gap-1">
              Kisii University <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

