/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import CounterParentContainer from "../../containers/CounterParentContainer";
import styles from "./styles";

class Counters extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.counters}>
        <div className={classes.header_cointainer} id="home-container">
          <Button className={classes.button}>
            <Link className={classes.button_link} to="/about">
              About
            </Link>
          </Button>
          <Button className={(classes.button, classes.button_active)}>
            <Link
              className={(classes.button_link, classes.button_link_active)}
              to="/counters"
            >
              Counters
            </Link>
          </Button>
        </div>
        <CounterParentContainer />
      </div>
    );
  }
}

export default withStyles(styles)(Counters);
