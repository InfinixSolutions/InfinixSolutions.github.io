import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Automation',
        description: "Experience streamlined efficiency with our automation solutions. We harness the power of technology to optimize your processes, reduce manual tasks,"
         + "and increase productivity. Let us simplify your operations, so you can focus on what matters most – growing your business."
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'Transform your online presence with our custom website development. We design and build user-friendly, visually appealing websites that drive engagement and conversions.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'Elevate your marketing efforts with data-driven insights. Our team will not only execute effective marketing campaigns but also provide detailed reports, helping you make informed decisions for growth.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Web App Development',
        description: 'Unlock the potential of web applications with our development expertise. We create responsive and powerful web apps tailored to your unique business needs.'
    },
    {
        icon: <FiUsers />,
        title: 'ETL & Data Transfer',
        description: 'Simplify data management with our ETL (Extract, Transform, Load) solutions. We ensure seamless and secure data transfer, making it easier for you to harness the power of your information.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'Extend your reach to mobile users with our mobile app development services. We craft intuitive and feature-rich applications that keep your audience engaged on the go.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
