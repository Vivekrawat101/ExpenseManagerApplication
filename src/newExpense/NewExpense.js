
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const submitExpenseDataHandler = (enteredExpenseData) => {

        props.onAddExpense(enteredExpenseData);
        setIsAdding(false);
    }
    const cancelButtonHandler = () => {
        setIsAdding(false);
    }
    const editAddingExpenseButton = () => {
        setIsAdding(true);
    }

    return (
        <div className="new-expense">
            {!isAdding && <button variant="contained" onClick={editAddingExpenseButton} >Add New Expense</button>}
            {isAdding && <ExpenseForm
                onSubmitNewExpenseData={submitExpenseDataHandler}
                Index={props.Index}
                cancelAddingNewExpense={cancelButtonHandler} />}
        </div>
    );
}
export default NewExpense;