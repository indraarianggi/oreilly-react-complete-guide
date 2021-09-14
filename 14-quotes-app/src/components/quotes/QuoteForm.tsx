import React, { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import { IQuote } from "./QuoteList";

import styles from "./QuoteForm.module.css";

type TQuoteFormProps = {
  onAddQuote: (data: Omit<IQuote, "id">) => void;
  isLoading: boolean;
};

const QuoteForm = ({ onAddQuote, isLoading }: TQuoteFormProps) => {
  const [isEntering, setIsEntering] = useState<boolean>(false);

  const authorInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);

  const formFocusHandler = () => {
    setIsEntering(true);
  };

  const submitFormHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!authorInputRef.current || !textInputRef.current) return;

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost!"
        }
      />
      <Card>
        <form
          className={styles.form}
          onFocus={formFocusHandler}
          onSubmit={submitFormHandler}
        >
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
            <textarea
              name="text"
              id="text"
              cols={30}
              rows={10}
              ref={textInputRef}
            ></textarea>
          </div>

          <div className={styles.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
