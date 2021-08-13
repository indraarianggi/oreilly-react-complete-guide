import React, { useState } from "react";
import { IExpenseItem } from "../Expenses/Expenses";
import "./ExpenseForm.css";

interface IUserInput {
  title: string;
  amount: number;
  date: string;
}

export type TExpenseData = Omit<IExpenseItem, "id">;

type TExpenseFormProps = {
  onSaveExpenseData: (data: TExpenseData) => void;
};

const ExpenseForm = ({ onSaveExpenseData }: TExpenseFormProps) => {
  const initialUserInput: IUserInput = {
    title: "",
    amount: 0,
    date: "",
  };

  const [userInput, setUserInput] = useState<IUserInput>(initialUserInput);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const expenseData: TExpenseData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    onSaveExpenseData(expenseData);
    setUserInput(initialUserInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={userInput.title}
            onChange={changeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            value={userInput.amount}
            onChange={changeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            id="date"
            value={userInput.date}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
