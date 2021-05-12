import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./styles";

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about}>
        <div className={classes["header-cointainer"]} id="header-container">
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
          <Button className={classes.button}>
            <Link className={classes["button-link"]} to="/login">
              Authorization
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
