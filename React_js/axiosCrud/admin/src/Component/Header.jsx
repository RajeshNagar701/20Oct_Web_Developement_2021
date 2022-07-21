import React,{useContext} from 'react'
import {useNavigate ,Link, Navigate, NavLink} from 'react-router-dom'
import swal from 'sweetalert';
import { Logincontext } from '../App';


function Header() {

  const navigate=useNavigate();
  function logout()
  {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_name')

      swal({
        title: "Success",
        text: "Logout Success",
        icon: "success",
        button: "Ok!",
      });
      navigate('/');
  }


  return (
    <div>
  <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content />
    <meta name="author" content />
     
    <div className="navbar navbar-inverse set-radius-zero">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.png" />
          </a>
        </div>
        <div className="right-div">
          <button onClick={logout} className="btn btn-danger pull-right">LOG ME OUT</button>
        </div>
      </div>
    </div>
    {/* LOGO HEADER END*/}
    <section className="menu-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="navbar-collapse collapse ">
              <ul id="menu-top" className="nav navbar-nav navbar-right">
                <li><NavLink to="/dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                <li><NavLink to="/add_product">Add User</NavLink></li>
                <li><NavLink to="/view_product">Manage User</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MENU SECTION END*/}
  </div>
  </div>
  )

}

export default Header