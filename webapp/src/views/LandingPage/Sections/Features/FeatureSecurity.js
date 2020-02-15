import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import best from "./../../../../assets/img/protection.jpg";
import phone from "./../../../../assets/img/devicesecure.jpg";
import protect from "./../../../../assets/img/appsecure.png";
import network from "./../../../../assets/img/networksecure.jpg";
import shield from "./../../../../assets/img/shield.svg";
import secure from "./../../../../assets/img/secure.svg";
import application from "./../../../../assets/img/application.svg";
import networksvg from "./../../../../assets/img/network.svg";

export default class FeaturesText extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (

            <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
                    <FeatureCard heading="Comprehensive protection" para="Update your company-issued devices with the latest security and vulnerability software patches." url={best} svgurl={shield} />
                    <FeatureCard heading="Device Level Secuity" para="USB Protection and Locking <br/> Disk encryption Remote <br/>Locking Assitance" url={phone} svgurl={secure} />
                    <FeatureCard heading="Application Level Security" para="2-factor Authentication setup<br/>Policies for out of the network file sharing" url={protect} svgurl={application}/>
                    <FeatureCard heading="Network Level Security" para="Firewall Security<br/>VPN<br/>Wifi Security" url={network} svgurl={networksvg}/>

                </div>
        );
    }
}
