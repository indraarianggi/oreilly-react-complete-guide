import React, { useRef } from "react";
import styles from "./NewTodo.module.css";

type TNewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<TNewTodoProps> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw and error
      return;
    }

    props.onAddTodo(enteredText);

    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="todo">Todo text: </label>
      <input type="text" name="todo" id="todo" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
