import { useHistory, useLocation } from "react-router";
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

const sortQuotes = (quotes: IQuote[], ascending: boolean) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = ({ quotes }: TQuoteList) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <>
      <div className={styles.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={styles.list}>
        {sortedQuotes.map((quote) => (
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
