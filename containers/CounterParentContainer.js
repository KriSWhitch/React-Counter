/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import CounterParent from "../components/CounterParent/index";
import CounterContainer from "./CounterContainer";

let countersArray = [<CounterContainer />];

export default class CounterParentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      counters: [...countersArray],
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleCreateCounter() {
    countersArray.push([<CounterContainer />]);
    this.setState(() => ({
      counters: [...countersArray],
    }));
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      countersArray.shift();
      this.setState(() => ({
        counters: [...countersArray],
      }));
    }
  }

  handleResetCounters() {
    countersArray = [<CounterContainer counterValue={0} />];
    this.setState(() => ({
      counters: [...countersArray],
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
