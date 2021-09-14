import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import NewCommentForm from "./NewCommentForm";
import { TRouteParams } from "../../App";
import useHttp from "../../hooks/useHttp";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import styles from "./Comments.module.css";
import CommentsList from "./CommentsList";

export interface IComment {
  id: string;
  text: string;
}

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState<boolean>(false);

  const params = useParams<TRouteParams>();

  const { data: loadedComments, status, sendRequest } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [params.quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(params.quoteId);
  }, [params.quoteId, sendRequest]);

  let comments: React.ReactNode;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comments were added yet.</p>;
  }

  return (
    <section className={styles.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}

      {comments}
    </section>
  );
};

export default Comments;
