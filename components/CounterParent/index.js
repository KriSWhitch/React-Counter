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
    const { classes } = this.props;

    return (
      <div className={classes.counter_parent} id="counter-parent">
        <div className={classes.counters_container} id="counters-container">
          <ul className={classes.counters_list} id="counters-list">
            {this.props.counters.map((counter, index) => (
              <li className={classes.counters_list_element} key={index}>
                <CounterContainer
                  handleIncrement={this.props.handleIncrement}
                  handleDecrement={this.props.handleDecrement}
                  handleReset={this.props.handleReset}
                  index={index}
                  counterValue={counter}
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
            onClick={() => this.props.handleCreateCounter()}
          >
            Add Counter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            id="decrement-counter-btn"
            onClick={() =>
              this.props.handleRemoveCounter(this.props.counters.length)
            }
          >
            Remove Counter
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            id="reset-counter-btn"
            onClick={() => this.props.handleResetCounters()}
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
};

// Опрокидываем в пропс объект стилей
export default withStyles(styles)(CounterParent);
