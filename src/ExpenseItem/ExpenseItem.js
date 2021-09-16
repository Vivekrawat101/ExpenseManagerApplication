import React, { useState } from "react";
import { ExpenseDate } from "../expenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../card/Card";
export default function ExpenseItem(props) {
    //  first variable will be stored in initial stage
    // setTitle will be executed when clickhandler runs
    const [title, setTitle] = useState(props.title);

    const ClickHandler = (e) => {
        console.log(props.title);
        setTitle('Updated!');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={ClickHandler} >Change title</button>
        </Card>

    )
}