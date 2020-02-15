import {card, container, description, mlAuto, mrAuto, section, title} from "../../../material-kit-pro-react.jsx";
// import logo from "../../../../img/sprite.png";
import logoBlue from "../../../../img/sprite-blue.png";
import logoGreen from "../../../../img/sprite-green.png";

const pricingStyle = {
  container,
  mlAuto,
  mrAuto,
  title: {
    ...title,
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
  section: {
    ...section,
    padding: "10px 0 40px",
    zIndex: 3,
    position: "relative",
    textAlign: "center"
  },
  socialLine: {
    padding: ".9375rem 0px",
    textAlign: "center",
    width: "100%"
  },
  marginRight: {
    marginRight: "3px"
  },
  description: {
    ...description,
    color: "#999"
  },
  card: {
    ...card,
    marginBottom: "30px",
    boxShadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12)",
    "& ul": {
      listStyle: "none",
      padding: 0,
      maxWidth: "240px",
      margin: "50px auto 10px",
      minHeight: '175px'
    },
    "& ul li": {
      color: "#000",
      textAlign: "center",
      padding: '0 0 20px'
    },
    "& ul li:last-child": {
      border: 0
    }
  },
  cardMargin: {
    marginTop: "80px"
  },
  cardCategory: {
    color: "#fff",
    marginTop: "10px",
    fontSize: '16px'
  },
  cardTitle: {
    color: "#f7ee91",
    textDecoration: "none",
    fontSize: "75px",
    fontWeight: "400",
    fontFamily: 'Helvetica, Arial, sans-serif',
    "& small": {
      color: "#fff",
      position: "relative",
      top: "-45px",
      fontSize: "16px",
      display: "inline-flex",
      height: 0
    },
  },
  "yrColor": {
    color: "#febcff"
  },
  cardBody: {
    padding: "15px"
  },
  navPillsContent: {
    padding: "20px 0px 50px 0px"
  },
  monthlyBg: {
    background: `transparent url(${logoBlue}) no-repeat`,
    minHeight: '200px',
    backgroundSize: "cover"
  },
  yearlyBg: {
    background: `transparent url(${logoGreen}) no-repeat`,
    minHeight: '200px',
    backgroundSize: "cover"
  },
};

export default pricingStyle;
