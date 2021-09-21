import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/authContext";

import styles from "./AuthForm.module.css";

type TSuccessResponse =
  | {
      idToken: string;
      email: string;
      refreshToken: string;
      expiresIn: string;
      localId: string;
    }
  | {
      localId: string;
      email: string;
      displayName: string;
      idToken: string;
      registered: boolean;
      refreshToken: string;
      expiresIn: string;
    };

type TErrorResponse = {
  error: {
    code: number;
    message: string;
  };
};

const AuthForm = () => {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const emalInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const switchAuthModehandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!emalInputRef.current || !passwordInputRef.current) return;

    const enteredEmail = emalInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: add validation

    setIsLoading(true);
    let url: string;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcvhxC-xfFLwhGJZJhoOssAs6HN59vUxE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcvhxC-xfFLwhGJZJhoOssAs6HN59vUxE";
    }

    // Login / sign up process
    // https://firebase.google.com/docs/reference/rest/auth
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data: TErrorResponse) => {
            // handle error ...
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data: TSuccessResponse) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            ref={emalInputRef}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button disabled={isLoading}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModehandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
