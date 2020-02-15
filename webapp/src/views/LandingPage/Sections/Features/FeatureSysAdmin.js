import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import cong from "./../../../../assets/img/software.jpg";
import iam from "./../../../../assets/img/accessimg.jpg";
import resource from "./../../../../assets/img/resourcemanag.jpg";
import configure from "./../../../../assets/img/configure.svg";
import access from "./../../../../assets/img/access.svg";
import management from "./../../../../assets/img/management.svg";

export default class CoFeaturesImage extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
            <FeatureCard heading="Configuture Softwares Specifically" para="Install the right software for each employee’s role or department." url={cong} svgurl={configure} />
            <FeatureCard heading="Integrated access management" para="User Management
Policy Management for different users
Group Management" url={iam} svgurl={access} />
            <FeatureCard heading="Resource Management" para="Calender Resource Management
Password Mangement" url={resource} svgurl={management}/>
        </div>
        );
    }
}
