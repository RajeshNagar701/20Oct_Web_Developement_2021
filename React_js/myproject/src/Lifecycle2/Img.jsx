import React, { Component } from 'react'

export class Img extends Component {

componentDidMount()
{
    console.log('Component muntend');
}
componentDidUpdate()
{
    console.log('Component Updated');
}

componentWillUnmount()
{
    console.log('Component End');
}

  render() {
    return (
      <div>
          <img src='https://via.placeholder.com/600/d32776'/>
      </div>
    )
  }
}

export default Img