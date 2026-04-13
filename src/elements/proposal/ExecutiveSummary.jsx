import React from "react";

function ExecutiveSummary({ offer }) {
  return (
    <div className="container proposal-content-animate">
      <h2>Resume executif</h2>
      <p>{offer.summary}</p>
      <div className="proposal-highlight-grid">
        {offer.highlights.map((item) => (
          <div className="proposal-highlight" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutiveSummary;