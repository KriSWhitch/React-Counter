/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
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
      <div className={classes.counter_parent} id="counter-parent">
        <div className={classes.counters_container} id="counters-container">
          <ul className={classes.counters_list} id="counters-list">
            {counters.map((counter, index) => (
              <li className={classes.counters_list_element} key={index}>
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
        <div
          className={classes.counter_control_panel}
          id="counter-control-panel"
        >
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            id="increment-counter-btn"
            onClick={() => handleCreateCounter()}
          >
            Add Counter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            id="decrement-counter-btn"
            onClick={() => handleRemoveCounter(counters.length)}
          >
            Remove Counter
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            id="reset-counter-btn"
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
  counters: PropTypes.isRequired,
  handleCreateCounter: PropTypes.isRequired,
  handleRemoveCounter: PropTypes.isRequired,
  handleResetCounters: PropTypes.isRequired,
  handleIncrement: PropTypes.isRequired,
  handleDecrement: PropTypes.isRequired,
  handleReset: PropTypes.isRequired,
  countersLength: PropTypes.isRequired,
  handleEvenCouners: PropTypes.isRequired,
  handleOddCouners: PropTypes.isRequired,
};

// Опрокидываем в пропс объект стилей
export default withStyles(styles)(CounterParent);
