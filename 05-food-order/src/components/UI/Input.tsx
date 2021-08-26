import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`;

type TInputProps = {
  label: string;
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
};

const Input = React.forwardRef<HTMLInputElement, TInputProps>((props, ref) => {
  const { input, label } = props;

  return (
    <InputWrapper>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </InputWrapper>
  );
});

export default Input;
