import { useState } from 'react';
import './InputForm.css'
let InputForm=(props)=>{
    let [name,setName]=useState('');
    let [amount,setAmount]=useState('');
    let [date,setDate]=useState('');
    let nameHandler=(event)=>{
        setName(event.target.value);
    };
    let amountHandler=(event)=>{
        setAmount(event.target.value);
    };
    let dateHandler=(event)=>{
        setDate(event.target.value);
    }
    let createExpense=(event)=>{
        event.preventDefault();
        if(!(name===''||date===''||amount==='')){
            let expense={
                'expenseName':name,
                'Amount':amount,
                'Date':date
            };
            setAmount('');
            setDate('');
            setName('');
            props.saveState(expense);
        }
    }
    return(
        <div >
            <form className='input_form'>
               <div className='input_box'>
                <label>Expense Name</label>
                <input value={name} onChange={nameHandler} className='input' title='name'type='text'/>
               </div>
               <div className='input_box'>
                <label>Amount</label>
                <input value={amount} onChange={amountHandler} className='input' type='number'/>
               </div>
               <div className='input_box'>
                <label>Date</label>
                <input value={date} onChange={dateHandler} className='input' type='date'/>
               </div>
                <button onClick={createExpense} type='submit' className='input_button'>SUBMIT</button>
            </form>
        </div>
    );
}
export default InputForm;