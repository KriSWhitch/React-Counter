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
  home: {
    ...displayFlex,
    flexDirection: "column",
  },
  homeContainer: {
    ...displayFlex,
    flexDirection: "column",
  },
  homeContainerTitle: {
    fontSize: "32px",
  },
};

export default styles;
