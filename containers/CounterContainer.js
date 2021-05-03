/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Counter from '../components/Counter/index';

export default class CounterContainer extends React.Component {
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
    return (
      <Counter
        counterValue={this.state.counterValue}
        handleIncrement={this.handleIncrement.bind(this)}
        handleDecrement={this.handleDecrement.bind(this)}
        handleReset={this.handleReset.bind(this)}
      />
    );
  }
}
