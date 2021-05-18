const displayFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const styles = {
  button: {
    height: "48px",
    width: "100%",
    padding: "0 10px",
    borderRadius: 3,
  },
  form: {
    ...displayFlex,
    flexDirection: "column",
    width: "400px",
    margin: "10px auto 0 auto",
    padding: "24px",
    border: "solid 1px #000000",
    borderRadius: "24px",
  },
  input: {
    display: "block",
    width: "95%",
    padding: "4px 6px",
    fontSize: "16px",
    border: "solid 1px #eeeeee",
    borderRadius: "4px",
  },
  error: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "red",
  },
  label: {
    fontSize: "24px",
  },
  "button-link": {
    ...displayFlex,
    height: "48px",
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#000000",
    border: "1px solid #f50057",
    borderRadius: 3,
  },
};

export default styles;
