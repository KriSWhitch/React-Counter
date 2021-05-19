import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";
import CounterContainer from "../../containers/CounterContainer";

class CounterParent extends React.Component {
  render() {
    const {
      classes,
      counters,
      handleIncrement,
      handleDecrement,
      handleReset,
      countersLength,
      handleEvenCouners,
      handleOddCouners,
      handleCreateCounter,
      handleRemoveCounter,
      handleResetCounters,
    } = this.props;

    return (
      <div className={classes.counterParent}>
        <div className={classes.countersContainer}>
          <ul className={classes.countersList}>
            {counters.map((counter, index) => (
              <li className={classes.countersListElement} key={index}>
                <CounterContainer
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleReset={handleReset}
                  index={index}
                  counterValue={counter}
                  countersLength={countersLength}
                  handleEvenCouners={handleEvenCouners}
                  handleOddCouners={handleOddCouners}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.counterControlPanel}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => handleCreateCounter()}
          >
            Add Counter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={() => handleRemoveCounter(counters.length)}
          >
            Remove Counter
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => handleResetCounters()}
          >
            Reset Counters
          </Button>
        </div>
      </div>
    );
  }
}

CounterParent.propTypes = {
  counters: PropTypes.arrayOf(CounterContainer).isRequired,
  handleCreateCounter: PropTypes.func.isRequired,
  handleRemoveCounter: PropTypes.func.isRequired,
  handleResetCounters: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  countersLength: PropTypes.number.isRequired,
  handleEvenCouners: PropTypes.func.isRequired,
  handleOddCouners: PropTypes.func.isRequired,
};

export default withStyles(styles)(CounterParent);
