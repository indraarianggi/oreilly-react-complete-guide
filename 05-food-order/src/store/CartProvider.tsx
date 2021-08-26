import { useReducer } from "react";
import CartContext, { ICartItem } from "./cart-context";

interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}

type CART_ACTION_TYPE =
  | { type: "ADD"; item: ICartItem }
  | { type: "REMOVE"; id: string };

const defaultCartState: ICartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (
  state: ICartState,
  action: CART_ACTION_TYPE
): ICartState => {
  switch (action.type) {
    case "ADD":
      // count the total amount
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      // update and grouping the added item
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItem;
      let updatedItems;

      if (existingCartItem) {
        updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      // return new/updated state
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    case "REMOVE":
      // search for cart item based on id
      const existingCartItemIndex2 = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem2 = state.items[existingCartItemIndex2];

      // update the total amount
      const updatedTotalAmount2 = state.totalAmount - existingCartItem2.price;

      // update the cart items
      let updatedItems2;
      if (existingCartItem2.amount === 1) {
        updatedItems2 = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem2 = {
          ...existingCartItem2,
          amount: existingCartItem2.amount - 1,
        };
        updatedItems2 = [...state.items];
        updatedItems2[existingCartItemIndex2] = updatedItem2;
      }

      // return new/updated state
      return { items: updatedItems2, totalAmount: updatedTotalAmount2 };
    default:
      return defaultCartState;
  }
};

type TCartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: TCartProviderProps) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: ICartItem) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
