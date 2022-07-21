import React, { Component } from 'react'

export class StateComp extends Component {

    constructor()
    {
        super();
        this.state={
            name:"Raj",
            age:"31"
        }
    }

    changestate= () => {
        this.setState({name:"Nagar",age:"30"});
    }

  render() {
    return (
      <div>
          <h1>
            Hi my name is : {this.state.name} and my age is {this.state.age}
          </h1>
          <button onClick={() =>this.changestate()}>Click me</button>
      </div>
    )
  }
}

export default StateComp