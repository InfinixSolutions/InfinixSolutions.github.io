import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="brand-style-2">
                    <li>
                        <img src="/assets/images/brand/client-sammys.png" alt="Sammy's Lebanese Kitchen"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/client-nau.png" alt="NAU"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/client-gallery1880.jpg" alt="Gallery 1880"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/client-aon.jpg" alt="AON Jiu Jitsu"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/client-bms.png" alt="BMS"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;