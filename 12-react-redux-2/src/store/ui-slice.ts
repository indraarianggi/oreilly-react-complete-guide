import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INotification {
  status: "pending" | "error" | "success";
  title: string;
  message: string;
}
interface IUIState {
  showCart: boolean;
  notification: INotification | null;
}

const initialUIState: IUIState = {
  showCart: false,
  notification: null,
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
    showNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
