'use client';

import { FormEvent, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { trackCtaClick } from '@/lib/analytics';
import { t, type Lang } from '../translations';

function InscriptionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lang: Lang = searchParams.get('lang') === 'fr' ? 'fr' : 'en';
  const backHref = `/tractionlab${lang === 'fr' ? '?lang=fr' : ''}`;

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError(t(lang, 's7_form_error_invalid'));
      return;
    }
    setLoading(true);
    trackCtaClick('tractionlab', 'inscription_submit');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, source: 'tractionlab' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setError(t(lang, 's7_form_error_generic'));
        setLoading(false);
        return;
      }
      router.push(`/tractionlab/merci${lang === 'fr' ? '?lang=fr' : ''}`);
    } catch {
      setError(t(lang, 's7_form_error_generic'));
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white antialiased relative overflow-hidden flex flex-col">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-violet-700/20 blur-[120px] -z-10" />

      <header className="px-6 py-5">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {t(lang, 'inscription_back_short')}
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <Link href={backHref} className="inline-block mb-8">
              <span className="text-2xl font-extrabold tracking-tight">
                Traction
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  lab
                </span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold tracking-[0.15em] text-violet-200 mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              {t(lang, 'inscription_priority')}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {t(lang, 'inscription_title')}
            </h1>
            <p className="mt-4 text-white/65 leading-relaxed">
              {t(lang, 'inscription_subtitle_1')}
              <br />
              {t(lang, 'inscription_subtitle_2')}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 md:p-7 backdrop-blur-sm space-y-4"
          >
            <label className="block">
              <span className="text-sm font-medium text-white/75 mb-2 block">
                {t(lang, 'inscription_email_label')}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(lang, 's7_email_placeholder')}
                required
                autoFocus
                disabled={loading}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder:text-white/35 focus:outline-none focus:border-violet-400/50 focus:bg-white/8 transition-colors disabled:opacity-60"
              />
            </label>

            {error && <p className="text-sm text-rose-300">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 inline-flex items-center justify-center gap-1.5"
            >
              {loading ? t(lang, 's7_form_loading') : t(lang, 's7_email_cta')}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>

            <p className="text-xs text-white/40 text-center pt-1">
              · {t(lang, 's7_email_legal')} ·
            </p>
          </form>

          <div className="mt-8 text-center">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t(lang, 'inscription_back_long')}
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a1f]" />}>
      <InscriptionContent />
    </Suspense>
  );
}
