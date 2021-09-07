import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authentication";
import counterSlice from "./counter";

/**
 * Store
 */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
