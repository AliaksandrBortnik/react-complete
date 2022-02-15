import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    { id: 1, title: 'Car Insurance', amount: 100.55, date: new Date()},
    { id: 2, title: 'Car Insurance2', amount: 200.55, date: new Date()},
    { id: 3, title: 'Car Insurance3', amount: 300.55, date: new Date()},
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
