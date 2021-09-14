import { Link } from "react-router-dom";
import { IQuote } from "./QuoteList";

import styles from "./QuoteItem.module.css";

type TQuoteItemProps = IQuote;

const QuoteItem = ({ id, author, text }: TQuoteItemProps) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className="btn">
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;
