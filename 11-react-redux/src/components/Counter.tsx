import React from "react";
import { useSelector, useDispatch, connect, ConnectedProps } from "react-redux";
import { TDispatch, TState } from "../store";

import styles from "./Counter.module.css";

const Counter = () => {
  // get the counter value from store
  const counter = useSelector((state: TState) => state.counter);
  const showCounter = useSelector((state: TState) => state.showCounter);

  const dispatch: TDispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payload: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+ 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/**
 * Class Component Version
 */
/*
const mapStateToProps = (state: TState) => {
  return {
    counter: state.counter,
    showCounter: state.showCounter,
  };
};

const mapDispatchToProps = (dispatch: TDispatch) => {
  return {
    incrementHandler: () => dispatch({ type: "INCREMENT" }),
    decrementHandler: () => dispatch({ type: "DECREMENT" }),
    increaseHandler: () => dispatch({ type: "INCREASE", payload: 5 }),
    toggleCounterHandler: () => dispatch({ type: "TOGGLE" }),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type TPropsFromRedux = ConnectedProps<typeof connector>;

class Counter extends React.Component<TPropsFromRedux> {
  render() {
    return (
      <main className={styles.counter}>
        <h1>Redux Counter</h1>
        {this.props.showCounter && (
          <div className={styles.value}>{this.props.counter}</div>
        )}
        <div>
          <button onClick={this.props.decrementHandler.bind(this)}>-</button>
          <button onClick={this.props.incrementHandler.bind(this)}>+</button>
          <button onClick={this.props.increaseHandler.bind(this)}>+5</button>
        </div>
        <button onClick={this.props.toggleCounterHandler.bind(this)}>
          Toggle Counter
        </button>
      </main>
    );
  }
}

export default connector(Counter);
*/
