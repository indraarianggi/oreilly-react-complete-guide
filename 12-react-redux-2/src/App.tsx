import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { RootState } from "./store";

const App = () => {
  const showCart = useSelector((state: RootState) => state.ui.showCart);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
