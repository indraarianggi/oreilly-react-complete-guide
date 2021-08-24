import React, { useImperativeHandle, useRef } from "react";
import styled from "styled-components";

interface IFormControlProps {
  invalid: boolean;
}

const FormControl = styled.div<IFormControlProps>`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }

  & label,
  & input {
    display: block;
  }

  & label {
    font-weight: bold;
    flex: 1;
    color: #464646;
    margin-bottom: 0.5rem;
  }

  & input {
    color: ${(props) => (props.invalid ? "red" : "inherit")};
    background: ${(props) => (props.invalid ? "#fbdada" : "inherit")};
    flex: 3;
    font: inherit;
    padding: 0.35rem 0.35rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

type TInputProps = {
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  invalid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

export type TFocusHandler = {
  focusBos: () => void;
};

const Input = React.forwardRef<TFocusHandler, TInputProps>(
  ({ label, type, name, id, value, invalid, onChange, onBlur }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const active = () => {
      inputRef.current?.focus();
    };

    useImperativeHandle(ref, () => ({
      focusBos: active,
    }));

    return (
      <FormControl invalid={invalid}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </FormControl>
    );
  }
);

export default Input;
