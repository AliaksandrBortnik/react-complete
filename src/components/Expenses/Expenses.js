import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(null);

  let filteredExpenses = !filterYear ? props.items :
    props.items.filter(exp => exp.date.getFullYear() === filterYear);

  const applyFilterHandler = year => setFilterYear(year);

  return (
    <div className='expenses'>
      <ExpensesFilter applyFilter={applyFilterHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </div>
  );
}

export default Expenses;