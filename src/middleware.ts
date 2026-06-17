import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static files, API routes, or favicon can bypass middleware
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ── DOMAIN ROUTING FOR PRODUCTION ─────────────────────
  const host = request.headers.get("host") || "";
  const isProd = process.env.NODE_ENV === "production";
  const websiteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "ajiraksu.org";
  const portalDomain = process.env.NEXT_PUBLIC_PORTAL_DOMAIN || "portal.ajiraksu.org";

  if (isProd) {
    const isPortalHost = host.includes(portalDomain);
    const isWebsiteHost = host.includes(websiteDomain);

    // Case A: Accessing via the Portal subdomain
    if (isPortalHost) {
      if (pathname === "/") {
        const url = request.nextUrl.clone();
        url.pathname = "/portal/dashboard";
        return NextResponse.redirect(url);
      }
      
      const publicPaths = ["/about", "/programs", "/events", "/gallery", "/contact", "/blog"];
      const isPublicPath = publicPaths.some(p => pathname === p || pathname.startsWith(p + "/"));
      if (isPublicPath) {
        return NextResponse.redirect(`https://${websiteDomain}${pathname}${request.nextUrl.search}`);
      }
    }

    // Case B: Accessing via the Main Website domain
    if (isWebsiteHost) {
      if (pathname.startsWith("/portal") || pathname.startsWith("/admin")) {
        return NextResponse.redirect(`https://${portalDomain}${pathname}${request.nextUrl.search}`);
      }
    }
  }

  // 1. Session refresh via Supabase Client
  let user = null;
  let supabaseResponse = NextResponse.next();
  
  try {
    const sessionRes = await updateSession(request);
    user = sessionRes.user;
    supabaseResponse = sessionRes.supabaseResponse;
  } catch (e) {
    // Supabase keys might be missing or network is offline
    // We fall back to mock cookies for offline-first resilience
  }

  // 2. Mock auth cookie fallback check
  const mockAuthCookie = request.cookies.get("ajira_mock_auth");
  let isAuthenticated = !!user || !!mockAuthCookie;
  let userRole = "Member"; // Default fallback

  if (user) {
    // Real user role check
    // Since middleware is async, we can do a quick check, or let the server components
    // do deep database checks while middleware handles basic path security.
    // For now, check if user meta matches or default to Member.
    userRole = (user.user_metadata?.role as string) || "Member";
  } else if (mockAuthCookie) {
    try {
      const parsed = JSON.parse(mockAuthCookie.value);
      userRole = parsed.role || "Member";
    } catch {
      // invalid cookie
    }
  }

  // 3. Routing Checks
  const isPortalRoute = pathname.startsWith("/portal");
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthPage = pathname === "/portal/login" || pathname === "/portal/register";

  // Case A: Accessing Portal or Admin, but not authenticated
  if ((isPortalRoute || isAdminRoute) && !isAuthPage && !isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/login";
    // Keep target path for redirect callback
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  // Case B: Accessing Login/Register while already logged in
  if (isAuthPage && isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/portal/dashboard";
    return NextResponse.redirect(url);
  }

  // Case C: Accessing Admin pages
  if (isAdminRoute) {
    if (userRole !== "Executive" && userRole !== "Admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/portal/dashboard";
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};
