import { useState } from 'react';
import './App.css';
import Expenses from './expenses/Expenses';
import NewExpense from './newExpense/NewExpense';
const dummyExpenses = [
  { id: 1, title: "Food", amount: 1500.49, date: new Date(2020, 9, 14) },
  { id: 2, title: "Home Rent", amount: 3959.99, date: new Date(2019, 6, 12) },
  { id: 3, title: "Internet", amount: 80.18, date: new Date(2022, 1, 13) },
  { id: 4, title: "Personal grooming", amount: 200.19, date: new Date(2021, 12, 4) }
];

function App() {


  const [expenses, setExpenseList] = useState(dummyExpenses);


  const addExpenseHandler = (expense) => {

    setExpenseList((prevList) => {
      return [expense, ...prevList];
    })

  }


  return (
    <div>
      <h1 className="expense_bar">EXPENSE-MANAGER</h1>

      <NewExpense onAddExpense={addExpenseHandler} Index={expenses[expenses.length - 1] + 1} />
      <Expenses item={expenses} />
    </div>
  )
}

export default App;
