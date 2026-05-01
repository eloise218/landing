'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { t, type Lang } from '../translations';

function MerciContent() {
  const searchParams = useSearchParams();
  const lang: Lang = searchParams.get('lang') === 'fr' ? 'fr' : 'en';
  const backHref = `/tractionlab${lang === 'fr' ? '?lang=fr' : ''}`;

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-violet-700/20 blur-[120px]" />

      <div className="relative max-w-lg w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight">
            Traction
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              lab
            </span>
          </span>
        </div>

        <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-10 space-y-5 backdrop-blur-sm">
          <div className="flex justify-center">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/20 border border-violet-400/30 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-violet-300" />
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{t(lang, 'merci_title')}</h1>
          <p className="text-white/65 leading-relaxed">
            {t(lang, 'merci_p1')}
            <br />
            {t(lang, 'merci_p2')}
          </p>
          <p className="text-sm text-white/40 pt-2">
            {t(lang, 'merci_question')}{' '}
            <a
              href="mailto:contact@iaco.app"
              className="text-violet-300 hover:text-violet-200 font-medium transition"
            >
              contact@iaco.app
            </a>
          </p>
        </div>

        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 text-sm font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {t(lang, 'merci_back')}
        </Link>
      </div>
    </div>
  );
}

export default function Merci() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a1f]" />}>
      <MerciContent />
    </Suspense>
  );
}
