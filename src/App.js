import './App.css';
import Expenses from './expenses/Expenses';
import NewExpense from './newExpense/NewExpense';
function App() {
  const expenses = [
    { title: "Food", amount: 1500.49, date: new Date(2018, 9, 14) },
    { title: "Home Rent", amount: 3959.99, date: new Date(2019, 6, 12) },
    { title: "Internet", amount: 80.18, date: new Date(2024, 1, 13) },
    { title: "Personal grooming", amount: 200.19 , date: new Date(2022, 12, 4) }
  ];

  return (
    <div>
      <h1 className="expense_bar">EXPENSE-MANAGER</h1>
      <NewExpense/>
     <Expenses item = {expenses}/>
    </div>
  )
}

export default App;
