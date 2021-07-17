import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props)=>{
    //const date = new Date(2021,12,28);
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.props.date}/>
            <div className="expense-item__description">
                <h2>{props.props.title}</h2>
                <div className="expense-item__price">
                    <h2>${props.props.amount}</h2>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;