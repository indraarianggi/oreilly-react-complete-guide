import React, { useRef } from "react";
import Card from "../UI/Card";
import { IQuote } from "./QuoteList";

import styles from "./QuoteForm.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";

type TQuoteFormProps = {
  onAddQuote: (data: Omit<IQuote, "id">) => void;
  isLoading: boolean;
};

const QuoteForm = ({ onAddQuote, isLoading }: TQuoteFormProps) => {
  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const submitFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!authorInputRef.current || !textInputRef.current) return;

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
        {isLoading && (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={styles.control}>
          <label htmlFor="author">Author</label>
          <input type="text" name="author" id="author" ref={authorInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" id="text" cols={30} rows={10}></textarea>
        </div>

        <div className={styles.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
