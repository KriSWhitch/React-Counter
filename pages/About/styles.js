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
  button_active: {
    backgroundColor: "#f50057",
    padding: "10px 20px",
  },
  button_link: {
    textDecoration: "none",
    color: "#000000",
  },
  button_link_active: {
    color: "#ffffff",
  },
  about: {
    ...displayFlex,
    flexDirection: "column",
    textAlign: "center",
  },
  header_cointainer: {
    ...displayFlex,
  },
  about_container: {
    ...displayFlex,
    flexDirection: "column",
  },
  about_container_title: {
    fontSize: "32px",
  },
  about_container_subtitle: {
    fontSize: "16px",
  },
};

export default styles;