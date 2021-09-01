import React from "react";
import styles from "./TaskItem.module.css";

type TTaskItemProps = {
  children: React.ReactNode;
};

const TaskItem = ({ children }: TTaskItemProps) => {
  return <li className={styles.task}>{children}</li>;
};

export default TaskItem;
