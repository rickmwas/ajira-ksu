"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, X, AlertCircle } from "lucide-react";
import { useRegister } from "./RegisterContext";
import { usePortal } from "../../hooks/usePortalState";
import { useRouter } from "next/navigation";

export function RegisterModal() {
  const { open, setOpen } = useRegister();
  const { register } = usePortal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setError(null);
      setLoading(false);
    }
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      await register(name, email, password);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (submitted) {
      router.push("/portal/onboarding");
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-3 sm:p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/70" onClick={handleClose} />
      <div className="relative w-full max-w-md animate-scale-in">
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
            <p className="text-white/55 text-xs mt-1">Create your account to start peer-led learning tracks.</p>
          </div>

          {submitted ? (
            <div className="px-5 sm:px-6 py-10 sm:py-12 text-center overflow-y-auto font-sans">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green animate-scale-in mb-4">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-display text-lg font-bold text-ink">Account Created!</h4>
              <p className="mt-2 text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Your credentials are saved. Next, let's complete your student profile onboarding to set up your dashboard.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                Proceed to Onboarding
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-5 sm:px-6 py-5 sm:py-6 grid gap-4 overflow-y-auto font-sans">
              {error && (
                <div className="p-3 rounded-sm bg-red-50 border border-red-100 flex items-start gap-2 text-red-600 text-xs animate-fade-in">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Password">
                  <input
                    required
                    name="password"
                    type="password"
                    className={inputCls}
                    placeholder="••••••••"
                  />
                </Field>
                <Field label="Confirm Password">
                  <input
                    required
                    name="confirmPassword"
                    type="password"
                    className={inputCls}
                    placeholder="••••••••"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full inline-flex items-center justify-center rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                {loading ? "Registering..." : "Create Account & Continue"}
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
