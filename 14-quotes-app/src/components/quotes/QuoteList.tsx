import QuoteItem from "./QuoteItem";
import styles from "./QuoteList.module.css";

export interface IQuote {
  id: string;
  author: string;
  text: string;
}

type TQuoteList = {
  quotes: IQuote[];
};

const QuoteList = ({ quotes }: TQuoteList) => {
  return (
    <>
      <ul className={styles.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
