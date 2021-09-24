import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../expensefilter/ExpenseFilter";
import React, { useState } from "react";
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

    let expensesContent = <p className="noRecordFound">No Expenses found</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (

            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}

            />
        ))
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={FilteredYear} onChangeFilter={getFilterInput} />
            {/* {filteredExpenses.length === 0 && <h4 className="noRecordFound">No record found</h4>}
            {filteredExpenses.length > 0 && filteredExpenses.map(expense => (

                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}

                />
            ))} */}
            {expensesContent}

        </Card>)
}