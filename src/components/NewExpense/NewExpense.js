import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {v1 as uuid} from 'uuid'
import {useState} from 'react';

const NewExpense = (props) => {
  const [isFillMode, setIsFillMode] = useState(false);

  const clickAddNewHandler = () => {
    setIsFillMode(true);
  };

  const saveExpenseHandler = (expense) => {
    const expensePayload = {id: uuid(), ...expense};
    props.addExpense(expensePayload);
    setIsFillMode(false);
  };

  const cancelFillModeHandler = _ => setIsFillMode(false);

  return (
    <div className='new-expense'>
      {
        isFillMode ?
          <ExpenseForm cancelFillMode={cancelFillModeHandler} saveExpense={saveExpenseHandler}/> :
          <button onClick={clickAddNewHandler}>Add New Expense</button>
      }
    </div>
  );
};

export default NewExpense;