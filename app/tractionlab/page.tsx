'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import { t, type Lang, type TranslationKey } from './translations';
import {
  ArrowRight,
  Globe,
  Menu,
  X,
  Check,
  Compass,
  Megaphone,
  Magnet,
  Repeat,
  Quote,
  Sparkles,
  ChevronDown,
  Wallet,
  Clock3,
  Users,
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-violet-300/90">
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
      {children}
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a1f]/85 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold text-white tracking-tight">
          Traction
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            lab
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <Link
            href={`/tractionlab/inscription${lang === 'fr' ? '?lang=fr' : ''}`}
            onClick={() => trackCtaClick('tractionlab', 'header_cta')}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-500/30"
          >
            {t(lang, 'nav_cta')}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a1f]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <button
            onClick={() => {
              setLang(lang === 'fr' ? 'en' : 'fr');
              setMenuOpen(false);
            }}
            className="flex items-center gap-1.5 text-sm text-white/80"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'English' : 'Français'}
          </button>
          <Link
            href={`/tractionlab/inscription${lang === 'fr' ? '?lang=fr' : ''}`}
            onClick={() => {
              trackCtaClick('tractionlab', 'header_cta_mobile');
              setMenuOpen(false);
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            {t(lang, 'nav_cta')}
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold tracking-[0.15em] text-violet-200 mb-10">
            <Sparkles className="h-3.5 w-3.5" />
            {t(lang, 'hero_label')}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-white">{t(lang, 'hero_title_line1')}</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              {t(lang, 'hero_title_line2')}
            </span>
          </h1>

          <div className="mt-10 max-w-2xl mx-auto space-y-4 text-lg md:text-xl text-white/70 leading-relaxed">
            <p>{t(lang, 'hero_subtitle_1')}</p>
            <p>{t(lang, 'hero_subtitle_2')}</p>
            <p className="text-white/85 font-medium">{t(lang, 'hero_subtitle_3')}</p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/tractionlab/inscription${lang === 'fr' ? '?lang=fr' : ''}`}
              onClick={() => trackCtaClick('tractionlab', 'hero_cta')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:-translate-y-0.5"
            >
              {t(lang, 'hero_cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span className="text-sm text-white/50">· {t(lang, 'hero_cta_sub')} ·</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection({ lang }: { lang: Lang }) {
  const points: TranslationKey[] = ['s1_p1', 's1_p2', 's1_p3', 's1_p4', 's1_p5'];
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-transparent via-violet-900/25 to-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's1_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's1_title')}
          </motion.h2>

          <div className="mt-14 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-9 md:left-[42px] top-5 bottom-5 w-px bg-gradient-to-b from-violet-400/40 via-violet-500/20 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {points.map((key, i) => (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="group relative flex gap-4 md:gap-5 items-center bg-white/[0.07] border border-white/12 rounded-2xl px-4 md:px-5 py-3.5 md:py-4 hover:border-violet-400/40 hover:bg-gradient-to-br hover:from-violet-500/15 hover:to-fuchsia-500/8 transition-all"
                >
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                    <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-extrabold text-sm md:text-base tabular-nums border border-white/15 shadow-lg shadow-violet-900/30">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-white/85 leading-relaxed group-hover:text-white transition-colors">
                    {t(lang, key)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function WhyNotWorkingSection({ lang }: { lang: Lang }) {
  const cards = [
    {
      icon: Wallet,
      stat: '5 000 €',
      label: lang === 'fr' ? 'de budget ads / mois' : 'monthly ad budget',
      sub: lang === 'fr' ? 'que tu n’as pas.' : 'you don’t have.',
    },
    {
      icon: Clock3,
      stat: '6',
      label: lang === 'fr' ? 'mois pour que le SEO décolle' : 'months for SEO to kick in',
      sub: lang === 'fr' ? 'que tu n’as pas.' : 'you don’t have.',
    },
    {
      icon: Users,
      stat: '0',
      label:
        lang === 'fr'
          ? 'community manager, copywriter, growth'
          : 'community manager, copywriter, growth',
      sub: lang === 'fr' ? 'dans ton équipe.' : 'on your team.',
    },
  ];

  return (
    <section className="relative py-14 md:py-20 bg-[#251a4d]">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp} className="text-center">
            <SectionLabel>{t(lang, 's2_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto text-center"
          >
            {t(lang, 's2_title')}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/65 leading-relaxed text-center"
          >
            {t(lang, 's2_p1')}
          </motion.p>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  variants={fadeInUp}
                  className="bg-[#0a0a1f] border border-white/10 rounded-2xl p-6 hover:border-violet-400/30 transition-colors"
                >
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-500/30 mb-4">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {c.stat}
                  </div>
                  <div className="mt-2 text-sm text-white/75 leading-snug">{c.label}</div>
                  <div className="mt-1 text-sm text-white/45">{c.sub}</div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 max-w-3xl mx-auto text-center space-y-3 text-lg text-white/75 leading-relaxed"
          >
            <p>{t(lang, 's2_p3')}</p>
            <p className="text-white/90 font-medium">{t(lang, 's2_p4')}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-black/40 border border-violet-400/15 rounded-2xl p-8 md:p-10 text-center">
              <Quote className="h-7 w-7 text-violet-400/60 mb-5 mx-auto" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
                {t(lang, 's2_quote')}
              </p>
              <p className="mt-6 text-sm text-white/45">{t(lang, 's2_quote_author')}</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function MethodSection({ lang }: { lang: Lang }) {
  const pillars = [
    { icon: Compass, title: 's3_p1_title' as const, text: 's3_p1_text' as const, n: '01' },
    { icon: Megaphone, title: 's3_p2_title' as const, text: 's3_p2_text' as const, n: '02' },
    { icon: Magnet, title: 's3_p3_title' as const, text: 's3_p3_text' as const, n: '03' },
    { icon: Repeat, title: 's3_p4_title' as const, text: 's3_p4_text' as const, n: '04' },
  ];

  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-transparent via-violet-900/25 to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's3_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's3_title')}
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.n}
                  variants={fadeInUp}
                  className="group relative bg-white/[0.08] border border-white/15 rounded-2xl p-7 md:p-8 hover:border-violet-400/40 hover:bg-white/[0.12] transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/20">
                      <Icon className="h-5 w-5 text-violet-300" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] text-white/30">
                      PILIER {p.n}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {t(lang, p.title)}
                  </h3>
                  <p className="text-white/90 leading-relaxed">{t(lang, p.text)}</p>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialsSection({ lang }: { lang: Lang }) {
  const items = [
    { quote: 's4_t1_quote' as const, author: 's4_t1_author' as const, initial: 'L' },
    { quote: 's4_t2_quote' as const, author: 's4_t2_author' as const, initial: 'M' },
  ];
  return (
    <section className="relative py-14 md:py-20 bg-[#251a4d]">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's4_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's4_title')}
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {items.map((it) => (
              <motion.div
                key={it.initial}
                variants={fadeInUp}
                className="bg-[#0a0a1f] border border-white/10 rounded-2xl p-7 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                    {it.initial}
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-violet-300 text-sm">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-white/85 leading-relaxed">{t(lang, it.quote)}</p>
                <p className="mt-5 text-sm text-white/50">{t(lang, it.author)}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-10 text-center text-sm text-white/45"
          >
            {t(lang, 's4_footer')}
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function AboutMeSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-b from-transparent via-violet-900/25 to-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's5_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's5_title')}
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-12 gap-10 items-start">
            <motion.div variants={fadeInUp} className="md:col-span-5 relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-violet-500/40 via-fuchsia-500/30 to-violet-700/30 rounded-3xl blur-3xl pointer-events-none" />
              <div className="absolute -inset-4 bg-violet-500/25 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-gradient-to-br from-[#1a1235] to-[#0f0a26] border border-violet-400/20 rounded-2xl p-7 shadow-2xl shadow-violet-500/40">
                <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-[10px] font-bold tracking-[0.2em] text-violet-200">
                  {lang === 'fr' ? 'MON POINT DE DÉPART' : 'MY STARTING POINT'}
                </div>

                <div className="space-y-5 mt-2">
                  <div>
                    <div className="text-base md:text-lg text-white/70 font-semibold tracking-wide mb-3">
                      {lang === 'fr' ? 'Avant la méthode' : 'Before the method'}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white/85">70</span>
                      <span className="text-sm text-white/55">
                        {lang === 'fr' ? 'visiteurs / plusieurs mois' : 'visitors / several months'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-extrabold text-rose-300/80">0</span>
                      <span className="text-sm text-white/55">
                        {lang === 'fr' ? 'client' : 'customers'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="md:col-span-7 space-y-5 text-lg text-white/75 leading-relaxed"
            >
              <p>{t(lang, 's5_p1')}</p>
              <p>{t(lang, 's5_p2')}</p>
              <p>
                {t(lang, 's5_p3_pre')}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent font-semibold">
                  {t(lang, 's5_p3_highlight')}
                </span>
              </p>
              <p className="text-white/85">{t(lang, 's5_p4')}</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ForWhoSection({ lang }: { lang: Lang }) {
  const fors: TranslationKey[] = ['s6_for_1', 's6_for_2', 's6_for_3', 's6_for_4'];
  const againsts: TranslationKey[] = ['s6_against_1', 's6_against_2', 's6_against_3'];

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's6_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's6_title')}
          </motion.h2>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-violet-500/25 to-violet-500/8 border border-violet-400/35 rounded-2xl p-7 md:p-8"
            >
              <h3 className="text-lg font-bold text-violet-200 mb-5 flex items-center gap-2">
                <Check className="h-5 w-5" />
                {t(lang, 's6_for_title')}
              </h3>
              <ul className="space-y-3.5">
                {fors.map((k) => (
                  <li key={k} className="flex gap-3 text-white/85">
                    <Check className="h-5 w-5 text-violet-300 shrink-0 mt-0.5" />
                    <span>{t(lang, k)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white/[0.08] border border-white/15 rounded-2xl p-7 md:p-8"
            >
              <h3 className="text-lg font-bold text-white/55 mb-5 flex items-center gap-2">
                <X className="h-5 w-5" />
                {t(lang, 's6_against_title')}
              </h3>
              <ul className="space-y-3.5">
                {againsts.map((k) => (
                  <li key={k} className="flex gap-3 text-white/55">
                    <X className="h-5 w-5 text-white/30 shrink-0 mt-0.5" />
                    <span>{t(lang, k)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function CtaSection({ lang }: { lang: Lang }) {
  return (
    <section
      id="cta"
      className="py-14 md:py-20 relative scroll-mt-20 bg-[#251a4d]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-violet-500/20 blur-[120px] rounded-full" />
      </div>
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection className="text-center">
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's7_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's7_title')}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 text-lg text-white/65">
            {t(lang, 's7_subtitle')}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
            <Link
              href={`/tractionlab/inscription${lang === 'fr' ? '?lang=fr' : ''}`}
              onClick={() => trackCtaClick('tractionlab', 'cta_section')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/30 transition-all hover:shadow-violet-500/50 hover:-translate-y-0.5"
            >
              {t(lang, 's7_email_cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-14 text-left bg-[#0a0a1f] border border-white/10 rounded-2xl p-7 md:p-8"
          >
            <h3 className="text-lg font-bold text-white mb-4">{t(lang, 's7_reassure_title')}</h3>
            <div className="space-y-3 text-white/70 leading-relaxed">
              <p>{t(lang, 's7_reassure_p1')}</p>
              <p>{t(lang, 's7_reassure_p2')}</p>
              <p className="text-white/85">{t(lang, 's7_reassure_p3')}</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function FaqItem({ n, q, a }: { n: string; q: string; a: string }) {
  return (
    <details className="group bg-white/[0.08] border border-white/15 rounded-xl px-5 py-4 transition-all hover:border-violet-400/30 open:border-violet-400/40 open:bg-white/[0.12]">
      <summary className="flex items-center gap-4 cursor-pointer list-none text-white font-semibold">
        <span className="text-sm font-bold tabular-nums bg-gradient-to-br from-violet-400 to-fuchsia-500 bg-clip-text text-transparent shrink-0 w-7">
          {n}
        </span>
        <span className="flex-1">{q}</span>
        <ChevronDown className="h-5 w-5 text-violet-300 shrink-0 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-white/70 leading-relaxed pl-11">{a}</p>
    </details>
  );
}

function FaqSection({ lang }: { lang: Lang }) {
  const items: { q: TranslationKey; a: TranslationKey }[] = [
    { q: 's8_q1_q', a: 's8_q1_a' },
    { q: 's8_q4_q', a: 's8_q4_a' },
    { q: 's8_q5_q', a: 's8_q5_a' },
    { q: 's8_q6_q', a: 's8_q6_a' },
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedSection>
          <motion.div variants={fadeInUp}>
            <SectionLabel>{t(lang, 's8_label')}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            {t(lang, 's8_title')}
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-12 space-y-2">
            {items.map((it, i) => (
              <FaqItem
                key={it.q}
                n={String(i + 1).padStart(2, '0')}
                q={t(lang, it.q)}
                a={t(lang, it.a)}
              />
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-sm text-white/45 text-center md:text-left">
          {t(lang, 'footer_copyright')}
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55 justify-center">
          <a href="mailto:contact@iaco.app" className="hover:text-white transition-colors">
            {t(lang, 'footer_contact')}
          </a>
          <Link href="/tractionlab/mentions-legales" className="hover:text-white transition-colors">
            {t(lang, 'footer_legal')}
          </Link>
          <Link href="/tractionlab/cgu" className="hover:text-white transition-colors">
            {t(lang, 'footer_terms')}
          </Link>
          <Link href="/tractionlab/confidentialite" className="hover:text-white transition-colors">
            {t(lang, 'footer_privacy')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function TractionlabPage() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'fr') setLang('fr');
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white antialiased relative overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute top-[30%] -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-700/10 blur-[120px] -z-10" />

      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProblemSection lang={lang} />
        <WhyNotWorkingSection lang={lang} />
        <MethodSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <AboutMeSection lang={lang} />
        <ForWhoSection lang={lang} />
        <CtaSection lang={lang} />
        <FaqSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
