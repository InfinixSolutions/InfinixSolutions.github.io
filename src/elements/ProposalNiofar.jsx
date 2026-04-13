import React, { Fragment, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import ExecutiveSummary from "./proposal/ExecutiveSummary";
import OfferDetails from "./proposal/OfferDetails";
import PhasesSection from "./proposal/PhasesSection";
import Recommendation from "./proposal/Recommendation";
import ScopeSection from "./proposal/ScopeSection";
import { offerConfigs, offerOrder } from "./proposal/niofarOfferConfigs";
import "./proposal.css";

function ProposalNiofar() {
  const [selectedOption, setSelectedOption] = useState("B");
  const currentOffer = offerConfigs[selectedOption];

  return (
    <Fragment>
      <PageHelmet pageTitle="Proposition Niofar Capital" />
      <Header logo="dark" color="color-black" />

      <div className={`proposal-page proposal-tone-${currentOffer.tone}`}>
        <div className="proposal-hero">
          <div className="container proposal-content-animate" key={`hero-${selectedOption}`}>
            <div className="proposal-badge">Business Proposal</div>
            <h1>Developpement de la plateforme Niofar Capital (MVP)</h1>
            <p>{currentOffer.heroSubtitle}</p>
          </div>
        </div>

        <div className="proposal-section proposal-pricing-section">
          <OfferDetails
            offer={currentOffer}
            offerConfigs={offerConfigs}
            offerKeys={offerOrder}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
          />
        </div>

        <div className="proposal-section bg-light-panel">
          <ExecutiveSummary key={`summary-${selectedOption}`} offer={currentOffer} />
        </div>

        <div className="proposal-section">
          <ScopeSection key={`scope-${selectedOption}`} offer={currentOffer} />
        </div>

        <div className="proposal-section bg-light-panel">
          <PhasesSection key={`phases-${selectedOption}`} offer={currentOffer} />
        </div>

        <div className="proposal-section">
          <Recommendation key={`recommendation-${selectedOption}`} offer={currentOffer} />
        </div>

        <div className="proposal-section bg-light-panel">
          <div className="container proposal-content-animate" key={`risks-${selectedOption}`}>
            <h2>Gestion des risques</h2>
            <div className="proposal-list-grid">
              {currentOffer.risks.map((risk) => (
                <div className="proposal-list-item" key={risk.title}>
                  <strong>{risk.title}</strong> {risk.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="proposal-section">
          <div className="container proposal-content-animate" key={`positioning-${selectedOption}`}>
            <h2>Positionnement</h2>
            <div className="proposal-reco">{currentOffer.positioning}</div>
          </div>
        </div>

        <div className="proposal-cta">
          <div className="container proposal-content-animate" key={`cta-${selectedOption}`}>
            <h2>{currentOffer.ctaTitle}</h2>
            <p>{currentOffer.ctaNote}</p>
            <a className="rn-btn" href="/contact">
              <span>Confirmer un call de validation</span>
            </a>
          </div>
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
