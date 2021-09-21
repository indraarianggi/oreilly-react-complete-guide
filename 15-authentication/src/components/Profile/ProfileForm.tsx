import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/authContext";
import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordInputRef = useRef<HTMLInputElement>(null);

  const authCtx = useContext(AuthContext);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!newPasswordInputRef.current) return;

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCcvhxC-xfFLwhGJZJhoOssAs6HN59vUxE",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // assumption: Always succeeds!

      history.replace("/");
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          name="newPassword"
          id="new-password"
          minLength={7}
          ref={newPasswordInputRef}
        />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
