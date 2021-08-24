import React, { useEffect, useReducer, useState } from "react";
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

type ACTION_TYPE =
  | { type: "USER_INPUT"; payload: string }
  | { type: "INPUT_BLUR" };

const initialEmailState = {
  value: "",
  isValid: false,
};

const emailReducer = (
  state: typeof initialEmailState,
  action: ACTION_TYPE
): typeof initialEmailState => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return initialEmailState;
};

const initialPasswordState = {
  value: "",
  isValid: false,
};

const passwordReducer = (
  state: typeof initialPasswordState,
  action: ACTION_TYPE
): typeof initialPasswordState => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return initialPasswordState;
};

const Login = ({ onLogin }: TLoginProps) => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialEmailState
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialPasswordState
  );

  useEffect(() => {
    // debounce strategy using timeout
    const identifier = setTimeout(() => {
      console.log("VALIDATE");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    // cleanup function
    return () => {
      console.log("CLEANUP", identifier);
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "USER_INPUT", payload: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: "USER_INPUT", payload: e.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <LoginWrapper>
      <Card>
        <Form onSubmit={submitHandler}>
          <FormControl invalid={!emailState.isValid}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </FormControl>

          <FormControl invalid={!passwordState.isValid}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
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
