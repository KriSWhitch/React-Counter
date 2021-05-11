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
    borderRadius: 3,
  },
  "counter-control-panel": {
    ...displayFlex,
    width: "500px",
    border: "1px solid black",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  "counter-value": {
    fontSize: "30px",
    color: "black",
  },
  "counters-container": {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
  },
  "counter-parent": {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
    width: "600px",
  },
  "counters-list": {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
    padding: "0",
    listStyle: "none",
  },
  "counters-list-element": {
    marginBottom: "10px",
  },
};

export default styles;
