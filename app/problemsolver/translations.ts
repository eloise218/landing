export type Lang = 'en' | 'fr';

const translations = {
  // ─── NAVBAR ───────────────────────────────────────────
  nav_how: {
    en: 'How it works',
    fr: 'Comment ca marche',
  },
  nav_cta: {
    en: 'Create an account',
    fr: 'Créer un compte',
  },

  // ─── HERO ─────────────────────────────────────────────
  hero_title: {
    en: 'Validate your idea before wasting 6 months on it.',
    fr: 'Valide ton idée avant de perdre 6 mois dessus.',
  },
  hero_subtitle: {
    en: 'Analyze real user frustrations across the web and find out if your idea solves a real problem.',
    fr: 'Analyse les vraies frustrations des utilisateurs à travers le web et découvre si ton idée répond à un problème réel.',
  },
  hero_check1: {
    en: 'Enter a domain or an idea',
    fr: 'Donne un domaine ou une idée',
  },
  hero_check2: {
    en: 'We analyze thousands of sources',
    fr: 'On analyse des milliers de sources',
  },
  hero_check3: {
    en: 'You get a clear report with evidence',
    fr: 'Tu reçois un rapport clair avec preuves',
  },
  hero_free: {
    en: '3 free analyses · Then 19€/month',
    fr: '3 analyses gratuites · Puis 19€/mois',
  },
  hero_search: {
    en: 'planning trips with friends',
    fr: 'planifier des voyages entre amis',
  },
  hero_complaints: {
    en: 'Complaints',
    fr: 'Plaintes',
  },
  hero_intensity: {
    en: 'Intensity',
    fr: 'Intensité',
  },
  hero_high: {
    en: 'High',
    fr: 'Élevée',
  },
  hero_quote: {
    en: 'Organizing a trip with 5 people is hell, nobody agrees on anything…',
    fr: 'Organiser un voyage à 5 c\u2019est un enfer, personne répond pareil…',
  },
  hero_conclusion: {
    en: 'High potential — massive and frequent problem',
    fr: 'Fort potentiel — problème massif et fréquent',
  },

  // ─── PROBLEM ──────────────────────────────────────────
  problem_label: {
    en: 'The problem',
    fr: 'Le problème',
  },
  problem_title1: {
    en: 'The real blocker isn\u2019t building.',
    fr: 'Le vrai blocage, ce n\u2019est pas de créer.',
  },
  problem_title2: {
    en: 'It\u2019s knowing what to build.',
    fr: 'C\u2019est de savoir quoi créer.',
  },
  problem_subtitle: {
    en: 'You have an idea… but you don\u2019t know if anyone actually needs it.',
    fr: 'Tu as une idée… mais tu ne sais pas si quelqu\u2019un en a vraiment besoin.',
  },
  problem_card1_title: {
    en: 'You doubt',
    fr: 'Tu doutes',
  },
  problem_card1_desc: {
    en: 'Is it a real problem? Would people pay for it?',
    fr: 'Est-ce un vrai problème ? Est-ce que des gens paieraient pour ça ?',
  },
  problem_card2_title: {
    en: 'You search everywhere',
    fr: 'Tu cherches partout',
  },
  problem_card2_desc: {
    en: 'Information is scattered across forums, reviews, social media… with no clear conclusion.',
    fr: 'Les infos sont dispersées sur des forums, avis, réseaux… sans conclusion claire.',
  },
  problem_card3_title: {
    en: 'You waste time',
    fr: 'Tu perds du temps',
  },
  problem_card3_desc: {
    en: 'You read hundreds of posts without making progress. Meanwhile, you\u2019re not building anything.',
    fr: 'Tu lis des centaines de messages sans avancer. Pendant ce temps, tu ne construis rien.',
  },

  // ─── SOLUTION ─────────────────────────────────────────
  solution_label: {
    en: 'The solution',
    fr: 'La solution',
  },
  solution_title: {
    en: 'We show you the reality of the market.',
    fr: 'On te montre la réalité du marché.',
  },
  solution_subtitle: {
    en: 'ProblemFinder automatically analyzes frustrations expressed by real users on:',
    fr: 'ProblemFinder analyse automatiquement les frustrations exprimées par de vrais utilisateurs sur :',
  },
  solution_forums: {
    en: 'Forums',
    fr: 'Forums',
  },
  solution_forums_sub: {
    en: 'Reddit, etc.',
    fr: 'Reddit, etc.',
  },
  solution_reviews: {
    en: 'Customer reviews',
    fr: 'Avis clients',
  },
  solution_reviews_sub: {
    en: 'Trustpilot…',
    fr: 'Trustpilot…',
  },
  solution_social: {
    en: 'Social media',
    fr: 'Réseaux sociaux',
  },
  solution_social_sub: {
    en: 'X, Facebook…',
    fr: 'X, Facebook…',
  },
  solution_comments: {
    en: 'Comments',
    fr: 'Commentaires',
  },
  solution_comments_sub: {
    en: 'Blogs, articles…',
    fr: 'Blogs, articles…',
  },
  solution_check1: {
    en: 'No more reading thousands of messages',
    fr: 'Tu ne lis plus des milliers de messages',
  },
  solution_check2: {
    en: 'You get an actionable summary right away',
    fr: 'Tu obtiens directement une synthèse exploitable',
  },

  // ─── REPORT ───────────────────────────────────────────
  report_label: {
    en: 'The report',
    fr: 'Le rapport',
  },
  report_title: {
    en: 'What you get',
    fr: 'Ce que tu reçois',
  },
  report_subtitle: {
    en: 'For each idea or domain, you get a structured report:',
    fr: 'Pour chaque idée ou domaine, tu obtiens un rapport structuré :',
  },
  report_score_title: {
    en: 'Potential score',
    fr: 'Score de potentiel',
  },
  report_score_desc: {
    en: 'A clear score from 0 to 10 based on collected data.',
    fr: 'Un score clair de 0 à 10 basé sur les données collectées.',
  },
  report_complaints_title: {
    en: 'Number of complaints',
    fr: 'Nombre de plaintes',
  },
  report_complaints_desc: {
    en: 'How many people publicly express this problem.',
    fr: 'Combien de personnes expriment ce problème publiquement.',
  },
  report_frequency_title: {
    en: 'Problem frequency',
    fr: 'Fréquence du problème',
  },
  report_frequency_desc: {
    en: 'How often this problem is mentioned.',
    fr: 'À quelle fréquence ce problème est mentionné.',
  },
  report_intensity_title: {
    en: 'Intensity level',
    fr: "Niveau d'intensité",
  },
  report_intensity_desc: {
    en: 'From low to critical — measures the perceived urgency.',
    fr: "De faible à critique — mesure l'urgence ressentie.",
  },
  report_users_title: {
    en: 'User types',
    fr: "Types d'utilisateurs",
  },
  report_users_desc: {
    en: 'Who are the people affected by this problem.',
    fr: 'Qui sont les personnes concernées par ce problème.',
  },
  report_extracts_title: {
    en: 'Real excerpts',
    fr: 'Extraits réels',
  },
  report_extracts_desc: {
    en: 'Authentic messages analyzed to support the results.',
    fr: 'Messages authentiques analysés pour étayer les résultats.',
  },

  // ─── EXAMPLE ──────────────────────────────────────────
  example_label: {
    en: 'Concrete example',
    fr: 'Exemple concret',
  },
  example_title: {
    en: 'Here\u2019s what you would receive',
    fr: 'Voici ce que tu recevrais',
  },
  example_search: {
    en: 'app to plan trips with friends',
    fr: 'application pour planifier des voyages entre amis',
  },
  example_score_label: {
    en: 'Potential score',
    fr: 'Score de potentiel',
  },
  example_high_potential: {
    en: 'High potential',
    fr: 'Fort potentiel',
  },
  example_complaints: {
    en: 'Identified complaints',
    fr: 'Plaintes identifiées',
  },
  example_last30: {
    en: 'Last 30 days',
    fr: '30 derniers jours',
  },
  example_intensity: {
    en: 'Intensity',
    fr: 'Intensité',
  },
  example_very_high: {
    en: 'Very high',
    fr: 'Très élevée',
  },
  example_users: {
    en: 'Target users',
    fr: 'Utilisateurs concernés',
  },
  example_users_desc: {
    en: 'Friend groups, students, young professionals',
    fr: "Groupes d'amis, étudiants, jeunes actifs",
  },
  example_extracts: {
    en: 'Analyzed excerpts',
    fr: 'Extraits analysés',
  },
  example_quote1: {
    en: 'Organizing a trip with 5 people is hell, nobody agrees on anything…',
    fr: "Organiser un voyage à 5 c'est un enfer, personne répond pareil…",
  },
  example_quote2: {
    en: 'It took us 3 weeks just to pick the dates…',
    fr: 'On a mis 3 semaines juste pour choisir les dates…',
  },
  example_quote3: {
    en: "Between budgets, preferences and availability, it's unmanageable",
    fr: "Entre les budgets, les préférences et les dispos, c'est ingérable",
  },
  example_quote3_source: {
    en: 'Travel forum',
    fr: 'Forum voyage',
  },
  example_quote4: {
    en: 'We always end up doing nothing because of the planning',
    fr: "On finit toujours par ne rien faire à cause de l'organisation",
  },
  example_conclusion: {
    en: 'Massive, emotional, frequent problem \u2192 very high product potential',
    fr: 'Problème massif, émotionnel, fréquent \u2192 très fort potentiel produit',
  },

  // ─── HOW IT WORKS ─────────────────────────────────────
  how_label: {
    en: 'Simple and fast',
    fr: 'Simple et rapide',
  },
  how_title: {
    en: 'How it works',
    fr: 'Comment ça marche',
  },
  how_step1_title: {
    en: 'Enter an idea or domain',
    fr: 'Donne une idée ou un domaine',
  },
  how_step1_desc: {
    en: 'Simply describe what you want to explore.',
    fr: 'Décris simplement ce que tu veux explorer.',
  },
  how_step1_example: {
    en: 'E.g.: "freelance invoicing", "vacation booking", "student budget management"',
    fr: 'Ex : "facturation freelance", "réservation vacances", "gestion budget étudiant"',
  },
  how_step2_title: {
    en: 'We analyze the web',
    fr: 'On analyse le web',
  },
  how_step2_desc: {
    en: 'Our system identifies recurring frustrations at scale.',
    fr: 'Notre système identifie les frustrations récurrentes à grande échelle.',
  },
  how_step2_example: {
    en: 'Forums, reviews, social media, public comments…',
    fr: 'Forums, avis, réseaux sociaux, commentaires publics…',
  },
  how_step3_title: {
    en: 'You get a clear report',
    fr: 'Tu reçois un rapport clair',
  },
  how_step3_desc: {
    en: 'You instantly know if it\u2019s worth pursuing… or not.',
    fr: 'Tu sais immédiatement si ça vaut le coup… ou non.',
  },
  how_step3_example: {
    en: 'Score, evidence, excerpts, actionable conclusion.',
    fr: 'Score, preuves, extraits, conclusion actionnable.',
  },

  // ─── PRICING ──────────────────────────────────────────
  pricing_badge: {
    en: 'Free trial',
    fr: 'Essai gratuit',
  },
  pricing_free: {
    en: '3 free analyses',
    fr: '3 analyses offertes',
  },
  pricing_month: {
    en: '/month',
    fr: '/mois',
  },
  pricing_feature1: {
    en: 'Unlimited analyses',
    fr: 'Analyses illimitées',
  },
  pricing_feature2: {
    en: 'Detailed reports with evidence',
    fr: 'Rapports détaillés avec preuves',
  },
  pricing_feature3: {
    en: 'Business potential score',
    fr: 'Score de potentiel business',
  },
  pricing_feature4: {
    en: 'Real message excerpts',
    fr: 'Extraits de messages réels',
  },

  // ─── AUDIENCE ─────────────────────────────────────────
  audience_title: {
    en: 'Who is it for?',
    fr: 'Pour qui ?',
  },
  audience_card1_title: {
    en: 'Aspiring entrepreneurs',
    fr: 'Futurs entrepreneurs',
  },
  audience_card1_desc: {
    en: 'You\u2019re looking for a solid idea based on a real market need.',
    fr: 'Tu cherches une idée solide, basée sur un vrai besoin du marché.',
  },
  audience_card2_title: {
    en: 'Entrepreneurs',
    fr: 'Entrepreneurs',
  },
  audience_card2_desc: {
    en: 'You want to validate your idea before building and investing.',
    fr: 'Tu veux valider ton idée avant de construire et investir.',
  },
  audience_card3_title: {
    en: 'Builders',
    fr: 'Builders',
  },
  audience_card3_desc: {
    en: 'You want to avoid wasting time on a product nobody wants.',
    fr: 'Tu veux éviter de perdre du temps sur un produit que personne ne veut.',
  },

  // ─── NOT ──────────────────────────────────────────────
  not_title: {
    en: 'What it\u2019s not',
    fr: 'Ce que ce n\u2019est pas',
  },
  not_item1: {
    en: 'We don\u2019t give you "the perfect idea"',
    fr: 'On ne te donne pas "l\'idée parfaite"',
  },
  not_item2: {
    en: 'We don\u2019t guarantee success',
    fr: 'On ne garantit pas le succès',
  },
  not_positive: {
    en: 'We give you the reality of the market, so you can decide wisely.',
    fr: 'On te donne la réalité du marché, pour décider intelligemment.',
  },

  // ─── CTA ──────────────────────────────────────────────
  cta_title: {
    en: 'Your future business starts with a real problem.',
    fr: 'Ton futur business commence par un problème réel.',
  },
  cta_subtitle: {
    en: 'Stop guessing. See what users are really saying.',
    fr: 'Arrête de deviner. Regarde ce que les utilisateurs disent vraiment.',
  },
  cta_button: {
    en: 'Create an account and validate my idea',
    fr: 'Créer un compte et valider mon idée',
  },

  // ─── FOOTER ───────────────────────────────────────────
  footer_copy: {
    en: 'ProblemFinder \u00A9 2026 \u2014 Large-scale user frustration analysis',
    fr: 'ProblemFinder \u00A9 2026 \u2014 Analyse des frustrations utilisateurs à grande échelle',
  },
  footer_contact: {
    en: 'Contact',
    fr: 'Contact',
  },
  footer_legal: {
    en: 'Legal notice',
    fr: 'Mentions légales',
  },
  footer_privacy: {
    en: 'Privacy',
    fr: 'Confidentialité',
  },
} as const satisfies Record<string, Record<Lang, string>>;

export type TranslationKey = keyof typeof translations;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[key][lang];
}
