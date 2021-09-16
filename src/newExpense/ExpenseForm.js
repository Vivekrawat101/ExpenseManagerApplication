import React, { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    
    const [enteredAmount , setEnteredAmount] = useState('');

    const [enteredDate , setEnteredDate] = useState('');


    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value) 
    };

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type='number' min="0.1" step="0.1" onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2022-01-01" onChange = {dateChangedHandler} />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;