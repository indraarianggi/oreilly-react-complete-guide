import styles from "./CommentItem.module.css";

type TCommentItemProps = {
  text: string;
};

const CommentItem = ({ text }: TCommentItemProps) => {
  return (
    <li className={styles.item}>
      <p>{text}</p>
    </li>
  );
};

export default CommentItem;
