import { Dispatch } from "react";
import { IProduct } from "../components/Shop/Products";
import { cartActions, ICartItem } from "./cart-slice";
import { uiActions } from "./ui-slice";

/**
 * Action creator
 */
export const fetchCartData = () => {
  return async (dispatch: Dispatch<any>) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData: ICartItem[] = await fetchData();

      dispatch(cartActions.replaceCart(cartData || []));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch cart data!",
        })
      );
    }
  };
};

/**
 * Action creator
 */
export const sendCartData = (cart: Omit<IProduct, "description">[]) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
