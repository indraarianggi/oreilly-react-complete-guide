import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import styles from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const { items, deleteTodo } = todosCtx;

  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
