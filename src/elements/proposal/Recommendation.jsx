import React from "react";

function Recommendation({ offer }) {
  return (
    <div className="container proposal-content-animate">
      <h2>Recommendation</h2>
      <div className="proposal-reco">{offer.recommendation}</div>
      <div className="proposal-meta-grid">
        <div>
          <h4>Hypotheses</h4>
          <ul>
            {offer.assumptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Exclusions</h4>
          <ul>
            {offer.exclusions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Paiement</h4>
          <ul>
            {offer.payment.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recommendation;