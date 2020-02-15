import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import buy from "./../../../../assets/img/configured.jpg";
import lease from "./../../../../assets/img/lease.jpg";
import direct from "./../../../../assets/img/delivery.jpg";
import custom from "./../../../../assets/img/custom.jpg";
import monitor from "./../../../../assets/img/monitor.svg";
import delivery from "./../../../../assets/img/delivery-truck.svg";
import laptop from "./../../../../assets/img/laptop.svg";
import computer from "./../../../../assets/img/computer.svg";

class FeaturesText extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (

            <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
                <FeatureCard heading="Buy Configured Devices" para="Buy Mac and PC laptops, monitors and accessories." url={buy} svgurl={monitor}/>
                <FeatureCard heading="Lease Devices" para="Lease laptops at cost over 24 months." url={lease} svgurl={laptop} />
                <FeatureCard heading="Lease laptops at cost over 24 months." para="Devices will be shipped right to you or your employee with full configuration and ready to go on Day One." url={direct} svgurl={delivery}/>
                <FeatureCard heading="Custom Configuration" para="Custom configuration with connected accounts in SAAS Apps with addition to all DLs/Channels." url={custom} svgurl={computer}/>

            </div>
        );
    }
}
export default FeaturesText;
