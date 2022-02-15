import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <div className='expenses'>
      {
        props.items.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }
    </div>
  );
}

export default Expenses;