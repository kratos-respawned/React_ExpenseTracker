import './ExpenseBox.css'
let ExpenseBox=(props)=>{    
    return(
        <div className='expense_box'>
                <div className='expense_date'>{props.date}</div>
                <div className='expense_title'>{props.expenseName}</div>
                <div className='expense_amount'>${props.amount}</div>
           </div>
    );
}
export default ExpenseBox;