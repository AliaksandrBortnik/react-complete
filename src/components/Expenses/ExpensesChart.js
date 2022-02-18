import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataPoints = months.map(m => ({
    label: m,
    value: 0
  }));

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={dataPoints}/>
};

export default ExpensesChart;