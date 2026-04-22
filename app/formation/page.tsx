'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import { t, type Lang } from './translations';
import { ArrowRight, Globe, Menu, X, CheckCircle, Eye } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MockupVisual() {
  return (
    <div className="relative">
      {/* Glow effect behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0B3CFF]/20 via-[#6C5CE7]/20 to-[#0B3CFF]/10 rounded-3xl blur-2xl" />

      {/* Browser mockup */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
              mon-projet.app
            </div>
          </div>
        </div>

        {/* Site content mockup */}
        <div className="p-6 space-y-4">
          {/* Nav */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 bg-[#0B3CFF]/20 rounded" />
            <div className="flex gap-3">
              <div className="h-3 w-12 bg-gray-200 rounded" />
              <div className="h-3 w-12 bg-gray-200 rounded" />
              <div className="h-6 w-16 bg-[#0B3CFF] rounded-full" />
            </div>
          </div>

          {/* Hero area */}
          <div className="pt-4 space-y-3">
            <div className="h-4 w-3/4 bg-gray-800 rounded" />
            <div className="h-4 w-1/2 bg-gray-800 rounded" />
            <div className="h-3 w-2/3 bg-gray-300 rounded mt-2" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <div className="h-8 w-8 rounded-lg bg-[#6C5CE7]/20" />
                <div className="h-2 w-full bg-gray-200 rounded" />
                <div className="h-2 w-2/3 bg-gray-200 rounded" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-2">
            <div className="h-8 w-28 bg-[#0B3CFF] rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg border border-gray-200 px-3 py-2 flex items-center gap-2"
      >
        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="h-3.5 w-3.5 text-green-600" />
        </div>
        <span className="text-xs font-semibold text-gray-700">100% IA</span>
      </motion.div>
    </div>
  );
}

function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-[#111]">
          Vibe<span className="text-[#0B3CFF]">Code</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-[#333] hover:text-[#111] transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <Link
            href="/formation/methode"
            onClick={() => trackCtaClick('landing formation v2', 'header_cta')}
            className="inline-flex items-center justify-center rounded-full bg-[#0B3CFF] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#0933DD] hover:shadow-lg hover:shadow-[#0B3CFF]/25"
          >
            {t(lang, 'nav_cta')}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-[#333] hover:text-[#111] transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#111]">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 pb-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/formation/methode"
              onClick={() => { trackCtaClick('landing formation v2', 'header_cta_mobile'); setMenuOpen(false); }}
              className="inline-flex items-center justify-center rounded-full bg-[#0B3CFF] px-5 py-3 text-sm font-bold text-white mt-2 shadow-lg shadow-[#0B3CFF]/25"
            >
              {t(lang, 'nav_cta')}
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Formation() {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    const saved = localStorage.getItem('formation-lang');
    if (saved === 'en') setLang('en');
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('formation-lang', l);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111] overflow-x-hidden">
      <Header lang={lang} setLang={handleSetLang} />

      {/* ─── HERO ─── */}
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3CFF]/5 via-[#6C5CE7]/5 to-[#F8F9FB]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6C5CE7]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B3CFF]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <AnimatedSection>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#111]"
              >
                {t(lang, 'v2_hero_title_line1')}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#0B3CFF]">{t(lang, 'v2_hero_title_highlight1')}</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#0B3CFF]/15 -z-0 rounded-sm" />
                </span>
                <br />
                <span className="text-[#6C5CE7]">{t(lang, 'v2_hero_title_line2')}</span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-5"
              >
                <Link
                  href="/formation/methode"
                  onClick={() => trackCtaClick('landing formation v2', 'hero_cta')}
                  className="group inline-flex items-center justify-center rounded-full bg-[#0B3CFF] px-14 py-6 text-xl font-bold text-white transition-all hover:bg-[#0933DD] shadow-xl shadow-[#0B3CFF]/30 hover:shadow-2xl hover:shadow-[#0B3CFF]/40 hover:scale-[1.02]"
                >
                  {t(lang, 'v2_hero_cta')}
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-[#333]/70">
                  <Eye className="h-4 w-4" />
                  <span className="font-medium">{t(lang, 'v2_hero_social')}</span>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block"
            >
              <MockupVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHAT I'LL SHOW YOU ─── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-[#333] font-semibold text-xl mb-6">
              {t(lang, 'v2_hero_what_title')}
            </motion.p>
            <motion.ul variants={fadeInUp} className="space-y-3 inline-block text-left">
              {[
                t(lang, 'v2_hero_bullet1'),
                t(lang, 'v2_hero_bullet2'),
                t(lang, 'v2_hero_bullet3'),
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[#333] text-lg">
                  <CheckCircle className="h-5 w-5 text-[#0B3CFF] flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 2: PAIN POINTS ─── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-[#111] mb-10 text-center"
            >
              {t(lang, 'v2_pain_title')}
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-4 max-w-lg mx-auto">
            {[
              t(lang, 'v2_pain_card1'),
              t(lang, 'v2_pain_card2'),
              t(lang, 'v2_pain_card3'),
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-200 text-center hover:border-[#6C5CE7]/30 transition-colors"
                >
                  <p className="text-lg text-[#333] italic">{item}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <motion.p
              variants={fadeInUp}
              className="text-center text-xl font-bold text-[#111] mt-10"
            >
              {t(lang, 'v2_pain_result')}
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 3: REALITY ─── */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-[#6C5CE7]/5 to-[#F8F9FB]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-[#111] mb-10"
            >
              {t(lang, 'v2_reality_title')}
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-5">
              {[
                t(lang, 'v2_reality_p1'),
                t(lang, 'v2_reality_p2'),
                t(lang, 'v2_reality_p3'),
              ].map((item, i) => (
                <p key={i} className="text-xl text-[#333] font-medium">
                  <span className="text-[#6C5CE7] font-bold">→</span> {item}
                </p>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SECTION 4: PROOF ─── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-[#111] mb-8"
            >
              {t(lang, 'v2_proof_title')}
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-3">
              {[
                t(lang, 'v2_proof_item1'),
                t(lang, 'v2_proof_item2'),
                t(lang, 'v2_proof_item3'),
              ].map((item, i) => (
                <p key={i} className="text-lg text-[#333] font-medium">
                  <span className="text-green-500">&#10003;</span> {item}
                </p>
              ))}
              <p className="text-xl font-bold text-[#0B3CFF] mt-6 pt-2">
                → {t(lang, 'v2_proof_conclusion')}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3CFF]/8 via-[#6C5CE7]/8 to-[#F8F9FB]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0B3CFF]/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111] mb-4 leading-tight"
            >
              {t(lang, 'v2_cta_title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-[#6C5CE7] font-bold mb-10"
            >
              → {t(lang, 'v2_cta_subtitle')}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <Link
                href="/formation/methode"
                onClick={() => trackCtaClick('landing formation v2', 'footer_cta')}
                className="group inline-flex items-center justify-center rounded-full bg-[#0B3CFF] px-12 py-5 text-xl font-bold text-white transition-all hover:bg-[#0933DD] shadow-xl shadow-[#0B3CFF]/30 hover:shadow-2xl hover:shadow-[#0B3CFF]/40 hover:scale-[1.02]"
              >
                {t(lang, 'v2_cta_button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-[#333]/60 font-medium">
                {t(lang, 'v2_cta_social')}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-gray-200/60 bg-white py-10 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <a href="mailto:contact@iaco.app" className="hover:text-[#111] transition-colors">{t(lang, 'footer_contact')}</a>
            <span className="hover:text-[#111] transition-colors cursor-default">{t(lang, 'footer_legal')}</span>
            <span className="hover:text-[#111] transition-colors cursor-default">{t(lang, 'footer_terms')}</span>
            <span className="hover:text-[#111] transition-colors cursor-default">{t(lang, 'footer_privacy')}</span>
            <span className="hover:text-[#111] transition-colors cursor-default">{t(lang, 'footer_cookies')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
