import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../components/Shop/Products";

export interface ICartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  total: number;
}

interface ICartState {
  cart: ICartItem[];
  changed: boolean;
}

const initialCartState: ICartState = {
  cart: [],
  changed: false,
};

/**
 * Slice of state
 */
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action: PayloadAction<ICartItem[]>) => {
      state.cart = action.payload;
    },
    addItem: (state, action: PayloadAction<Omit<IProduct, "description">>) => {
      const newItem = action.payload;
      // check if the added item exists in the cart
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.total + newItem.price;
      } else {
        state.cart.push({ ...newItem, quantity: 1, total: newItem.price });
      }

      state.changed = true;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // check if the removed item exists in the cart
      const removedItemId = action.payload;
      const existingItem = state.cart.find((item) => item.id === removedItemId);

      if (existingItem!.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== removedItemId);
      } else {
        existingItem!.quantity--;
        existingItem!.total = existingItem!.total - existingItem!.price;
      }

      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
