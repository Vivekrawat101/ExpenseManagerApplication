
import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = (props) => {
    const submitExpenseDataHandler = (enteredExpenseData) =>{

       
        props.onAddExpense(enteredExpenseData);
    }
    return (
        <div className = "new-expense">
            <ExpenseForm onSubmitNewExpenseData = {submitExpenseDataHandler} Index = {props.Index} />
        </div>
    );
}
export default NewExpense;