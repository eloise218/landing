'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import {
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Target,
  Search,
  MessageSquare,
  Star,
  BarChart3,
  Users,
  Zap,
  Quote,
  TrendingUp,
  AlertCircle,
  Globe,
  MessageCircle,
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

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}

/* ── Page ───────────────────────────────────────────────── */

export default function ProblemSolverLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ─── NAVBAR ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/problemsolver" className="flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">
              <span className="text-slate-900">Problem</span>
              <span className="text-blue-600">Finder</span>
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#comment-ca-marche"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              Comment ca marche
            </a>
            <Link
              href="/problemsolver/inscription"
              onClick={() => trackCtaClick('landing problem', 'nav_cta')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition"
            >
              Créer un compte
            </Link>
          </div>

          <button
            className="sm:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden bg-white border-b border-slate-200"
            >
              <div className="px-4 py-4 space-y-3">
                <a
                  href="#comment-ca-marche"
                  className="block text-slate-600 hover:text-slate-900 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Comment ca marche
                </a>
                <Link
                  href="/problemsolver/inscription"
                  onClick={() => {
                    trackCtaClick('landing problem', 'nav_mobile_cta');
                    setMobileMenuOpen(false);
                  }}
                  className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold px-5 py-3 rounded-xl transition"
                >
                  Créer un compte
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="bg-white pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <AnimatedSection>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
              >
                Valide ton idée avant de perdre 6 mois dessus.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-5 text-lg text-slate-600"
              >
                Analyse les vraies frustrations des utilisateurs à travers le web
                et découvre si ton idée répond à un problème réel.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 space-y-2.5">
                {[
                  'Donne un domaine ou une idée',
                  'On analyse des milliers de sources',
                  'Tu reçois un rapport clair avec preuves',
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/problemsolver/inscription"
                  onClick={() => trackCtaClick('landing problem', 'hero_cta')}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl text-lg shadow-lg shadow-blue-600/25 transition"
                >
                  Créer un compte
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <span className="text-sm text-slate-400">
                  3 analyses gratuites · Puis 19€/mois
                </span>
              </motion.div>
            </AnimatedSection>

            {/* Right: Mini dashboard preview */}
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-1"
              >
                {/* Fake browser bar */}
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="ml-2 flex-1 h-5 bg-slate-200 rounded text-[10px] text-slate-400 flex items-center px-2">
                    problemfinder.app/rapport
                  </div>
                </div>

                {/* Mini report */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  {/* Search bar */}
                  <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
                    <Search className="h-4 w-4 text-slate-300" />
                    <span className="text-sm text-slate-500">planifier des voyages entre amis</span>
                  </div>

                  {/* Score + metrics */}
                  <div className="px-4 py-4 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-600">9.1</span>
                      <span className="text-sm text-slate-400">/ 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-xs text-slate-400">Plaintes</p>
                        <p className="text-sm font-semibold text-slate-900">2 846</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-400">Intensité</p>
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                          Élevée
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* One quote */}
                  <div className="px-4 py-3">
                    <div className="bg-slate-50 rounded-lg p-3 border-l-3 border-blue-600">
                      <p className="text-xs text-slate-600 italic">
                        &ldquo;Organiser un voyage à 5 c&apos;est un enfer, personne répond pareil…&rdquo;
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">Reddit, r/travel</p>
                    </div>
                  </div>

                  {/* Conclusion bar */}
                  <div className="px-4 py-2.5 bg-green-50 border-t border-green-100 flex items-center gap-2">
                    <CheckCircle className="h-3.5 w-3.5 text-green-600" />
                    <p className="text-xs text-green-700 font-medium">Fort potentiel — problème massif et fréquent</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PROBLÈME ───────────────────────────────────── */}
      <section className="bg-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-4">
              Le problème
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900 max-w-3xl mx-auto">
              Le vrai blocage, ce n&apos;est pas de créer.{' '}
              <span className="text-blue-600">C&apos;est de savoir quoi créer.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Tu as une idée… mais tu ne sais pas si quelqu&apos;un en a vraiment besoin.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-3 gap-6">
            {[
              {
                emoji: '🤔',
                title: 'Tu doutes',
                desc: 'Est-ce un vrai problème ? Est-ce que des gens paieraient pour ça ?',
              },
              {
                emoji: '🔍',
                title: 'Tu cherches partout',
                desc: 'Les infos sont dispersées sur des forums, avis, réseaux… sans conclusion claire.',
              },
              {
                emoji: '⏳',
                title: 'Tu perds du temps',
                desc: 'Tu lis des centaines de messages sans avancer. Pendant ce temps, tu ne construis rien.',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SOLUTION ───────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              La solution
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              On te montre la réalité du marché.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              ProblemFinder analyse automatiquement les frustrations exprimées par de vrais utilisateurs sur :
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { icon: MessageSquare, label: 'Forums', sub: 'Reddit, etc.' },
              { icon: Star, label: 'Avis clients', sub: 'Trustpilot…' },
              { icon: Globe, label: 'Réseaux sociaux', sub: 'X, Facebook…' },
              { icon: MessageCircle, label: 'Commentaires', sub: 'Blogs, articles…' },
            ].map((source) => (
              <motion.div
                key={source.label}
                variants={fadeInUp}
                className="bg-blue-50/60 rounded-2xl border border-slate-200 p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100/60 mb-3">
                  <source.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="font-semibold text-slate-900">{source.label}</p>
                <p className="text-sm text-slate-400">{source.sub}</p>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection className="max-w-xl mx-auto space-y-3">
            {[
              'Tu ne lis plus des milliers de messages',
              'Tu obtiens directement une synthèse exploitable',
            ].map((text) => (
              <motion.div key={text} variants={fadeInUp} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="text-slate-700 text-lg">{text}</span>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CE QUE TU REÇOIS ───────────────────────────── */}
      <section className="bg-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Le rapport
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              Ce que tu reçois
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
              Pour chaque idée ou domaine, tu obtiens un rapport structuré :
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Score de potentiel',
                desc: 'Un score clair de 0 à 10 basé sur les données collectées.',
              },
              {
                icon: TrendingUp,
                title: 'Nombre de plaintes',
                desc: 'Combien de personnes expriment ce problème publiquement.',
              },
              {
                icon: Zap,
                title: 'Fréquence du problème',
                desc: 'À quelle fréquence ce problème est mentionné.',
              },
              {
                icon: AlertCircle,
                title: 'Niveau d\'intensité',
                desc: 'De faible à critique — mesure l\'urgence ressentie.',
              },
              {
                icon: Users,
                title: 'Types d\'utilisateurs',
                desc: 'Qui sont les personnes concernées par ce problème.',
              },
              {
                icon: Quote,
                title: 'Extraits réels',
                desc: 'Messages authentiques analysés pour étayer les résultats.',
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 mb-4">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── EXEMPLE CONCRET (FAKE DASHBOARD) ───────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Exemple concret
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              Voici ce que tu recevrais
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            {/* Search query display */}
            <motion.div variants={fadeInUp} className="mb-6">
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                <Search className="h-5 w-5 text-slate-400 shrink-0" />
                <span className="text-slate-600">application pour planifier des voyages entre amis</span>
              </div>
            </motion.div>

            {/* Report card */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Score de potentiel</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-green-600">9.1</span>
                      <span className="text-lg text-slate-400">/ 10</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-600 text-sm font-semibold px-4 py-2 rounded-full">
                    Fort potentiel
                  </div>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-1">Plaintes identifiées</p>
                  <p className="text-2xl font-bold text-slate-900">
                    <AnimatedCounter target={2846} />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">30 derniers jours</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-1">Intensité</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full">
                      Très élevée
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-400 mb-1">Utilisateurs concernés</p>
                  <p className="text-sm text-slate-700 font-medium">Groupes d&apos;amis, étudiants, jeunes actifs</p>
                </div>
              </div>

              {/* Quotes */}
              <div className="p-6 sm:p-8 border-t border-slate-200">
                <p className="text-sm font-semibold text-slate-900 mb-4">Extraits analysés</p>
                <div className="space-y-3">
                  {[
                    {
                      text: 'Organiser un voyage à 5 c\'est un enfer, personne répond pareil…',
                      source: 'Reddit, r/travel',
                    },
                    {
                      text: 'On a mis 3 semaines juste pour choisir les dates…',
                      source: 'Twitter',
                    },
                    {
                      text: 'Entre les budgets, les préférences et les dispos, c\'est ingérable',
                      source: 'Forum voyage',
                    },
                    {
                      text: 'On finit toujours par ne rien faire à cause de l\'organisation',
                      source: 'Reddit, r/france',
                    },
                  ].map((quote) => (
                    <div
                      key={quote.text}
                      className="bg-slate-50 rounded-xl p-4 border-l-4 border-blue-600"
                    >
                      <div className="flex gap-3">
                        <Quote className="h-4 w-4 text-slate-300 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-slate-700 italic">&ldquo;{quote.text}&rdquo;</p>
                          <p className="text-xs text-slate-400 mt-1">{quote.source}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="p-6 sm:p-8 bg-green-50 border-t border-green-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                  <p className="text-green-700 font-semibold">
                    Problème massif, émotionnel, fréquent → très fort potentiel produit
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── COMMENT ÇA MARCHE ──────────────────────────── */}
      <section id="comment-ca-marche" className="scroll-mt-20 bg-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Simple et rapide
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              Comment ça marche
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Donne une idée ou un domaine',
                desc: 'Décris simplement ce que tu veux explorer.',
                example: 'Ex : "facturation freelance", "réservation vacances", "gestion budget étudiant"',
              },
              {
                step: '2',
                title: 'On analyse le web',
                desc: 'Notre système identifie les frustrations récurrentes à grande échelle.',
                example: 'Forums, avis, réseaux sociaux, commentaires publics…',
              },
              {
                step: '3',
                title: 'Tu reçois un rapport clair',
                desc: 'Tu sais immédiatement si ça vaut le coup… ou non.',
                example: 'Score, preuves, extraits, conclusion actionnable.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl border border-slate-200 p-8"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
                <p className="mt-3 text-sm text-slate-400 italic">{item.example}</p>

                {/* Connector on desktop */}
                {i < 2 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-blue-200" />
                )}
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PRIX ───────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <motion.div
              variants={fadeInUp}
              className="bg-blue-50/60 rounded-2xl border border-slate-200 shadow-lg p-8 text-center"
            >
              <div className="inline-flex items-center bg-green-100 text-green-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Essai gratuit
              </div>

              <p className="text-slate-600 mb-2">3 analyses offertes</p>

              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-4xl font-bold text-slate-900">19€</span>
                <span className="text-slate-400">/mois</span>
              </div>

              <div className="space-y-3 text-left mb-8">
                {[
                  'Analyses illimitées',
                  'Rapports détaillés avec preuves',
                  'Score de potentiel business',
                  'Extraits de messages réels',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/problemsolver/inscription"
                onClick={() => trackCtaClick('landing problem', 'pricing_cta')}
                className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition"
              >
                Créer un compte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── POUR QUI ───────────────────────────────────── */}
      <section className="bg-slate-100 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center mb-10">
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              Pour qui ?
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid sm:grid-cols-3 gap-6">
            {[
              {
                emoji: '💡',
                title: 'Futurs entrepreneurs',
                desc: 'Tu cherches une idée solide, basée sur un vrai besoin du marché.',
              },
              {
                emoji: '🎯',
                title: 'Entrepreneurs',
                desc: 'Tu veux valider ton idée avant de construire et investir.',
              },
              {
                emoji: '⚡',
                title: 'Builders',
                desc: 'Tu veux éviter de perdre du temps sur un produit que personne ne veut.',
              },
            ].map((persona) => (
              <motion.div
                key={persona.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-slate-200 p-8 text-center"
              >
                <span className="text-3xl">{persona.emoji}</span>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{persona.title}</h3>
                <p className="mt-2 text-slate-600">{persona.desc}</p>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CE QUE CE N'EST PAS ────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
              Ce que ce n&apos;est pas
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              {[
                'On ne te donne pas "l\'idée parfaite"',
                'On ne garantit pas le succès',
              ].map((text) => (
                <div key={text} className="flex items-center justify-center gap-3">
                  <X className="h-5 w-5 text-red-500 shrink-0" />
                  <span className="text-slate-600">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 w-5 text-blue-600 shrink-0" />
              <span className="text-slate-900 font-semibold">
                On te donne la réalité du marché, pour décider intelligemment.
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA FINAL ──────────────────────────────────── */}
      <section className="bg-slate-100 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-bold text-slate-900">
              Ton futur business commence par un problème réel.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-slate-600">
              Arrête de deviner. Regarde ce que les utilisateurs disent vraiment.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8">
              <Link
                href="/problemsolver/inscription"
                onClick={() => trackCtaClick('landing problem', 'footer_cta')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg shadow-blue-600/25 transition"
              >
                Créer un compte et valider mon idée
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-slate-900">
                Problem<span className="text-blue-600">Finder</span>
              </span>
            </div>

            <p className="text-sm text-slate-400">
              ProblemFinder © 2026 — Analyse des frustrations utilisateurs à grande échelle
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="mailto:contact@iaco.app" className="hover:text-slate-600 transition">
                Contact
              </a>
              <a href="#" className="hover:text-slate-600 transition">
                Mentions légales
              </a>
              <a href="#" className="hover:text-slate-600 transition">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
