import React from 'react'
import Object_data from './Object_data'
import { movieData } from './Object'

function Main_object() {
  return (
    <div className='container'>
        <div className='row'>
            {
                movieData.map((item)=>{
                    return <Object_data key={item.id}{...item}/> 
                })
            }    
        </div>
    </div>   
  )
}

export default Main_object