import CommentItem from "./CommentItem";
import { IComment } from "./Comments";
import styles from "./CommentsList.module.css";

type TCommentsListProps = {
  comments: IComment[];
};

const CommentsList = ({ comments }: TCommentsListProps) => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
