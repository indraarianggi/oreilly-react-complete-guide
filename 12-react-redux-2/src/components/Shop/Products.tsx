import styles from "./Products.module.css";
import ProductItem from "./ProductItem";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
}

const DUMMY_PRODUCTS: IProduct[] = [
  {
    id: "p1",
    title: "Product 1",
    description: "This is a first product - amazing",
    price: 6,
  },
  {
    id: "p2",
    title: "Product 2",
    description: "This is a second product - awesome",
    price: 6,
  },
];

const Product = () => {
  return (
    <section className={styles.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Product;
