import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import useStyles from './styles';

const Counter = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.counter}>
      <div className={classes.counter_display}>
        <p className={classes.counter_value} id="counter-display-value">
          0
        </p>
      </div>
      <div className={classes.counter_control_panel}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          id="increment-counter-btn"
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          id="decrement-counter-btn"
        >
          Decrement
        </Button>
        <Button variant="outlined" className={classes.button} id="reset-counter-btn">
          Reset
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string,
};

// Опрокидываем в пропс объект стилей
export default Counter;
