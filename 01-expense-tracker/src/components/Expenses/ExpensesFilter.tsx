import React from "react";
import "./ExpensesFilter.css";

type TExpensesFilterProps = {
  selectedYear: string;
  onChangeFilter: (data: string) => void;
};

const ExpensesFilter = ({
  selectedYear,
  onChangeFilter,
}: TExpensesFilterProps) => {
  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">Filter by year</label>
        <select
          name="filter"
          id="filter"
          value={selectedYear}
          onChange={changeHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
