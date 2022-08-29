import React from 'react'
import { createContext } from 'react';
import {CompA} from './CompA.js'

const FirstName=createContext();
const Age=createContext();
function App2(){
    return (
        <>
        <FirstName.Provider value={"Ali"}>
        <Age.Provider value={89}>
        <CompA/> 
        </Age.Provider>
        </FirstName.Provider>
        </>
    )
}

export default App2;
export {FirstName,Age}