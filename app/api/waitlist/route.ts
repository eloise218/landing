import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ALLOWED_SOURCES = ['tractionlab'] as const;
type Source = (typeof ALLOWED_SOURCES)[number];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Entry = {
  email: string;
  source: Source;
  timestamp: string;
  ip?: string | null;
  userAgent?: string | null;
};

async function appendToFile(entry: Entry): Promise<boolean> {
  try {
    const dir = path.join(process.cwd(), 'data');
    const file = path.join(dir, 'waitlist.json');
    await fs.mkdir(dir, { recursive: true });
    let list: Entry[] = [];
    try {
      const raw = await fs.readFile(file, 'utf8');
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) list = parsed;
    } catch {
      // file doesn't exist yet or invalid JSON — start fresh
    }
    list.push(entry);
    await fs.writeFile(file, JSON.stringify(list, null, 2), 'utf8');
    return true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const data = body as { email?: unknown; source?: unknown };
  const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
  const source = typeof data.source === 'string' ? data.source : '';

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }
  if (!ALLOWED_SOURCES.includes(source as Source)) {
    return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 });
  }

  const entry: Entry = {
    email,
    source: source as Source,
    timestamp: new Date().toISOString(),
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || null,
    userAgent: req.headers.get('user-agent') || null,
  };

  // Always log — works on Vercel where filesystem is read-only
  console.log('[waitlist]', JSON.stringify(entry));

  // Best-effort persistence to local file (works in dev / writable envs)
  await appendToFile(entry);

  return NextResponse.json({ ok: true });
}
