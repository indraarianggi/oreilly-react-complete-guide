import ExpenseItem from "./ExpenseItem";
import { IExpenseItem } from "./Expenses";
import "./ExpensesList.css";

type TExpensesListProps = {
  expenses: IExpenseItem[];
};

const ExpensesList = ({ expenses }: TExpensesListProps) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
