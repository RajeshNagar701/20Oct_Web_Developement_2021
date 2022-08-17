import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';


function View_product() {
  const [allProduct, SetallProduct] = useState([]);

  useEffect(() => {
    viewProducts()
  }, []);

  async function viewProducts() {
    const res = await axios.get(`http://localhost:8000/api/student`);
    if (res.data.status === 200) {
      SetallProduct(res.data.students);
      //console.log(res.data.students);
    }
  }

  async function handelDelete(id) {
    let ans = window.confirm("Are you sure want to delete !");
    if (ans) {
      const res = await axios.delete(`http://localhost:8000/api/student/${id}`);
      if (res.data.status === 200) {
        swal({
          title: "Success",
          text: res.data.msg,
          icon: "success",
        });
        viewProducts();
      }
    }
  }

  const initialiation = {
    name: "",
    email: "",
    password: ""
  }
  const [editformvalue, seteditformvalue] = useState(initialiation);
  const [id, setId] = useState({});
  async function handeledit(EditID) {
    const res = await axios.get(`	`);
    if (res.data.status === 200) {
      seteditformvalue(res.data.students);
      setId(EditID);
    }
  }

  function onchangeeditvalue(e) {
    const { name, value } = e.target
    seteditformvalue({ ...editformvalue, [name]: value })
    //console.log(editformvalue);

  }
  
  const [err_msg,setErr_msg]=useState([]);
  async function handelupdate(e) {
      
      e.preventDefault();
      //console.log(`http://localhost:8000/api/updatestudent/${id}`);
      const res= await axios.put(`http://localhost:8000/api/updatestudent/${id}`,editformvalue);
      if(res.data.status === 200)
      {
          //alert(res.data.message);
          swal({
              title: "Success",
              text: res.data.message,
              icon: "success",
              button: "Ok!",
            });
          setErr_msg([]);
          viewProducts();
      } 
      else
      {
          setErr_msg(res.data.message)
      } 
  }

  async function handelstatus(statusid) {
    const  res= await axios.put(`http://localhost:8000/api/updatestatus/${statusid}`);
    if(res.data.status === 200)
    {
        //alert(res.data.msg);
        swal({
            title: "Success",
            text: res.data.msg,
            icon: "success",
            button: "Ok!",
          });
          viewProducts();
    }
}

  return (
    <div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h4 className="header-line">View Product By Firebase</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  Product List
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>name</th>
                          <th>email</th>
                          <th>status</th>
                          <th>Delete</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          allProduct.map((item, index) => {

                            return (
                              <tr key={index} className="odd gradeX">
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td><button className='btn btn-primary' onClick={() => handelstatus(item.id)}>{item.status}</button></td>
                                <td className="center"><button onClick={() => handelDelete(item.id)} className="btn btn-danger">Delete</button></td>
                                <td><button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => handeledit(item.id)}>Edit</button></td>
                              </tr>
                            )

                          })
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" />
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <h2>Registration Form</h2>
              <form method="post" action="/">
                <div className="mb-3 mt-3">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" value={editformvalue.name} onChange={onchangeeditvalue} id="email" placeholder="Enter Name" name="name" />
                  <span className='text-danger'>{err_msg.name}</span>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input type="email" className="form-control" value={editformvalue.email} onChange={onchangeeditvalue} id="email" placeholder="Enter email" name="email" />
                  <span className='text-danger'>{err_msg.email}</span>
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" value={editformvalue.password} onChange={onchangeeditvalue} id="pwd" placeholder="Enter password" name="password" />
                  <span className='text-danger'>{err_msg.password}</span>
                </div>
                <button type="submit" onClick={handelupdate} data-bs-dismiss="modal" className="btn btn-primary mt-3">Save</button>
              </form >
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default View_product