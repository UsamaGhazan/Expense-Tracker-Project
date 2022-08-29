import React from 'react'
import { useContext } from 'react'
import { FirstName } from './App2'
import {Age} from "./App2"
export const CompA = () => {
    const fname=useContext(FirstName);
    const myAge=useContext(Age);

    return (
    <>
    <h1>My name is {fname}</h1>
    <h2>My age is {myAge}</h2>
    </>)

}
