import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses</h2>;
  }

  const expenseContent =
    props.items.map(expense =>
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );

  return (
    <ul className='expenses-list'>{expenseContent}</ul>
  );
}

export default ExpensesList;