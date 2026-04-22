'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import { t, type Lang } from '../translations';
import {
  ArrowRight, Globe, Menu, X,
  Wrench, MessageSquare, Sparkles,
  ArrowLeft, CheckCircle, XCircle, Mail
} from 'lucide-react';

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
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/formation" className="text-lg font-extrabold text-[#111] flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-4 w-4" />
          Vibe<span className="text-[#0B3CFF]">Code</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-[#333] hover:text-[#111] transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
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
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 pb-4">
          <Link
            href="/formation"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-[#333] hover:text-[#111] transition-colors"
          >
            ← {lang === 'fr' ? 'Retour' : 'Back'}
          </Link>
        </div>
      )}
    </header>
  );
}

function StepBadge({ number, emoji }: { number: number; emoji: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#0B3CFF] to-[#6C5CE7] text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-[#0B3CFF]/20">
        {number}
      </div>
      <span className="text-2xl">{emoji}</span>
    </div>
  );
}

function EmailForm({ lang }: { lang: Lang }) {
  const [email, setEmail] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to backend/API route
    console.log({ email, projectIdea });
    trackCtaClick('methode', 'email_submit');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0B3CFF] to-[#6C5CE7] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0B3CFF]/25">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <p className="text-xl font-bold text-[#111]">{t(lang, 'methode_email_success')}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(lang, 'methode_email_placeholder')}
          className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B3CFF] focus:border-transparent bg-white text-lg"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-[#0B3CFF] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#0933DD] shadow-xl shadow-[#0B3CFF]/30 hover:shadow-2xl hover:shadow-[#0B3CFF]/40 hover:scale-[1.02] whitespace-nowrap"
        >
          {t(lang, 'methode_email_button')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>

      {/* Bonus: Tu veux créer quoi ? */}
      <div className="pt-2">
        <label className="block text-sm text-[#6C5CE7] font-bold mb-2">
          → {t(lang, 'methode_bonus_title')}
        </label>
        <textarea
          value={projectIdea}
          onChange={(e) => setProjectIdea(e.target.value)}
          placeholder={t(lang, 'methode_bonus_placeholder')}
          rows={2}
          className="w-full px-5 py-3 rounded-2xl border border-gray-200 text-[#111] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C5CE7] focus:border-transparent resize-none bg-white"
        />
      </div>
    </form>
  );
}

