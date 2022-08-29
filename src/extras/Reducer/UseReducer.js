import React from 'react'
import { useReducer } from 'react'

const initialState=0;
const reducer=(state,action)=>{
    switch(action.type){
        case "increment": return state+1;
        break;
        case "decrement": return state-1;
        break;
        default:
            return state;
    }

}

export const UseReducer = () => {

    const [state,dispatch]=   useReducer(reducer,initialState);
    
    return (
        <>
        <p>{state}</p>
        <div>
            <button onClick={()=>{
                dispatch({type:"increment"})
            }}></button>
            <button onClick={()=>{
                dispatch({type:"decrement"})
            }}></button>
        </div>
            
        </>
    )
}
