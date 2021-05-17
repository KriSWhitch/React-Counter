import React from "react";
import CounterParent from "../components/CounterParent/index";

export default class CounterParentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      counters: [0],
    };
  }

  handleCreateCounter = () => {
    const { counters } = this.state;
    const array = counters;
    array.push(0);
    this.setState({ counters: array });
  };

  handleRemoveCounter = (countersLength) => {
    if (countersLength > 1) {
      const { counters } = this.state;
      const array = counters;
      array.pop();
      this.setState({ counters: array });
    }
  };

  handleResetCounters = () => {
    this.setState({ counters: [0] });
  };

  handleIncrement = (index) => {
    const { counters } = this.state;
    const array = counters;
    array[index]++;
    this.setState({ counters: array });
  };

  handleDecrement = (index) => {
    const { counters } = this.state;
    const array = counters;
    array[index] = array[index]--;
    this.setState({ counters: array });
  };

  handleReset = (index) => {
    const { counters } = this.state;
    const array = counters;
    array[index] = 0;
    this.setState({ counters: array });
  };

  handleEvenCouners = (index) => {
    const { counters } = this.state;
    const array = counters;
    if (Math.abs(array[index]) % 2 === 0) array[index]++;
    this.setState({ counters: array });
  };

  handleOddCouners = (index) => {
    const { counters } = this.state;
    const array = counters;
    if (Math.abs(array[index]) % 2 === 1) array[index] = array[index]--;
    this.setState({ counters: array });
  };

  render() {
    const { counters } = this.state;

    return (
      <CounterParent
        countersLength={counters.length}
        counters={counters}
        handleCreateCounter={this.handleCreateCounter}
        handleRemoveCounter={this.handleRemoveCounter}
        handleResetCounters={this.handleResetCounters}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
        handleEvenCouners={this.handleEvenCouners}
        handleOddCouners={this.handleOddCouners}
      />
    );
  }
}
