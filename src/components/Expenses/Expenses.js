import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState(null);

  let filteredExpenses = !filterYear ? props.items :
    props.items.filter(exp => exp.date.getFullYear() === filterYear);

  const applyFilterHandler = year => setFilterYear(year);

  const expenseContent = filteredExpenses.length === 0 ?
    <p>No expenses</p> :
    filteredExpenses.map(expense =>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );

  return (
    <div className='expenses'>
      <ExpensesFilter applyFilter={applyFilterHandler}/>
      {expenseContent}
    </div>
  );
}

export default Expenses;