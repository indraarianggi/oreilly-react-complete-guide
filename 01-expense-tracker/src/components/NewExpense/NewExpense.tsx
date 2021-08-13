import { IExpenseItem } from "../Expenses/Expenses";
import ExpenseForm, { TExpenseData } from "./ExpenseForm";
import "./NewExpense.css";

type TNewExpenseProps = {
  onAddExpense: (data: IExpenseItem) => void;
};

const NewExpense = ({ onAddExpense }: TNewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: TExpenseData) => {
    const expenseData: IExpenseItem = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
