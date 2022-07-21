import React, { Component } from 'react'
import Cycle from './Cycle'

export class MainLife extends Component {
  constructor()
  {
      super();
      this.state={
          status:true
      }
  } 
  
  render() {
    return (
      <div className='container'>
        <br></br>
        <hr></hr>  
        <button onClick={()=> this.setState({status:false})}>End State</button>
        <br></br>
        <hr></hr>  
         {
         this.state.status ? <Cycle/> : null   
         }
      </div>
    )
  }
}

export default MainLife