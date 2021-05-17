import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CounterParentContainer from "../../containers/CounterParentContainer";
import styles from "./styles";

class Counters extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.counters}>
        <CounterParentContainer />
      </div>
    );
  }
}

export default withStyles(styles)(Counters);
