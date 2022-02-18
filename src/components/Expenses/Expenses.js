import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(2022);

  const filteredExpenses = props.items.filter(exp =>
    exp.date.getFullYear() === filterYear);

  const applyFilterHandler = year => setFilterYear(year);

  return (
    <div className='expenses'>
      <ExpensesFilter applyFilter={applyFilterHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
}

export default Expenses;