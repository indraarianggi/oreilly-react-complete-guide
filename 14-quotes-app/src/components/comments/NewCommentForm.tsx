import React, { useRef } from "react";

import styles from "./NewCommentForm.module.css";

const NewCommentForm = () => {
  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // optional: could validate here

    // send comment to server
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <div className={styles.control}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols={30}
          rows={10}
          ref={commentTextRef}
        ></textarea>
      </div>
      <div className={styles.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
