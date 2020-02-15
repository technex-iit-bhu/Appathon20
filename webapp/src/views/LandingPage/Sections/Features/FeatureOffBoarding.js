import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import transfer from "./../../../../assets/img/transfership.jpg";
import offboard from "./../../../../assets/img/offboard.jpg";
import remote from "./../../../../assets/img/remote.svg";
import transfership from "./../../../../assets/img/transfer.svg";

export default class FeaturesText extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
            <FeatureCard heading="Reprovision remotely" para="Remotely wipe a terminated employee’s computer and reconfigure for your next hire" url={offboard} svgurl={remote} />
            <FeatureCard heading="Transfership Management" para="Transfer all files, documents, emails to a right person" url={transfer} svgurl={transfership} />
        </div>

        );
    }
}
