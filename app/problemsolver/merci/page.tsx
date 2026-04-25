'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Rocket, MessageCircle, ArrowLeft, Target, Globe } from 'lucide-react';
import { trackPurchase } from '@/lib/analytics';
import { t, type Lang } from '../translations';

function ThanksContent() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const sessionId = searchParams.get('session_id') ?? `manual-${Date.now()}`;
    const storageKey = `purchase_tracked_${sessionId}`;

    if (typeof window === 'undefined') return;
    if (window.localStorage.getItem(storageKey)) return;

    trackPurchase({
      transactionId: sessionId,
      value: 9,
      currency: 'EUR',
      itemId: 'problemsolver-preorder',
      itemName: 'ProblemSolver Pre-order',
    });

    window.localStorage.setItem(storageKey, '1');
  }, [searchParams]);

  const nextSteps = [
    { icon: Mail, title: t(lang, 'thanks_next1_title'), desc: t(lang, 'thanks_next1_desc') },
    { icon: Rocket, title: t(lang, 'thanks_next2_title'), desc: t(lang, 'thanks_next2_desc') },
    { icon: MessageCircle, title: t(lang, 'thanks_next3_title'), desc: t(lang, 'thanks_next3_desc') },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/problemsolver" className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">
              <span className="text-slate-900">Problem</span>
              <span className="text-blue-600">Finder</span>
            </span>
          </Link>
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            {t(lang, 'thanks_badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            {t(lang, 'thanks_title')}
          </h1>

          <p className="text-lg text-slate-600 mb-12">
            {t(lang, 'thanks_subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            {t(lang, 'thanks_next_title')}
          </h2>

          <div className="space-y-5">
            {nextSteps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/problemsolver"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(lang, 'thanks_back')}
          </Link>
        </div>
      </main>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <ThanksContent />
    </Suspense>
  );
}
