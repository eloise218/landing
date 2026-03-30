'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import {
  Search,
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  ChevronDown,
  MessageSquareText,
  Globe,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

/* ── Animations ─────────────────────────────────────────── */

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
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

/* ── Counter animation ──────────────────────────────────── */

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── FAQ Item ───────────────────────────────────────────── */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-fuchsia-600"
      >
        <span className="text-lg font-medium text-gray-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Main Page ──────────────────────────────────────────── */

export default function ProblemSolverLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* ─── NAVBAR ──────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/problemsolver" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-orange-500 shadow-sm">
              <Target className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Problem<span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">Finder</span>
            </span>
          </Link>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="#comment-ca-marche"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Comment ça marche
            </Link>
            <Link
              href="/problemsolver/inscription"
              onClick={() => trackCtaClick('landing problem', 'nav_cta')}
              className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Commencer maintenant
            </Link>
          </div>

          <button
            className="sm:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gray-100 bg-white sm:hidden"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                <Link
                  href="#comment-ca-marche"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Comment ça marche
                </Link>
                <Link
                  href="/problemsolver/inscription"
                  onClick={() => { trackCtaClick('landing problem', 'nav_mobile_cta'); setMobileMenuOpen(false); }}
                  className="rounded-lg bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Commencer maintenant
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── HERO ────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-200 opacity-40 blur-[100px]" />
          <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-200 opacity-40 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[500px] rounded-full bg-orange-100 opacity-50 blur-[80px]" />
          <div className="absolute bottom-10 right-1/4 h-[250px] w-[400px] rounded-full bg-emerald-100 opacity-30 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700">
                <Sparkles className="h-4 w-4" />
                Analyse automatique des frustrations du web
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              Tu veux entreprendre mais t&apos;as{' '}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                zéro idée
              </span>{' '}
              de problème à résoudre ?
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl"
            >
              On identifie les frustrations réelles des gens sur le web et on te livre des
              problèmes concrets, prêts à transformer en business.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/problemsolver/inscription"
                onClick={() => trackCtaClick('landing problem', 'hero_cta')}
                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Trouver mon premier problème
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Floating trust indicators */}
          <AnimatedSection className="mt-16">
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Sources vérifiées
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-violet-500" />
                Analyse IA avancée
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-orange-500" />
                Résultats en 24h
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LE PROBLÈME ─────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-rose-500">
              Le vrai blocage
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Le plus dur, c&apos;est pas de monter une boîte.{' '}
              <span className="text-gray-400">C&apos;est de savoir quoi monter.</span>
            </motion.h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <MessageSquareText className="h-6 w-6" />,
                title: 'La page blanche',
                desc: "T'es motivé. Tu regardes des vidéos, tu lis des threads, tu écoutes des podcasts. Mais quand tu t'assois pour trouver ton idée… rien. Le vide. Depuis des semaines.",
                color: 'text-rose-600',
                bg: 'bg-rose-50',
                border: 'hover:border-rose-300',
                glow: 'hover:shadow-rose-100/50',
              },
              {
                icon: <Search className="h-6 w-6" />,
                title: 'Les fausses pistes',
                desc: "Tu penses à des trucs qui existent déjà. Ou à des idées \"cool\" dont personne n'a besoin. Tu doutes, tu procrastines, tu lances rien.",
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                border: 'hover:border-violet-300',
                glow: 'hover:shadow-violet-100/50',
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Google ne t'aide pas",
                desc: "Les vrais problèmes des gens sont éparpillés dans des forums, des avis, des commentaires. Impossible à trouver et à synthétiser seul.",
                color: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'hover:border-amber-300',
                glow: 'hover:shadow-amber-100/50',
              },
            ].map((card) => (
              <AnimatedSection key={card.title}>
                <motion.div
                  variants={fadeInUp}
                  className={`group h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all ${card.border} hover:shadow-lg ${card.glow}`}
                >
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.bg} ${card.color}`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="leading-relaxed text-gray-600">{card.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LA SOLUTION ─────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-100 opacity-40 blur-[80px]" />
          <div className="absolute right-0 top-1/3 h-[250px] w-[250px] rounded-full bg-fuchsia-100 opacity-40 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              La solution
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              On te montre les problèmes.{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-600 bg-clip-text text-transparent">
                T&apos;as plus qu&apos;à choisir.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600"
            >
              ProblemFinder analyse les frustrations réelles des gens à travers le web : forums,
              avis, réseaux sociaux, commentaires. On te livre des problèmes concrets, triés par
              thématique et par potentiel.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── COMMENT ÇA MARCHE ───────────────────────── */}
      <section id="comment-ca-marche" className="bg-gradient-to-b from-violet-50 via-fuchsia-50/60 to-purple-50 py-20 sm:py-28 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-violet-500">
              En 3 étapes
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              De la page blanche à ton idée
            </motion.h2>
          </AnimatedSection>

          <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
            {/* Connector line (desktop) */}
            <div className="pointer-events-none absolute top-14 left-[16.67%] right-[16.67%] hidden h-0.5 bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 lg:block" />

            {[
              {
                step: '01',
                icon: <Target className="h-6 w-6" />,
                title: 'Choisis ta direction',
                desc: "Pas besoin d'une idée. Juste un domaine qui t'intéresse : tech, santé, food, éducation, finance… On part de là.",
                gradient: 'from-violet-500 to-purple-600',
                shadow: 'shadow-violet-500/20',
                label: 'text-violet-400',
              },
              {
                step: '02',
                icon: <Zap className="h-6 w-6" />,
                title: 'On fait le sale boulot',
                desc: 'Notre outil scanne des milliers de sources pour repérer les frustrations récurrentes que personne ne résout.',
                gradient: 'from-cyan-500 to-teal-600',
                shadow: 'shadow-cyan-500/20',
                label: 'text-teal-400',
              },
              {
                step: '03',
                icon: <BarChart3 className="h-6 w-6" />,
                title: 'Tu reçois des problèmes concrets',
                desc: 'Une liste claire : le problème, qui le ressent, à quelle fréquence, et son potentiel business.',
                gradient: 'from-emerald-500 to-teal-600',
                shadow: 'shadow-emerald-500/20',
                label: 'text-emerald-400',
              },
            ].map((item) => (
              <AnimatedSection key={item.step}>
                <motion.div
                  variants={fadeInUp}
                  className="relative rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all hover:shadow-lg"
                >
                  <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg ${item.shadow}`}>
                    {item.icon}
                  </div>
                  <span className={`mb-2 block text-xs font-bold uppercase tracking-widest ${item.label}`}>
                    Étape {item.step}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-14 text-center">
            <motion.div variants={fadeInUp}>
              <Link
                href="/problemsolver/inscription"
                onClick={() => trackCtaClick('landing problem', 'middle_cta')}
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110"
              >
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SOCIAL PROOF / STATS ────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Stats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-8 text-center"
              >
                <TrendingUp className="mx-auto mb-4 h-8 w-8 text-rose-500" />
                <div className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  <AnimatedCounter target={70} suffix="%" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  des aspirants entrepreneurs bloquent avant même de commencer — ils ne trouvent
                  pas quoi créer.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-8 text-center"
              >
                <Users className="mx-auto mb-4 h-8 w-8 text-teal-500" />
                <div className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                  <AnimatedCounter target={99} suffix="%" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  des plaintes postées chaque jour sur Reddit, Trustpilot, Twitter ne seront
                  jamais lues par un entrepreneur.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Testimonial */}
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col justify-between rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 sm:col-span-2 lg:col-span-1"
              >
                <p className="text-lg italic leading-relaxed text-gray-700">
                  &quot;6 mois que je cherchais une idée. Le jour où on m&apos;a mis des vrais
                  problèmes sous les yeux, j&apos;ai su quoi faire en 10 minutes.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-600">
                    T
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Thomas R.</p>
                    <p className="text-xs text-gray-500">Aspirant entrepreneur, 32 ans</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-fuchsia-50/40 to-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedSection className="text-center">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-widest text-fuchsia-500">
              Questions fréquentes
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mt-3 text-3xl font-bold sm:text-4xl"
            >
              On répond à tout
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="mt-12 rounded-2xl border border-gray-200 bg-white px-8">
            <FaqItem
              question="Les problèmes vont être trop vagues ?"
              answer="Non. Chaque problème vient avec du contexte : qui le vit, à quelle fréquence, des verbatims réels. C'est concret et actionnable."
            />
            <FaqItem
              question="D'autres vont voir les mêmes problèmes ?"
              answer="La base est immense. Et soyons clairs : c'est jamais l'idée qui fait la différence. C'est l'exécution. Deux personnes avec le même problème ne construiront jamais la même solution."
            />
            <FaqItem
              question="J'ai aucune compétence technique."
              answer="On te donne le problème, pas la solution technique. Tu peux lancer un business sans écrire une ligne de code. Le problème, c'est le point de départ — la façon dont tu le résous, c'est à toi de décider."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA FINAL ───────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[350px] w-[500px] rounded-full bg-violet-100 opacity-50 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-[300px] w-[400px] rounded-full bg-orange-100 opacity-40 blur-[80px]" />
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50 opacity-50 blur-[60px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Ton futur business commence par un problème.{' '}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
                On te le trouve.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-lg text-gray-600"
            >
              Rejoins ProblemFinder et découvre les vraies frustrations que personne ne résout
              encore.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link
                href="/problemsolver/inscription"
                onClick={() => trackCtaClick('landing problem', 'footer_cta')}
                className="group inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:brightness-110"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-orange-500">
              <Target className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight">
              Problem<span className="bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent">Finder</span>
            </span>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ProblemFinder. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
