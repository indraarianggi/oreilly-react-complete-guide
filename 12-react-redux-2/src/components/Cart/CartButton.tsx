import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const numberOfCartItems = useMemo(
    () =>
      cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0),
    [cart]
  );

  const clickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={styles.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
