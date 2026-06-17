import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProd = process.env.NODE_ENV === "production";
  const portalDomain = process.env.NEXT_PUBLIC_PORTAL_DOMAIN || "portal.ajiraksu.org";
  const adminDomain = process.env.NEXT_PUBLIC_ADMIN_DOMAIN || "admin.ajiraksu.org";

  if (isProd) {
    if (pathname.startsWith("/portal")) {
      return NextResponse.redirect(`https://${portalDomain}${pathname}${request.nextUrl.search}`);
    }
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(`https://${adminDomain}${pathname}${request.nextUrl.search}`);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/admin/:path*"],
};
