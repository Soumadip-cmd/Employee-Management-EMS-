import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ApplyLeave() {
  let boxstyle={
    background: 'white',
    padding: '21px',
    borderTop: '5px solid #004dffe8',
    borderRadius: '5px',
  }
  // function call()
  // {
  //   let reason=document.getElementById('reason').value;
  //   localStorage.setItem("coz",reason)
  // }
  return (
    <>
    <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container">
          <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
            Leave
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to="/">
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="currentColor"
                      className="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                  </span>
                  Home
                  <span className="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color:'white' }}
                  to="/leavehistory"
                >
                  My Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to='/Applyleave'>
                  Leave
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container my-2 pt-3">
          <h2>Leave Management</h2>
        </div>
        <div className="container-fluid pt-3" style={{padding:'100px'}}>
          <div className="row d-flex justify-content-evenly" style={boxstyle}>
            <h5 style={{fontSize:'20px',}} className="px-2">Apply Leave</h5>
            <hr/>
            <div className="col-sm-12 col-md-6 col-lg-5">
              
                <div className="mb-3">
                  <b>Reason</b>
                  <input
                    type="text"
                    className="form-control"
                    id="reason"
                    placeholder="Reason" style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Leave From</b>
                  <input
                    type="date"
                    className="form-control"
                    id="startdate" style={{border: '1px solid'}}
                  />
                </div>
              
            </div>
            <div className="col-sm-12 col-md-4 col-lg-5">
              
                <div className="mb-3">
                  <b>Leave To</b>
                  <input
                    type="date"
                    className="form-control"
                    id="enddate"
                     style={{border: '1px solid'}}
                  />
                </div>
                <div className="mb-3">
                  <b>Description</b>
                  <textarea  className="form-control" placeholder="Description" id="description" style={{border: '1px solid'}}/>
                  
                </div>
                <button type="submit" className="btn btn-primary float-end" id="applyleave" >
                  Submit
                </button>
              
            </div>
          </div>
        </div>
        <Footer footerstyle="fixed-bottom"/>
      </>
    
  );
}
