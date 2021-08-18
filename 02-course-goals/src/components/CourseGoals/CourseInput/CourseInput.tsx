import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

type TCourseInputProps = {
  onAddGoal: (input: string) => void;
};

const CourseInput = ({ onAddGoal }: TCourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="goal">Course Goal</label>
        <input type="text" name="goal" id="goal" onChange={changeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
