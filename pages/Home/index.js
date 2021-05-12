import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <div className={classes["home-cointainer"]} id="home-container">
          <h1 className={classes["home-cointainer-title"]}>Main Page</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
