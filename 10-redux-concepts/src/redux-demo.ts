const redux = require("redux");
import { Store } from "redux";

type TCounterState = {
  counter: number;
};

type TCounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

const initialState: TCounterState = {
  counter: 0,
};

// reducer function
const counterReducer = (
  state: TCounterState = initialState,
  action: TCounterAction
): TCounterState => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };
    default:
      return initialState;
  }
};

// create a store
const store: Store<TCounterState, TCounterAction> =
  redux.createStore(counterReducer);

console.log(store.getState());

// subscriber
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log({ latestState });
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