export default function Methode() {
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
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3CFF]/5 via-[#6C5CE7]/8 to-[#F8F9FB]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6C5CE7]/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white text-[#6C5CE7] text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-sm border border-[#6C5CE7]/20">
              <Sparkles className="h-4 w-4" />
              {lang === 'fr' ? 'La méthode' : 'The method'}
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#111]"
            >
              {t(lang, 'methode_hero_title')}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-[#333]"
            >
              {t(lang, 'methode_hero_subtitle')}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                t(lang, 'methode_hero_point1'),
                t(lang, 'methode_hero_point2'),
                t(lang, 'methode_hero_point3'),
              ].map((point, i) => (
                <span key={i} className="bg-white text-[#6C5CE7] font-bold text-sm px-4 py-2 rounded-full border border-[#6C5CE7]/20 shadow-sm">
                  → {point}
                </span>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ÉTAPE 1: LE DÉCLIC ─── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <StepBadge number={1} emoji="⚡" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-6">
                {t(lang, 'methode_step1_title')}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 text-lg text-[#333]">
              <p>{t(lang, 'methode_step1_p1')}</p>
              <div className="bg-gradient-to-r from-[#0B3CFF]/5 to-[#6C5CE7]/5 rounded-2xl p-5 border border-[#6C5CE7]/15">
                <p className="text-[#111] font-bold italic text-xl">
                  → {t(lang, 'methode_step1_quote')}
                </p>
              </div>
              <p>{t(lang, 'methode_step1_p2')}</p>
              <p className="font-medium">{t(lang, 'methode_step1_p3')}</p>
              <div className="space-y-2 pl-1">
                <p className="text-[#0B3CFF] font-bold text-xl">→ {t(lang, 'methode_step1_point1')}</p>
                <p className="text-[#0B3CFF] font-bold text-xl">→ {t(lang, 'methode_step1_point2')}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ÉTAPE 2: EXEMPLE SIMPLE ─── */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-[#6C5CE7]/3 to-[#F8F9FB]" />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <StepBadge number={2} emoji="🧪" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-6">
                {t(lang, 'methode_step2_title')}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 text-lg text-[#333]">
              <p>{t(lang, 'methode_step2_intro')}</p>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-2 shadow-sm">
                <p className="font-medium">→ {t(lang, 'methode_step2_point1')}</p>
                <p className="font-medium">→ {t(lang, 'methode_step2_point2')}</p>
                <p className="font-medium">→ {t(lang, 'methode_step2_point3')}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-2xl p-5 border border-gray-200">
                  <p className="text-gray-400 line-through">{t(lang, 'methode_step2_before')}</p>
                </div>
                <div className="bg-gradient-to-r from-[#0B3CFF]/5 to-[#6C5CE7]/5 rounded-2xl p-5 border border-[#0B3CFF]/20">
                  <p className="text-[#0B3CFF] font-bold">{t(lang, 'methode_step2_after')}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ÉTAPE 3: COMMENT ÇA MARCHE ─── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <StepBadge number={3} emoji="🛠️" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-2">
                {t(lang, 'methode_step3_title')}
              </h2>
              <p className="text-lg text-[#333] mb-6">{t(lang, 'methode_step3_intro')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                {
                  icon: MessageSquare,
                  title: t(lang, 'methode_step3_sub1_title'),
                  example: t(lang, 'methode_step3_sub1_example'),
                  color: 'from-[#0B3CFF]',
                },
                {
                  icon: Wrench,
                  title: t(lang, 'methode_step3_sub2_title'),
                  example: t(lang, 'methode_step3_sub2_example'),
                  color: 'from-[#6C5CE7]',
                },
                {
                  icon: Sparkles,
                  title: t(lang, 'methode_step3_sub3_title'),
                  example: t(lang, 'methode_step3_sub3_example'),
                  color: 'from-[#0B3CFF]',
                },
              ].map((item, i) => (
                <div key={i} className="bg-[#F8F9FB] rounded-2xl p-6 border border-gray-200 flex items-start gap-4 hover:border-[#6C5CE7]/30 transition-colors">
                  <div className={`flex-shrink-0 h-11 w-11 rounded-xl bg-gradient-to-br ${item.color} to-[#6C5CE7] flex items-center justify-center shadow-sm`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#111] text-lg">{item.title}</p>
                    <p className="text-[#333] italic mt-1">→ {item.example}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-xl font-bold text-[#0B3CFF] mt-8">
              → {t(lang, 'methode_step3_repeat')}
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ÉTAPE 4: LE VRAI PROBLÈME ─── */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-red-50/30 to-[#F8F9FB]" />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <StepBadge number={4} emoji="⚠️" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-2">
                {t(lang, 'methode_step4_title')}
              </h2>
              <p className="text-lg text-[#333] mb-6">{t(lang, 'methode_step4_intro')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {[
                t(lang, 'methode_step4_reason1'),
                t(lang, 'methode_step4_reason2'),
                t(lang, 'methode_step4_reason3'),
              ].map((reason, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-5 border border-red-200/60 shadow-sm">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-[#333] font-medium">{reason}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-2 text-lg">
              <p className="text-[#333]">→ {t(lang, 'methode_step4_conclusion1')}</p>
              <p className="text-[#111] font-extrabold text-xl">→ {t(lang, 'methode_step4_conclusion2')}</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── ÉTAPE 5: LA DIFFÉRENCE ─── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <StepBadge number={5} emoji="🚀" />
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-2">
                {t(lang, 'methode_step5_title')}
              </h2>
              <p className="text-lg text-[#333] mb-6">{t(lang, 'methode_step5_intro')}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-3 mb-8">
              {[
                t(lang, 'methode_step5_point1'),
                t(lang, 'methode_step5_point2'),
                t(lang, 'methode_step5_point3'),
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 bg-gradient-to-r from-[#0B3CFF]/5 to-[#6C5CE7]/5 rounded-2xl p-5 border border-[#0B3CFF]/15">
                  <CheckCircle className="h-5 w-5 text-[#0B3CFF] flex-shrink-0" />
                  <p className="text-[#333] font-bold">{point}</p>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-2xl font-extrabold text-[#0B3CFF] text-center">
              → {t(lang, 'methode_step5_conclusion')}
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TRANSITION ─── */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FB] via-[#6C5CE7]/5 to-[#F8F9FB]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm">
              <div className="inline-flex items-center gap-2 bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-bold px-4 py-2 rounded-full mb-6">
                🔒 Transition
              </div>
              <p className="text-lg text-[#333] mb-4">{t(lang, 'methode_transition_p1')}</p>
              <div className="space-y-2 mb-6">
                <p className="text-[#333] font-medium">→ {t(lang, 'methode_transition_point1')}</p>
                <p className="text-[#333] font-medium">→ {t(lang, 'methode_transition_point2')}</p>
                <p className="text-[#333] font-medium">→ {t(lang, 'methode_transition_point3')}</p>
              </div>
              <p className="text-[#111] font-bold italic text-lg">{t(lang, 'methode_transition_p2')}</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA EMAIL ─── */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3CFF]/5 via-[#6C5CE7]/8 to-[#F8F9FB]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#0B3CFF]/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mb-2">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0B3CFF] to-[#6C5CE7] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#0B3CFF]/20">
                <Mail className="h-7 w-7 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-extrabold text-[#111] mb-3"
            >
              {t(lang, 'methode_email_title')}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#333] mb-8"
            >
              {t(lang, 'methode_email_subtitle')}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <EmailForm lang={lang} />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── MICRO PREUVE ─── */}
      <section className="py-10 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="space-y-1 text-[#333]/70 text-sm font-medium">
              <p>→ {t(lang, 'methode_proof_line1')}</p>
              <p>→ {t(lang, 'methode_proof_line2')}</p>
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
