import {cardTitle, mlAuto, mrAuto} from "assets/jss/material-kit-pro-react.jsx";

const pricingStyle = {
  mrAuto,
  mlAuto,
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#fff!important",
    "& small": {
      color: "rgba(255,255,255,0.8)!important"
    }
  },
  textCenter: {
    textAlign: "center"
  },
  cardCategory:{
    fontSize:"0.8em"
  },
  pricingSection: {
    padding: "80px 0px"
  },
  textInfo: {
    color: "#00bcd4!important"
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor:"rgba(144, 19, 254, 0.02)",
    }
  },
  tr:{
    borderBottom:"1px solid #eee",
    padding:"4px 10px 4px 10px",
    minWidth:"150px"
  }
};

export default pricingStyle;
