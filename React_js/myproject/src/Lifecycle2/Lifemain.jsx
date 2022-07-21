import React, { Component } from 'react'
import Img from './Img'

export class Lifemain extends Component {

constructor()
{
    super();
    this.state={
        name:"Raj",
        age:31,
        number:"1",
        display:true
    }
}



  render() {
    return (
      <div className='container'>

          <h1>Hi my name is {this.state.name} and my age is {this.state.age}</h1>
          <button onClick={()=> this.setState({name:"Donika",age:27}) }>Change </button>      
          <hr/>
          <button onClick={()=> this.setState({number:+this.state.number+1}) }>+</button>
          <h1>{this.state.number}</h1>
          <button onClick={()=> this.setState({number:this.state.number-1})}>-</button>
          <hr/>
          <button onClick={()=> this.setState({display:false})}>Hide</button>
          <button onClick={()=> this.setState({display:true})}>Show</button>
          <button onClick={()=> this.setState({display:!this.state.display})}>Hide/Show</button>

          { this.state.display ? <Img/> : null}
      
      </div>
    )
  }
}

export default Lifemain