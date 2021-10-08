import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";

type TTodosProps = {
  items: Todo[];
  onDeleteTodo: (todoId: string) => void;
};

const Todos: React.FC<TTodosProps> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
