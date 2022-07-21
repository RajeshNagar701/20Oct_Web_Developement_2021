import React,{useReducer} from 'react'
import Img_Redu from './Img_Redu'

function Main_Reducer() {

  
    function functreducer(state,action){
    
        if(action.type==="setchange")
        {
            return { ...state,name:"Akash" }
        }
        if(action.type==="plus")
        {
            return { ...state,number:+state.number+1 }
        }
        if(action.type==="minus")
        {
            return { ...state,number:+state.number-1 }
        }
        if(action.type==="hide")
        {
            return { ...state,isImage:false }
        }
        if(action.type==="show")
        {
            return { ...state,isImage:true }
        }
        if(action.type==="hideshow")
        {
            return { ...state,isImage:!state.isImage }
        }
    } 
    const initialState={
        number:"1",
        name:"Raj",
        isImage:true
        } 
        
  const [state,dispatch]=useReducer(functreducer,initialState)

  return (
    
    <div className='container mt-5'>
        <h1>Hi my name is : {state.name}</h1>
        <button onClick={()=>dispatch({type:"setchange"})}>Change Name</button>

        <hr/>
        <button onClick={()=>dispatch({type:"plus"})}>+</button>
        <h1>{state.number}</h1>
        <button onClick={()=>dispatch({type:"minus"})}>-</button>
        <hr />
        <button onClick={()=>dispatch({type:"hide"})}>Hide</button>
        <button onClick={()=>dispatch({type:"show"})}>Show</button>
        <button onClick={()=>dispatch({type:"hideshow"})}>Hide/show</button>
        {
            state.isImage?<Img_Redu/>:null
        }

    </div>
  )
}
export default Main_Reducer