import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import { RootState } from "../../store";

import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.length === 0 && <p>There is no item.</p>}

        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
