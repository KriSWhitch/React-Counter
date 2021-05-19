import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ErrorPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.errorContainer}>
      <h1 className={classes.errorContainerTitle}>404 - Page Not Found</h1>
    </div>
  );
};

export default withStyles(styles)(ErrorPage);
