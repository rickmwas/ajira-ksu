import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRegister } from "./RegisterContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
] as const;

export function Navbar() {
  const { setOpen } = useRegister();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-light shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-white font-bold shadow-elevated">A</span>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight">Ajira Digital Club</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Kisii University</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors data-[status=active]:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-elevated lift lift-hover"
          >
            Register
          </button>
        </div>

        <button onClick={() => setMobile((v) => !v)} className="md:hidden p-2" aria-label="Menu">
          {mobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobile && (
        <div className="md:hidden glass-light border-t animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setMobile(false)} className="py-2 text-sm font-medium">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobile(false);
                setOpen(true);
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
