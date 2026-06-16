import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { useRegister } from "./RegisterContext";

const interests = [
  "Web Development",
  "AI & Emerging Tech",
  "Cybersecurity",
  "Freelancing & Online Work",
  "Entrepreneurship & Innovation",
  "Graphic & Digital Design",
];

export function RegisterModal() {
  const { open, setOpen } = useRegister();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl animate-scale-in">
        <div className="bg-white rounded-sm border border-border overflow-hidden shadow-overlay">

          {/* Header */}
          <div className="relative bg-brand-black px-6 py-5 text-white">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-sm bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">Membership</div>
            <h3 className="font-display text-xl font-bold text-white">Join Ajira Digital Club</h3>
            <p className="text-white/60 text-sm mt-1">Take the first step toward your digital future.</p>
          </div>

          {submitted ? (
            <div className="px-6 py-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-green/10 text-brand-green animate-scale-in">
                <CheckCircle2 size={32} />
              </div>
              <h4 className="mt-5 font-display text-lg font-bold">You're in!</h4>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">
                Thanks for registering. Our team will be in touch shortly with onboarding details.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex rounded-sm bg-foreground hover:bg-foreground/80 px-5 py-2 text-sm font-medium text-background transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="px-6 py-6 grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name"><input required className={inputCls} placeholder="Onyango Michael" /></Field>
                <Field label="Email Address"><input required type="email" className={inputCls} placeholder="you@kisiiuniversity.ac.ke" /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone Number"><input required className={inputCls} placeholder="0741 145 911" /></Field>
                <Field label="Course / Department"><input required className={inputCls} placeholder="BSc Computer Science" /></Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Year of Study">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select year</option>
                    {["1st Year","2nd Year","3rd Year","4th Year","5th Year","Postgraduate"].map(y => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Area of Interest">
                  <select required className={inputCls} defaultValue="">
                    <option value="" disabled>Select interest</option>
                    {interests.map(i => <option key={i}>{i}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Short Message">
                <textarea rows={3} className={inputCls} placeholder="Why do you want to join?" />
              </Field>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center rounded-sm bg-brand-red hover:bg-brand-red-dark px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Submit Registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-sm outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition placeholder:text-muted-foreground/60";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-medium text-foreground/70">{label}</div>
      {children}
    </label>
  );
}
