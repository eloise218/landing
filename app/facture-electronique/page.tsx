'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { trackLandingView, trackCreateAccountClick } from '@/lib/analytics';
import {
  ArrowRight, CheckCircle, XCircle, AlertTriangle,
  Shield, Zap, Clock, FileCheck, Users, Star,
  Sparkles, TrendingUp, Heart
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
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

export default function FactureElectronique() {
  useEffect(() => {
    trackLandingView('landing facture');
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-blue-50/30">
        {/* Soft decorative shapes */}
        <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-[80px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-[80px]" />

        <div className="relative mx-auto max-w-3xl px-6 pt-20 pb-24 text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-700">
                <AlertTriangle className="h-4 w-4" />
                Obligatoire dès septembre 2026
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900"
            >
              Facture électronique obligatoire :
              <br />
              <span className="text-teal-600">êtes-vous vraiment prêt ?</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed"
            >
              Dès bientôt, tous les micro-entrepreneurs et freelances devront passer à la facturation électronique.
              Pourtant, la majorité ne sait toujours pas quel outil choisir… ni comment s&apos;y prendre.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-3 max-w-2xl text-base text-gray-500"
            >
              Résultat : perte de temps, stress… et erreurs évitables.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-5 max-w-2xl text-lg text-teal-700 font-semibold"
            >
              Nous vous aidons à trouver l&apos;outil adapté à votre situation, simplement.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center justify-center gap-3"
            >
              <Link
                href="/facture-electronique/inscription"
                onClick={() => trackCreateAccountClick('landing facture')}
                className="group inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-md shadow-teal-200 transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-300/40 hover:-translate-y-0.5"
              >
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-2 text-sm text-teal-700 font-medium">
                <Users className="h-4 w-4" />
                Plus de 127 indépendants déjà intéressés
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── IDENTIFICATION / DOULEUR ─── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
            >
              Vous êtes dans cette situation ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-12">
              Vous n&apos;êtes pas seul. Des milliers d&apos;indépendants sont actuellement perdus face à ce changement.
            </motion.p>
          </AnimatedSection>

          <div className="grid gap-3 text-left">
            {[
              "Vous avez entendu parler de la réforme… mais vous ne savez pas quoi faire",
              "Vous voyez passer des noms comme Abby, Indy, Tiime… sans comprendre la différence",
              "Vous avez peur de faire un mauvais choix",
              "Vous n'avez pas le temps de comparer 10 outils différents"
            ].map((text, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="group flex items-start gap-4 bg-red-50/60 rounded-xl p-5 border border-red-100 hover:bg-red-50 transition-all duration-300"
                >
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TENSION / URGENCE ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-amber-50/50 to-orange-50/30">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
              >
                Cette transition ne peut pas être ignorée
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-500 max-w-xl mx-auto"
              >
                Attendre ou choisir au hasard peut entraîner des conséquences concrètes. Et plus vous attendez, plus cela devient compliqué.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                icon: AlertTriangle,
                title: "Pénalités financières",
                desc: "Les retardataires s'exposent à des amendes pouvant aller jusqu'à 15 € par facture non conforme.",
                color: "bg-amber-100 text-amber-600"
              },
              {
                icon: Clock,
                title: "Dates butoirs proches",
                desc: "L'obligation entre en vigueur progressivement dès septembre 2026 pour la réception des factures.",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: TrendingUp,
                title: "Complexité croissante",
                desc: "Plus vous attendez, plus la transition sera stressante et coûteuse à mettre en place.",
                color: "bg-red-100 text-red-500"
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${item.color} mb-4`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-teal-600 mb-3">
                Notre approche
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
              >
                Une approche simple, pensée pour vous
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-500 max-w-xl mx-auto"
              >
                Au lieu de passer des heures à comparer, notre plateforme analyse votre situation et vous oriente vers l&apos;outil le plus adapté.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Heart,
                title: "Simple",
                desc: "Pas de jargon, pas de termes techniques. Vous êtes guidé étape par étape, à votre rythme."
              },
              {
                icon: Zap,
                title: "Rapide",
                desc: "En quelques minutes, vous savez exactement quel outil correspond à votre activité."
              },
              {
                icon: Shield,
                title: "Sans prise de tête",
                desc: "On fait le tri pour vous parmi les solutions du marché. Vous n'avez plus qu'à choisir."
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                    <item.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-emerald-600">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Inclus</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTION ─── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
            >
              Imaginez :
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 mb-12"
            >
              C&apos;est exactement ce que nous construisons pour vous.
            </motion.p>
          </AnimatedSection>

          <div className="grid gap-3 text-left">
            {[
              "Vous savez exactement quel outil utiliser pour vos factures",
              "Vous êtes prêt pour la facturation électronique avant l'échéance",
              "Vous n'avez plus à vous poser de questions — tout est clair"
            ].map((text, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-emerald-50/60 rounded-xl p-5 border border-emerald-100"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <p className="text-gray-700 font-medium">{text}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRÉDIBILITÉ ─── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
              >
                Une sélection basée sur des critères concrets
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-gray-500"
              >
                Pas de blabla. Juste ce qui compte vraiment pour vous.
              </motion.p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Star,
                title: "Simplicité d'utilisation",
                desc: "Conçu pour ceux qui ne sont pas à l'aise avec l'informatique. Zéro jargon."
              },
              {
                icon: Shield,
                title: "Compatibilité micro-entreprise",
                desc: "Chaque outil est évalué selon sa compatibilité avec le statut micro-entrepreneur."
              },
              {
                icon: Zap,
                title: "Prix adapté",
                desc: "Tarification pensée pour les indépendants. Pas de surprise, pas de surcoût."
              },
              {
                icon: FileCheck,
                title: "Automatisation",
                desc: "Numérotation, TVA, envoi : on privilégie les outils qui font le travail à votre place."
              }
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeInUp}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-200 transition-all duration-300"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50">
                    <item.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="py-20 px-6 bg-gradient-to-b from-teal-50 to-teal-100/50">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mb-5 flex justify-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-200/60">
                <Sparkles className="h-7 w-7 text-teal-700" />
              </div>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
            >
              Prenez une longueur d&apos;avance dès maintenant
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-8 max-w-lg mx-auto"
            >
              Soyez prêt avant l&apos;échéance. Créez votre compte et faites partie des premiers à simplifier vos factures.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-3"
            >
              <Link
                href="/facture-electronique/inscription"
                onClick={() => trackCreateAccountClick('landing facture')}
                className="group inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-md shadow-teal-200 transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-300/40 hover:-translate-y-0.5"
              >
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-6 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-teal-200 px-4 py-2 text-sm text-teal-700 font-medium">
                <Users className="h-4 w-4" />
                Plus de 127 indépendants déjà intéressés
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a href="#" className="text-gray-400 hover:text-teal-600 text-sm transition-colors">
            Mentions légales
          </a>
          <span className="hidden sm:block text-gray-300">·</span>
          <a href="#" className="text-gray-400 hover:text-teal-600 text-sm transition-colors">
            Politique de confidentialité
          </a>
          <span className="hidden sm:block text-gray-300">·</span>
          <a href="mailto:contact@iaco.app" className="text-gray-400 hover:text-teal-600 text-sm transition-colors">
            Contact
          </a>
        </div>
        <p className="text-center text-gray-300 text-xs mt-4">
          © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </footer>
    </div>
  );
}
