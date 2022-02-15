import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 100.55, date: new Date()},
    { title: 'Car Insurance2', amount: 200.55, date: new Date()},
    { title: 'Car Insurance3', amount: 300.55, date: new Date()},
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {
        expenses.map(expense =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      }
    </div>
  );
}

export default App;
