import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { RootState } from "./store";
import { fetchCartData, sendCartData } from "./store/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const showCart = useSelector((state: RootState) => state.ui.showCart);
  const notification = useSelector((state: RootState) => state.ui.notification);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isCartChanged = useSelector((state: RootState) => state.cart.changed);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (isCartChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, isCartChanged]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
