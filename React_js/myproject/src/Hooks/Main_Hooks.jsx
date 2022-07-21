import React ,{useState} from 'react'


function Main_Hooks() {
    const[name,setname]= useState("Raj Nagar"); // striing

    const[number,SetNumber]=useState("0"); // number
   
    const[emp,SetEmp]=useState(["Akash","Nirav","Mahesh","Love"]); // arr

    const[userobj,Setuser]=useState({
        name:"Akash",
        mobile:"9722041171",
        age:31}); // object
       
     return (
       <div className='container'>
           <h1> {name}</h1>
           <button onClick={()=> setname("Donika Patel")}>Click For SetState</button>
           <br></br>
           <hr/>
           <button onClick={()=> SetNumber(+number+1)}>+</button>
           <h1> {number}</h1>
           <button onClick={()=> SetNumber(number-1)}>-</button>
           <br></br>
           <hr/>
           <h1>{emp.length}</h1>
           {
               emp.length <= 0 ? <h1>0 Data Found</h1> :
               emp.map((item, index) => 
                   {
                       return <h2 key={index}>{item}</h2>
                   })    
           }
           <button onClick={()=> SetEmp([])}>Delete All</button>

           <br></br>
           <hr/>
          <div classname="container">
            <div className="card text-start|center|end">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Hi my name is {userobj.name}</h4>
                        <p className="card-text">My Mobile no : {userobj.mobile}</p>
                        <p className="card-text">my age is : {userobj.age}</p>
                        <p className="card-text">
                            <button onClick={()=> Setuser({...userobj,name:"Nagar",mobile:"5416544",age:25 })}> Change Object All</button>
                        </p>
                    </div>
            </div>
         </div>

            <br></br>
           <hr/>
          

       </div>
     )
   }

export default Main_Hooks