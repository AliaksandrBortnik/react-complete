import './ExpenseForm.css';
import {useState} from 'react';

const ExpenseForm = () => {
  console.warn('Rendering form')
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState(0.01);
  // const [date, setDate] = useState();

  const [formData, setFormData] = useState({
    title: '',
    amount: 0.01,
    date: '2022-02-17'
  });

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    // const formData = { title, amount, date};
    console.warn('Current form state', formData);
  };

  const onChangeTitleHandler = (e) => setFormData((prevState) =>
    ({...prevState, title: e.target.value}));

  const onChangeAmountHandler = (e) => setFormData((prevState) =>
    ({...prevState, amount: +e.target.value}));

  const onChangeDateHandler = (e) => setFormData((prevState) =>
    ({...prevState, date: +e.target.value}));

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={formData.title} onChange={onChangeTitleHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={formData.amount} onChange={onChangeAmountHandler} min='0.01' step='0 .01'/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={formData.date} onChange={onChangeDateHandler} min='2022-01-01' max='2022-12-31'/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={onSubmitFormHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;