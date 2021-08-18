import { useState } from "react";
import { IExpenseItem } from "../Expenses/Expenses";
import ExpenseForm, { TExpenseData } from "./ExpenseForm";
import "./NewExpense.css";
import "./ExpenseForm.css";

type TNewExpenseProps = {
  onAddExpense: (data: IExpenseItem) => void;
};

const NewExpense = ({ onAddExpense }: TNewExpenseProps) => {
  const [isShowForm, setIsShowForm] = useState<boolean>(false);

  const showFormHandler = () => setIsShowForm(true);
  const closeFormHandler = () => setIsShowForm(false);

  const saveExpenseDataHandler = (enteredExpenseData: TExpenseData) => {
    const expenseData: IExpenseItem = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {isShowForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={closeFormHandler}
        />
      ) : (
        <button type="button" onClick={showFormHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
