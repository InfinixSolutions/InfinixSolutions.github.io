import React from "react";

function PhasesSection({ offer }) {
  return (
    <div className="container proposal-content-animate">
      <h2>Approche de delivery</h2>
      <div className="proposal-phase-grid">
        {offer.phases.map((phase) => (
          <div className="proposal-card" key={phase.title}>
            <span className="proposal-timeline">{phase.timeline}</span>
            <h3>{phase.title}</h3>
            <ul>
              {phase.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhasesSection;