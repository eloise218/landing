import { NextRequest, NextResponse } from 'next/server';

const subdomainRoutes: Record<string, string> = {
  'problemsolver': '/problemsolver',
  'facture-electronique': '/facture-electronique',
  'formation-vibe-coding': '/formation',
};

export function middleware(request: NextRequest) {
  const xForwardedHost = request.headers.get('x-forwarded-host');
  const hostHeader = request.headers.get('host');
  const host = xForwardedHost || hostHeader || '';
  const hostname = host.split(':')[0]; // remove port if present

  // Debug logging - remove after fixing
  console.log('[middleware] x-forwarded-host:', xForwardedHost);
  console.log('[middleware] host:', hostHeader);
  console.log('[middleware] resolved hostname:', hostname);
  console.log('[middleware] pathname:', request.nextUrl.pathname);

  // Extract subdomain: e.g. "problemsolver" from "problemsolver.iaco.app"
  // Also works with "problemsolver.localhost" for local dev
  const baseDomains = ['iaco.app', 'localhost'];
  let subdomain: string | null = null;

  for (const base of baseDomains) {
    if (hostname.endsWith(`.${base}`)) {
      subdomain = hostname.slice(0, -(base.length + 1));
      break;
    }
  }

  console.log('[middleware] subdomain:', subdomain);

  if (!subdomain) return NextResponse.next();

  const targetPath = subdomainRoutes[subdomain];
  if (!targetPath) return NextResponse.next();

  const url = request.nextUrl.clone();

  // Only rewrite if we're on the root path (to avoid rewriting assets, etc.)
  if (url.pathname === '/' || url.pathname === '') {
    url.pathname = targetPath;
    console.log('[middleware] rewriting to:', targetPath);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and internal Next.js paths
    '/((?!_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
};
