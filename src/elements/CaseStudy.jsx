import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowLeft, FiArrowRight, FiLock, FiMail } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { getCaseStudyBySlug, getAdjacentCaseStudies } from "./portfolio/caseStudyData";

class CaseStudy extends Component {
    render() {
        const { slug } = this.props.match.params;
        const cs = getCaseStudyBySlug(slug);

        if (!cs) {
            return (
                <React.Fragment>
                    <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                    <div className="error-page-inner bg_color--4" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner" style={{ textAlign: 'center' }}>
                                        <h1 style={{ fontSize: '60px', fontWeight: 900, lineHeight: 1 }}>404</h1>
                                        <h3 className="title theme-gradient">Case Study Not Found</h3>
                                        <p>The project you're looking for doesn't exist or may have moved.</p>
                                        <Link className="rn-button-style--2 btn-solid mt--20" to="/portfolio">Back to Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            );
        }

        const { prev, next } = getAdjacentCaseStudies(slug);

        return (
            <React.Fragment>
                <PageHelmet pageTitle={`${cs.title} — Case Study`} />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Hero / Title Area */}
                <div className="rn-page-title-area pt--120 pb--190 bg_image bg_image--4" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <span className="theme-color font--18 fontWeight600 d-block mb--15">{cs.category}</span>
                                    <h2 className="title theme-gradient">{cs.title}</h2>
                                    <div className="d-flex justify-content-center flex-wrap mt--20" style={{ gap: '24px' }}>
                                        <span style={{ color: '#c6c9d8' }}><strong style={{ color: '#fff' }}>Industry:</strong> {cs.industry}</span>
                                        <span style={{ color: '#c6c9d8' }}><strong style={{ color: '#fff' }}>Duration:</strong> {cs.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Hero Area */}

                {/* Main Content */}
                <div className="rn-portfolio-details ptb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">

                                {/* Overview */}
                                <div className="portfolio-details mb--60">
                                    <div className="inner">
                                        <h3 className="title">Project Overview</h3>
                                        <p className="subtitle">{cs.overview}</p>
                                    </div>
                                </div>

                                {/* Two column: Challenge + Approach */}
                                <div className="row mb--60">
                                    <div className="col-lg-6 col-md-12 mb--40">
                                        <div className="service service__style--2" style={{ padding: '40px', background: '#101010', borderRadius: '10px', height: '100%' }}>
                                            <h4 className="title" style={{ marginBottom: '20px', color: '#fff' }}>The Challenge</h4>
                                            <p style={{ color: '#c6c9d8', lineHeight: '1.8' }}>{cs.challenge}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb--40">
                                        <div className="service service__style--2" style={{ padding: '40px', background: '#101010', borderRadius: '10px', height: '100%' }}>
                                            <h4 className="title" style={{ marginBottom: '20px', color: '#fff' }}>Our Approach</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {cs.approach.map((point, i) => (
                                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', color: '#c6c9d8', lineHeight: '1.7' }}>
                                                        <span style={{ color: '#f9004d', flexShrink: 0, marginTop: '3px' }}><FiCheck /></span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="mb--60">
                                    <div className="section-title service-style--3 mb--40">
                                        <h3 className="title">Key Results</h3>
                                    </div>
                                    <div className="row">
                                        {cs.results.map((result, i) => (
                                            <div className="col-lg-6 col-md-6 col-12 mb--30" key={i}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', background: '#191919', borderRadius: '8px', borderLeft: '4px solid #f9004d', height: '100%' }}>
                                                    <span style={{ color: '#f9004d', flexShrink: 0, fontSize: '20px', marginTop: '2px' }}><FiCheck /></span>
                                                    <p style={{ margin: 0, color: '#c6c9d8', lineHeight: '1.7' }}>{result}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb--80">
                                    <h4 className="title mb--30">Tech Stack</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                        {cs.techStack.map((tech, i) => (
                                            <span key={i} style={{ padding: '8px 18px', background: '#191919', border: '1px solid rgba(249,0,77,0.3)', borderRadius: '4px', color: '#c6c9d8', fontSize: '14px', fontWeight: 500 }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Main Content */}

                {/* NDA Call to Action */}
                <div className="rn-call-to-action-area ptb--120 bg_image bg_image--17" data-black-overlay="7">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#f9004d', fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>
                                        <FiLock style={{ fontSize: '22px' }} />
                                        Full Case Study Available Under NDA
                                    </span>
                                    <h2 className="title theme-gradient" style={{ marginBottom: '20px' }}>
                                        Want the Full Picture?
                                    </h2>
                                    <p style={{ color: '#c6c9d8', fontSize: '18px', maxWidth: '640px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                                        The complete case study includes detailed architecture diagrams, raw metrics, client feedback, and lessons learned.
                                        Due to confidentiality agreements, access is provided after a brief NDA signing process.
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                        <a
                                            className="rn-button-style--2 btn-primary-color"
                                            href={`/contact?subject=${encodeURIComponent('Full Case Study Request: ' + cs.title)}`}
                                        >
                                            <FiMail style={{ marginRight: '8px' }} />
                                            Request Full Case Study
                                        </a>
                                        <Link className="rn-button-style--2 btn-border-style--2" to="/portfolio">
                                            View More Projects
                                        </Link>
                                    </div>
                                    <p style={{ color: '#888', fontSize: '13px', marginTop: '24px' }}>
                                        Typical turnaround: NDA sent within 1 business day · No commitment required
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End NDA CTA */}

                {/* Prev / Next Navigation */}
                {(prev || next) && (
                    <div className="portfolio-related-work pb--80 pt--80 bg_color--1">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                {prev ? (
                                    <div className="col-lg-5 col-md-6 col-12 mb--30">
                                        <Link to={`/case-study/${prev.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', background: '#101010', borderRadius: '8px', textDecoration: 'none' }}>
                                            <FiArrowLeft style={{ fontSize: '24px', color: '#f9004d', flexShrink: 0 }} />
                                            <div>
                                                <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Previous Project</span>
                                                <p style={{ margin: 0, color: '#fff', fontWeight: 600, marginTop: '4px' }}>{prev.title}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ) : <div className="col-lg-5" />}
                                {next ? (
                                    <div className="col-lg-5 col-md-6 col-12 mb--30">
                                        <Link to={`/case-study/${next.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px', padding: '24px', background: '#101010', borderRadius: '8px', textDecoration: 'none' }}>
                                            <div style={{ textAlign: 'right' }}>
                                                <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Next Project</span>
                                                <p style={{ margin: 0, color: '#fff', fontWeight: 600, marginTop: '4px' }}>{next.title}</p>
                                            </div>
                                            <FiArrowRight style={{ fontSize: '24px', color: '#f9004d', flexShrink: 0 }} />
                                        </Link>
                                    </div>
                                ) : <div className="col-lg-5" />}
                            </div>
                        </div>
                    </div>
                )}

                <Footer />

                {/* Back to Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
            </React.Fragment>
        );
    }
}

export default CaseStudy;
