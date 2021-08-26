import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`;

const CartButtonBase = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }

  &:hover ${Badge}, &:active ${Badge} {
    background-color: #92320c;
  }

  &.bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const IconWrapper = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

type TCartButtonProps = {
  onClick: () => void;
};

const CartButton = ({ onClick }: TCartButtonProps) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState<boolean>(false);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const btnClasses = `${btnIsHighlighted ? "bump" : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // cleanup function
    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <CartButtonBase onClick={onClick} className={btnClasses}>
      <IconWrapper>
        <CartIcon />
      </IconWrapper>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </CartButtonBase>
  );
};

export default CartButton;
