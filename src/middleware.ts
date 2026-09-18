import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ✅ Set this to true to show maintenance page, false to restore the site
const MAINTENANCE_MODE = true

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the maintenance page itself to load (avoid infinite redirect)
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next()
  }

  // Allow static assets and Next.js internals to pass through
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|css|js)$/)
  ) {
    return NextResponse.next()
  }

  if (MAINTENANCE_MODE) {
    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
