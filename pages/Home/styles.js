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
  home: {
    ...displayFlex,
    flexDirection: "column",
  },
  "header-cointainer": {
    ...displayFlex,
  },
  "home-container": {
    ...displayFlex,
    flexDirection: "column",
  },
  "home-container-title": {
    fontSize: "32px",
  },
};

export default styles;
