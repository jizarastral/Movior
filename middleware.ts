import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Canonical host: www.movior.co
 * Redirects bare apex (movior.co) → www so SEO and cookies stay consistent.
 * DNS for the apex domain must also point at Render for this to run.
 */
const CANONICAL_HOST = "www.movior.co"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase()

  if (host === "movior.co") {
    const url = request.nextUrl.clone()
    url.host = CANONICAL_HOST
    url.protocol = "https:"
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and common static files.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)$).*)",
  ],
}
