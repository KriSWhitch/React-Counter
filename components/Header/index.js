import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import styles from "./styles";

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.home}>
      <div className={classes.headerContainer}>
        <NavLink
          to="/about"
          className={classes.buttonLink}
          activeClassName={classes.buttonLinkActive}
        >
          About
        </NavLink>
        <NavLink
          to="/counters"
          className={classes.buttonLink}
          activeClassName={classes.buttonLinkActive}
        >
          Counters
        </NavLink>
        <NavLink
          to="/login"
          className={classes.buttonLink}
          activeClassName={classes.buttonLinkActive}
        >
          Authorization
        </NavLink>
        <NavLink
          to="/login-redux"
          className={classes.buttonLink}
          activeClassName={classes.buttonLinkActive}
        >
          Authorization Redux
        </NavLink>
        <NavLink
          to="/login-redux-form"
          className={classes.buttonLink}
          activeClassName={classes.buttonLinkActive}
        >
          Authorization Redux Form
        </NavLink>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
