const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styles = {
  buttonLink: {
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
  home: {
    ...displayFlex,
    flexDirection: "column",
    textAlign: "center",
  },
  buttonLinkActive: {
    padding: "5px 15px",
    color: "#ffffff",
    backgroundColor: "#f50057",
  },
  headerContainer: {
    ...displayFlex,
  },
};

export default styles;
