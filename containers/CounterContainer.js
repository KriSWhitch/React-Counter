/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Counter from "../components/Counter/index";

const CounterContainer = (props) => (
  <Counter
    counterValue={props.counterValue}
    index={props.index}
    handleIncrement={props.handleIncrement}
    handleDecrement={props.handleDecrement}
    handleReset={props.handleReset}
  />
);

export default CounterContainer;
