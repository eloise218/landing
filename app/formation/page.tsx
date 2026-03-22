'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { trackLandingView, trackCreateAccountClick } from '@/lib/analytics';
import {
  Sparkles, CheckCircle, ArrowRight,
  Monitor, MessageSquare, Zap, Shield, ChevronDown,
  Rocket, Heart, Terminal, Code2, Globe
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
      className="w-full text-left bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 hover:border-violet-300 hover:bg-white/80 transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </button>
  );
}

function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(139,92,246,0.07) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden xl:block opacity-[0.07] select-none pointer-events-none">
      <pre className="text-sm leading-relaxed font-mono text-violet-900">
{`function createApp() {
  const idea = describe("Mon projet");
  const app = claude.build(idea);

  app.addPages([
    "accueil",
    "dashboard",
    "profil"
  ]);

  app.style("moderne");
  app.deploy();

  return app;
}`}
      </pre>
    </div>
  );
}

export default function Formation() {
  useEffect(() => {
    trackLandingView('landing formation');
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 overflow-x-hidden">

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
            <p><span className="text-pink-400">const</span> projet = <span className="text-green-400">&quot;mon-app&quot;</span>;</p>
            <p><span className="text-pink-400">await</span> claude.<span className="text-amber-400">create</span>(projet);</p>
          </div>
        </div>
        <div className="absolute bottom-32 right-8 hidden lg:block opacity-20 select-none pointer-events-none">
          <div className="font-mono text-xs text-violet-400 space-y-1">
            <p><span className="text-green-400">// Ton app est en ligne</span></p>
            <p>app.<span className="text-amber-400">deploy</span>(<span className="text-green-400">&quot;production&quot;</span>);</p>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-28 text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-violet-300 border border-white/10">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Formation 100% débutant — Aucune ligne de code requise
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-white"
            >
              Crée ta première app web en
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"> 10 jours</span>
              <br />
              <span className="text-gray-500 text-3xl sm:text-4xl md:text-5xl font-bold">sans écrire une seule ligne de code</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-8 max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
            >
              Tu décris ce que tu veux, l&apos;IA le construit pour toi. Étape par étape, on te guide de zéro jusqu&apos;à un projet en ligne. Même si tu n&apos;as jamais touché un ordinateur pour coder.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/formation/inscription"
                onClick={() => trackCreateAccountClick('landing formation')}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Je veux commencer
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Terminal preview */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 mx-auto max-w-lg"
            >
              <div className="rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">terminal</span>
                </div>
                <div className="p-5 font-mono text-sm text-left">
                  <p className="text-gray-500">$ claude</p>
                  <p className="text-violet-400 mt-2">Que veux-tu créer aujourd&apos;hui ?</p>
                  <p className="text-gray-300 mt-2">
                    <span className="text-green-400">&gt;</span> Un site pour mon portfolio avec une page contact
                  </p>
                  <p className="text-amber-400 mt-2">
                    Création en cours...
                    <span className="animate-pulse ml-1">|</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LE PROBLÈME (empathie) ─── */}
      <section className="relative py-24 px-6 bg-white">
        <GridPattern />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-4">
              On te comprend
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900"
            >
              Tu as envie de créer, mais tu bloques toujours au même endroit
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-14">
              Si tu te reconnais dans une de ces situations, cette formation est faite pour toi.
            </motion.p>
          </AnimatedSection>

          <div className="grid gap-3 text-left">
            {[
              "Tu regardes des tutos depuis des mois… mais tu n'as toujours rien créé",
              "Tu as une idée en tête mais tu ne sais pas par où commencer",
              "Le code te fait peur ou te décourage dès les premières lignes",
              "Tu as essayé des no-code mais tu te sens limité",
              "Tu aimerais juste que quelqu'un te guide pas à pas"
            ].map((text, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:bg-violet-50 hover:border-violet-200 transition-all duration-300"
                >
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-violet-100 text-violet-600 text-sm font-bold group-hover:bg-violet-200 transition-colors">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 font-medium">{text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LA SOLUTION ─── */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-400 mb-4 text-center">
              La solution
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white"
            >
              Tu parles, l&apos;IA construit
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto"
            >
              Avec Claude Code, tu décris ton projet en français. L&apos;IA comprend, code et crée pour toi. Tu pilotes, elle exécute.
            </motion.p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MessageSquare, title: "Tu décris", desc: "En français, avec tes mots. Pas de jargon technique.", step: "01" },
              { icon: Zap, title: "L'IA crée", desc: "Claude Code génère ton application en temps réel.", step: "02" },
              { icon: Monitor, title: "Tu vois le résultat", desc: "À chaque étape, tu vois ce qui a été construit.", step: "03" },
              { icon: Rocket, title: "Tu mets en ligne", desc: "Ton projet est accessible au monde entier.", step: "04" }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <span className="absolute top-4 right-4 text-xs font-mono text-violet-500/50">{item.step}</span>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
                    <item.icon className="h-7 w-7 text-violet-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMME 10 JOURS ─── */}
      <section className="relative py-24 px-6 bg-white">
        <GridPattern />
        <CodeBlock />
        <div className="relative mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-4 text-center">
              Le programme
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900"
            >
              10 jours pour passer de zéro à ton app en ligne
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 text-center mb-16"
            >
              Chaque jour, un objectif clair. Pas de blabla, que de l&apos;action.
            </motion.p>
          </AnimatedSection>

          <div className="relative">
            <div className="space-y-4">
              {[
                { days: "Jour 1–2", title: "Installation & premiers pas", desc: "Tu prépares ton environnement et tu fais ta première demande à l'IA. En 30 min, tu vois ton premier résultat.", icon: Terminal, gradient: "from-violet-500 to-violet-600" },
                { days: "Jour 3–4", title: "Apprendre à parler à l'IA", desc: "Les bons mots, les bonnes méthodes. Tu apprends à obtenir exactement ce que tu veux de Claude Code.", icon: MessageSquare, gradient: "from-purple-500 to-purple-600" },
                { days: "Jour 5–6", title: "Construire ton projet", desc: "Tu commences à créer ta vraie application. Page par page, fonctionnalité par fonctionnalité.", icon: Code2, gradient: "from-orange-500 to-orange-600" },
                { days: "Jour 7–8", title: "Design & finitions", desc: "Ton app devient belle et professionnelle. Tu apprends à demander les bons ajustements visuels.", icon: Sparkles, gradient: "from-pink-500 to-pink-600" },
                { days: "Jour 9–10", title: "Mise en ligne", desc: "Tu publies ton projet sur Internet. Il est accessible à tout le monde. C'est réel.", icon: Globe, gradient: "from-green-500 to-emerald-600" }
              ].map((item, i) => (
                <AnimatedSection key={i}>
                  <motion.div
                    variants={fadeInUp}
                    className="group flex items-start gap-5 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
                  >
                    <div className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                        <span className="text-xs font-bold font-mono uppercase tracking-wider text-violet-600 bg-violet-100 px-2.5 py-1 rounded-md w-fit">
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
        </div>
      </section>

      {/* ─── CE QUE TU OBTIENS ─── */}
      <section className="py-24 px-6 bg-gradient-to-b from-violet-50 to-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-4 text-center">
              Ce que tu obtiens
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900"
            >
              Tout ce qu&apos;il te faut pour réussir
            </motion.h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "10 modules vidéo pas à pas",
              "Un projet fil rouge complet",
              "Les prompts exacts à utiliser",
              "Accès au groupe d'entraide",
              "Templates et ressources inclus",
              "Support si tu bloques",
              "Mises à jour gratuites à vie",
              "Certificat de complétion"
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div variants={fadeInUp} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POURQUOI ÇA MARCHE ─── */}
      <section className="relative py-24 px-6 bg-white">
        <GridPattern />
        <div className="relative mx-auto max-w-5xl">
          <AnimatedSection>
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-violet-600 mb-4 text-center">
              Pourquoi maintenant
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900"
            >
              L&apos;IA a changé les règles du jeu
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto"
            >
              Ce qui prenait des mois à un développeur prend maintenant quelques jours avec l&apos;IA. Tu arrives au bon moment.
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Zap,
                title: "Avant : des mois d'apprentissage",
                desc: "Apprendre HTML, CSS, JavaScript, un framework, le déploiement… Des mois avant de voir un résultat.",
                after: "Maintenant : tu décris en français, l'IA construit. Tu vois le résultat en minutes."
              },
              {
                icon: MessageSquare,
                title: "Avant : coder ligne par ligne",
                desc: "Chaque fonctionnalité demandait de comprendre la syntaxe, débugger, chercher sur Google…",
                after: "Maintenant : tu expliques ce que tu veux, Claude Code écrit le code pour toi."
              },
              {
                icon: Rocket,
                title: "Avant : réservé aux développeurs",
                desc: "Créer une application web était un métier à part entière. Inaccessible sans formation technique.",
                after: "Maintenant : n'importe qui peut créer. Il suffit de savoir expliquer son idée."
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 flex flex-col hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 mb-5 group-hover:bg-violet-200 transition-colors">
                    <item.icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-5 leading-relaxed">{item.desc}</p>
                  <div className="mt-auto pt-5 border-t border-gray-200">
                    <p className="text-sm text-gray-700 font-semibold leading-relaxed">{item.after}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── POUR QUI / PAS POUR QUI ─── */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900"
            >
              Est-ce que c&apos;est pour toi ?
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8 bg-white border-2 border-green-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
                  <Heart className="h-5 w-5" /> Parfait pour toi si
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tu n'as jamais codé de ta vie",
                    "Tu trouves la tech intimidante",
                    "Tu veux créer sans passer des mois à apprendre",
                    "Tu as une idée mais pas les moyens de la construire",
                    "Tu veux un résultat concret, pas juste de la théorie"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl p-8 bg-gray-50 border-2 border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5" /> Pas pour toi si
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tu veux devenir développeur professionnel",
                    "Tu cherches une formation de code classique",
                    "Tu sais déjà coder et utiliser l'IA"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-full border-2 border-gray-300" />
                      <span className="text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-400 mt-8 pt-5 border-t border-gray-200">
                  Ici tu apprends à <strong>créer</strong>, pas à <strong>coder</strong>.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-24 px-6 bg-white">
        <GridPattern />
        <div className="relative mx-auto max-w-3xl">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-900"
            >
              Questions fréquentes
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-3">
            <FAQ
              question="Je n'ai vraiment jamais codé, c'est grave ?"
              answer="Pas du tout, c'est même le but. La formation est conçue pour des personnes qui n'ont aucune connaissance technique. Tu vas apprendre à créer en parlant à l'IA, pas en écrivant du code."
            />
            <FAQ
              question="Il me faut quoi pour commencer ?"
              answer="Un ordinateur (Mac, Windows ou Linux) et une connexion internet. C'est tout. On t'explique tout le reste dans la formation, étape par étape."
            />
            <FAQ
              question="Combien de temps par jour ça prend ?"
              answer="Environ 1 à 2 heures par jour. Chaque module est conçu pour être digéré facilement. Tu peux aussi aller à ton rythme, l'accès est à vie."
            />
            <FAQ
              question="C'est quoi Claude Code exactement ?"
              answer="C'est un outil d'intelligence artificielle qui comprend ce que tu lui demandes en français et qui écrit le code à ta place. Tu lui dis ce que tu veux, il le construit. Comme avoir un développeur personnel."
            />
            <FAQ
              question="Et si je bloque pendant la formation ?"
              answer="Tu as accès au groupe d'entraide où tu peux poser tes questions. Et chaque module inclut les solutions aux problèmes courants. Tu ne seras jamais seul."
            />
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />

        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
                <Sparkles className="h-8 w-8 text-violet-400" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Dans 10 jours, tu auras créé quelque chose de réel
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
            >
              Pas un rêve. Pas un plan. Un vrai projet, en ligne, que tu pourras montrer au monde. La seule question c&apos;est : tu commences quand ?
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/formation/inscription"
                onClick={() => trackCreateAccountClick('landing formation')}
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Je commence maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
