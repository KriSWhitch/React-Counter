/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
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

  componentDidMount() {}

  componentWillUnmount() {}

  handleCreateCounter() {
    const array = this.state.counters;
    array.push(0);
    this.setState({ counters: array });
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      const array = this.state.counters;
      array.pop();
      this.setState({ counters: array });
    }
  }

  handleResetCounters() {
    this.setState({ counters: [0] });
  }

  handleIncrement(index) {
    const array = this.state.counters;
    array[index] = array[index] + 1;
    this.setState({ counters: array });
  }

  handleDecrement(index) {
    const array = this.state.counters;
    array[index] = array[index] - 1;
    this.setState({ counters: array });
  }

  handleReset(index) {
    const array = this.state.counters;
    array[index] = 0;
    this.setState({ counters: array });
  }

  handleEvenCouners(index) {
    const array = this.state.counters;
    if (Math.abs(array[index]) % 2 === 0) array[index] = array[index] + 1;
    this.setState({ counters: array });
  }

  handleOddCouners(index) {
    const array = this.state.counters;
    if (Math.abs(array[index]) % 2 === 1) array[index] = array[index] - 1;
    this.setState({ counters: array });
  }

  render() {
    return (
      <CounterParent
        countersLength={this.state.counters.length}
        counters={this.state.counters}
        handleCreateCounter={this.handleCreateCounter.bind(this)}
        handleRemoveCounter={this.handleRemoveCounter.bind(this)}
        handleResetCounters={this.handleResetCounters.bind(this)}
        handleIncrement={this.handleIncrement.bind(this)}
        handleDecrement={this.handleDecrement.bind(this)}
        handleReset={this.handleReset.bind(this)}
        handleEvenCouners={this.handleEvenCouners.bind(this)}
        handleOddCouners={this.handleOddCouners.bind(this)}
      />
    );
  }
}
