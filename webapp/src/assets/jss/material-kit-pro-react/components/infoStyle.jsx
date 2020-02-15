// ##############################
// // // Info component styles
// #############################

import {
    dangerColor,
    grayColor,
    infoColor,
    primaryColor,
    roseColor,
    successColor,
    title,
    warningColor
} from "../../material-kit-pro-react.jsx";

const infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "70px 0 30px"
  },
  iconWrapper: {
    float: "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "2.25rem"
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: "hidden"
  },
  title: {
    ...title,
    margin: "1.75rem 0 0.875rem !important",
    minHeight: "unset",
    fontSize: '18.2px',
    lineHeight: '25.2px'
  },
  description: {
    color: grayColor,
    overflow: "hidden",
    marginTop: "0px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // fontWeight: 300,
    fontSize:'14px',
    // lineHeight: '1.5em',
    "& p": {
      color: grayColor,
      fontSize: "14px"
    }
  },
  iconWrapperVertical: {
    float: "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};

export default infoStyle;
