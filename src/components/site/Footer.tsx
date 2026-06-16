import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-brand-black text-white/80">
      <div className="absolute inset-0 opacity-30 bg-gradient-dark" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-red/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl" />

      <div className="container-x relative py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand font-bold">A</span>
            <div>
              <div className="font-display font-bold text-white">Ajira Digital Club</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Kisii University</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            A student-led digital innovation community equipping Kisii University students with
            future-ready skills, online work opportunities, and a culture of entrepreneurship.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition" aria-label="social">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-display font-semibold text-white mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/gallery", l: "Gallery" },
              { to: "/events", l: "Events" },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="hover:text-white transition">{x.l}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-display font-semibold text-white mb-4">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-brand-red" /> Kisii University, Main Campus</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 text-brand-red" /> ajira@kisiiuniversity.ac.ke</li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 text-brand-red" /> 0741145911</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Ajira Digital Club — Kisii University. All rights reserved.</div>
          <div>Built by students. Powered by ambition.</div>
        </div>
      </div>
    </footer>
  );
}
