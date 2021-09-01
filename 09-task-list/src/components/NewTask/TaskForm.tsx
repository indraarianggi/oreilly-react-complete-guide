import React, { useRef } from "react";
import styles from "./TaskForm.module.css";

type TTaskFormProps = {
  loading: boolean;
  onEnterTask: (value: string) => void;
};

const TaskForm = ({ loading, onEnterTask }: TTaskFormProps) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!taskInputRef.current) return;

    const enteredValue = taskInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
      taskInputRef.current.value = "";
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="text" name="task" id="task" ref={taskInputRef} />
      <button>{loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
