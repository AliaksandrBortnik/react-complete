import './ExpenseItem.css';

function ExpenseItem() {
  const now = new Date();
  const title = 'Car Insurance';
  const price = 100.55;

  return (
    <div className="expense-item">
      <div>{now.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;