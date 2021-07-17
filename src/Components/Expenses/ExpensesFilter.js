import './ExpensesFilter.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import React, {useState} from 'react';
import ExpenseChart from './ExpenseChart'

const ExpensesFilter = (props) =>{

    const[year,setYear] = useState(2020);
    let data = props.data;
    let display = <p>No expenses found on {year}</p>
    data = data.filter((filter)=>{
        return filter.date.getFullYear().toString()==year;
    });
    if(data.length>0)
        {
            display = 
                data.map((exp,id)=>{
                    return(
                    <ExpenseItem props={exp} key={exp.id}/>
                    );
                }
            )
        }
    
    const dropdownChangeHandler = (event)=>
    {
        //console.log(event.target.value);
        setYear(event.target.value);
        data = data.filter((filter)=>{
            return filter.date.getFullYear().toString()==year;
        });
        //setYear(year);
        if(data.length>0)
        {
            display = 
                data.map((exp,id)=>{
                    return(
                    <ExpenseItem props={exp} key={exp.id}/>
                    );
                }
            )}
    }
    
    return(
        <div className="expenses-filter">
            <div className="expenses-filer__control">
                <label>Filter by year</label>
                <select value={year} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
            <ExpenseChart data={data}/>
            {display}
        </div>
    );
}

export default ExpensesFilter;