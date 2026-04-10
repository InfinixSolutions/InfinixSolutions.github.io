import React, { useMemo, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { getProposalById, grantProposalAccess, hasProposalAccess, verifyProposalPasscode } from "../proposals/registry";

function ProposalAccess({ match }) {
  const proposalId = match?.params?.proposalId;
  const proposal = useMemo(() => getProposalById(proposalId), [proposalId]);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  if (!proposal) {
    return <Redirect to="/404" />;
  }

  if (hasProposalAccess(proposal.id)) {
    return <Redirect to={proposal.path} />;
  }

  const onSubmit = event => {
    event.preventDefault();

    if (verifyProposalPasscode(proposal.id, passcode)) {
      grantProposalAccess(proposal.id);
      window.location.assign(proposal.path);
      return;
    }

    setError("Invalid passcode. Please try again.");
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Proposal Access" />
      <Header logo="dark" color="color-black" />

      <div className="rn-contact-page ptb--120 bg_color--5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="contact-form--1" style={{ marginTop: "80px" }}>
                <div className="section-title text-center mb--30">
                  <h2 className="title">Check Proposal</h2>
                  <p>Enter your passcode to access: {proposal.title}</p>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="proposal-passcode">Passcode</label>
                    <input
                      id="proposal-passcode"
                      type="password"
                      value={passcode}
                      onChange={event => setPasscode(event.target.value)}
                      placeholder="Enter passcode"
                      required
                    />
                  </div>
                  {error ? (
                    <p style={{ color: "#c0392b", marginTop: "8px" }}>{error}</p>
                  ) : null}
                  <div style={{ marginTop: "18px" }}>
                    <button className="rn-button-style--2 btn-primary-color" type="submit">
                      Unlock Proposal
                    </button>
                  </div>
                  <p style={{ marginTop: "18px" }}>
                    Need help? <Link to="/contact">Contact us</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default ProposalAccess;
