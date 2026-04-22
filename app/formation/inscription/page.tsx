'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Rocket } from 'lucide-react';
import { t, type Lang } from '../translations';

export default function Inscription() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('formation-lang');
    if (saved === 'en') setLang('en');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <Link
          href="/formation"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t(lang, 'inscription_back')}
        </Link>

        <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-100">
          <div className="mb-6">
            <Rocket className="w-16 h-16 text-[#0B3CFF] mx-auto mb-4" />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {t(lang, 'inscription_title')}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {t(lang, 'inscription_subtitle')}
          </p>

          <p className="text-gray-600 mb-8">
            {t(lang, 'inscription_contact')}
            <a href="mailto:contact@iaco.app" className="text-blue-600 hover:text-blue-800 font-semibold underline">
              contact@iaco.app
            </a>
          </p>

          <Link
            href="/formation"
            className="inline-flex items-center justify-center rounded-full bg-[#0B3CFF] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#0933DD] whitespace-nowrap"
          >
            {t(lang, 'inscription_back_landing')}
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          {t(lang, 'inscription_status')}<span className="font-semibold text-[#0B3CFF]">{t(lang, 'inscription_status_value')}</span>
        </p>
      </div>
    </div>
  );
}
