import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import styles from './styles';
import Counter from './index';

class CounterParent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      counters: [<Counter />],
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleCreateCounter() {
    this.setState((state) => ({ counters: state.counters.concat([<Counter />]) }));
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      this.setState((state) => ({
        counters: state.counters.slice(1),
      })); // должно возвращать тот же массив, но без первого элемента
    }
  }

  handleResetCounters() {
    this.setState(() => ({ counters: [<Counter />] }));
  } // ожидал того что так мы сможем отобразить новый и единственный Counter, однако у него остаётся старое значение счётчика

  render() {
    const { classes } = this.props;
    const { counters } = this.state;

    return (
      <div className={classes.counter_parent} id="counter-parent">
        <div className={classes.counters_container} id="counters-container">
          <ul className={classes.counters_list} id="counters-list">
            {counters.map((counter, index) => (
              <li className={classes.counters_list_element} key={index}>
                {counter}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.counter_control_panel} id="counter-control-panel">
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            id="increment-counter-btn"
            onClick={() => this.handleCreateCounter()}
          >
            Add Counter
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            id="decrement-counter-btn"
            onClick={() => this.handleRemoveCounter(counters.length)}
          >
            Remove Counter
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            id="reset-counter-btn"
            onClick={() => this.handleResetCounters()}
          >
            Reset Counters
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
export default withStyles(styles)(CounterParent);
