import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CounterParentContainer from "../../containers/CounterParentContainer";
import styles from "./styles";

const Counters = (props) => {
  const { classes } = props;
  return (
    <div className={classes.counters}>
      <CounterParentContainer />
    </div>
  );
};

export default withStyles(styles)(Counters);
