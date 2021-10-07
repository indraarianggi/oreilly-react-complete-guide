import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TTodosProps = {
  items: Todo[];
};

const Todos: React.FC<TTodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
