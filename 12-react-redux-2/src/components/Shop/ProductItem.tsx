import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { IProduct } from "./Products";
import { cartActions } from "../../store/cart-slice";

import styles from "./ProductItem.module.css";

type TProductItemProps = IProduct;

const ProductItem = ({ id, title, description, price }: TProductItemProps) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
