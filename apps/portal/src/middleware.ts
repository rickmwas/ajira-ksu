import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@ajira/shared/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProd = process.env.NODE_ENV === "production";
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "ajiraksu.org";
  const adminDomain = process.env.NEXT_PUBLIC_ADMIN_DOMAIN || "admin.ajiraksu.org";

  if (isProd) {
    // If accessing admin, redirect to admin domain
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(`https://${adminDomain}${pathname}${request.nextUrl.search}`);
    }
    // If accessing website routes, redirect to website domain
    const publicPaths = ["/about", "/programs", "/events", "/gallery", "/contact", "/blog"];
    const isPublicPath = publicPaths.some(p => pathname === p || pathname.startsWith(p + "/"));
    if (isPublicPath) {
      return NextResponse.redirect(`https://${websiteDomain}${pathname}${request.nextUrl.search}`);
    }
  }

  // Handle portal dev bypass and home redirection
  if (process.env.NODE_ENV === "development") {
    if (pathname === "/" || pathname === "/portal") {
      const url = request.nextUrl.clone();
      url.pathname = "/portal/dashboard";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Handle portal home redirection
  if (pathname === "/" || pathname === "/portal") {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/dashboard";
    return NextResponse.redirect(url);
  }

  // 1. Session refresh via Supabase Client
  let user = null;
  let supabaseResponse = NextResponse.next();
  
  try {
    const sessionRes = await updateSession(request);
    user = sessionRes.user;
    supabaseResponse = sessionRes.supabaseResponse;
  } catch (e) {
    // Suppress error
  }

  const isAuthenticated = !!user;
  const isOnboardingPage = pathname === "/portal/onboarding";
  const isAuthPage = pathname === "/portal/login" || pathname === "/portal/register";
  const isOnboarded = user?.user_metadata?.onboarded === true;

  // 2. Routing Checks
  if (!isAuthPage && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  if (isAuthenticated) {
    if (isAuthPage) {
      const url = request.nextUrl.clone();
      url.pathname = isOnboarded ? "/portal/dashboard" : "/portal/onboarding";
      return NextResponse.redirect(url);
    }

    if (!isOnboarded && !isOnboardingPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/portal/onboarding";
      return NextResponse.redirect(url);
    }

    if (isOnboarded && isOnboardingPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/portal/dashboard";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/",
    "/portal",
    "/portal/:path*",
    "/admin/:path*"
  ],
};
