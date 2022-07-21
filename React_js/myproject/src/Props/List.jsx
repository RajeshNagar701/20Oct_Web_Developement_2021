import React from 'react'
//import logo512 from './logo512.png'

function List({title,desc,img}){
  return (
   <div className='col-md-4'>
        <div className="card">
        {/*<img src={logo512} classname="card-img-top"  alt="Card image" />*/}
        <img src={img} classname="card-img-top"  alt="Card image" />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{desc}</p>
                <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    </div>
  )
}
export default List