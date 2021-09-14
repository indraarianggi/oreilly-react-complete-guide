import React, { useEffect, useRef } from "react";
import useHttp from "../../hooks/useHttp";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import styles from "./NewCommentForm.module.css";

type TNewCommentFormProps = {
  quoteId: string;
  onAddedComment: () => void;
};

const NewCommentForm = ({ quoteId, onAddedComment }: TNewCommentFormProps) => {
  const { status, error, sendRequest } = useHttp(addComment);

  const commentTextRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!commentTextRef.current) return;

    const enteredText = commentTextRef.current.value;

    // send comment to server
    sendRequest({ commentText: enteredText, quoteId });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
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
