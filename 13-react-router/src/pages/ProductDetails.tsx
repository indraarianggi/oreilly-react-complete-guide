import { useParams } from "react-router";

type TParams = {
  productId: string;
};

const ProductDetails = () => {
  const params = useParams<TParams>();

  console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
