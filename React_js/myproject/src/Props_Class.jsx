import React, { Component } from 'react'

export class Props_Class extends Component {

  constructor(props)
  {
      super(props);
      this.props=props;
      //console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Hi am {this.props.name} and my age is {this.props.age} </h1>
      </div>
    )
  }
}

export default Props_Class