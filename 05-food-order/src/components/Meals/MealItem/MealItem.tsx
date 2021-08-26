import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }
`;

const Description = styled.div`
  font-style: italic;
`;

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`;

type TMealItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealItem = ({ id, name, description, price }: TMealItemProps) => {
  const cartCtx = useContext(CartContext);

  const displayedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  };

  return (
    <ListItem>
      <div>
        <h3>{name}</h3>
        <Description>{description}</Description>
        <Price>{displayedPrice}</Price>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </ListItem>
  );
};

export default MealItem;
