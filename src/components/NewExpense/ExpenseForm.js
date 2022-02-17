import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0.01);
  const [date, setDate] = useState('2022-02-17');

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    const formData = {
      title,
      amount,
      date: new Date(date)
    };

    props.saveExpense(formData);

    setTitle('');
    setAmount(0.01);
    setDate('2022-02-17');
  };

  const onChangeTitleHandler = (e) => setTitle(e.target.value);
  const onChangeAmountHandler = (e) => setAmount(+e.target.value);
  const onChangeDateHandler = (e) => setDate(e.target.value);

  return (
    <form onSubmit={onSubmitFormHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={onChangeTitleHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={amount} onChange={onChangeAmountHandler} min='0.01' step='0.01'/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={date} onChange={onChangeDateHandler} min='2019-01-01' max='2022-12-31'/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;