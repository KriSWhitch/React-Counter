/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import CounterParent from '../components/CounterParent/index';
import CounterContainer from './CounterContainer';

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
    this.setState((state) => ({ counters: state.counters.concat([<CounterContainer />]) }));
  }

  handleRemoveCounter(countersLength) {
    if (countersLength > 1) {
      this.setState((state) => ({
        counters: state.counters.slice(1),
      })); // должно возвращать тот же массив, но без первого элемента
    }
  }

  handleResetCounters() {
    this.setState(() => ({ counters: [<CounterContainer />] }));
  } // ожидал того что так мы сможем отобразить новый и единственный Counter, однако у него остаётся старое значение счётчика

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
