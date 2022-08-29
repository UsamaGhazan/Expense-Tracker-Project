import React,{useContext} from 'react'
import { GlobalContext } from './context/Globalstate'
export const Incomeexpenses = () => {
    const {transactions}=useContext(GlobalContext);

    const amounts=transactions.map(transaction=> transaction.amount);
    const income=amounts.filter(value=>value>0).reduce(((acc,item)=>acc+item),0);
    const expense=amounts.filter(value=>value<0).reduce(((acc,item)=> acc+item),0);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">${income}</p>
            </div>
            <div>
                <h4>
                    Expense
                </h4>
                <p  className="money minus">-${(Math.abs(expense))}</p>
            </div>
        </div>
    )
}
