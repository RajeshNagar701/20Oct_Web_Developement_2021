import React,{ createContext,useState,  } from 'react'
import CompA from './CompA'

export const UserContext=createContext();
function Parent() {

  const [name,setname]=useState("Rajesh")  
  const [lname,setlname]=useState("Nagar")
  return (
    <div className='container'>
       <UserContext.Provider value={{name,lname}}> 
            <CompA/>
       </UserContext.Provider> 
    </div>
  )
}

export default Parent