import { createSlice } from "@reduxjs/toolkit";

interface IUIState {
  showCart: boolean;
}

const initialUIState: IUIState = {
  showCart: false,
};

/**
 * Slice of state
 */
const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
