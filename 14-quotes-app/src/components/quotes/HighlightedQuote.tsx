import { IQuote } from "./QuoteList";

import styles from "./HighlightedQuote.module.css";

type THighlightedQuoteProps = Omit<IQuote, "id">;

const HighlightedQuote = ({ author, text }: THighlightedQuoteProps) => {
  return (
    <figure className={styles.quote}>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
