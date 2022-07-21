import React from 'react'
import './mystyle.css'

function Jsxcomp() {
    const name="raj";
    const myelement = <h1>I Love JSX!</h1>
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>; 
    const myelement2 = (
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
      </ul>
    );

    const myelement3 = (
      <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
      </div>
    );
    
    
    const mystyle={color:"red"}
    return (
      
    <div>
      <h1>{name}</h1>
      <h1>{10+10}</h1>
      <h1>{myelement}</h1>
      <h1>{myelement1}</h1>
      <h1>{myelement2}</h1>
      <span>{myelement3}</span>

      <h1 style={{color:"red"}}>Inline CSS</h1>
      <h1 style={mystyle}>Inline CSS</h1>
      <h1 className='mystyle'>External CSS</h1>
    </div>
  )
}

export default Jsxcomp