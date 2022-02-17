import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {v1 as uuid} from 'uuid'

const NewExpense = (props) => {
  const saveExpenseHandler = (expense) => {
    const expensePayload = {id: uuid(), ...expense};
    props.addExpense(expensePayload);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm saveExpense={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;