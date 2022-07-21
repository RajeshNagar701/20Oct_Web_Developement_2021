import React from 'react'
import List from './List'


function Movie({heading}) {
  return (
      <div className='container'>
        
        <div className="row text-success">
            <h1>{heading="Movie List"}</h1> 
            <List img="https://via.placeholder.com/600/92c952" title="KGF" desc="Some Jhoun example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/771796" title="Pushpa" desc="Some Pual example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/24f355" title="RRR" desc="Some Mackwan example text some example text. Some example text some example text." />
        </div>

        <div className="row text-danger">
            <h1>{heading="Heros List"}</h1> 
            <List img="https://via.placeholder.com/600/92c952" title="Yash" desc="Some Jhoun example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/771796" title="Allu Arjun" desc="Some Pual example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/24f355" title="NTR jR" desc="Some Mackwan example text some example text. Some example text some example text." />
        </div>

        <div className="row ">
            <h1>{heading="Heroin List"}</h1> 
            <List img="https://via.placeholder.com/600/92c952" title="Rani" desc="Some Jhoun example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/771796" title="Rashmika" desc="Some Pual example text some example text. Some example text some example text." />
            <List img="https://via.placeholder.com/600/24f355" title="Aalia" desc="Some Mackwan example text some example text. Some example text some example text." />
        </div>

       </div> 
  )
}

export default Movie