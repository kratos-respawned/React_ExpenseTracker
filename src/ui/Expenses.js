import './Expenses.css'
import ExpenseBox from './ExpenseBox'
let Expenses=(props)=>{
    return(
        <div className='expenses'>
            {props.data.map(expense=>(<ExpenseBox amount={expense.Amount} expenseName={expense.expenseName} date={expense.Date}/>))}
        </div>
    );
}
export default Expenses;