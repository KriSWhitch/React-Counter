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
        <div className={classes["header-cointainer"]} id="home-container">
          <Button className={classes.button}>
            <Link className={classes["button-link"]} to="/about">
              About
            </Link>
          </Button>
          <Button className={classes.button}>
            <Link className={classes["button-link"]} to="/counters">
              Counters
            </Link>
          </Button>
        </div>
        <div className={classes["home-cointainer"]} id="home-container">
          <h1 className={classes["home-cointainer-title"]}>Main Page</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
