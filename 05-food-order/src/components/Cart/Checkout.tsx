import React, { useRef, useState } from "react";
import styled from "styled-components";
import { isEmpty, isFiveChar } from "../../helpers/string";

const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: scroll;
`;

const FormControl = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  &.invalid label {
    color: #ca3e51;
  }

  &.invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  & button:hover,
  & button:active {
    background-color: #ffe6dc;
  }

  & button.submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  & button.submit:hover,
  & button.submit:active {
    background-color: #7a2706;
  }
`;

export type TUserData = {
  name: string;
  street: string;
  city: string;
  postal: string;
};

type TCheckoutProps = {
  onConfirm: (data: TUserData) => void;
  onCancel: () => void;
};

const Checkout = ({ onConfirm, onCancel }: TCheckoutProps) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Hai");

    if (
      !nameInputRef.current ||
      !streetInputRef.current ||
      !postalInputRef.current ||
      !cityInputRef.current
    )
      return;

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChar(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit
    onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postal: enteredPostal,
    });
  };

  return (
    <Form onSubmit={confirmHandler}>
      <FormControl className={`${formInputsValidity.name ? "" : "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </FormControl>
      <FormControl className={`${formInputsValidity.street ? "" : "invalid"}`}>
        <label htmlFor="street">Street</label>
        <input type="text" name="street" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </FormControl>
      <FormControl className={`${formInputsValidity.postal ? "" : "invalid"}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" name="postal" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </FormControl>
      <FormControl className={`${formInputsValidity.city ? "" : "invalid"}`}>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </FormControl>
      <FormActions>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </FormActions>
    </Form>
  );
};

export default Checkout;
