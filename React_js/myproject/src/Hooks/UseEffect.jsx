import React,{useEffect, useState} from 'react'
import ImgCom from './ImgCom'

function UseEffect() {
   
    const[isshowing,setImg]=useState(false);
    const[number1,SetNumber1]=useState("0");
    const[number2,SetNumber2]=useState("0");
    useEffect(()=>{
        console.log('Component Mounted UseEffect');
        alert('hi hello');
    },[number1])
    

    
  return (
    <div className='container'>
      
        <button onClick={()=> setImg(!isshowing)}>Hide</button>
        { 
        isshowing ? <ImgCom/> : null
        }
        <br/>
        <hr/>
        <h1>{number1}</h1>
        <button onClick={()=> SetNumber1(+number1+1)}>Plus</button>
        <br/>
        <hr/>
        <h1>{number2}</h1>
        <button onClick={()=> SetNumber2(+number2+1)}>Plus</button>

    </div>
  )
}

export default UseEffect