import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import styles from "./styles";

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.about}>
        <div className={classes["header-cointainer"]}>
          <NavLink
            to="/about"
            className={classes["button-link"]}
            activeClassName={classes["button-link-active"]}
          >
            About
          </NavLink>
          <NavLink
            to="/counters"
            className={classes["button-link"]}
            activeClassName={classes["button-link-active"]}
          >
            Counters
          </NavLink>
          <NavLink
            to="/login"
            className={classes["button-link"]}
            activeClassName={classes["button-link-active"]}
          >
            Authorization
          </NavLink>
          <NavLink
            to="/login-redux"
            className={classes["button-link"]}
            activeClassName={classes["button-link-active"]}
          >
            Authorization Redux
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
