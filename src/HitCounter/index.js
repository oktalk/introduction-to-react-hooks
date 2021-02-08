import React, { Component, useState } from "react";

class Counter extends Component {
  state = {count: 0};
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    const { btnText } = this.props;
    return (
      <button type="button" onClick={() => this.handleClick()} className="btn">
        <span className="label">{btnText}</span>
        <span className="count">{this.state.count}</span>
      </button>
    );
  }
}

const HitCounter = function({ btnText }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevCnt) => prevCnt + 1);
  };
  return (
    <button type="button" onClick={() => handleClick()} className="btn">
      <span className="label">{btnText}</span>
      <span className="count">{count}</span>
    </button>
  );
}

export default Counter;
