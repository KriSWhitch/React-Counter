/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Counter from "../components/Counter/index";

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.counterValue === nextProps.counterValue) return false;
    return true;
  }

  render() {
    return (
      <Counter
        counterValue={this.props.counterValue}
        index={this.props.index}
        handleIncrement={this.props.handleIncrement}
        handleDecrement={this.props.handleDecrement}
        handleReset={this.props.handleReset}
      />
    );
  }
}

export default CounterContainer;
