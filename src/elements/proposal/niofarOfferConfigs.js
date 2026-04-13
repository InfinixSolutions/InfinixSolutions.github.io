export const offerOrder = ["A", "B", "C"];

export const offerConfigs = {
  A: {
    key: "A",
    name: "Option A - Lean Version",
    shortLabel: "Lean Version",
    anchor: "$8,000",
    range: "$6,000 - $10,000",
    description: "Prototype rapide pour validation",
    fit: "Ideal pour tester le marche vite, sans sur-investir au depart.",
    tone: "light",
    heroSubtitle:
      "Version lean pour lancer une premiere experience investisseur demonstrable en un delai court.",
    summary:
      "Cette option concentre l'effort sur un parcours investisseur simple, un socle full-stack propre et un prototype suffisamment credible pour valider l'interet du marche.",
    highlights: [
      "Experience de consultation simple et rassurante",
      "Simulateur financier basique pour premiers tests",
      "Visualisation documentaires securisee au strict necessaire",
      "Mise en ligne rapide pour premiers rendez-vous investisseurs"
    ],
    scope: [
      "Pages institutionnelles essentielles (Accueil, A propos, Contact)",
      "Authentification simple avec gestion de session",
      "Catalogue projets avec recherche de base",
      "Pages projet avec structure narrative standardisee",
      "Simulateur basique avec hypotheses manuelles",
      "Visualiseur de documents simple en lecture protegee",
      "Responsive web pour desktop et mobile",
      "Aucun panel admin et aucun workflow complexe"
    ],
    phases: [
      {
        title: "Phase 1 - Cadrage express",
        timeline: "Semaine 1",
        points: [
          "Validation du perimetre minimal",
          "Definition du parcours investisseur",
          "Schemas de donnees et architecture lean"
        ]
      },
      {
        title: "Phase 2 - Prototype fonctionnel",
        timeline: "Semaines 2-3",
        points: [
          "Pages principales et authentification",
          "Listing projets et fiches detaillees",
          "Simulateur basique et viewer documentaire"
        ]
      },
      {
        title: "Phase 3 - Finition & demo",
        timeline: "Semaine 4",
        points: [
          "Corrections prioritaires",
          "Responsive final",
          "Preparation demo et support au lancement"
        ]
      }
    ],
    offerPoints: [
      "Plateforme full-stack legere mais exploitable",
      "UX simple, claire et rapide a prendre en main",
      "Base technique evolutive pour une phase 2",
      "Delai de livraison optimise"
    ],
    recommendation:
      "Option A convient si l'objectif principal est de montrer vite une premiere version, capter des retours et prouver la traction avant un investissement plus important.",
    assumptions: [
      "Contenus et priorites fonctionnelles arbitres rapidement par le client",
      "Modele du simulateur fourni dans une version simplifiee",
      "Aucune logique back-office avancee a couvrir dans le MVP"
    ],
    exclusions: [
      "Admin panel et reporting interne",
      "KYC / AML",
      "Automatisation commerciale complexe",
      "Fonctionnalites AI"
    ],
    payment: [
      "50% a la signature",
      "30% a la livraison du prototype",
      "20% a la mise en ligne"
    ],
    risks: [
      {
        title: "Risque principal: cadrage tres serre.",
        text: "Mitigation: arbitrage rapide et backlog strictement priorise."
      },
      {
        title: "Risque simulateur.",
        text: "Mitigation: limiter le modele a quelques variables business essentielles."
      },
      {
        title: "Risque perception investisseur.",
        text: "Mitigation: concentrer l'effort sur la clarte du storytelling et la demo."
      },
      {
        title: "Risque evolutivite.",
        text: "Mitigation: conserver une base technique propre pour extension future."
      }
    ],
    positioning:
      "Une offre lean, pragmatique et rapide a deployer pour passer de l'idee a une preuve tangible sans complexite superflue.",
    ctaTitle: "Proposition Lean MVP",
    ctaNote: "Disponible pour demarrage rapide sur un MVP lean."
  },
  B: {
    key: "B",
    name: "Option B - Investor-Ready Platform",
    shortLabel: "Investor-Ready Platform",
    anchor: "$13,500",
    range: "$12,000 - $17,000",
    description: "Produit credible pour investisseurs",
    fit: "Le bon equilibre entre qualite produit, vitesse et credibilite business.",
    tone: "standard",
    featured: true,
    heroSubtitle:
      "Version recommandee pour livrer une plateforme d'investissement convaincante, securisee et demonstrable face a des investisseurs.",
    summary:
      "Nous concevons un MVP full-stack complet avec un vrai socle backend, une experience utilisateur rassurante et des parcours suffisamment structures pour supporter une demarche commerciale serieuse.",
    highlights: [
      "Presentation credibilisee des projets d'investissement",
      "Simulation financiere en temps reel plus robuste",
      "Acces controle aux documents sensibles",
      "Qualification et routage des leads investisseurs"
    ],
    scope: [
      "Pages institutionnelles completes (Accueil, A propos, Fonctionnement, Contact)",
      "Authentification (inscription, connexion, session)",
      "Navigation projets avec filtres (secteur, maturite, recherche)",
      "Pages detaillees des projets et modele des 5 stades",
      "Simulateur d'investissement dynamique (TRI, NPV, capital, frais, fiscalite)",
      "Interface bilingue (FR/EN) et design responsive",
      "API REST securisee et gestion des droits d'acces",
      "Digital Deal Book en lecture seule avec session securisee",
      "Gestion des intentions d'investissement et routage commercial",
      "Journalisation (logs) pour audit futur"
    ],
    phases: [
      {
        title: "Phase 1 - Cadrage & architecture",
        timeline: "Semaine 1",
        points: [
          "Validation du perimetre fonctionnel",
          "Modeles de donnees et specification API",
          "Cadrage du simulateur",
          "Mise en place de l'architecture technique"
        ]
      },
      {
        title: "Phase 2 - MVP squelette",
        timeline: "Semaines 2-3",
        points: [
          "Structure applicative complete",
          "Pages principales et authentification",
          "Listing projets + pages projet",
          "Base du simulateur et structure bilingue"
        ]
      },
      {
        title: "Phase 3 - Integration & logique metier",
        timeline: "Semaines 4-5",
        points: [
          "Integration backend complete",
          "Simulateur fonctionnel",
          "Documents securises et flux d'interet",
          "Amelioration UX"
        ]
      },
      {
        title: "Phase 4 - Stabilisation",
        timeline: "Avant le 20 mai",
        points: [
          "Corrections et responsive final",
          "Gestion des etats erreur/loading",
          "Optimisation des performances",
          "Preparation demo / mise en production"
        ]
      }
    ],
    offerPoints: [
      "Backend structure et scalable",
      "Simulateur robuste",
      "Interface utilisateur professionnelle",
      "Documents securises + UX optimisee"
    ],
    recommendation:
      "Option B est recommandee pour son equilibre entre qualite produit, rapidite de livraison, credibilite business et maitrise des couts.",
    assumptions: [
      "Regles metier et logique commerciale fournies par le client",
      "Modeles de simulation et contenus FR/EN fournis ou valides",
      "Aspects reglementaires sous responsabilite client"
    ],
    exclusions: [
      "KYC / AML",
      "Paiement et transaction financiere",
      "CRM complet et back-office avance",
      "Application mobile native"
    ],
    payment: [
      "40% a la signature",
      "35% a livraison du MVP squelette",
      "25% a finalisation"
    ],
    risks: [
      {
        title: "Risque principal: delai court.",
        text: "Mitigation: MVP strict, priorisation forte et phases courtes."
      },
      {
        title: "Risque simulateur.",
        text: "Mitigation: cadrage des la semaine 1 et validation des hypotheses metier."
      },
      {
        title: "Risque securite documents.",
        text: "Mitigation: approche pragmatique securisee (view-only, token temporaire, watermark)."
      },
      {
        title: "Risque dependances.",
        text: "Mitigation: architecture unifiee frontend + backend par un interlocuteur unique."
      }
    ],
    positioning:
      "Une plateforme d'investissement sur mesure: plus agile qu'une agence traditionnelle, plus structuree qu'un developpement offshore, avec un niveau de qualite adapte a des investisseurs.",
    ctaTitle: "Proposition MVP recommandee",
    ctaNote: "Disponible pour demarrage immediat sur le MVP recommande."
  },
  C: {
    key: "C",
    name: "Option C - Advanced Platform (AI-Enhanced)",
    shortLabel: "AI-Enhanced Platform",
    anchor: "$21,000",
    range: "$19,000 - $26,000",
    description: "Plateforme avancee avec AI",
    fit: "Pour une plateforme haut de gamme, differenciante et future-ready.",
    tone: "premium",
    accentTag: "Future-ready / AI",
    heroSubtitle:
      "Version premium avec composants AI pour renforcer l'analyse des dossiers, la lecture des opportunites et la valeur percue de la plateforme.",
    summary:
      "Cette option ajoute au coeur produit une couche d'intelligence appliquee aux documents, au simulateur et a l'analyse des dossiers afin de positionner Niofar Capital comme une plateforme d'investissement moderne et differenciante.",
    highlights: [
      "AI-assisted document parsing pour accelerer la lecture des deal books",
      "Smart investment insights pour faire ressortir les points clefs",
      "AI-powered simulator recommendations selon le profil investisseur",
      "Automated deal analysis pour preparer les interactions commerciales"
    ],
    scope: [
      "Tout le socle de l'option B avec UX premium et interface bilingue",
      "AI-assisted document parsing sur les documents d'investissement",
      "Moteur de recommandations sur hypotheses de simulation",
      "Insights automatiques sur risques, rendement et structure du deal",
      "Syntheses AI pour aider l'equipe commerciale",
      "Instrumentation analytics avancee pour suivre l'usage des investisseurs",
      "Architecture prete pour des workflows plus riches a terme",
      "Positionnement produit premium et futur-ready"
    ],
    phases: [
      {
        title: "Phase 1 - Product framing premium",
        timeline: "Semaine 1",
        points: [
          "Definition du coeur produit et des cas d'usage AI",
          "Choix d'architecture pour services intelligents",
          "Cadrage donnees, securite et gouvernance"
        ]
      },
      {
        title: "Phase 2 - Core product build",
        timeline: "Semaines 2-4",
        points: [
          "Socle applicatif complet et experience investisseur premium",
          "Backend, projets, authentification et documents securises",
          "Base du simulateur avec parcours guides"
        ]
      },
      {
        title: "Phase 3 - AI layer integration",
        timeline: "Semaines 5-6",
        points: [
          "Parsing documentaire assiste par AI",
          "Recommendations du simulateur",
          "Automated deal analysis et insights"
        ]
      },
      {
        title: "Phase 4 - Polish & investor readiness",
        timeline: "Semaines 7-8",
        points: [
          "Optimisation UX/UI premium",
          "Validation des sorties AI et garde-fous",
          "Demo executive et preparation du go-to-market"
        ]
      }
    ],
    offerPoints: [
      "Experience utilisateur avancee et premium",
      "Couche AI differenciante pour documents et simulateur",
      "Analytics et signaux d'usage enrichis",
      "Architecture produit future-ready"
    ],
    recommendation:
      "Option C est adaptee si Niofar Capital veut se positionner tout de suite comme une plateforme haut de gamme, differenciante et prete a capitaliser sur des usages AI concrets.",
    assumptions: [
      "Jeux de documents exploitables pour les features AI",
      "Validation rapide des usages AI et de leur valeur metier",
      "Budget accepte pour une couche produit plus ambitieuse"
    ],
    exclusions: [
      "Decision automatique d'investissement sans supervision humaine",
      "Paiement et execution financiere",
      "Application mobile native",
      "Back-office operationnel complet"
    ],
    payment: [
      "40% a la signature",
      "30% apres livraison du core product",
      "20% apres integration AI",
      "10% a finalisation"
    ],
    risks: [
      {
        title: "Risque principal: scope plus ambitieux.",
        text: "Mitigation: separer clairement core product et couche AI."
      },
      {
        title: "Risque qualite AI.",
        text: "Mitigation: introduire des garde-fous, validation humaine et perimetre cible."
      },
      {
        title: "Risque donnees.",
        text: "Mitigation: travailler sur un corpus de documents representatif des le cadrage."
      },
      {
        title: "Risque time-to-market.",
        text: "Mitigation: prioriser un core product fort avant les modules intelligents."
      }
    ],
    positioning:
      "Une plateforme premium concue pour projeter Niofar Capital dans une posture innovante, data-aware et AI-ready face a des investisseurs exigeants.",
    ctaTitle: "Proposition AI Premium",
    ctaNote: "Disponible pour cadrer un MVP premium et sa couche AI de maniere progressive."
  }
};