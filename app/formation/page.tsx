'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import { t, type Lang } from './translations';
import {
  CheckCircle, ArrowRight, ChevronDown,
  Users, FolderKanban, Star,
  Receipt, Clock, Puzzle,
  Quote, Rocket, Database, Monitor, Globe, Menu, X
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

function FAQ({ question, answer, category }: { question: string; answer: string; category?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
    >
      {category && (
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2 block">{category}</span>
      )}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </button>
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

  const navItems = [
    { label: t(lang, 'nav_programme'), href: "#programme" },
    { label: t(lang, 'nav_temoignages'), href: "#temoignages" },
    { label: t(lang, 'nav_faq'), href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-gray-900">
          Vibe<span className="text-gray-900">Code</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:gap-0">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="md:hidden flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Globe className="h-4 w-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <Link
            href="/formation/inscription"
            onClick={() => trackCtaClick('landing formation', 'header_cta')}
            className="hidden md:inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800"
          >
            {t(lang, 'nav_cta')}
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-100 px-6 pb-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <Link
              href="/formation/inscription"
              onClick={() => { trackCtaClick('landing formation', 'header_cta_mobile'); setMenuOpen(false); }}
              className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white mt-2"
            >
              {t(lang, 'nav_cta')}
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
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header lang={lang} setLang={handleSetLang} />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900"
            >
              {t(lang, 'hero_title_prefix')}
              <span className="relative">
                <span className="relative z-10">{t(lang, 'hero_title_highlight')}</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-200/60 -z-0 rounded-sm" />
              </span>.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-gray-500 leading-relaxed"
            >
              {t(lang, 'hero_subtitle')}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <Link
                href="/formation/inscription"
                onClick={() => trackCtaClick('landing formation', 'hero_cta')}
                className="group inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                {t(lang, 'hero_cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-gray-400">
                {t(lang, 'hero_social_prefix')}<span className="text-gray-600 font-semibold">1 128</span>{t(lang, 'hero_social_suffix')}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SOCIAL PROOF STATS ─── */}
      <section className="py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 mb-8">
              {t(lang, 'stats_label')}
            </motion.p>
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: Users, value: "1 128", label: t(lang, 'stat_members') },
                { icon: FolderKanban, value: "112", label: t(lang, 'stat_activities') },
                { icon: Star, value: "50", label: t(lang, 'stat_reviews') }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <stat.icon className="h-5 w-5 text-gray-300" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LE PROBLÈME ─── */}
      <section className="relative py-24 px-6 bg-gray-50">
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {t(lang, 'problem_label')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900"
            >
              {t(lang, 'problem_title')}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-14 text-center max-w-2xl mx-auto">
              {t(lang, 'problem_intro')}
            </motion.p>
          </AnimatedSection>

          <div className="grid gap-4">
            {[
              { icon: Receipt, title: t(lang, 'problem_card1_title'), desc: t(lang, 'problem_card1_desc') },
              { icon: Clock, title: t(lang, 'problem_card2_title'), desc: t(lang, 'problem_card2_desc') },
              { icon: Puzzle, title: t(lang, 'problem_card3_title'), desc: t(lang, 'problem_card3_desc') }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-100">
                    <item.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-center text-lg text-gray-400 mt-10 font-medium">
              {t(lang, 'problem_result_prefix')}<span className="text-gray-900 font-semibold">{t(lang, 'problem_result_bold')}</span>
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TÉMOIGNAGE STÉPHANE ─── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-200 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200" />
              <p className="text-sm font-semibold text-orange-500 mb-4 pl-10">{t(lang, 'testimonial_stephane_tag')}</p>
              <p className="text-gray-700 leading-relaxed pl-10 text-lg">
                {t(lang, 'testimonial_stephane_quote_prefix')}<span className="font-semibold text-gray-900">{t(lang, 'testimonial_stephane_highlight')}</span>&quot;
              </p>
              <div className="mt-6 pl-10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">SR</div>
                <div>
                  <p className="font-semibold text-gray-900">{t(lang, 'testimonial_stephane_name')}</p>
                  <p className="text-sm text-gray-400">{t(lang, 'testimonial_stephane_role')}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LA MÉTHODE : OLD VS NEW ─── */}
      <section className="relative py-24 px-6 bg-white">
        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {t(lang, 'method_label')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900"
            >
              {t(lang, 'method_title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto"
            >
              {t(lang, 'method_subtitle')}
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-400 mb-6">{t(lang, 'method_old_title')}</h3>
                <ul className="space-y-5">
                  {[
                    t(lang, 'method_old_1'),
                    t(lang, 'method_old_2'),
                    t(lang, 'method_old_3'),
                    t(lang, 'method_old_4')
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 line-through decoration-gray-300">
                      <span className="text-gray-300 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* New Way */}
              <div className="rounded-2xl p-8 bg-white border-2 border-gray-900">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t(lang, 'method_new_title')}</h3>
                <ul className="space-y-5">
                  {[
                    t(lang, 'method_new_1'),
                    t(lang, 'method_new_2'),
                    t(lang, 'method_new_3'),
                    t(lang, 'method_new_4')
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LE DÉCLIC (STORYTELLING) ─── */}
      <section className="relative py-24 px-6 bg-gray-50">
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {t(lang, 'declic_label')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              {t(lang, 'declic_title')}
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                {t(lang, 'declic_p1')}
              </p>
              <p>
                {t(lang, 'declic_p2_prefix')}<span className="font-semibold text-gray-900">{t(lang, 'declic_p2_claude')}</span>{t(lang, 'declic_p2_middle')}<span className="font-semibold text-gray-900">{t(lang, 'declic_p2_tools')}</span>{t(lang, 'declic_p2_suffix')}
              </p>
              <p>
                {t(lang, 'declic_p3_prefix')}<span className="font-semibold text-gray-900">{t(lang, 'declic_p3_bold')}</span>
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROGRAMME 10 JOURS ─── */}
      <section id="programme" className="relative py-24 px-6 bg-white scroll-mt-20">
        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {t(lang, 'programme_label')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900"
            >
              {t(lang, 'programme_title')}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 text-center mb-16"
            >
              {t(lang, 'programme_subtitle')}
            </motion.p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                days: t(lang, 'programme_day1_days'),
                title: t(lang, 'programme_day1_title'),
                desc: t(lang, 'programme_day1_desc'),
                icon: Rocket,
              },
              {
                days: t(lang, 'programme_day2_days'),
                title: t(lang, 'programme_day2_title'),
                desc: t(lang, 'programme_day2_desc'),
                icon: Database,
              },
              {
                days: t(lang, 'programme_day3_days'),
                title: t(lang, 'programme_day3_title'),
                desc: t(lang, 'programme_day3_desc'),
                icon: Monitor,
              },
              {
                days: t(lang, 'programme_day4_days'),
                title: t(lang, 'programme_day4_title'),
                desc: t(lang, 'programme_day4_desc'),
                icon: Globe,
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-5 bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md w-fit">
                        {item.days}
                      </span>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    </div>
                    <p className="text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section id="temoignages" className="relative py-24 px-6 bg-gray-50 scroll-mt-20">
        <div className="relative mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4 text-center">
              {t(lang, 'temoignages_label')}
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900"
            >
              {t(lang, 'temoignages_title')}
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                quote: t(lang, 'temoignage1_quote'),
                name: t(lang, 'temoignage1_name'),
                project: t(lang, 'temoignage1_project'),
                tag: t(lang, 'temoignage1_tag'),
                initials: "MA"
              },
              {
                quote: t(lang, 'temoignage2_quote'),
                name: t(lang, 'temoignage2_name'),
                project: t(lang, 'temoignage2_project'),
                tag: t(lang, 'temoignage2_tag'),
                initials: "MD"
              },
              {
                quote: t(lang, 'temoignage3_quote'),
                name: t(lang, 'temoignage3_name'),
                project: t(lang, 'temoignage3_project'),
                tag: t(lang, 'temoignage3_tag'),
                initials: "OC"
              },
              {
                quote: t(lang, 'temoignage4_quote'),
                name: t(lang, 'temoignage4_name'),
                project: t(lang, 'temoignage4_project'),
                tag: t(lang, 'temoignage4_tag'),
                initials: "SP"
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-7 border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <p className="text-sm font-semibold text-gray-900 mb-4">&quot;{item.tag}&quot;</p>
                  <p className="text-gray-600 leading-relaxed flex-1">&quot;{item.quote}&quot;</p>
                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">{item.initials}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.project}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Témoignage Valérie */}
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-6 bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200" />
              <p className="text-sm font-semibold text-orange-500 mb-4 pl-10">{t(lang, 'temoignage_valerie_tag')}</p>
              <p className="text-gray-700 leading-relaxed pl-10 text-lg">
                {t(lang, 'temoignage_valerie_quote_prefix')}<span className="font-semibold text-gray-900">{t(lang, 'temoignage_valerie_highlight')}</span>{t(lang, 'temoignage_valerie_suffix')}
              </p>
              <div className="mt-6 pl-10 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">VM</div>
                <div>
                  <p className="font-semibold text-gray-900">{t(lang, 'temoignage_valerie_name')}</p>
                  <p className="text-sm text-gray-400">{t(lang, 'temoignage_valerie_role')}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="relative py-24 px-6 bg-white scroll-mt-20">
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900"
            >
              {t(lang, 'faq_title')}
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-3">
            <FAQ
              category={t(lang, 'faq1_category')}
              question={t(lang, 'faq1_question')}
              answer={t(lang, 'faq1_answer')}
            />
            <FAQ
              category={t(lang, 'faq2_category')}
              question={t(lang, 'faq2_question')}
              answer={t(lang, 'faq2_answer')}
            />
            <FAQ
              category={t(lang, 'faq3_category')}
              question={t(lang, 'faq3_question')}
              answer={t(lang, 'faq3_answer')}
            />
            <FAQ
              category={t(lang, 'faq4_category')}
              question={t(lang, 'faq4_question')}
              answer={t(lang, 'faq4_answer')}
            />
            <FAQ
              category={t(lang, 'faq5_category')}
              question={t(lang, 'faq5_question')}
              answer={t(lang, 'faq5_answer')}
            />
            <FAQ
              category={t(lang, 'faq6_category')}
              question={t(lang, 'faq6_question')}
              answer={t(lang, 'faq6_answer')}
            />
            <FAQ
              category={t(lang, 'faq7_category')}
              question={t(lang, 'faq7_question')}
              answer={t(lang, 'faq7_answer')}
            />
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-28 px-6 bg-gray-50">
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t(lang, 'cta_title_prefix')}
              <span className="relative">
                <span className="relative z-10">{t(lang, 'cta_title_highlight')}</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-200/60 -z-0 rounded-sm" />
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed"
            >
              {t(lang, 'cta_subtitle')}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <Link
                href="/formation/inscription"
                onClick={() => trackCtaClick('landing formation', 'footer_cta')}
                className="group inline-flex items-center justify-center rounded-full bg-gray-900 px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                {t(lang, 'cta_button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-gray-400">
                {t(lang, 'cta_social_prefix')}<span className="text-gray-600 font-semibold">1 128</span>{t(lang, 'cta_social_suffix')}
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-gray-100 bg-white py-10 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
            <a href="mailto:contact@iaco.app" className="hover:text-gray-900 transition-colors">{t(lang, 'footer_contact')}</a>
            <span className="hover:text-gray-900 transition-colors cursor-default">{t(lang, 'footer_legal')}</span>
            <span className="hover:text-gray-900 transition-colors cursor-default">{t(lang, 'footer_terms')}</span>
            <span className="hover:text-gray-900 transition-colors cursor-default">{t(lang, 'footer_privacy')}</span>
            <span className="hover:text-gray-900 transition-colors cursor-default">{t(lang, 'footer_cookies')}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
