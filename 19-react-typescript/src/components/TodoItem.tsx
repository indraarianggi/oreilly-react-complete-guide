import React from "react";
import Todo from "../models/todo";
import styles from "./TodoItem.module.css";

type TTodoItemProps = Omit<Todo, "id"> & {
  onDeleteTodo: () => void;
};

const TodoItem: React.FC<TTodoItemProps> = (props) => {
  return (
    <li className={styles.item}>
      <span>{props.text}</span>
      <button onClick={props.onDeleteTodo}>X</button>
    </li>
  );
};

export default TodoItem;
