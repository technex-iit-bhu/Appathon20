import {container, main, mainRaised, title} from "../../material-kit-pro-react.jsx";
// import logo from "../../../img/sprite.png";
// import kid from "../../../img/kid_bg.png";

const landingPageStyle = {
  container: {
    color: "#FFFFFF",
    ...container,
    zIndex: "2"
  },
  colorBlack: {
    color: "#000"
  },
  lists: {
    listStyle: "none"
  },
  link: {
    color: "#337ab7"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  contactContent: {
    paddingBottom: "10px",
    paddingTop: "10px"
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },
  info: {
    paddingBottom: "10px",
    paddingTop: 0
  },
  textCenter: {
    textAlign: "center !important"
  },
  cublock: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  cuinlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  culist: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  culeft: {
    float: "left!important",
    display: "block"
  },
  curight: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  cuicon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  lightgray: {
    color: "lightgray"
  },
  logo: {
    // background: `transparent url(${logo}) no-repeat -46px -175px`,
    textIndent: '5000px',
    minHeight: '75px',
    float: 'left',
    width: '100%',
    overflow: 'hidden',
  },
  features: {
    color: '#000',
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
  iconhiw: {
    // background: `transparent url(${logo}) no-repeat`,
  },
  accounts: {
    backgroundPosition: '-60px -60px',
  },
  safty: {
    backgroundPosition: '-180px -60px',
  },
  instantAlert: {
    backgroundPosition: '-290px -60px',
  },
  safeSharing: {
    // background: `transparent url(${kid}) no-repeat center`,
    backgroundSize: 'cover',
    minHeight: '550px',
    margin: '80px 0 30px',
    backgroundPosition:"right"
  },
  childDetails: {
    width: '420px',
    marginTop:'100px',
    padding:'15px',
  },
};

export default landingPageStyle;
