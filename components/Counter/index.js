import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "./styles";

const Counter = (props) => {
  const {
    classes,
    counterValue,
    handleIncrement,
    handleDecrement,
    handleReset,
    index,
  } = props;
  return (
    <div className={classes.counter}>
      <div className={classes.counterDisplay}>
        <p className={classes.counterValue}>{counterValue}</p>
      </div>
      <div className={classes.counterControlPanel}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => handleIncrement(index)}
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={() => handleDecrement(index)}
        >
          Decrement
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => handleReset(index)}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  counterValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default withStyles(styles)(Counter);
