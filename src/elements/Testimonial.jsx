import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>These young men helped us solve an issue that would have cost us 10s of thousands in a very professional and efficient way.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Ismael </span> - Dean, NAU</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>They proposed me a solution that I never heard before and can't possibly operate my business without now.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Cliff </span> - Owner, AON GYM</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Not just did they educate me about the topic of marketing, they helped setup a whole funnel that brings me most of my clients.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Aby Ciss </span> - CEO, Birane MultiServices</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Johns Due </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>John Doe </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Amar Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Fatima Ma </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;