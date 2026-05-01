import { NextRequest, NextResponse } from 'next/server';

const subdomainRoutes: Record<string, string> = {
  'problemsolver': '/problemsolver',
  'facture-electronique': '/facture-electronique',
  'formation-vibe-coding': '/formation',
  'tractionlab': '/tractionlab',
};

export function middleware(request: NextRequest) {
  const xForwardedHost = request.headers.get('x-forwarded-host');
  const hostHeader = request.headers.get('host');
  const host = xForwardedHost || hostHeader || '';
  const hostname = host.split(':')[0];

  const baseDomains = ['iaco.app', 'localhost'];
  let subdomain: string | null = null;

  for (const base of baseDomains) {
    if (hostname.endsWith(`.${base}`)) {
      subdomain = hostname.slice(0, -(base.length + 1));
      break;
    }
  }

  if (!subdomain && (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '')) {
    const authCookie = request.cookies.get('iaco_auth')?.value;
    if (authCookie !== process.env.ADMIN_PASSWORD) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      return NextResponse.redirect(loginUrl);
    }
  }

  if (!subdomain) return NextResponse.next();

  const targetPath = subdomainRoutes[subdomain];
  if (!targetPath) return NextResponse.next();

  const url = request.nextUrl.clone();

  if (url.pathname === '/' || url.pathname === '') {
    url.pathname = targetPath;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.svg).*)',
  ],
};
