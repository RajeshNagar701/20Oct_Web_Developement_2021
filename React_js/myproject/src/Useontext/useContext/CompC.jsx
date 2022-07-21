import React,{ useContext } from 'react'
import { UserContext } from './Parent';

function CompC() {

  //const data=useContext(UserContext);  
  const {name,lname}=useContext(UserContext); 
  return (
    <div>
        <h1>Hi : {name} , {lname}</h1>
    </div>
  )
}

export default CompC