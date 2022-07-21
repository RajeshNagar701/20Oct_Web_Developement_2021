import React from 'react'


function Object_data({title,desc}) {
  return (
        <div className='col-md-4 mb-5'>
            <div className="card">  
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
  )
}

export default Object_data