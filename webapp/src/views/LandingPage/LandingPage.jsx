import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import $ from "jquery";
import landingPageStyle from "../../assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import HeaderNew from "./common/HeaderNew";
import SectionContact from "./Sections/SectionContact";
import Footer from "./common/Footer";
import WhyWorks from "./Sections/WhyWorks";
import HowItWorks from "./Sections/HowItWorks";
import SectionFaq from "./Sections/SectionFaq";
import {header2, header3} from "./svgs/HeaderSvgs";


class LandingPage extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         isLoginModalOpen: false,
         isSignUpModalOpen: false,
         isWatchDemoOpen: false
      };
   }

   render() {
      const { classes, ...rest } = this.props;
      return (
         <div>
            <div className="landingPage body-wrap boxed-container" style={{background: "white" }}>
               <div style={{
                  height: 85,
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between"
               }}>
                  <div>
                     <img style={{width: "80%"}} src={header2}/>
                  </div>
                  <div>
                     <img style={{"-webkit-mask-image": "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
                     }} src={header3}/>
                  </div>
               </div>
               {/*<HeaderNew />*/}
               <HowItWorks />
               <WhyWorks />
               <SectionFaq />
               <SectionContact/>
               <Footer/>
            </div>
         </div>
      );
   }

   componentDidMount() {
      window.scrollTo(0, 0);
      $(window).scroll(function() {
         const scroll = $(window).scrollTop();
         let header = $("header");

         if (scroll >= 30) {
            $("header").addClass("ontop");
         } else if (scroll < 30) {
            $("header").removeClass("ontop");
         }
      });

      // const mainjs = document.createElement('script');
      // mainjs.src = 'js/main.js';
      // mainjs.async = true;
      // document.body && document.body.appendChild(mainjs);

      // if(window.location.hash){
      //   try{
      //     let id=window.location.hash;
      //     let cordY=document.querySelector(id)?document.querySelector(id).offsetTop:null;
      //     if(cordY)
      //       window.scrollTo(0,cordY);
      // }
      // catch(e){
      // };

   }

   componentWillUnmount() {
      $(window).unbind("scroll");
   }

}

export default withStyles({ ...landingPageStyle })(LandingPage);
