import React from 'react';
import { useState } from 'react';
import './Home.css'
import InputForm from "./input/InputForm";
import Expenses from './ui/Expenses';
let dummy=[];

let Home=()=>{
    let [newExpense,setNewExpense]=useState(dummy);
    let saveStateHandler=(expense)=>{
    let temp=[expense,...newExpense];
    setNewExpense(temp);
    }
    return(
        <div className='home'>
            <InputForm saveState={saveStateHandler}/>
            <Expenses data={newExpense}/>
        </div>
    );
}
export default Home;