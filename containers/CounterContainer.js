import React from "react";
import PropTypes from "prop-types";
import Counter from "../components/Counter/index";

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      countersLength,
      index,
      handleEvenCouners,
      handleOddCouners,
    } = this.props;
    if (countersLength < nextProps.countersLength) {
      handleEvenCouners(index);
    } else if (countersLength > nextProps.countersLength) {
      handleOddCouners(index);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { counterValue } = this.props;
    if (counterValue === nextProps.counterValue) return false;
    return true;
  }

  render() {
    const {
      counterValue,
      index,
      handleIncrement,
      handleDecrement,
      handleReset,
    } = this.props;

    return (
      <Counter
        counterValue={counterValue}
        index={index}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    );
  }
}

CounterContainer.propTypes = {
  countersLength: PropTypes.number.isRequired,
  counterValue: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleEvenCouners: PropTypes.func.isRequired,
  handleOddCouners: PropTypes.func.isRequired,
};

export default CounterContainer;
