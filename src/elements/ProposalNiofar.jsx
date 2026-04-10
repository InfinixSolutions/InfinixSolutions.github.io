import React, { Fragment } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import "./proposal.css";

const scopeItems = [
  "Pages institutionnelles (Accueil, A propos, Fonctionnement, Contact)",
  "Authentification (inscription, connexion, session)",
  "Navigation projets avec filtres (secteur, maturite, recherche)",
  "Pages detaillees des projets et modele des 5 stades",
  "Simulateur d'investissement dynamique (TRI, NPV, capital, frais, fiscalite)",
  "Interface bilingue (FR/EN) et design responsive",
  "API REST securisee et gestion des droits d'acces",
  "Digital Deal Book en lecture seule avec session securisee",
  "Gestion des intentions d'investissement et routage commercial",
  "Journalisation (logs) pour audit futur"
];

const phases = [
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
      "Listing projets + pages projet (structure)",
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
      "Gestion des etats (erreur/loading)",
      "Optimisation des performances",
      "Preparation demo / mise en production"
    ]
  }
];

const offers = [
  {
    name: "Option A - MVP Lean",
    price: "32 000 EUR - 40 000 EUR",
    fit: "Validation rapide du concept",
    points: [
      "Plateforme full-stack fonctionnelle",
      "Simulateur basique",
      "UX simple mais propre",
      "Securite document standard"
    ]
  },
  {
    name: "Option B - MVP Complet",
    price: "45 000 EUR - 60 000 EUR",
    fit: "Recommandee pour credibilite investisseur",
    featured: true,
    points: [
      "Backend structure et scalable",
      "Simulateur robuste",
      "Interface utilisateur professionnelle",
      "Documents securises + UX optimisee"
    ]
  },
  {
    name: "Option C - MVP Premium",
    price: "60 000 EUR - 80 000 EUR",
    fit: "Avec accompagnement post-lancement",
    points: [
      "Experience utilisateur avancee",
      "Dashboard enrichi",
      "Analytics",
      "Optimisation produit"
    ]
  }
];

function ProposalNiofar() {
  return (
    <Fragment>
      <PageHelmet pageTitle="Proposition Niofar Capital" />
      <Header logo="dark" color="color-black" />

      <div className="proposal-hero">
        <div className="container">
          <div className="proposal-badge">Business Proposal</div>
          <h1>Developpement de la plateforme Niofar Capital (MVP)</h1>
          <p>
            Proposition structuree pour livrer une plateforme d'investissement
            professionnelle, securisee et demonstrable avant le 20 mai.
          </p>
        </div>
      </div>

      <div className="proposal-section bg-light-panel">
        <div className="container">
          <h2>Resume executif</h2>
          <p>
            Nous proposons de concevoir Niofar Capital avec une approche
            full-stack (frontend + backend), inspiree des meilleurs standards UX
            des plateformes modernes de crowdfunding.
          </p>
          <div className="proposal-highlight-grid">
            <div className="proposal-highlight">Presentation credibilisee des projets d'investissement</div>
            <div className="proposal-highlight">Simulation financiere en temps reel</div>
            <div className="proposal-highlight">Acces controle aux documents sensibles</div>
            <div className="proposal-highlight">Qualification et routage des leads investisseurs</div>
          </div>
        </div>
      </div>

      <div className="proposal-section">
        <div className="container">
          <h2>Perimetre de la mission</h2>
          <div className="proposal-list-grid">
            {scopeItems.map((item, idx) => (
              <div className="proposal-list-item" key={idx}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="proposal-section bg-light-panel">
        <div className="container">
          <h2>Approche de delivery</h2>
          <div className="proposal-phase-grid">
            {phases.map((phase, idx) => (
              <div className="proposal-card" key={idx}>
                <span className="proposal-timeline">{phase.timeline}</span>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="proposal-section">
        <div className="container">
          <h2>Offre commerciale</h2>
          <div className="proposal-offer-grid">
            {offers.map((offer, idx) => (
              <div
                className={`proposal-offer-card ${
                  offer.featured ? "proposal-offer-featured" : ""
                }`}
                key={idx}
              >
                {offer.featured ? <span className="offer-tag">Recommandee</span> : null}
                <h3>{offer.name}</h3>
                <div className="offer-price">{offer.price}</div>
                <p>{offer.fit}</p>
                <ul>
                  {offer.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="proposal-section bg-light-panel">
        <div className="container">
          <h2>Recommendation</h2>
          <div className="proposal-reco">
            Option B est recommandee pour son equilibre entre qualite produit,
            rapidite de livraison, credibilite business et maitrise des couts.
          </div>
          <div className="proposal-meta-grid">
            <div>
              <h4>Hypotheses</h4>
              <ul>
                <li>Regles metier et logique commerciale fournies par le client</li>
                <li>Modeles de simulation et contenus FR/EN fournis ou valides</li>
                <li>Aspects reglementaires sous responsabilite client</li>
              </ul>
            </div>
            <div>
              <h4>Exclusions</h4>
              <ul>
                <li>KYC / AML</li>
                <li>Paiement et transaction financiere</li>
                <li>CRM complet et back-office avance</li>
                <li>Application mobile native</li>
              </ul>
            </div>
            <div>
              <h4>Paiement</h4>
              <ul>
                <li>40% a la signature</li>
                <li>35% a livraison du MVP squelette</li>
                <li>25% a finalisation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="proposal-section">
        <div className="container">
          <h2>Gestion des risques</h2>
          <div className="proposal-list-grid">
            <div className="proposal-list-item">
              <strong>Risque principal: delai court.</strong> Mitigation: MVP strict,
              priorisation forte et phases courtes.
            </div>
            <div className="proposal-list-item">
              <strong>Risque simulateur.</strong> Mitigation: cadrage des la semaine 1
              et validation des hypotheses metier.
            </div>
            <div className="proposal-list-item">
              <strong>Risque securite documents.</strong> Mitigation: approche pragmatique
              securisee (view-only, token temporaire, watermark).
            </div>
            <div className="proposal-list-item">
              <strong>Risque dependances.</strong> Mitigation: architecture unifiee
              frontend + backend par un interlocuteur unique.
            </div>
          </div>
        </div>
      </div>

      <div className="proposal-section bg-light-panel">
        <div className="container">
          <h2>Positionnement</h2>
          <div className="proposal-reco">
            Ce projet est positionne comme une plateforme d'investissement sur
            mesure: plus agile qu'une agence traditionnelle, plus structure
            qu'un developpement offshore, avec un niveau de qualite adapte a des
            investisseurs.
          </div>
        </div>
      </div>

      <div className="proposal-cta">
        <div className="container">
          <h2>Offre valable 15 jours</h2>
          <p>Disponible pour demarrage immediat.</p>
          <a className="rn-btn" href="/contact">
            <span>Confirmer un call de validation</span>
          </a>
        </div>
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <Footer />
    </Fragment>
  );
}

export default ProposalNiofar;
