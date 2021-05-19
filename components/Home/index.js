import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <h1 className={classes.homeContainerTitle}>Main Page</h1>
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
