
const beforeBg = {
      background: "rgba(0, 0, 0, 0.5)"
    };

const afterBefore = {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    };

const parallaxStyle = {
  parallax: {
    minHeight: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {},
  primaryColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(225,190,231,.56),rgba(186,104,200,.95))"
    },
    "&:after,&:before": afterBefore
  },
  roseColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(248,187,208,.56),rgba(240,98,146,.95))"
    },
    "&:after,&:before": afterBefore
  },
  darkColor: {
    "&:before": beforeBg,
    "&:after,&:before": afterBefore
  },
  infoColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(178,235,242,.56),rgba(77,208,225,.95))"
    },
    "&:after,&:before": afterBefore
  },
  successColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(165,214,167,.56),rgba(102,187,106,.95))"
    },
    "&:after,&:before": afterBefore
  },
  warningColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(255,224,178,.56),rgba(255,183,77,.95))"
    },
    "&:after,&:before": afterBefore
  },
  dangerColor: {
    "&:before": beforeBg,
    "&:after": {
      background:
        "linear-gradient(60deg,hsla(0,73%,77%,.56),rgba(239,83,80,.95))"
    },
    "&:after,&:before": afterBefore
  },
  section1Color: {
    "&:before": beforeBg,
    "&:after": {
      background: 'white',
    },
    "&:after,&:before": afterBefore
  },
  section2Color: {
    "&:before": beforeBg,
    "&:after": {
      background: "white"
    },
    "&:after,&:before": afterBefore
  },
  small: {
    height: "65vh",
    minHeight: "65vh",
  }
};

export default parallaxStyle;
