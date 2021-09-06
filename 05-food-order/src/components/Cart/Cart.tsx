import { useContext, useState } from "react";
import styled from "styled-components";
import useHttp from "../../hooks/useHttp";
import CartContext, { ICartItem } from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout, { TUserData } from "./Checkout";

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  max-height: 20rem;
  overflow: scroll;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Actions = styled.div`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }

  & button:hover,
  & button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }

  & .button--alt {
    color: #8a2b06;
  }

  & .button {
    background-color: #8a2b06;
    color: white;
  }
`;

type TCartProps = {
  onClose: () => void;
};

const Cart = ({ onClose }: TCartProps) => {
  const cartCtx = useContext(CartContext);

  const { isLoading: isSubmitting, sendRequest } = useHttp();
  const [isSuccessSubmit, setIsSuccessSubmit] = useState<boolean>(false);

  const [isCheckout, setIsCheckout] = useState<boolean>(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: ICartItem) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
    });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = (data: TUserData) => {
    sendRequest(
      "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: data, orderedItems: cartCtx.items }),
      },
      (data) => {
        setIsSuccessSubmit(true);
        cartCtx.clearCart();
      }
    );
  };

  const cartList = (
    <CartList>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </CartList>
  );

  const modalActions = (
    <Actions>
      <button className="button--alt" onClick={onClose}>
        Close
      </button>
      {hasItems && (
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      )}
    </Actions>
  );

  const cartModalContent = (
    <>
      {cartList}
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const successSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <Actions>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </Actions>
    </>
  );

  return (
    <Modal onClose={onClose}>
      {!isSubmitting && !isSuccessSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && isSuccessSubmit && successSubmitModalContent}
    </Modal>
  );
};

export default Cart;
