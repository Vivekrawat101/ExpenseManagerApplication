import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    
    const [enteredAmount , setEnteredAmount] = useState('');

    const [enteredDate , setEnteredDate] = useState('');

    //   const [userInput, setUserInput] = useState({
    //       enteredTitle: '',
    //       enteredAmount: '',
    //       enteredDate: ''
    //   })


    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState , enteredTitle: event.target.value};
        // })
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value) 
        
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    
        // setUserInput((prevState)=>{
        //     return{...prevState, enteredAmount: event.target.value}
        // })
    
    };

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value)
        
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
       
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredDate: event.target.value}
        // })
    
    };
     
    const submitHandler = (event) => {
       event.preventDefault();

       const expenseData = {
           id : props.Index ,
           title: enteredTitle,
           amount: enteredAmount,
           date: new Date(enteredDate)
       };


       props.onSubmitNewExpenseData(expenseData);
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
    }

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.1" step="0.1" value={enteredAmount} onChange={amountChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2022-01-01" value={enteredDate} onChange = {dateChangedHandler} />
                </div>

                <div className="new-expense__actions">
                    <button variant="contained" type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;