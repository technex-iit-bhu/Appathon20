import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import max from "./../../../../assets/img/maxresdefault.jpg";
import hardware from "./../../../../assets/img/hardware-tech.jpg";
import person from "./../../../../assets/img/technicianperson.svg";
import setup from "./../../../../assets/img/setup.svg";

export default class CoFeaturesImage extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
            <FeatureCard heading="In Person Technician" para="We can get a technician to your office within hours to handle issues with hardware or network outages." url={max} svgurl={person} />
            <FeatureCard heading="Setup Technician" para="We can assist with special project work like cable cleanup and setting up workstations." url={hardware} svgurl={setup} />
        </div>
        );
    }
}
