'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackCtaClick } from '@/lib/analytics';
import {
  Sparkles, CheckCircle, ArrowRight, XCircle,
  Monitor, ChevronDown,
  Rocket, Globe, Lock, Clock, Wallet, Database, Menu, X,
  Quote, Users, FolderKanban,
  LayoutDashboard, FileText, Bot
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

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <p className="mt-4 text-gray-400 leading-relaxed">{answer}</p>
      )}
    </button>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: "Programme", href: "#programme" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg shadow-[0_1px_0_0_rgba(255,255,255,0.03)]' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold text-white">
          Vibe <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Coding</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-400 hover:text-violet-400 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/formation/inscription"
          onClick={() => trackCtaClick('landing formation', 'header_cta')}
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-5 py-2 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20"
        >
          Créer mon compte
        </Link>

        {/* Burger mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-lg border-b border-white/5 px-6 pb-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-violet-400 transition-colors">
                {item.label}
              </a>
            ))}
            <Link
              href="/formation/inscription"
              onClick={() => { trackCtaClick('landing formation', 'header_cta_mobile'); setMenuOpen(false); }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-5 py-2.5 text-sm font-bold text-white mt-2"
            >
              Créer mon compte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function Formation() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Header />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        {/* Glow effects */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full bg-orange-500/10 blur-[100px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        {/* Floating code decoration */}
        <div className="absolute top-20 left-8 hidden lg:block opacity-20 select-none pointer-events-none">
          <div className="font-mono text-xs text-violet-400 space-y-1">
            <p><span className="text-pink-400">const</span> business = <span className="text-green-400">&quot;mon-saas&quot;</span>;</p>
            <p><span className="text-pink-400">await</span> claude.<span className="text-amber-400">build</span>(business);</p>
          </div>
        </div>
        <div className="absolute bottom-32 right-8 hidden lg:block opacity-20 select-none pointer-events-none">
          <div className="font-mono text-xs text-violet-400 space-y-1">
            <p><span className="text-green-400">// Ton SaaS est en ligne</span></p>
            <p>app.<span className="text-amber-400">deploy</span>(<span className="text-green-400">&quot;production&quot;</span>);</p>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-violet-300 border border-white/10">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Formation Vibe Coding — 100% avec l&apos;IA
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white"
            >
              Lance ton side business en
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"> 10 jours</span>.
              <br />
              <span className="text-gray-500 text-2xl sm:text-3xl md:text-4xl font-bold">Pas dans 6 mois.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
            >
              Tu as l&apos;idée. L&apos;IA a les bras. Apprends à bâtir des SaaS et des outils web rentables sans écrire une seule ligne de code.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center gap-4"
            >
              <Link
                href="/formation/inscription"
                onClick={() => trackCtaClick('landing formation', 'hero_cta')}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-gray-500">
                <span className="text-violet-400 font-semibold">1 128</span> entrepreneurs ont déjà rejoint le mouvement
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SOCIAL PROOF FLASH ─── */}
      <section className="relative border-y border-white/5 bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
              {[
                { icon: Users, value: "50", label: "Bêta-testeurs" },
                { icon: FolderKanban, value: "112", label: "Projets lancés" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <stat.icon className="h-5 w-5 text-violet-400" />
                  <div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LE PROBLÈME ─── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-900/80">
        <GridPattern />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[600px] rounded-full bg-violet-600/5 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 text-center">
              Le problème
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6 text-center"
            >
              Pourquoi 90% des entrepreneurs n&apos;envoient jamais leur projet ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-14 text-center">
              Tu as une idée géniale. Tu es motivé. Mais dès qu&apos;il s&apos;agit de concrétiser, tu te retrouves face à un mur :
            </motion.p>
          </AnimatedSection>

          <div className="grid gap-4">
            {[
              { icon: Lock, title: "Le mur technique", desc: "\"Je ne sais pas coder, je dois trouver un associé.\"" },
              { icon: Wallet, title: "Le mur financier", desc: "\"Les agences me demandent 5 000€ pour un MVP.\"" },
              { icon: Clock, title: "Le mur du temps", desc: "\"Apprendre le Python ? J'ai un job, je ne peux pas y passer 2 ans.\"" }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-5 bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-amber-500/30 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <item.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-400 italic">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-center text-lg text-gray-500 mt-10 font-medium">
              Résultat : <span className="text-white">Ton idée meurt dans un coin de ton cerveau.</span> C&apos;est fini.
            </motion.p>
          </AnimatedSection>

          {/* Témoignage Léa */}
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-14 bg-white/5 rounded-2xl p-8 border border-violet-500/20 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-violet-500/20" />
              <p className="text-gray-300 leading-relaxed italic pl-8">
                &quot;J&apos;ai toujours été nul en code. Ici, je ne code pas, je décris. Résultat : mon annuaire IA a atteint 850 visiteurs en 24h. C&apos;est du Vibe Coding pur.&quot;
              </p>
              <p className="mt-4 text-sm text-violet-400 font-semibold pl-8">— Léa, fondatrice de AI-Directory</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── OLD VS NEW (LA MÉTHODE) ─── */}
      <section className="relative py-24 px-6 bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4 text-center">
              La méthode
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4"
            >
              Le code classique est mort pour les entrepreneurs.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto"
            >
              Les écoles de code t&apos;apprennent à devenir un employé. Moi, je t&apos;apprends à devenir un <span className="text-violet-400 font-semibold">Maker</span>.
            </motion.p>
          </AnimatedSection>

          {/* Comparison Table */}
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
              {/* Old Way */}
              <div className="rounded-2xl p-8 bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-gray-400 mb-6 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-gray-500" />
                  L&apos;ancienne école <span className="text-xs text-gray-600">(Udemy/Bootcamps)</span>
                </h3>
                <ul className="space-y-5">
                  {[
                    "6 mois pour comprendre le JavaScript",
                    "Apprendre à trier des listes (inutile)",
                    "Coût : 8 000€ ou 100h de vidéos",
                    "Tu abandonnes au bout de 2 semaines"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-500 line-through decoration-gray-700">
                      <span className="text-gray-600 flex-shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* New Way */}
              <div className="rounded-2xl p-8 bg-violet-500/10 border border-violet-500/20">
                <h3 className="text-lg font-bold text-violet-300 mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-violet-400" />
                  La méthode Vibe Coding <span className="text-xs text-violet-500">(IA)</span>
                </h3>
                <ul className="space-y-5">
                  {[
                    "10 jours pour lancer ton application",
                    "Apprendre à générer des revenus",
                    "Coût : Le prix d'un café par jour",
                    "Tu vois ton app prendre vie en 30 min"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-200">
                      <CheckCircle className="h-5 w-5 text-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TON HISTOIRE : LE DÉCLIC ─── */}
      <section className="relative py-24 px-6 bg-gray-950">
        <GridPattern />
        <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4 text-center">
              Le déclic
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-12"
            >
              J&apos;avais une idée, mais mon &quot;associé technique&quot; a disparu.
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Il y a quelques mois, j&apos;étais comme toi. J&apos;avais un projet de SaaS, un co-fondateur technique... et du jour au lendemain, <span className="text-white font-semibold">plus de nouvelles</span>. Il a arrêté de me répondre.
              </p>
              <p>
                J&apos;étais bloqué. Je ne savais pas coder.
              </p>
              <p>
                Au lieu d&apos;abandonner, j&apos;ai utilisé <span className="text-violet-400 font-semibold">Claude Code</span>. En 3 semaines, j&apos;ai lancé <span className="text-white font-semibold">4 sites</span>. J&apos;ai généré <span className="text-white font-semibold">10 000 vues</span>. Des gens ont commencé à me demander : &quot;Comment tu as fait ça sans dev ?&quot;.
              </p>
              <p className="text-xl text-white font-bold">
                La réponse : Je ne code pas, je vibe. Je décris, l&apos;IA construit.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PROGRAMME 10 JOURS ─── */}
      <section id="programme" className="relative py-24 px-6 bg-gray-900 scroll-mt-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4 text-center">
              Le programme
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4"
            >
              10 jours pour lancer
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 text-center mb-16"
            >
              Pas de blabla. Que du concret.
            </motion.p>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              {
                days: "Jour 1–2",
                title: "Le Setup de Guerre",
                desc: "Installation de Claude Code et ton premier \"Hello World\" en 15 minutes.",
                icon: Rocket,
                gradient: "from-violet-500 to-violet-600"
              },
              {
                days: "Jour 3–5",
                title: "Création de la machine",
                desc: "Base de données, authentification, logique métier. Tu parles en français, l'IA exécute.",
                icon: Database,
                gradient: "from-purple-500 to-purple-600"
              },
              {
                days: "Jour 6–8",
                title: "Design & Expérience",
                desc: "On rend ton app sexy et professionnelle pour qu'elle soit prête à être vendue.",
                icon: Monitor,
                gradient: "from-orange-500 to-orange-600"
              },
              {
                days: "Jour 9–10",
                title: "Mise en ligne & Cash",
                desc: "On déploie sur le web et on configure les premiers paiements.",
                icon: Globe,
                gradient: "from-green-500 to-emerald-600"
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-5 bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <span className="text-xs font-bold font-mono uppercase tracking-wider text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md w-fit border border-violet-500/20">
                        {item.days}
                      </span>
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TÉMOIGNAGES ─── */}
      <section id="temoignages" className="relative py-24 px-6 bg-gray-950 scroll-mt-20">
        <GridPattern />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4 text-center">
              Ce qu&apos;ils ont bâti
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-16"
            >
              Ils ont lancé. À ton tour.
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                quote: "J'ai lancé mon annuaire d'IA en 10 jours. J'ai déjà fait mes 3 premières ventes sur Stripe. C'est irréel.",
                name: "Thomas B.",
                project: "A bâti ToolFinder",
                tag: "\"Je pensais que c'était réservé aux génies.\""
              },
              {
                quote: "J'ai testé Bubble et Webflow, c'était trop limité. Avec cette formation, je crée des vraies apps complexes sans limite.",
                name: "Marc-Antoine",
                project: "A bâti SaaS-Template",
                tag: "\"Le futur du No-Code.\""
              },
              {
                quote: "Je payais un dev 400€ par mois pour des petites modifs. Avec Claude Code, je les fais moi-même en 2 minutes. C'est le meilleur investissement de mon année.",
                name: "Lucas D.",
                project: "SaaS de Fitness",
                tag: "\"J'ai viré mon dev freelance.\""
              },
              {
                quote: "Les cours classiques sont d'un ennui mortel. Ici, on build, on ship, on encaisse. C'est tout ce qui m'importe.",
                name: "Kevin M.",
                project: "Indie Hacker",
                tag: "\"Enfin une formation pour les business.\""
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:border-violet-500/20 transition-all duration-300 flex flex-col"
                >
                  <p className="text-sm font-semibold text-violet-400 mb-3">{item.tag}</p>
                  <Quote className="h-6 w-6 text-violet-500/30 mb-3" />
                  <p className="text-gray-300 leading-relaxed flex-1 italic">&quot;{item.quote}&quot;</p>
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.project}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── C'EST POUR QUI ─── */}
      <section className="relative py-24 px-6 bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-16"
            >
              C&apos;est pour toi ?
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8 bg-green-500/5 border border-green-500/20 h-full"
              >
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" /> C&apos;est pour toi si
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tu as des idées de business plein la tête mais tu es bloqué par la tech.",
                    "Tu es fatigué de chercher un \"associé technique\" qui ne vient jamais.",
                    "Tu veux tester un marché rapidement sans dépenser des milliers d'euros."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8 bg-white/5 border border-white/10 h-full"
              >
                <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                  <XCircle className="h-5 w-5" /> Ce n&apos;est PAS pour toi si
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tu veux devenir développeur salarié chez Google.",
                    "Tu aimes passer 4 heures à chercher une virgule manquante dans ton code."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-full border-2 border-gray-600" />
                      <span className="text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="relative py-24 px-6 bg-gray-950 scroll-mt-20">
        <GridPattern />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-14"
            >
              Questions fréquentes
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-3">
            <FAQ
              question="Est-ce que je dois avoir des bases ?"
              answer="Non. Si tu sais écrire un mail, tu sais utiliser Claude Code."
            />
            <FAQ
              question="Combien de temps ça prend ?"
              answer="1h par jour pendant 10 jours suffit pour voir ton projet en ligne."
            />
            <FAQ
              question="C'est quoi la différence avec le No-Code ?"
              answer="Le No-Code est limité par des blocs. Ici, tu as la puissance du vrai code, mais c'est l'IA qui le rédige pour toi."
            />
          </div>
        </div>
      </section>

      {/* ─── CE QUE TU VAS CONSTRUIRE ─── */}
      <section className="relative py-24 px-6 bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4 text-center">
              Exemples concrets
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-6"
            >
              Qu&apos;est-ce que tu vas construire ?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto"
            >
              Voici des exemples de ce que nos membres ont lancé en moins de 10 jours :
            </motion.p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bot, title: "Un SaaS IA", desc: "Un outil qui génère des posts LinkedIn automatiquement." },
              { icon: Globe, title: "Un Annuaire", desc: "La liste des meilleurs restaurants de Paris filtrée par IA." },
              { icon: LayoutDashboard, title: "Un Outil Productivité", desc: "Un dashboard personnel pour gérer tes finances." },
              { icon: FileText, title: "Une Landing Page", desc: "Exactement comme celle-ci, mais pour ton produit." }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
                    <item.icon className="h-7 w-7 text-violet-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Témoignage Maxime */}
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-14 bg-white/5 rounded-2xl p-8 border border-violet-500/20 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-violet-500/20" />
              <p className="text-gray-300 leading-relaxed italic pl-8">
                &quot;Je cherchais à lancer un side-project depuis 1 an. Avec cette méthode, je l&apos;ai fait en une semaine. Déjà $320 de revenu récurrent mensuel. Plus besoin d&apos;attendre après un développeur.&quot;
              </p>
              <p className="mt-4 text-sm text-violet-400 font-semibold pl-8">— Maxime, fondateur de AutoPost-IA</p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[400px] rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
                <Rocket className="h-8 w-8 text-violet-400" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Arrête de rêver de ton projet.{' '}
              <span className="bg-gradient-to-r from-violet-400 to-orange-400 bg-clip-text text-transparent">Construis-le maintenant.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
            >
              Dans 10 jours, tu pourras envoyer le lien de ton site à tes clients.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
              <Link
                href="/formation/inscription"
                onClick={() => trackCtaClick('landing formation', 'footer_cta')}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <p className="text-sm text-gray-500">
                <span className="text-violet-400 font-semibold">1 128</span> entrepreneurs ont déjà rejoint le mouvement
              </p>
            </motion.div>

          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 bg-gray-950 py-10 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <a href="mailto:contact@iaco.app" className="hover:text-violet-400 transition-colors">Contact</a>
            <span className="hover:text-violet-400 transition-colors cursor-default">Mentions Légales</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Conditions générales d&apos;utilisation</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Politique de confidentialité</span>
            <span className="hover:text-violet-400 transition-colors cursor-default">Gestion des cookies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
