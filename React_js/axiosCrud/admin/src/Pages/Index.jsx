import React,{useState,useContext} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom'
import { Logincontext } from '../App';
import { useEffect } from 'react';
function Index() {
  const navigate=useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('auth_token'))
    {
      navigate('/dashboard');
    }
  },[])

  const [logform,setLogform]=useState({
    email:"",
    password:""
  })

  function changehandel(e)
  {
      const {name,value}=e.target;
      setLogform({...logform,[name]:value});
      console.log(logform);
  }

  const {SetisLogin}=useContext(Logincontext);
 

    const [err_msg,setErr_msg]=useState([]);
    const submithandel = async (e) => {
        e.preventDefault();
        const res=await axios.post(`http://localhost:8000/api/login`,logform);
        if(res.data.status === 200)
        {
          // create auth
            localStorage.setItem('auth_token',res.data.token)
            localStorage.setItem('auth_name',res.data.name)

            //alert(res.data.msg);
            swal({
                title: "Success",
                text: res.data.msg,
                icon: "success",
                button: "Ok!",
              });
            
            navigate('/dashboard');
            setLogform({...logform,email:"",password:""})
            setErr_msg([]);
            //console.log(res.data.msg);
        }
        else if(res.data.status === 201)
        {
          swal({
            title: "Failed",
            text: res.data.msg,
            icon: "error",
            button: "Failed!",
          });
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
          <h1 className="header-line">Admin Login</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Admin Login
            </div>
            <div className="panel-body">
              <div className="form-group">
                <label>Enter Name</label>
                <input type="email" name="email" value={logform.email} onChange={changehandel} className="form-control" />
                <span className='text-danger'>{err_msg.email}</span>
              </div>
             
              <hr />
              <div className="form-group">
                <label>Enter Password</label>
                <input type="password" name="password" value={logform.password} onChange={changehandel} className="form-control" />
                <span className='text-danger'>{err_msg.password}</span>
              </div>
             
              <hr />
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" defaultValue />Remember Me
                  </label>
                </div>
                <button className='btn btn-primary' onClick={submithandel}>Login </button>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index