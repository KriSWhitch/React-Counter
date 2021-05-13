const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styles = {
  "button-link": {
    ...displayFlex,
    height: "32px",
    margin: 10,
    padding: "0 10px",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000000",
    border: "1px solid #f50057",
    borderRadius: 3,
  },
  "button-link-active": {
    padding: "5px 15px",
    color: "#ffffff",
    backgroundColor: "#f50057",
  },
  "header-cointainer": {
    ...displayFlex,
  },
};

export default styles;
