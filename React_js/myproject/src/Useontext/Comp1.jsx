import React, { useState , useEffect} from 'react'
import Comp2 from './Comp2';

function Comp1() {

const [alldata,setalldata]=useState([]);

useEffect(()=>{
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => response.json())
    .then((data) => setalldata(data.drinks));
    
},[]);


  return (
    <div className='container mt-5'>
        <table className='table'>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Image</th>
        </tr>
        {

        // its called driling props     
        alldata.map((item, index) => {
            const { strDrinkThumb, idDrink, strDrink } = item;
            return(
            <Comp2 index={index} strDrink={strDrink} strDrinkThumb={strDrinkThumb} idDrink={idDrink}/>
            )
        })}
        </table>
    </div>
  )
}

export default Comp1