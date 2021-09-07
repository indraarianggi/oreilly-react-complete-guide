import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCounterState = {
  counter: number;
  showCounter: boolean;
};

const initialCounterState: TCounterState = {
  counter: 0,
  showCounter: true,
};

/**
 * Slice of state
 */
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<number>) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
