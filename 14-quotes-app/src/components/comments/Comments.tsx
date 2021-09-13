import { useState } from "react";

import styles from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

export interface IComment {
  id: string;
  text: string;
}

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
