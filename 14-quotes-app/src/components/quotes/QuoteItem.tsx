import styles from "./QuoteItem.module.css";
import { IQuote } from "./QuoteList";

type TQuoteItemProps = IQuote;

const QuoteItem = ({ author, text }: TQuoteItemProps) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <a className="btn">View Fullscreen</a>
    </li>
  );
};

export default QuoteItem;
