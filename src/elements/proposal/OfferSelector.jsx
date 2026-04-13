import React from "react";

function OfferSelector({ offerKeys, offerConfigs, selectedOption, onSelect }) {
  return (
    <div className="proposal-selector" role="tablist" aria-label="Choix de l'offre">
      {offerKeys.map((offerKey) => {
        const offer = offerConfigs[offerKey];
        const isActive = selectedOption === offerKey;

        return (
          <button
            type="button"
            key={offerKey}
            role="tab"
            aria-selected={isActive}
            className={[
              "proposal-selector-button",
              `proposal-selector-${offer.tone}`,
              isActive ? "is-active" : ""
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSelect(offerKey)}
          >
            <span className="proposal-selector-topline">
              <span className="proposal-selector-key">Option {offerKey}</span>
              {offer.featured ? <span className="offer-tag">Recommended</span> : null}
              {!offer.featured && offer.accentTag ? (
                <span className="offer-tag offer-tag-premium">{offer.accentTag}</span>
              ) : null}
            </span>
            <span className="proposal-selector-title">{offer.shortLabel}</span>
            <span className="proposal-budget-label">Proposed Budget</span>
            <span className="proposal-selector-price-main">{offer.anchor}</span>
            <span className="proposal-selector-price-range">
              {`(final range: ${offer.range} depending on scope confirmation)`}
            </span>
            <span className="proposal-selector-description">{offer.description}</span>
          </button>
        );
      })}
    </div>
  );
}

export default OfferSelector;