"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { Lock, Mail, ArrowRight, UserCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

import ajiraClubLogoReversed from "@ajira/shared/assets/ajira-club-logo-reversed.svg";

function LoginForm() {
  const { login } = usePortal();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const redirectTarget = searchParams.get("redirect") || "/portal/dashboard";

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await login(email, password);
      toast.success("Signed in successfully!");
      router.push(redirectTarget);
    } catch (err: any) {
      toast.error(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full font-sans bg-white">
      {/* ── LEFT COLUMN: DARK WELCOME PANEL ────────────────── */}
      <div className="hidden md:flex md:w-1/2 bg-[#0B1528] text-white flex-col justify-between p-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-blue/10 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
        
        {/* Logo at the top */}
        <div className="relative z-10">
          <Image src={ajiraClubLogoReversed} alt="Ajira Club Kisii University" width={220} height={44} className="h-10 w-auto" />
        </div>

        {/* Welcome Text in center */}
        <div className="relative z-10 my-auto max-w-sm space-y-4">
          <h1 className="font-display text-3xl font-black text-white leading-tight">
            Welcome Back! 👋
          </h1>
          <p className="text-xs text-white/70 leading-relaxed">
            Login to access your dashboard, resume your learning modules, and continue your journey.
          </p>
        </div>

        {/* Footer info at bottom */}
        <div className="relative z-10 border-t border-white/10 pt-6">
          <p className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
            Empowering KSU students through digital skills and opportunities.
          </p>
        </div>
      </div>

      {/* ── RIGHT COLUMN: AUTHENTICATION CONTAINER ─────────── */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 min-h-screen bg-surface">
        <div className="max-w-md w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans animate-fade-in">
          <div className="text-center mb-6">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">Login to your account</h2>
            <p className="mt-1.5 text-xs text-muted-foreground">Access training tracks and certified credits.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="block mb-1.5 text-xs font-semibold text-foreground/70">Email Address</span>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <input
                  required
                  name="email"
                  type="email"
                  className={`${inputCls} pl-10`}
                  placeholder="username@kisiiuniversity.ac.ke"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-semibold text-foreground/70">Password</span>
                <a href="#" className="text-[10px] text-brand-blue font-bold hover:underline" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                <input
                  required
                  name="password"
                  type="password"
                  className={`${inputCls} pl-10`}
                  placeholder="••••••••"
                />
              </div>
            </label>

            <div className="flex items-center gap-2 py-1">
              <input type="checkbox" id="remember" className="rounded-sm border-input text-brand-blue focus:ring-brand-blue/15" />
              <label htmlFor="remember" className="text-[11px] text-muted-foreground font-semibold cursor-pointer">
                Remember me
              </label>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-brand-blue hover:bg-brand-blue-dark disabled:bg-muted disabled:cursor-not-allowed px-5 py-3 text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
            >
              {loading ? "Verifying..." : "Sign In"} <ArrowRight size={13} />
            </button>
          </form>

          <div className="mt-6 border-t border-border pt-4 text-center">
            <p className="text-[11px] text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/portal/register" className="text-brand-blue font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="max-w-md w-full border border-border bg-white p-6 sm:p-8 shadow-card rounded-sm font-sans flex items-center justify-center min-h-[300px]">
          <div className="text-xs font-mono text-muted-foreground animate-pulse text-center">
            Loading login session...
          </div>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}

const inputCls =
  "w-full rounded-sm border border-input bg-surface px-3 py-2.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition placeholder:text-muted-foreground/45";
