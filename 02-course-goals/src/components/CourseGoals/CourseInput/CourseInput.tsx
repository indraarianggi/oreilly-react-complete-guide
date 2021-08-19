import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

interface IFormControlProps {
  readonly invalid: boolean;
}

const FormControl = styled.div<IFormControlProps>`
  & {
    margin: 0.5rem 0;
  }

  & label {
    color: ${(props) => (props.invalid ? "red" : "black")};
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "salmon" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

type TCourseInputProps = {
  onAddGoal: (input: string) => void;
};

const CourseInput = ({ onAddGoal }: TCourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (enteredValue.trim().length > 0) setIsValid(true);

    setEnteredValue(e.target.value);
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isValid}>
        <label htmlFor="goal">Course Goal</label>
        <input type="text" name="goal" id="goal" onChange={changeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
