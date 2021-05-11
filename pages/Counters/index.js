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
        <div className={classes["header-cointainer"]} id="home-container">
          <Button className={classes.button}>
            <Link className={classes["button-link"]} to="/about">
              About
            </Link>
          </Button>
          <Button className={(classes.button, classes["button-active"])}>
            <Link
              className={
                (classes["button-link"], classes["button-link-active"])
              }
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
