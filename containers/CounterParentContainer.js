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
      counters: [<CounterContainer />],
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleCreateCounter() {
    this.setState(() => ({
      counters: this.state.counters.concat([<CounterContainer />]),
    }));
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      this.setState(() => ({
        counters: this.state.counters.slice(1),
      }));
    }
  }

  handleResetCounters() {
    this.setState(() => ({
      counters: [<CounterContainer />],
    }));
  }

  render() {
    return (
      <CounterParent
        counters={this.state.counters}
        handleCreateCounter={this.handleCreateCounter.bind(this)}
        handleRemoveCounter={this.handleRemoveCounter.bind(this)}
        handleResetCounters={this.handleResetCounters.bind(this)}
      />
    );
  }
}
