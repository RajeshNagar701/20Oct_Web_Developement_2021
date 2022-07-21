import React, { useState, useEffect} from 'react'
import axios from 'axios';
import swal from 'sweetalert';

function Add_Product() {
    const initialiation = {
      name: "",
      email: "",
      password: "",
  }
  const [formvalue, setformvalue] = useState(initialiation);

  function changehandel(e) {
      const { name, value } = e.target
      setformvalue({ ...formvalue, [name]: value });
      
  }
  const [err_msg,setErr_msg]=useState([]);
  const submitHandel = async (e) => {
      e.preventDefault();
      const res=await axios.post(`http://localhost:8000/api/insertstudent`,formvalue);
      if(res.data.status === 200)
      {
          //alert(res.data.msg);
          swal({
              title: "Success",
              text: res.data.message,
              icon: "success",
              button: "Ok!",
            });
          setformvalue({...formvalue,name:"",email:"",password:""})
          setErr_msg([]);
          //console.log(res.data.msg);
      }
      else
      {
          setErr_msg(res.data.message)
          //console.log([err_msg]);
      }
  }
     
  

  return (
   <div>
  <div className="content-wrapper">
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Add User</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                Add User
            </div>
            <div className="panel-body">
            <form method='post'>  
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" className="form-control" required name="name" value={formvalue.name} onChange={changehandel}/>
                <span className='text-danger'>{err_msg.name}</span>
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" required name="email" value={formvalue.email} onChange={changehandel}/>
                <span className='text-danger'>{err_msg.email}</span>
              </div>
             
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" required name="password" value={formvalue.password} onChange={changehandel}/>
                <span className='text-danger'>{err_msg.password}</span>
              </div>

              <div className="form-group">
                <button className='btn btn-primary btn-lg' onClick={submitHandel}>Submit</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Add_Product