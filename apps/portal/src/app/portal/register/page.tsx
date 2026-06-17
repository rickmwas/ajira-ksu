"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { UserPlus, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function RegisterPage() {
  const { register } = usePortal();
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      toast.success("Account created successfully!");
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleProceed = () => {
    router.push("/portal/onboarding");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface w-full">
      <div className="max-w-md w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans animate-fade-in">
        <div className="text-center mb-6">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-sm bg-brand-blue/10 text-brand-blue mb-4">
            <UserPlus size={20} />
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">Register Student Account</h2>
          <p className="mt-1.5 text-xs text-muted-foreground">Join the Kisii University Ajira digital training chapter.</p>
        </div>

        {submitted ? (
          <div className="py-8 text-center animate-scale-in">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-green/10 text-brand-green mb-4">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="font-display text-lg font-bold text-ink">Account Created!</h4>
            <p className="mt-2 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Your credentials are saved. Next, let's complete your student profile onboarding to access the portal dashboard.
            </p>
            <button
              onClick={handleProceed}
              className="mt-6 inline-flex rounded-sm bg-brand-blue hover:bg-brand-blue-dark px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
            >
              Continue to Onboarding
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            {error && (
              <div className="p-3 rounded-sm bg-red-50 border border-red-100 flex items-start gap-2 text-red-600 text-xs animate-fade-in">
                <AlertCircle size={14} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Full Name</span>
              <input required name="fullName" className={inputCls} placeholder="e.g. Onyango Michael" />
            </label>

            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Email Address</span>
              <input
                required
                name="email"
                type="email"
                className={inputCls}
                placeholder="username@kisiiuniversity.ac.ke"
              />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Password</span>
                <input
                  required
                  name="password"
                  type="password"
                  className={inputCls}
                  placeholder="••••••••"
                />
              </label>
              <label className="block">
                <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Confirm Password</span>
                <input
                  required
                  name="confirmPassword"
                  type="password"
                  className={inputCls}
                  placeholder="••••••••"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-6 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
            >
              {loading ? "Registering..." : "Create Account & Continue"} <ArrowRight size={13} />
            </button>
          </form>
        )}

        {!submitted && (
          <div className="mt-6 border-t border-border pt-4 text-center">
            <p className="text-[11px] text-muted-foreground">
              Already registered?{" "}
              <Link href="/portal/login" className="text-brand-blue font-bold hover:underline">
                Sign In here
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
