import React from "react";
import Todo from "../models/todo";

type TTodoItemProps = Omit<Todo, "id">;

const TodoItem: React.FC<TTodoItemProps> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoItem;
