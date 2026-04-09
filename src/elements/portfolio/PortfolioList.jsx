import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
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

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
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
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;