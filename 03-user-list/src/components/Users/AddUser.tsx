import { useState } from "react";
import styled from "styled-components";
import Container from "../UI/Container";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal, { TErrorModalProps } from "../UI/ErrorModal";
import { IUser } from "../../App";

const Form = styled.form`
  padding: 1rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

type TInputedUser = Omit<IUser, "id">;

type TAddUserProps = {
  onAddUser: (data: TInputedUser) => void;
};

const AddUser = ({ onAddUser }: TAddUserProps) => {
  const initialFormValue: TInputedUser = {
    username: "",
    age: "",
  };

  const [form, setForm] = useState<TInputedUser>(initialFormValue);

  const [error, setError] = useState<Omit<TErrorModalProps, "onClose"> | null>(
    null
  );

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (form.username.trim().length === 0 || form.age.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+form.age < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    onAddUser(form);
    setForm(initialFormValue);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <Container>
      {error && <ErrorModal {...error} onClose={closeModalHandler} />}
      <Card>
        <Form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={changeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            value={form.age}
            onChange={changeHandler}
          />
          <Button type="submit">Add User</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AddUser;
