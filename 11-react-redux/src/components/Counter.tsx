import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { counterActions } from "../store/counter";

import styles from "./Counter.module.css";

const Counter = () => {
  // get the counter value from store
  const counter = useSelector((state: RootState) => state.counter.counter);
  const showCounter = useSelector(
    (state: RootState) => state.counter.showCounter
  );

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // { type: SOME_UNIQUE_IDENTIFIER }
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
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
