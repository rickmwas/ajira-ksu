import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import ajiraClubLogoReversed from "@ajira/shared/assets/ajiraLOGO.png";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80 font-sans">
      {/* Top bar — logos + socials */}
      <div className="border-b border-white/10">
        <div className="container-x py-7 sm:py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center">
            <Image
              src={ajiraClubLogoReversed}
              alt="Ajira Club Kisii University"
              width={280}
              height={56}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
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
                className="grid h-10 w-10 place-items-center rounded-sm border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-x py-10 sm:py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-sm leading-relaxed text-white/55 max-w-sm">
            A student-led digital innovation community equipping Kisii University students with future-ready skills,
            online work opportunities, and a culture of entrepreneurship.
          </p>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">Navigation</div>
          <ul className="space-y-2.5 text-sm">
            {[
              { href: "/", l: "Home" },
              { href: "/about", l: "About Us" },
              { href: "/events", l: "Events" },
              { href: "/gallery", l: "Gallery" },
            ].map((x) => (
              <li key={x.href}>
                <Link href={x.href} className="text-white/55 hover:text-white transition-colors">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-white/55">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              <span>Kisii University, Main Campus</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              <span className="break-all sm:break-normal">ajira@kisiiuniversity.ac.ke</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="mt-0.5 shrink-0 text-brand-blue" />
              <span>0741 145 911</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <div>© {new Date().getFullYear()} Ajira Digital Club — Kisii University. All rights reserved.</div>
          <div>Built by students. Powered by ambition.</div>
        </div>
      </div>
    </footer>
  );
}
