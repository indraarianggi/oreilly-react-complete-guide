import React from "react";

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export interface ICartContext {
  items: ICartItem[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: (item: ICartItem) => {},
  removeItem: (id: string) => {},
  clearCart: () => {},
});

export default CartContext;
