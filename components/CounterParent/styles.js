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
  counterControlPanel: {
    ...displayFlex,
    width: "500px",
    border: "1px solid black",
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  counterValue: {
    fontSize: "30px",
    color: "black",
  },
  countersContainer: {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
  },
  counterParent: {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
    width: "600px",
  },
  countersList: {
    ...displayFlex,
    flexDirection: "column",
    margin: "auto",
    padding: "0",
    listStyle: "none",
  },
  countersListElement: {
    marginBottom: "10px",
  },
};

export default styles;
