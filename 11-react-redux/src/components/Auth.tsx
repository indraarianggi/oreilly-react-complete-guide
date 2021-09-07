import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authentication";

import styles from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
