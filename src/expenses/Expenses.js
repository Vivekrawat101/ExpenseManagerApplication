import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../expensefilter/ExpenseFilter";
import React,{useState} from "react";
import "./Expenses.css";
import Card from "../card/Card";
export default function Expenses(props) {

   const [FilteredYear, setFilteredYear] = useState('2021');

    const getFilterInput = (Year) => {
        
     setFilteredYear(Year); //this will render the selected value to drop down menu button

    }
    
   const filteredExpenses = props.item.filter(expense => {
         return expense.date.getFullYear().toString() === FilteredYear;
    });

    return (
        <Card className = "expenses">
            <ExpenseFilter selected={FilteredYear} onChangeFilter = {getFilterInput}/>
          
            {   filteredExpenses.map(expense => (
               
                <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                
                />
            ))}
        </Card>)
}