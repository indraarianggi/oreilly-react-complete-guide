import React from "react";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import styles from "./Tasks.module.css";

export interface ITask {
  id: string;
  text: string;
}

type TTasksProps = {
  items: ITask[];
  loading: boolean;
  error: boolean;
  onFetch: () => void;
};

const Tasks = ({ items, loading, error, onFetch }: TTasksProps) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (items.length > 0) {
    taskList = (
      <ul>
        {items.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content: React.ReactNode = taskList;

  if (error) {
    content = <button onClick={onFetch}>Try Again</button>;
  }

  if (loading) {
    content = "Loading...";
  }

  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
