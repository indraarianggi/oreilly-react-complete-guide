import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { AuthContext } from "../../store/auth-context";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input, { TFocusHandler } from "../UI/Input/Input";

const LoginWrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 4rem;
`;

const Form = styled.form`
  padding: 2rem;
`;

const FormAction = styled.div`
  text-align: center;
`;

type TLoginProps = {};

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

const Login = (props: TLoginProps) => {
  const authContext = useContext(AuthContext);

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

  const emailInputRef = useRef<TFocusHandler>(null);
  const passwordInputRef = useRef<TFocusHandler>(null);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current?.focusBos();
    } else {
      passwordInputRef.current?.focusBos();
    }
  };

  return (
    <LoginWrapper>
      <Card>
        <Form onSubmit={submitHandler}>
          <Input
            ref={emailInputRef}
            label="E-mail"
            type="email"
            name="email"
            id="email"
            value={emailState.value}
            invalid={!emailState.isValid}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />

          <Input
            ref={passwordInputRef}
            label="Password"
            type="password"
            name="password"
            id="password"
            value={passwordState.value}
            invalid={!passwordState.isValid}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />

          <FormAction>
            <Button type="submit">Login</Button>
          </FormAction>
        </Form>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
