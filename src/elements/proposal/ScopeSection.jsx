import React from "react";

function ScopeSection({ offer }) {
  return (
    <div className="container proposal-content-animate">
      <h2>Perimetre de la mission</h2>
      <div className="proposal-list-grid">
        {offer.scope.map((item) => (
          <div className="proposal-list-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScopeSection;