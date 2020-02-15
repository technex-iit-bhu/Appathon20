import React from "react";
import Faq from "../common/Faq";

export default class SectionFaq extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <section id="faq" className="faq space-double-lg bg-azure-light">
            <div className="container">
               <div className="row justify-content-center">
                  <h2 className="h3 text-center" style={{ margin: "20px 0px" }}>
                     Frequently asked questions
                  </h2>
               </div>
            </div>

            <div className="container">
               <div className="row justify-content-center ">
                  <div
                     className="col-lg-8 col-xs-11"
                     style={{ float: "none", margin: "auto" }}
                  >
                     <div id="faq-accordion">
                        {faqs.map((obj, index) => (
                           <Faq {...obj} key={index} index={index}/>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

const faqs = [
   {
      answer:
         "PyBlink nodes process gestures in realtime 24x7. It assists the attendants caring for patients, not a substitute for them",
      question: "Is PyBlink safe?"
   },
   {
      answer: "Hospitals and nursing home staffs",
      question: "Who are we offering to?"
   }
];
