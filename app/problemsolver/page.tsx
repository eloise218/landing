'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FileText, Search, CheckCircle, Users, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

export default function Landing1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-indigo-200 opacity-40 blur-3xl"></div>
        <div className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full bg-orange-200 opacity-40 blur-3xl"></div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 py-24 lg:flex-row lg:items-center lg:justify-center">
          <AnimatedSection className="max-w-2xl lg:max-w-xl">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900"
            >
              Tu veux entreprendre mais t&apos;as zéro idée de problème à résoudre&nbsp;?
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-xl text-gray-600"
            >
              On identifie des frustrations réelles sur le web pour te livrer des problèmes clairs, concrets et prêts à transformer en business.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/problemsolver/inscription"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600 whitespace-nowrap"
              >
                Trouver mon premier problème
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <div className="inline-flex items-center justify-center rounded-xl bg-white/70 px-6 py-2 text-lg font-semibold text-gray-700">
                Pourquoi ça marche
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 grid gap-4 sm:grid-cols-2"
            >
              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-5 shadow-sm">
                <CheckCircle className="h-7 w-7 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Problèmes réels</p>
                  <p className="text-sm text-gray-600">Basé sur des frustrations postées en ligne (forums, avis, réseaux).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-5 shadow-sm">
                <CheckCircle className="h-7 w-7 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-800">Pas d&apos;idée ? Pas grave</p>
                  <p className="text-sm text-gray-600">Tu choisis une thématique, on te propose des problèmes triés par potentiel.</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection className="relative mx-auto w-full max-w-md lg:max-w-xl lg:ml-12">
            <motion.div
              variants={fadeInUp}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur"
            >
              <p className="text-sm font-semibold text-gray-500">Exemple de problèmes trouvés</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-gray-800">Les boutiques locales ne savent pas quand il y a du stock.</p>
                  <p className="mt-2 text-sm text-gray-600">Clients frustrés parce que les articles sont indiqués disponibles en ligne mais sont épuisés en magasin.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-gray-800">Les freelancers perdent du temps à relancer des clients.</p>
                  <p className="mt-2 text-sm text-gray-600">Ils ne savent pas qui est vraiment intéressé et passent des heures à envoyer des messages.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-gray-800">Les parents cherchent une activité pour les week-ends.</p>
                  <p className="mt-2 text-sm text-gray-600">Ils sont submergés par le choix et ne savent pas quoi essayer en premier.</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            >
              Le plus dur, c&apos;est pas de monter une boîte. C&apos;est de savoir quoi monter
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">La page blanche</h3>
                <p className="text-gray-600">
                  T&apos;es motivé. Tu regardes des vidéos, tu lis des threads, tu écoutes des podcasts. Mais quand tu t&apos;assois pour trouver ton idée... rien. Le vide. Depuis des semaines. Des mois peut-être.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <Search className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Les fausses pistes</h3>
                <p className="text-gray-600">
                  Tu penses à des trucs qui existent déjà. Ou à des idées &quot;cool&quot; dont personne n&apos;a besoin. Tu doutes, tu procrastines, tu lances rien.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <HelpCircle className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Google ne t&apos;aide pas</h3>
                <p className="text-gray-600">
                  Tu tapes &quot;quels problèmes résoudre pour entreprendre&quot; et tu tombes sur des articles génériques. Les vrais problèmes des gens, ils sont éparpillés dans des forums, des avis, des commentaires. Impossible à trouver seul.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LA SOLUTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              On te montre les problèmes. T&apos;as plus qu&apos;à choisir
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12"
            >
              ProblemFinder analyse les frustrations réelles des gens à travers le web : forums, avis, réseaux sociaux, commentaires. On te livre des problèmes concrets, triés par thématique et par potentiel. Chaque problème est une opportunité de business.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="py-20 px-4 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
              De la page blanche à ton idée. En 3 étapes
            </motion.h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Choisis ta direction</h3>
                <p className="text-gray-600">
                  Pas besoin d&apos;une idée. Juste un domaine qui t&apos;intéresse : tech, santé, food, éducation, finance... On part de là.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">On fait le sale boulot</h3>
                <p className="text-gray-600">
                  Notre outil scanne des milliers de sources pour repérer les frustrations récurrentes que personne ne résout.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tu reçois des problèmes concrets</h3>
                <p className="text-gray-600">
                  Une liste claire : le problème, qui le ressent, à quelle fréquence, et son potentiel business. Tu choisis celui qui te parle.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-16">
            <motion.div variants={fadeInUp}>
              <Link
                href="/problemsolver/inscription"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg"
              >
                Créer mon compte gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PREUVE SOCIALE */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <TrendingUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                <p className="text-gray-600">
                  des aspirants entrepreneurs n&apos;échouent pas à cause du financement ou de la technique. Ils bloquent bien avant ça : ils ne trouvent pas quoi créer.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="text-center bg-white p-8 rounded-lg shadow-lg border border-gray-100"
              >
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <p className="text-gray-600">
                  des millions de plaintes et frustrations sont postées chaque jour sur Reddit, Trustpilot, Twitter. 99% ne seront jamais lues par un entrepreneur.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <p className="text-gray-600 italic mb-4">
                  &quot;6 mois que je cherchais une idée. J&apos;avais l&apos;impression de tourner en boucle. Le jour où on m&apos;a mis des vrais problèmes sous les yeux, j&apos;ai su quoi faire en 10 minutes.&quot;
                </p>
                <p className="text-sm text-gray-500">Aspirant entrepreneur, 32 ans</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-16 text-gray-800"
            >
              FAQ
            </motion.h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection>
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">&quot;Les problèmes vont être trop vagues ?&quot;</h3>
                <p className="text-gray-600">Non. Chaque problème vient avec du contexte : qui le vit, à quelle fréquence, des verbatims réels. C&apos;est concret.</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">&quot;D&apos;autres vont voir les mêmes problèmes ?&quot;</h3>
                <p className="text-gray-600">La base est immense. Et soyons clairs : c&apos;est jamais l&apos;idée qui fait la différence. C&apos;est l&apos;exécution.</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">&quot;J&apos;ai aucune compétence technique.&quot;</h3>
                <p className="text-gray-600">On te donne le problème, pas la solution technique. Tu peux lancer un business sans écrire une ligne de code.</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
            >
              Ton futur business commence par un problème
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12"
            >
              On te le trouve
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/problemsolver/inscription"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-lg shadow-lg"
              >
                Créer mon compte gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
