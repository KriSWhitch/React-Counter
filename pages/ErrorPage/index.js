import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class ErrorPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes["error-container"]} id="error-container">
        <h1 className={classes["error-container-title"]}>
          404 - Page Not Found
        </h1>
      </div>
    );
  }
}

export default withStyles(styles)(ErrorPage);
