import './ExpenseForm.css'
import React, {useState} from 'react'

const ExpenseForm = (props)=>{

    const[title,setTitle] = useState('');
    const[amount,setAmount] = useState(0);
    const[date,setDate] = useState('');

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setDate(event.target.value);
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log('Inside submithandler');
        const obj = {
            title:title,
            amount:amount,
            date:new Date()
        };
        // console.log('title is '+title+', amount is '+amount+', date is '+date);
        // console.log('obj is '+obj);
        props.onStateChange(obj);
        setTitle('');
        setDate('');
        setAmount('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                        <input type="text" onChange={titleChangeHandler} value={title}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={amount}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={date}/>
                </div>
            </div>
            <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;