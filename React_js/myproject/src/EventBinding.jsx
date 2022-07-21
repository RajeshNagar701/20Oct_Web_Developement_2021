import React, { Component } from 'react'

export class EventBinding extends Component {


    constructor(props)
    {
        super(props);
        this.state={
            name:"Raj",
            age:"31"
        }

    }

    simplefunction(){
        console.log(this.state);
        console.log(this.props);
    }
    arrowfunction = ()=>{
        console.log(this.state);
        console.log(this.props);
    }

    bindfunction = ()=>{
        console.log(this.state);
        console.log(this.props);
    }
  
  render() {
    return (
    <div>
        <h1>Event Binding</h1>
        <h1>{this.props.name}</h1>
        <button onClick={this.simplefunction()}>Simple call function</button>
        <button onClick={() => this.arrowfunction()}>Simple call function</button>
        <button onClick={this.bindfunction.bind(this)}>Simple call function</button>
    </div>
    )
  }
}

export default EventBinding