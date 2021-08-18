import { useMemo, useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export interface IExpenseItem {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

type TExpensesProps = {
  expenses: IExpenseItem[];
};

const Expenses = ({ expenses }: TExpensesProps) => {
  const [filteredYear, setFilteredYear] = useState<string>("2020");

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  // Filtered expense by year
  const filteredExpenses: IExpenseItem[] = useMemo(() => {
    return expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }, [expenses, filteredYear]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
