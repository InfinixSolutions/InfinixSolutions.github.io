import React from "react";
import OfferSelector from "./OfferSelector";

const pdfFileByOption = {
  A: "/proposals/niofar-option-a-lean-version.pdf",
  B: "/proposals/niofar-option-b-investor-ready.pdf",
  C: "/proposals/niofar-option-c-ai-enhanced.pdf"
};

function OfferDetails({
  offer,
  offerConfigs,
  offerKeys,
  selectedOption,
  onSelect
}) {
  return (
    <div className="container">
      <h2>Offre commerciale</h2>
      <p className="proposal-pricing-note">
        Final pricing will be confirmed after technical validation and alignment on scope.
      </p>
      <p className="proposal-selector-hint">
        Click an option card to instantly update scope, delivery phases, and recommendations.
      </p>
      <OfferSelector
        offerKeys={offerKeys}
        offerConfigs={offerConfigs}
        selectedOption={selectedOption}
        onSelect={onSelect}
      />

      <div className="proposal-download-row">
        <a
          className="proposal-download-btn"
          href={pdfFileByOption[offer.key]}
          download
        >
          Download This Option (PDF)
        </a>
        <a
          className="proposal-download-btn proposal-download-btn-secondary"
          href="/proposals/niofar-pricing-pack.zip"
          download
        >
          Download All 3 (ZIP)
        </a>
      </div>

      <div className={[
        "proposal-offer-focus",
        `proposal-offer-focus-${offer.tone}`
      ].join(" ")}>
        <div className="proposal-offer-focus-copy proposal-content-animate">
          <div className="proposal-offer-eyebrow">
            <span className="proposal-selector-key">Option {offer.key}</span>
            {offer.featured ? <span className="offer-tag">Recommended</span> : null}
            {!offer.featured && offer.accentTag ? (
              <span className="offer-tag offer-tag-premium">{offer.accentTag}</span>
            ) : null}
          </div>
          <h3>{offer.name}</h3>
          <div className="proposal-budget-label">Proposed Budget</div>
          <div className="offer-price-main">{offer.anchor}</div>
          <div className="offer-price-range">
            {`(final range: ${offer.range} depending on scope confirmation)`}
          </div>
          <p className="proposal-offer-description">{offer.description}</p>
          <p className="proposal-offer-fit">{offer.fit}</p>
        </div>

        <div className="proposal-offer-focus-points proposal-content-animate">
          <ul>
            {offer.offerPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OfferDetails;