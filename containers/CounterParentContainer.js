/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import CounterParent from "../components/CounterParent/index";
import CounterContainer from "./CounterContainer";

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
    array.forEach((el, index) => {
      if (el % 2 === 0) array[index] = el + 1;
    }, array);
    array.push(0);
    this.setState({ counters: array });
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      const array = this.state.counters;
      array.pop();
      array.forEach((el, index) => {
        if (el % 2 === 1) array[index] = el - 1;
      }, array);
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

  render() {
    return (
      <CounterParent
        counters={this.state.counters}
        handleCreateCounter={this.handleCreateCounter.bind(this)}
        handleRemoveCounter={this.handleRemoveCounter.bind(this)}
        handleResetCounters={this.handleResetCounters.bind(this)}
        handleIncrement={this.handleIncrement.bind(this)}
        handleDecrement={this.handleDecrement.bind(this)}
        handleReset={this.handleReset.bind(this)}
      />
    );
  }
}
