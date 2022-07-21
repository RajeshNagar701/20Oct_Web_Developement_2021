import React from 'react'

function Comp2({index,idDrink,strDrink,strDrinkThumb}) {
   
            return (
                <tr key={index}>
                    <th>{idDrink}</th>
                    <th>{strDrink}</th>
                    <th><img src={strDrinkThumb} alt="" width="50px" /></th>
                </tr>
    )
}

export default Comp2