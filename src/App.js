import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Car Insurance', amount: 100.55, date: new Date()},
    { id: 2, title: 'Car Insurance2', amount: 200.55, date: new Date()},
    { id: 3, title: 'Car Insurance3', amount: 300.55, date: new Date()},
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
