import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Breadcrumb from "../elements/common/Breadcrumb";
import PortfolioList from "../elements/portfolio/PortfolioList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const list = [
    {
        image: 'image-1',
        category: 'Data Engineering',
        title: 'SS&E Data Integration Pipeline',
        result: 'Built end-to-end Jenzabar -> SQL -> Python -> Canvas/Watermark pipeline enabling automated student success analytics'
    },
    {
        image: 'image-2',
        category: 'Systems Integration',
        title: 'Canvas Enrollment & Term Sync Engine',
        result: 'Automated course/term overrides via Canvas API resolving data mismatches and improving evaluation accuracy'
    },
    {
        image: 'image-3',
        category: 'AI / Automation',
        title: 'AI Content Automation System (n8n)',
        result: 'Designed pipeline generating, reviewing, and publishing social content using OpenAI, Baserow, and Meta APIs'
    },
    {
        image: 'image-4',
        category: 'E-commerce / Growth',
        title: 'Shopify -> Meta Ads Optimization Engine',
        result: 'Built data-driven ad system with product feeds, event tracking, and creative automation to scale catalog performance'
    },
    {
        image: 'image-1',
        category: 'Data Engineering',
        title: 'MongoDB Product Normalization Layer',
        result: 'Created centralized product data model powering AI workflows, reporting, and multi-channel distribution'
    },
    {
        image: 'image-2',
        category: 'Automation / UX',
        title: 'Telegram Approval Workflow System',
        result: 'Implemented human-in-the-loop content approval system with dynamic state updates for AI-generated media'
    },
    {
        image: 'image-3',
        category: 'Data Engineering',
        title: 'SQL-Based Student Financial Aggregation',
        result: 'Engineered financial aggregation logic (balanceDue, transactions) for SS&E feeds ensuring data completeness and accuracy'
    },
    {
        image: 'image-4',
        category: 'AI / Media',
        title: 'Multi-Platform AI Media Pipeline',
        result: 'Integrated Runway, Photoroom, ElevenLabs, and FFmpeg to automate creation of short-form video content at scale'
    }
]


class Portfolio extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Portfolio'}   />
                {/* End Breadcrump Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--5">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title service-style--3 text-center mb--15">
                                        <h2 className="title">Featured</h2>
                                        <p>A selection of recent projects that reflect our technical depth and business-focused delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                                            <p>{value.result}</p>
                                                            <div className="portfolio-button">
                                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Portfolio Area */}
                <div className="portfolio-area ptb--120 bg_color--1">
                    <div className="portfolio-sacousel-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center service-style--3 mb--30">
                                        <h2 className="title">All Works</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <PortfolioList styevariation="text-left mt--40" column="col-lg-4 col-md-6 col-sm-6 col-12" item="8" />
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="view-more-btn mt--60 text-center">
                                        <a className="rn-button-style--2 btn-solid" href="/contact"><span>Start Your Project</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                <Footer /> 
            </React.Fragment>
        )
    }
}
export default Portfolio;