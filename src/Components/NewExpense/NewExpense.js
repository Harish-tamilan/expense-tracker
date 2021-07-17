import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props)=>{

    const onStateChange = (exp)=>
    {
        const newexp = {...exp, id: Math.random().toString()};
        console.log(newexp);
        props.onStateChange(newexp);
    }

    return(
        <div className="new-expense">
            <ExpenseForm onStateChange={onStateChange}/>
        </div>
    );
}

export default NewExpense;