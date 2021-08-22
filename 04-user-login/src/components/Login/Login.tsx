import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const LoginWrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 4rem;
`;

const Form = styled.form`
  padding: 2rem;
`;

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

const FormAction = styled.div`
  text-align: center;
`;

type TLoginProps = {
  onLogin: (email: string, password: string) => void;
};

const Login = ({ onLogin }: TLoginProps) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    // debounce strategy using timeout
    const identifier = setTimeout(() => {
      console.log("Validate");
      setFormIsValid(
        form.email.includes("@") && form.password.trim().length > 6
      );
    }, 500);

    // cleanup function
    return () => {
      console.log(identifier);
      clearTimeout(identifier);
    };
  }, [form]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmailHandler = () => {
    setEmailIsValid(form.email.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(form.password.trim().length > 6);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onLogin(form.email, form.password);
  };

  return (
    <LoginWrapper>
      <Card>
        <Form onSubmit={submitHandler}>
          <FormControl invalid={!emailIsValid}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
              onBlur={validateEmailHandler}
            />
          </FormControl>

          <FormControl invalid={!passwordIsValid}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={changeHandler}
              onBlur={validatePasswordHandler}
            />
          </FormControl>

          <FormAction>
            <Button type="submit" disabled={!formIsValid}>
              Login
            </Button>
          </FormAction>
        </Form>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
