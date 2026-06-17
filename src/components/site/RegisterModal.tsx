"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { useRegister } from "./RegisterContext";
import { usePortal } from "../../hooks/usePortalState";
import { useRouter } from "next/navigation";

const interests = ["Virtual Assistant", "Transcription", "Content Writing", "Web Design"];

export function RegisterModal() {
  const { open, setOpen } = useRegister();
  const { register } = usePortal();
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!open) setSubmitted(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const course = formData.get("course") as string;
    const year = formData.get("year") as string;
    const interest = formData.get("interest") as string;
    const bio = formData.get("bio") as string;

    register({ name, email, phone, course, year, interest, bio });
    setSubmitted(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (submitted) {
      router.push("/portal/dashboard");
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-3 sm:p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70" onClick={handleClose} />
      <div className="relative w-full max-w-xl animate-scale-in">
        <div className="bg-white rounded-sm border border-border overflow-hidden shadow-overlay max-h-[90svh] flex flex-col">
          {/* Header */}
          <div className="relative bg-brand-black px-5 sm:px-6 py-4 sm:py-5 text-white shrink-0 font-sans">
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 sm:right-4 sm:top-4 grid h-8 w-8 place-items-center rounded-sm bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={15} />
            </button>
            <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-1.5 font-mono">
              Chapter Registry
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">Join Ajira Digital Club</h3>
            <p className="text-white/55 text-xs mt-1">Unlock peer-led course modules and earn certifications.</p>
          </div>

          {submitted ? (
            <div className="px-5 sm:px-6 py-10 sm:py-12 text-center overflow-y-auto font-sans">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green animate-scale-in mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-display text-lg font-bold text-ink">Registration Successful!</h4>
              <p className="mt-2 text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Welcome to Kisii University's Ajira Digital portal. Your student learning profile is active. You can now
                access sourced training modules.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                Go to Portal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-5 sm:px-6 py-5 sm:py-6 grid gap-4 overflow-y-auto font-sans">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name">
                  <input required name="fullName" className={inputCls} placeholder="e.g. Onyango Michael" />
                </Field>
                <Field label="Email Address">
                  <input
                    required
                    name="email"
                    type="email"
                    className={inputCls}
                    placeholder="yourname@kisiiuniversity.ac.ke"
                  />
                </Field>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Phone Number">
                  <input required name="phone" className={inputCls} placeholder="e.g. 0741 145 911" />
                </Field>
                <Field label="Course / Department">
                  <input required name="course" className={inputCls} placeholder="e.g. BSc Computer Science" />
                </Field>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Year of Study">
                  <select required name="year" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select Year
                    </option>
                    {["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Postgraduate"].map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Primary Track Focus">
                  <select required name="interest" className={inputCls} defaultValue="">
                    <option value="" disabled>
                      Select Track
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="Short Bio / Core Goals">
                <textarea
                  required
                  name="bio"
                  rows={2}
                  className={inputCls}
                  placeholder="Share your digital work goals or previous experience..."
                />
              </Field>

              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors"
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
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-1.5 text-xs font-semibold text-foreground/70">{label}</div>
      {children}
    </label>
  );
}
