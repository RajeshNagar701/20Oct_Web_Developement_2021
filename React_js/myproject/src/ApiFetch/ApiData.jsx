import React, { Component } from 'react'

export class ApiData extends Component {

  constructor()
  {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
      super();
  }
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
  }
   
  render() {
    return (
      <div>ApiData</div>
    )
  }
}

export default ApiData