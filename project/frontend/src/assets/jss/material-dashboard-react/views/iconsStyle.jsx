import { boxShadow } from "../../material-dashboard-react.jsx";

const iconsStyle = {
  iframe: {
    width: "100%",
    height: "500px",
    border: "0",
    ...boxShadow
  },
  iframeContainer: {
    margin: "0 -20px 0"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

export default iconsStyle;
