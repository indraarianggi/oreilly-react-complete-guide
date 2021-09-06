import { createStore, Store } from "redux";

export type TState = {
  counter: number;
  showCounter: boolean;
};

type TAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "INCREASE"; payload: number }
  | { type: "TOGGLE" };

const initialState: TState = {
  counter: 0,
  showCounter: true,
};

/**
 * Reducer Function
 */
const counterReducer = (
  state: TState = initialState,
  action: TAction
): TState => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "TOGGLE":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

/**
 * Store
 */
const store: Store<TState, TAction> = createStore(counterReducer);

export type TDispatch = typeof store.dispatch;

export default store;
