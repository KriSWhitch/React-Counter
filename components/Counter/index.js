/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styles from './styles';

class Counter extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.counter} id="counter">
        <div className={classes.counter_display} id="counter-display">
          <p className={classes.counter_value} id="counter-display-value">
            {this.props.counterValue}
          </p>
        </div>
        <div className={classes.counter_control_panel} id="counter-control-panel">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            id="increment-counter-btn"
            onClick={() => this.props.handleIncrement()}
          >
            Increment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            id="decrement-counter-btn"
            onClick={() => this.props.handleDecrement()}
          >
            Decrement
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            id="reset-counter-btn"
            onClick={() => this.props.handleReset()}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counterValue: PropTypes.isRequired,
  handleIncrement: PropTypes.isRequired,
  handleDecrement: PropTypes.isRequired,
  handleReset: PropTypes.isRequired,
};

export default withStyles(styles)(Counter);
