export type Lang = 'en' | 'fr';

const translations = {
  // ─── HEADER / NAV ───────────────────────────────────
  nav_programme: {
    en: 'Program',
    fr: 'Programme',
  },
  nav_temoignages: {
    en: 'Testimonials',
    fr: 'Témoignages',
  },
  nav_faq: {
    en: 'FAQ',
    fr: 'FAQ',
  },
  nav_cta: {
    en: 'Create my account',
    fr: 'Créer mon compte',
  },

  // ─── HERO ───────────────────────────────────────────
  hero_title_prefix: {
    en: "Don't let technology ",
    fr: 'Ne laissez plus la technique ',
  },
  hero_title_highlight: {
    en: 'hold back your ambition',
    fr: 'freiner votre ambition',
  },
  hero_subtitle: {
    en: 'Build your website, your business tool or your service platform in 10 days. With AI, create professional solutions without ever writing a single line of code.',
    fr: "Créez votre site, votre outil métier ou votre plateforme de services en 10 jours. Grâce à l'IA, bâtissez des solutions professionnelles sans jamais écrire une ligne de code.",
  },
  hero_cta: {
    en: 'Create my free account',
    fr: 'Créer mon compte gratuitement',
  },
  hero_social_prefix: {
    en: 'Already ',
    fr: 'Déjà ',
  },
  hero_social_suffix: {
    en: ' entrepreneurs, freelancers and creators have joined us.',
    fr: ' entrepreneurs, freelances et créateurs nous ont rejoint.',
  },

  // ─── SOCIAL PROOF STATS ─────────────────────────────
  stats_label: {
    en: 'The new standard for building online',
    fr: 'La nouvelle norme pour créer en ligne',
  },
  stat_members: {
    en: 'Active members',
    fr: 'Membres actifs',
  },
  stat_activities: {
    en: 'Businesses launched last month',
    fr: 'Activités lancées le mois dernier',
  },
  stat_reviews: {
    en: 'Certified beta-tester reviews',
    fr: 'Avis certifiés de bêta-testeurs',
  },

  // ─── LE PROBLÈME ────────────────────────────────────
  problem_label: {
    en: 'The problem',
    fr: 'Le problème',
  },
  problem_title: {
    en: 'Why do so many projects never see the light of day?',
    fr: 'Pourquoi tant de projets ne voient jamais le jour ?',
  },
  problem_intro: {
    en: "You have expertise, an offer, an idea. But as soon as it comes to going digital, you hit a wall:",
    fr: "Vous avez une expertise, une offre, une idée. Mais dès qu'il s'agit de passer au numérique, vous heurtez un mur :",
  },
  problem_card1_title: {
    en: 'The painful quote',
    fr: 'Le devis qui fait mal',
  },
  problem_card1_desc: {
    en: 'Agencies charge you \u20AC5,000 to \u20AC10,000 for a simple website or tool.',
    fr: 'Les agences vous demandent 5 000\u20AC à 10 000\u20AC pour un simple site ou outil.',
  },
  problem_card2_title: {
    en: 'Total dependency',
    fr: 'La dépendance totale',
  },
  problem_card2_desc: {
    en: 'You have to wait 3 weeks to change a button or text on your own website.',
    fr: 'Vous devez attendre 3 semaines pour changer un bouton ou un texte sur votre propre site.',
  },
  problem_card3_title: {
    en: 'The technical maze',
    fr: 'Le labyrinthe technique',
  },
  problem_card3_desc: {
    en: "WordPress, plugins, hosting... you spend your nights on it without making progress on your real business.",
    fr: "WordPress, les plugins, l'hébergement... vous y passez vos nuits sans avancer sur votre vrai métier.",
  },
  problem_result_prefix: {
    en: 'Result: ',
    fr: 'Résultat : ',
  },
  problem_result_bold: {
    en: 'You stay stuck while your competitors move forward.',
    fr: 'Vous restez sur place pendant que vos concurrents avancent.',
  },

  // ─── TÉMOIGNAGE STÉPHANE ────────────────────────────
  testimonial_stephane_tag: {
    en: 'Career Change & Independence',
    fr: 'Reconversion & Autonomie',
  },
  testimonial_stephane_quote_prefix: {
    en: '"After 15 years in marketing, I wanted to launch my own management tool for consultants. The \u20AC8,000 quote almost made me give up. By following this method, I built everything myself in the evenings after work. Today, my tool is used by 12 paying clients. ',
    fr: '"Après 15 ans dans le marketing, je voulais lancer mon propre outil de gestion pour consultants. Le devis à 8 000\u20AC m\'a presque fait abandonner. En suivant cette méthode, j\'ai tout construit seul le soir après le travail. Aujourd\'hui, mon outil est utilisé par 12 clients payants. ',
  },
  testimonial_stephane_highlight: {
    en: 'I no longer depend on anyone.',
    fr: 'Je ne dépends plus de personne.',
  },
  testimonial_stephane_name: {
    en: 'Stéphane R.',
    fr: 'Stéphane R.',
  },
  testimonial_stephane_role: {
    en: 'Founder of LeadPilot',
    fr: 'Fondateur de LeadPilot',
  },

  // ─── LA MÉTHODE ─────────────────────────────────────
  method_label: {
    en: 'The method',
    fr: 'La méthode',
  },
  method_title: {
    en: 'We aim for results, not theory.',
    fr: 'Nous visons le résultat, pas la théorie.',
  },
  method_subtitle: {
    en: 'Unlike traditional courses, you build something real from day one.',
    fr: 'Contrairement aux formations classiques, vous construisez quelque chose de réel dès le premier jour.',
  },
  method_old_title: {
    en: 'The traditional approach',
    fr: "L'approche classique",
  },
  method_old_1: {
    en: '6 months of boring theoretical courses',
    fr: '6 mois de cours théoriques ennuyeux',
  },
  method_old_2: {
    en: 'Learning obscure languages (JS, Python)',
    fr: 'Apprendre des langages obscurs (JS, Python)',
  },
  method_old_3: {
    en: 'Budget: Several thousand euros',
    fr: "Budget : Plusieurs milliers d'euros",
  },
  method_old_4: {
    en: 'Dependency on technicians',
    fr: 'Dépendance aux techniciens',
  },
  method_new_title: {
    en: 'The Vibe Coding method',
    fr: 'La méthode Vibe Coding',
  },
  method_new_1: {
    en: '10 days to a professional result',
    fr: '10 jours pour un résultat professionnel',
  },
  method_new_2: {
    en: 'Use plain language to guide the AI',
    fr: "Utiliser le Français pour guider l'IA",
  },
  method_new_3: {
    en: 'Budget: The price of a coffee per day',
    fr: "Budget : Le prix d'un café par jour",
  },
  method_new_4: {
    en: 'Total autonomy over your tools',
    fr: 'Autonomie totale sur vos outils',
  },

  // ─── LE DÉCLIC ──────────────────────────────────────
  declic_label: {
    en: 'The turning point',
    fr: 'Le déclic',
  },
  declic_title: {
    en: '"My partner left me hanging \u2014 it was the best thing that ever happened to me."',
    fr: '"Mon associé m\'a laissé tomber, c\'est la meilleure chose qui me soit arrivée."',
  },
  declic_p1: {
    en: 'A few months ago, I was stuck. My "tech expert" had stopped answering my messages. My project was at a standstill.',
    fr: 'Il y a quelques mois, j\u2019étais bloqué. Mon "expert technique" ne répondait plus à mes messages. Mon projet était au point mort.',
  },
  declic_p2_prefix: {
    en: 'Instead of looking for an overpriced replacement, I tried a new approach with ',
    fr: "Au lieu de chercher un remplaçant hors de prix, j'ai testé une nouvelle approche avec ",
  },
  declic_p2_claude: {
    en: 'Claude Code',
    fr: 'Claude Code',
  },
  declic_p2_middle: {
    en: '. In 3 weeks, I launched ',
    fr: '. En 3 semaines, j\u2019ai lancé ',
  },
  declic_p2_tools: {
    en: '4 working tools',
    fr: '4 outils qui fonctionnent',
  },
  declic_p2_suffix: {
    en: '. People thought I had a team of developers behind me.',
    fr: ". Les gens pensaient que j'avais une équipe de développeurs derrière moi.",
  },
  declic_p3_prefix: {
    en: "The reality? I was alone in front of my screen, explaining my idea to the AI. ",
    fr: "La réalité ? J'étais seul devant mon écran, à expliquer mon idée à l'IA. ",
  },
  declic_p3_bold: {
    en: "If I could do it with zero background, so can you.",
    fr: "Si j'ai pu le faire sans aucune base, vous le pouvez aussi.",
  },

  // ─── PROGRAMME 10 JOURS ─────────────────────────────
  programme_label: {
    en: 'The program',
    fr: 'Le programme',
  },
  programme_title: {
    en: 'A clear roadmap for your success.',
    fr: 'Une feuille de route claire pour votre réussite.',
  },
  programme_subtitle: {
    en: '10 days, step by step, from zero to a live project.',
    fr: '10 jours, étape par étape, de zéro à un projet en ligne.',
  },
  programme_day1_days: {
    en: 'Day 1\u20132',
    fr: 'Jour 1\u20132',
  },
  programme_day1_title: {
    en: 'Getting started',
    fr: 'Prise en main',
  },
  programme_day1_desc: {
    en: 'We install the AI tools. In 15 minutes, you see your first page appear.',
    fr: "On installe les outils IA. En 15 minutes, vous voyez votre première page s'afficher.",
  },
  programme_day2_days: {
    en: 'Day 3\u20135',
    fr: 'Jour 3\u20135',
  },
  programme_day2_title: {
    en: 'Building your tool',
    fr: 'Création de votre outil',
  },
  programme_day2_desc: {
    en: "Database, client accounts, forms. You describe your needs, the AI builds the structure.",
    fr: "Base de données, comptes clients, formulaires. Vous décrivez vos besoins, l'IA construit la structure.",
  },
  programme_day3_days: {
    en: 'Day 6\u20138',
    fr: 'Jour 6\u20138',
  },
  programme_day3_title: {
    en: 'Design & Branding',
    fr: 'Design & Image de marque',
  },
  programme_day3_desc: {
    en: 'We make your project beautiful, modern and credible in the eyes of your clients.',
    fr: 'On rend votre projet beau, moderne et crédible aux yeux de vos clients.',
  },
  programme_day4_days: {
    en: 'Day 9\u201310',
    fr: 'Jour 9\u201310',
  },
  programme_day4_title: {
    en: 'Going live',
    fr: 'Mise en ligne',
  },
  programme_day4_desc: {
    en: 'Your website is on the internet. You are officially launched.',
    fr: 'Votre site est sur internet. Vous êtes officiellement lancé.',
  },

  // ─── TÉMOIGNAGES ────────────────────────────────────
  temoignages_label: {
    en: 'Testimonials',
    fr: 'Témoignages',
  },
  temoignages_title: {
    en: 'They took back control of their business.',
    fr: 'Ils ont repris le contrôle de leur business.',
  },

  // Card 1 - Marc-Antoine
  temoignage1_tag: {
    en: 'I saved \u20AC3,500 in dev costs.',
    fr: "J'ai économisé 3 500\u20AC de dev.",
  },
  temoignage1_quote: {
    en: "The agency quote had put me off. I followed the program and did exactly the same thing in 10 days. AI became my technical right hand.",
    fr: "Le devis de l'agence m'avait refroidi. J'ai suivi le programme et j'ai fait exactement la même chose en 10 jours. L'IA est devenue mon bras droit technique.",
  },
  temoignage1_name: {
    en: 'Marc-Antoine E.',
    fr: 'Marc-Antoine E.',
  },
  temoignage1_project: {
    en: 'SaaS-Template Creator',
    fr: 'Créateur de SaaS-Template',
  },

  // Card 2 - Maxime
  temoignage2_tag: {
    en: 'Finally a solution for non-geeks.',
    fr: 'Enfin une solution pour les non-geeks.',
  },
  temoignage2_quote: {
    en: "I had been trying to launch my business for a year. In one week, my site was ready and it quickly started generating its first revenue. No more waiting on anyone.",
    fr: "Je cherchais à lancer mon activité depuis 1 an. En une semaine, mon site était prêt et il n'a pas tardé à générer ses premiers revenus. Plus besoin d'attendre après qui que ce soit.",
  },
  temoignage2_name: {
    en: 'Maxime D.',
    fr: 'Maxime D.',
  },
  temoignage2_project: {
    en: 'Founder of AutoPost-IA',
    fr: 'Fondateur de AutoPost-IA',
  },

  // Card 3 - Olivier
  temoignage3_tag: {
    en: '237 visitors on the first day.',
    fr: '237 visiteurs le premier jour.',
  },
  temoignage3_quote: {
    en: 'I didn\'t write a single line of code. I just "vibed" with the AI as the course says. My site runs like clockwork.',
    fr: 'Je n\'ai pas écrit une ligne de code. J\'ai juste "vibré" avec l\'IA comme le dit la formation. Mon site tourne comme une horloge.',
  },
  temoignage3_name: {
    en: 'Olivier C.',
    fr: 'Olivier C.',
  },
  temoignage3_project: {
    en: 'Founder of AI-Directory',
    fr: 'Fondateur de AI-Directory',
  },

  // Card 4 - Sandrine
  temoignage4_tag: {
    en: 'The train never left without me.',
    fr: "Le train n'est jamais parti sans moi.",
  },
  temoignage4_quote: {
    en: "At 38, I thought programming was a train I had missed. With this method, I didn't learn to code \u2014 I learned to pilot the AI so it builds for me. I launched my booking portal on my own.",
    fr: "À 38 ans, je pensais que la programmation était un train que j'avais raté. Avec cette méthode, je n'ai pas appris à coder, j'ai appris à piloter l'IA pour qu'elle construise pour moi. J'ai lancé mon portail de réservation seule.",
  },
  temoignage4_name: {
    en: 'Sandrine P.',
    fr: 'Sandrine P.',
  },
  temoignage4_project: {
    en: 'Independent Consultant',
    fr: 'Consultante Indépendante',
  },

  // Valérie
  temoignage_valerie_tag: {
    en: 'Quality & Credibility',
    fr: 'Sérieux & Crédibilité',
  },
  temoignage_valerie_quote_prefix: {
    en: '"I\'m a freelance graphic designer and I wanted to offer more complex solutions (member areas, dashboards). Thanks to Vibe Coding, I now offer services I used to charge 3 times less for. ',
    fr: '"Je suis graphiste freelance et je voulais proposer des solutions plus complexes (espaces membres, tableaux de bord). Grâce au Vibe Coding, j\'offre désormais des services que je facturais autrefois 3 fois moins cher. ',
  },
  temoignage_valerie_highlight: {
    en: 'The AI generates such clean code that even my developer friends can\'t tell the difference.',
    fr: "L'IA génère un code tellement propre que même mes amis développeurs n'y voient que du feu.",
  },
  temoignage_valerie_suffix: {
    en: ' My profitability has skyrocketed."',
    fr: ' Ma rentabilité a explosé."',
  },
  temoignage_valerie_name: {
    en: 'Valérie M.',
    fr: 'Valérie M.',
  },
  temoignage_valerie_role: {
    en: 'Studio V-Design',
    fr: 'Studio V-Design',
  },

  // ─── FAQ ────────────────────────────────────────────
  faq_title: {
    en: 'Frequently asked questions',
    fr: 'Questions fréquentes',
  },

  faq1_category: {
    en: 'Reassurance & Ability',
    fr: 'Rassurance & Capacité',
  },
  faq1_question: {
    en: "I have zero technical background and I don't speak English \u2014 is this really for me?",
    fr: "Je n'ai aucune base technique et je ne parle pas anglais, est-ce que c'est vraiment pour moi ?",
  },
  faq1_answer: {
    en: "Absolutely. The AI revolution means it understands French (and English). If you can explain your project to a friend, you can explain it to Claude Code. We show you exactly how to talk to it to get professional results without ever touching code.",
    fr: "Absolument. La révolution de l'IA, c'est justement qu'elle comprend le français. Si vous savez expliquer votre projet à un ami, vous savez l'expliquer à Claude Code. Nous vous montrons exactement comment lui parler pour obtenir des résultats professionnels sans jamais toucher au code.",
  },

  faq2_category: {
    en: 'Reassurance & Ability',
    fr: 'Rassurance & Capacité',
  },
  faq2_question: {
    en: "I've already tried YouTube tutorials and gave up \u2014 how is this different?",
    fr: "J'ai déjà essayé des tutos sur YouTube et j'ai abandonné, en quoi est-ce différent ?",
  },
  faq2_answer: {
    en: "YouTube tutorials teach you how to code. We teach you how to make the AI code for you. We don't waste time on theory. Each video is a concrete action to move your project forward. You're not watching someone work \u2014 you're building your own business.",
    fr: "Les tutos YouTube vous montrent comment coder. Nous, on vous montre comment faire coder l'IA. On ne perd pas de temps sur la théorie. Chaque vidéo est une action concrète pour avancer votre projet. Vous ne regardez pas quelqu'un travailler, vous bâtissez votre propre business.",
  },

  faq3_category: {
    en: 'Money & Ownership',
    fr: 'Argent & Propriété',
  },
  faq3_question: {
    en: 'Am I really the owner of my code or do I depend on you?',
    fr: 'Est-ce que je suis vraiment propriétaire de mon code ou je dépends de vous ?',
  },
  faq3_answer: {
    en: "This is a major difference from tools like Wix or Shopify. Here, the code belongs to you 100%. You don't pay a monthly subscription to \"keep\" your site alive. You are fully autonomous and free to host it wherever you want.",
    fr: "C'est une différence majeure avec des outils comme Wix ou Shopify. Ici, le code vous appartient à 100%. Vous ne payez pas d'abonnement mensuel pour « maintenir » votre site en vie. Vous êtes totalement autonome et libre de l'héberger où vous voulez.",
  },

  faq4_category: {
    en: 'Money & Ownership',
    fr: 'Argent & Propriété',
  },
  faq4_question: {
    en: 'What are the additional costs to expect (AI, hosting, etc.)?',
    fr: 'Quels sont les frais supplémentaires à prévoir (IA, hébergement, etc.) ?',
  },
  faq4_answer: {
    en: "We advocate efficiency. You can start with the free versions of the tools we present. For going live, we use solutions that cost \u20AC0 as long as you don't have thousands of visitors. Your only investment is this course.",
    fr: "Nous prônons l'efficacité. Vous pouvez commencer avec les versions gratuites des outils que nous présentons. Pour la mise en ligne, nous utilisons des solutions qui coûtent 0\u20AC tant que vous n'avez pas des milliers de visiteurs. Votre seul investissement est cette formation.",
  },

  faq5_category: {
    en: 'Technical & Scalability',
    fr: 'Technique & Évolutivité',
  },
  faq5_question: {
    en: 'If I want to hire a developer later to expand my site, is that possible?',
    fr: 'Si je veux embaucher un développeur plus tard pour agrandir mon site, est-ce possible ?',
  },
  faq5_answer: {
    en: 'Yes, and it\'s one of the biggest advantages. The AI generates "clean" code (React/Next.js) that any professional developer can pick up. You\'re not building a "toy" \u2014 you\'re building a solid, scalable technical foundation.',
    fr: "Oui, et c'est l'un des plus gros avantages. L'IA génère du code « propre » (React/Next.js) que n'importe quel développeur professionnel peut reprendre. Vous ne construisez pas un « jouet », mais une base technique solide et évolutive.",
  },

  faq6_category: {
    en: 'Technical & Scalability',
    fr: 'Technique & Évolutivité',
  },
  faq6_question: {
    en: 'Can you really create anything? Even a payment site or a member area?',
    fr: 'Peut-on vraiment tout créer ? Même un site de paiement ou un espace membre ?',
  },
  faq6_answer: {
    en: "Yes. Whether it's a sales site, a directory, an internal management tool or a booking platform, the method covers database management and secure payments (Stripe). As long as it's a web service, you can build it.",
    fr: "Oui. Que ce soit un site de vente, un annuaire, un outil de gestion interne ou une plateforme de réservation, la méthode couvre la gestion des bases de données et les paiements sécurisés (Stripe). Tant que c'est un service web, vous pouvez le bâtir.",
  },

  faq7_category: {
    en: 'Organization',
    fr: 'Organisation',
  },
  faq7_question: {
    en: 'I already work full-time \u2014 how many hours a day should I plan for?',
    fr: 'Je travaille déjà à plein temps, combien d\'heures par jour dois-je prévoir ?',
  },
  faq7_answer: {
    en: "The program is designed for working professionals. Plan for about 1 to 1.5 hours per day. If you can't keep up with the 10-day pace, don't worry: you have lifetime access to the course and you progress at your own pace.",
    fr: "Le programme est conçu pour les actifs. Comptez environ 1h à 1h30 par jour. Si vous ne pouvez pas suivre le rythme des 10 jours, pas de panique : vous avez accès à la formation à vie et vous avancez à votre propre rythme.",
  },

  // ─── CTA FINAL ──────────────────────────────────────
  cta_title_prefix: {
    en: "Stop being a spectator of the AI revolution. ",
    fr: "Cessez d'être spectateur de la révolution IA. ",
  },
  cta_title_highlight: {
    en: 'Become a player.',
    fr: 'Devenez acteur.',
  },
  cta_subtitle: {
    en: 'In 10 days, you will have a professional tool online. You can show it to your clients, your loved ones, and your competitors.',
    fr: 'Dans 10 jours, vous aurez un outil professionnel en ligne. Vous pourrez le montrer à vos clients, vos proches, et vos concurrents.',
  },
  cta_button: {
    en: 'Create my account and launch my project',
    fr: 'Créer mon compte et lancer mon projet',
  },
  cta_social_prefix: {
    en: 'Instant access \u2022 ',
    fr: 'Accès immédiat \u2022 ',
  },
  cta_social_suffix: {
    en: ' members already registered',
    fr: ' membres déjà inscrits',
  },

  // ─── FOOTER ─────────────────────────────────────────
  footer_contact: {
    en: 'Contact',
    fr: 'Contact',
  },
  footer_legal: {
    en: 'Legal Notice',
    fr: 'Mentions Légales',
  },
  footer_terms: {
    en: 'Terms of Service',
    fr: "Conditions générales d'utilisation",
  },
  footer_privacy: {
    en: 'Privacy Policy',
    fr: 'Politique de confidentialité',
  },
  footer_cookies: {
    en: 'Cookie Settings',
    fr: 'Gestion des cookies',
  },

  // ─── INSCRIPTION PAGE ───────────────────────────────
  inscription_back: {
    en: 'Back to the course',
    fr: 'Retour à la formation',
  },
  inscription_title: {
    en: "We're cooking up something amazing",
    fr: 'On prépare quelque chose de fou',
  },
  inscription_subtitle: {
    en: "The course is coming very soon. It will be revolutionary, comprehensive and made for all beginners who want to create without coding.",
    fr: 'La formation arrive très bientôt. Elle sera révolutionnaire, complète et faite pour tous les débutants qui veulent créer sans coder.',
  },
  inscription_contact: {
    en: 'In the meantime, you can reach us at ',
    fr: 'En attendant, tu peux nous contacter sur ',
  },
  inscription_back_landing: {
    en: 'Back to the landing page',
    fr: 'Retour à la landing',
  },
  inscription_status: {
    en: 'Status: ',
    fr: 'Statut : ',
  },
  inscription_status_value: {
    en: 'Under construction',
    fr: 'En construction',
  },
} as const satisfies Record<string, Record<Lang, string>>;

export type TranslationKey = keyof typeof translations;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[key][lang];
}
