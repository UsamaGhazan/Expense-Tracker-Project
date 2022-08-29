import React,{useState,useContext} from 'react';
import { GlobalContext } from './context/Globalstate';

export const AddTransaction = () => {
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);
    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+amount   //Turned amount into number
        }
        addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add new Transaction</h3>
        <form onSubmit={onSubmit}> 
            <div className="form-control">
                <label htmlFor="text">{text}</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Text..."/>
            </div>
            
            <div className="form-control">
                <label htmlFor="amount" >{amount}
                    <br/>
                    (negative - expense, postive - income)
                </label>
                <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter Amount..."/>
            </div>
            <button className="btn" >Add Transaction</button>
            
        </form>
            
        </>
    )
}
