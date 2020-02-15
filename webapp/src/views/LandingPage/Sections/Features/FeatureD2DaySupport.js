import React from 'react';
import "./tab.css";
import FeatureCard from "./featureCard/FeatureCard.js";
import trouble from "./../../../../assets/img/remotely.jpg";
import fast from "./../../../../assets/img/fast.jpg";
import solve from "./../../../../assets/img/throughput.jpg";
import cogwheel from "./../../../../assets/img/cogwheel.svg";
import running from "./../../../../assets/img/running.svg";
import performance from "./../../../../assets/img/performance.svg";

export default class CoFeaturesImage extends React.Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return (
            
                <div className={"our_services_tab"+(this.props.hide?" none ":"")} style={{background:"white"}}>
                    <FeatureCard heading="Remotely Troubleshoot Problems" para="Buy Mac Triage, diagnose and resolve issues with computer, software and network remotely. PC laptops, monitors and accessories." url={trouble} svgurl={cogwheel}/>
                    <FeatureCard heading="Fast Assistance" para="Get Assisted in Less than 5 minutes." url={fast} svgurl={running}/>
                    <FeatureCard heading="High throughput" para="Resolve 80% of issues in less than 30 minutes." url={solve} svgurl={performance}/>
                </div>
        );
    }
}
