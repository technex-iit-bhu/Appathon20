import React from "react"
import "./WhyWorks.css";
import realtime from "../../../assets/img/realtime.jpg";
import cost from "../../../assets/img/cost.png";
import Reveal from 'react-reveal/Reveal';

const WhyWorks=()=>
{
    return(
        <div className="why_pyblink">
            <Reveal effect="fade" duration={300}>
                <h1 className="why_pyblink_heading">Why <span style={{color:"#4342D2"}}>PyBlink</span>?</h1>
            </Reveal>
            <div className="why_pyblink_container">
                <div className="why_pyblink_illustration_container wrap_reverse">
                    <div className="illustration_left ">
                        <Reveal effect="fadeInLeft" duration={300}>
                            <div className="desc_left">
                                    <h5 className="illustration_heading">Reduce nursing costs</h5>
                                    <p className="illustration_para">
                                        Patients are monitored in realtime</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="illustration_right">
                        <Reveal effect="fadeInRight" duration={300}>
                            <img src={realtime} width="320px" height="auto"/>
                        </Reveal>
                    </div>
                </div>
                <div className="why_pyblink_illustration_container">
                    <div className="illustration_left">
                    <Reveal effect="fadeInLeft" duration={300}>
                        <img src={cost} width="350px" height="auto"/>
                    </Reveal>
                    </div>
                    <div className="illustration_right">
                        <Reveal effect="fadeInRight" duration={300}>
                            <div className="desc_right">
                                <h5 className="illustration_heading">Save Effort, Time and Money</h5>
                                <p className="illustration_para">
                                    Sit back and relax. Let us do the work for you.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WhyWorks;
