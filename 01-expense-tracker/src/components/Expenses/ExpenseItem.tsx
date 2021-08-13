import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { IExpenseItem } from "./Expenses";

import "./ExpenseItem.css";

type TExpenseItemProps = Omit<IExpenseItem, "id">;

const ExpenseItem = ({ title, amount, date }: TExpenseItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
