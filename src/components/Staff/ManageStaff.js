import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./ManageStaff.css";
import { Container } from "react-bootstrap";
import EditStaff from "./EditStaff";
import StaffList from "./StaffList";
import Footer from "../Footer";

export default function ManageStaff() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  //Function to handeling Entries selection logic 
  const handleEntries = () => {
    const value = document.getElementById("selection_entries").value;
    if (value === "all") {
      // If value is "all", set entries to the length of users array
      setEntries(users.map((user, index) => index + 1));
    } else {
      const selectedNumber = parseInt(value);
      console.log(selectedNumber); 
      setEntries([...Array(selectedNumber).keys()].map((index) => index + 1));
    }
  };
  
  
  
  
  // Function to format ISO date to MM/DD/YYYY format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/editStaff/${id}`)
      .then((response) => {
        setUser(response.data); // Assuming response.data contains the user details
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        {user.user_docx && (
          <img
            src={user.user_docx}
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
            alt="UserImage"
          />
        )}
        {!user.user_docx && (
          <div>
            User Image Not Available in the server.Please try again after
            sometime.
          </div>
        )}
        <div
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Details of Staffs
        </div>
      </nav>

      {/* Navabr and Fetching Condition */}

      <Container className="mt-10" >
        {error && <div className="alert alert-danger">{error}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : users.length === 0 ? (
          <p>No data available. Add data to see the staff list.</p>
        ) : (
          <>
            <div className="container my-2 pt-3">
              <h2>Staff Management</h2>
            </div>
            <div className="container mt-3" style={boxstyle}>
              <h4>View Staff</h4>
              <br />

              {/* Entries  Number Condition */}
              Show
              <select className="p-2 m-1 px-3" onClick={handleEntries} id="selection_entries">
                <option value={10} id="num10">
                  10
                </option>
                <option value={20} id="num20">
                  20
                </option>
                <option value={50} id="num50">
                  50
                </option>
                <option value={100} id="num100">
                  100
                </option>
                <option value="all" id="all">
                  All
                </option>
              </select>
               entries


              <form className="d-flex float-end">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search.."
                  aria-label="Search"
                />
                <button className="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
              <div className="container m-2 table-responsive">
                <div className="row d-flex flex-column">
                  <table className="table table-striped">
                    <thead>
                      <tr className="tablestyle2">
                        <th
                          className="col   text-center tablestyle1"

                        >
                          #
                        </th>

                        <th className="col  p-1 px-2 tablestyle1">Full Name</th>
                        <th className="col  p-1 px-2 tablestyle1">Email</th>
                        <th className="col  p-1 px-2 tablestyle1">Sex</th>

                        <th
                          className="col  p-1 px-2 tablestyle1"
                          style={{ width: "25px" }}
                        >
                          Address
                        </th>
                        <th className="col  p-1 px-2 tablestyle1">Zip</th>
                        <th className="col  p-1 px-2 tablestyle1">City</th>
                        <th className="col  p-1 px-2 tablestyle1">State</th>
                        <th className="col  p-1 px-2 tablestyle1">District</th>
                        <th className="col  p-1 px-2 tablestyle1">Phone</th>
                        <th className="col  p-1 px-2 tablestyle1">Birthday</th>
                        <th className="col  p-1 px-2 tablestyle1">Document</th>
                        <th className="col  p-1 px-2 tablestyle1">
                          Department
                        </th>
                        <th className="col  p-1 px-2 tablestyle1">
                          Working Type
                        </th>
                        <th className="col  p-1 px-2 tablestyle1">
                          Start Date
                        </th>
                        <th className="col  p-1 px-2 tablestyle1">
                          Emergency Contact
                        </th>
                        <th
                          className="col  p-1 px-2 tablestyle1 d-flex justify-content-center"
                          style={{ height: "59px", width: "120px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user._id} className="tablestyle1">
                          <td className="col mx-3 px-2 tablestyle1 ">
                            {index + 1}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_name}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_email}
                          </td>

                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_sex}
                          </td>

                          <td
                            className="col  p-1 px-2 tablestyle1"
                            style={{ width: "20px" }}
                          >
                            {user.user_address}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_zip}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_city}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_state}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_district}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_phone}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {formatDate(user.user_birthday)}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            <img src={user.user_docx} alt="UserPhoto" />
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_department}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_workingtype}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {formatDate(user.user_doj)}
                          </td>
                          <td className="col  p-1 px-2 tablestyle1">
                            {user.user_emergencyphneno}
                          </td>

                          <td
                            className="col  p-1 px-2 tablestyle1 text-center"
                            width={"50px"}
                          >
                            {/* Update button */}

                            
                            <EditStaff />

                            {/* Delete Button */}
                            
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="brown"
                              className="bi bi-trash3 mx-1"
                              viewBox="0 0 16 16"
                              onClick={() => handelDelete(user._id)}
                            >
                              <path
                                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 
                                1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1
                                1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5
                                 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 
                                .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                                style={{ cursor: "pointer" }}
                              />
                            </svg>
                            
                            <StaffList />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="container m-2"
                style={{ background: "white", height: "25px" }}
              >
                <p className="float-start my-2">Showing {entries.length} of {entries.length} entries</p>
                <div
                  className="btn-group float-end my-2"
                  role="group"
                  aria-label="Basic outlined example"
                // style={}
                >
                  <button type="button" className="btn btn-outline-primary">
                    &#11164;
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary active"
                  >
                    1
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    &#11166;
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <Footer footerstyle="fixed-bottom" />

      </Container>
    </div>
  );
}