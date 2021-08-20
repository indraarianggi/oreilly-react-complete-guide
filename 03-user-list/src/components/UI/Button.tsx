import styled from "styled-components";

const ButtonBase = styled.button`
  font: inherit;
  border: 1px solid #4f005f;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }

  &:focus {
    outline: none;
  }
`;

type TButton = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ type, onClick, children }: TButton) => {
  return (
    <ButtonBase type={type ?? "button"} onClick={onClick}>
      {children}
    </ButtonBase>
  );
};

export default Button;
