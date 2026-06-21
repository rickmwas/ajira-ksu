"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePortal } from "@ajira/shared/hooks/usePortalState";
import { Lock, Mail, ArrowRight, UserCheck, ShieldCheck, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

import ajiraClubLogoReversed from "@ajira/shared/assets/ajiraLOGO.png";
import loginBg from "@ajira/shared/assets/login-bg.png";

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
      <div className="hidden md:flex md:w-1/2 relative text-white flex-col justify-between p-12 overflow-hidden bg-brand-black">
        {/* Background Image */}
        <Image
          src={loginBg}
          alt="Kisii University Campus Background"
          fill
          priority
          className="object-cover absolute inset-0 w-full h-full opacity-60 z-0"
        />
        {/* Dark overlay with blue gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black/75 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,86,166,0.3),transparent_60%)] z-0" />

        {/* Logo at the top */}
        <div className="relative z-10">
          <Image src={ajiraClubLogoReversed} alt="Ajira Club Kisii University" width={280} height={56} className="h-14 w-auto object-contain brightness-0 invert" />
        </div>

        {/* Welcome Text in center */}
        <div className="relative z-10 my-auto max-w-sm space-y-4">
          <div className="space-y-3">
            <h1 className="font-display text-4xl font-extrabold text-white leading-tight">
              Welcome Back!
            </h1>
            <div className="w-10 h-1 bg-brand-gold rounded-full" />
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-[320px]">
            Login to access your dashboard, resume your learning modules,track your progress and continue your journey.
          </p>
        </div>

        {/* Bottom Glassmorphic Graduation Cap Card */}
        <div className="relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-4 max-w-sm">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-blue/80 text-white shadow-lg shadow-brand-blue/20">
              <GraduationCap size={22} className="stroke-[1.5]" />
            </div>
            <div>
              <p className="text-xs font-semibold leading-relaxed text-white/95">
                Empowering KSU students through digital skills and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT COLUMN: AUTHENTICATION CONTAINER ─────────── */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 sm:p-12 min-h-screen bg-slate-50">
        <div className="max-w-md w-full border border-slate-100 bg-white p-8 sm:p-10 shadow-xl rounded-2xl font-sans animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-slate-900 tracking-tight">Login to your account</h2>
            <p className="mt-2 text-xs text-slate-500 font-medium">Access training tracks and certified credits.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block">
              <span className="block mb-2 text-xs font-semibold text-slate-700">Email Address</span>
              <div className="relative">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition placeholder:text-slate-400/70 font-medium text-slate-900"
                  placeholder="username@kisiiuniversity.ac.ke"
                />
              </div>
            </label>

            <label className="block">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-slate-700">Password</span>
                <a href="#" className="text-xs text-brand-blue font-bold hover:underline" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  required
                  name="password"
                  type="password"
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-xs outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition placeholder:text-slate-400/70 font-medium text-slate-900"
                  placeholder="••••••••"
                />
              </div>
            </label>

            <div className="flex items-center gap-2.5 py-1">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 rounded border-slate-200 text-brand-blue focus:ring-brand-blue/10 transition cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-slate-500 font-semibold cursor-pointer select-none">
                Remember me
              </label>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue hover:bg-brand-blue-dark disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed px-5 py-3.5 text-xs font-bold text-white uppercase tracking-wider transition-all shadow-md shadow-brand-blue/10 hover:shadow-lg hover:shadow-brand-blue/15 hover:-translate-y-0.5 cursor-pointer"
            >
              {loading ? "Verifying..." : "Sign In"} <ArrowRight size={14} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="absolute inset-x-0 h-px bg-slate-100" />
            <span className="relative px-3 bg-white text-[10px] font-bold text-slate-400 tracking-wider uppercase">OR</span>
          </div>

          {/* Google SSO Button */}
          <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-5 py-3.5 text-xs font-bold text-slate-700 transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer"
          >
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.15-3.15C17.45 1.76 14.93 1 12 1 7.37 1 3.42 3.66 1.48 7.56l3.75 2.91C6.11 7.35 8.84 5.04 12 5.04z"
              />
              <path
                fill="#4285F4"
                d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46c-.29 1.48-1.14 2.73-2.4 3.57l3.73 2.89c2.18-2 3.7-4.96 3.7-8.61z"
              />
              <path
                fill="#FBBC05"
                d="M5.23 14.77A7.18 7.18 0 0 1 4.8 12c0-.98.17-1.92.47-2.8l-3.75-2.91C.55 7.82 0 9.85 0 12c0 2.15.55 4.18 1.52 5.71l3.71-2.94z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.73-2.89c-1.04.7-2.37 1.11-4.2 1.11-3.16 0-5.89-2.31-6.85-5.43L1.4 15.82C3.34 19.72 7.33 23 12 23z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 font-semibold">
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
