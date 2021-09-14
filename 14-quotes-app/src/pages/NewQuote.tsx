import { useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import { IQuote } from "../components/quotes/QuoteList";
import useHttp from "../hooks/useHttp";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const history = useHistory();

  const { status, sendRequest } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      // redirect
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (newQuote: Omit<IQuote, "id">) => {
    sendRequest(newQuote);
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === "pending"} />
  );
};

export default NewQuote;
