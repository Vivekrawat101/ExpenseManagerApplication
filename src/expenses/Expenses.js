import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../expensefilter/ExpenseFilter";
import React,{useState} from "react";
import "./Expenses.css";
import Card from "../card/Card";
export default function Expenses(props) {

   const [filterInput, setFilterInput] = useState('2021');

    const getFilterInput = (input) => {
     setFilterInput(input);
    }
   

    return (
        <Card className = "expenses">
            <ExpenseFilter selected={filterInput} onChangeFilter = {getFilterInput}/>
          
            {props.item.map(expense => (
                
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))}
        </Card>)
}