const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styles = {
  button: {
    height: 48,
    margin: 10,
    padding: "0 10px",
    border: "1px solid #f50057",
    borderRadius: 3,
  },
  "button-active": {
    backgroundColor: "#f50057",
    padding: "10px 20px",
  },
  "button-link": {
    textDecoration: "none",
    color: "#000000",
  },
  "button-link-active": {
    color: "#ffffff",
  },
  about: {
    ...displayFlex,
    flexDirection: "column",
    textAlign: "center",
  },
  "header-cointainer": {
    ...displayFlex,
  },
  "about-container": {
    ...displayFlex,
    flexDirection: "column",
  },
  "about-container-title": {
    fontSize: "32px",
  },
  "about-container-subtitle": {
    fontSize: "16px",
  },
};

export default styles;
