import { useDispatch } from "react-redux";
import { cartActions, ICartItem } from "../../store/cart-slice";

import styles from "./CartItem.module.css";

type TCartItemProps = {
  item: ICartItem;
};

const CartItem = ({ item }: TCartItemProps) => {
  const { id, title, quantity, price, total } = item;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ id, title, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
