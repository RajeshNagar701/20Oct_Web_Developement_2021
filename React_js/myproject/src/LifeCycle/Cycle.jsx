import React, { Component } from 'react'

export class Cycle extends Component {

  constructor()
  {
      super();
      this.state={
          name:"Raj",
          age:"31"
      }
  } 
  
  componentDidMount(){
      console.log("Component created Success");
  }
  componentDidUpdate()
  {
    console.log("Component Updated Success");
  }
  componentWillUnmount(){
    console.log("Component End Success");
  }

  onChange(){
      this.setState({name:"Mahesh",age:"35"})
  }
  
  render() {
    return (
      <div className='container'>
          <h1>
             hello {this.state.name} my age is {this.state.age}
          </h1>
          <hr/>
          <button onClick={()=> this.onChange()}>Update State</button>
        
      </div>
    )
  }
}

export default Cycle