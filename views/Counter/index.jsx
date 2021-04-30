import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styles from './styles';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { counterValue: 0 };
  }

  handleIncrement() {
    this.setState((state) => ({ counterValue: state.counterValue + 1 }));
  }

  handleDecrement() {
    this.setState((state) => ({ counterValue: state.counterValue - 1 }));
  }

  handleReset() {
    this.setState(() => ({ counterValue: 0 }));
  }

  render() {
    const { classes } = this.props;
    const { counterValue } = this.state;

    return (
      <div className={classes.counter} id="counter">
        <div className={classes.counter_display} id="counter-display">
          <p className={classes.counter_value} id="counter-display-value">
            {counterValue}
          </p>
        </div>
        <div className={classes.counter_control_panel} id="counter-control-panel">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            id="increment-counter-btn"
            onClick={() => this.handleIncrement()}
          >
            Increment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            id="decrement-counter-btn"
            onClick={() => this.handleDecrement()}
          >
            Decrement
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            id="reset-counter-btn"
            onClick={() => this.handleReset()}
          >
            Reset
          </Button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string,
};

// Опрокидываем в пропс объект стилей
export default withStyles(styles)(Counter);
