import React, { Component } from "react";
import working from "../../../assets/img/working.png";
import "./HowItWorks.css";
import Reveal from "react-reveal/Reveal";
export default class HowItWorks extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Reveal effect="fadeInRight" duration={600}>
          <div className="row mb-32">
            <div className="col-sm-12 text-center">
              PyBlink gesture recognition system.
            </div>
          </div>
        </Reveal>
        <div className="row">
          <Reveal effect="fadeInLeft" duration={600}>
            <div className="col-md-6 hidden-md-down" id="imgCol">
              <img src={working} alt="working" id="mainImg" />
            </div>
          </Reveal>
          <Reveal effect="fadeInRight" duration={600}>
            <div className="col-md-6 " id="colAbout">
              <div className="row">
                <div className="col-sm-12 col-lg-10 infoCol">
                  <h3>Step 1. Installing the gear</h3>
                  <p>
                    Set up PyBlink gear at each nursing bed
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-10 infoCol">
                  <h3>Step 2. Monitor seamlessly</h3>
                  <p>
                    Attendants receive realtime updates about patients
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }
}
