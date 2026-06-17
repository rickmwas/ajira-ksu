import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@ajira/shared/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProd = process.env.NODE_ENV === "production";
  const portalDomain = process.env.NEXT_PUBLIC_PORTAL_DOMAIN || "portal.ajiraksu.org";
  
  const portalUrl = isProd
    ? `https://${portalDomain}`
    : (process.env.NEXT_PUBLIC_PORTAL_URL || "http://localhost:3001");

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

  // 2. Supabase auth check
  let isAuthenticated = !!user;
  let userRole = "Member"; // Default fallback

  if (user) {
    userRole = (user.user_metadata?.role as string) || "Member";
  }

  // 3. Routing Checks
  if (pathname === "/" || pathname === "/admin") {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/analytics";
    return NextResponse.redirect(url);
  }

  if (!isAuthenticated) {
    // Redirect to Portal Login
    const redirectUrl = new URL(`${portalUrl}/portal/login`, request.nextUrl.origin);
    redirectUrl.searchParams.set("redirect", request.nextUrl.href);
    return NextResponse.redirect(redirectUrl.toString());
  }

  // Check Role
  if (userRole !== "Executive" && userRole !== "Admin") {
    // Redirect to Portal Dashboard (unauthorized)
    const dashboardUrl = `${portalUrl}/portal/dashboard`;
    return NextResponse.redirect(dashboardUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/",
    "/admin"
  ],
};
