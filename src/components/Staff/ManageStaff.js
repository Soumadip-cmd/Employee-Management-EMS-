import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function ManageStaff() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to format ISO date to MM/DD/YYYY format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const navigate = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:3001/staffList")
      .then((result) => {
        setUsers(result.data);
        setLoading(false);
      })
      .catch((err) => setError(err.message)); // Handle errors
  }, []);

  const handelDelete = (id) => {
    // Use a custom confirmation dialog
    const confirmed = window.confirm("Are you sure you want to delete?");

    // If confirmed, proceed with deletion
    if (confirmed) {
      axios
        .delete("http://localhost:3001/deleteStaff/" + id)
        .then((res) => {
          console.log(res);
          alert("Record Deleted successfully");
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
    height: "auto",
  };

  return (
    <div className="" style={{ minHeight: "100%" }}>
      <nav
        className="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
      >
        <div className="container">
          <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
            Staff
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
                  to="/addStaff"
                >
                  Add Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color:'white' }} to='/managestaff'>
                  Staff
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container className="mt-10">
        
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
              Show
              <select className="p-2 m-1 px-3">
                <option value={1} id="num1">
                  1
                </option>
                <option value={2} id="num2">
                  2
                </option>
                <option value={3} id="num3">
                  3
                </option>
                <option value={4} id="num4">
                  4
                </option>
                <option value={5} id="num5">
                  5
                </option>
                <option value={6} id="num6">
                  6
                </option>
                <option value={7} id="num7">
                  7
                </option>
                <option value={8} id="num8">
                  8
                </option>
                <option value={9} id="num9">
                  9
                </option>
                <option value={10} id="num10">
                  10
                </option>
              </select>
              entries
              <form class="d-flex float-end">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search.."
                  aria-label="Search"
                />
                <button class="btn btn-outline-danger" type="submit">
                  Search
                </button>
              </form>
              <div className="container m-2 table-responsive">
                <div className="row">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="col-1  p-1 px-2 tablestyle text-center">
                          #
                        </th>

                        <th className="col  p-1 px-2 tablestyle">Full Name</th>
                        <th className="col  p-1 px-2 tablestyle">Email</th>
                        <th className="col  p-1 px-2 tablestyle">Sex</th>

                        <th
                          className="col  p-1 px-2 tablestyle"
                          style={{ width: "25px" }}
                        >
                          Address
                        </th>
                        <th className="col  p-1 px-2 tablestyle">Zip</th>
                        <th className="col  p-1 px-2 tablestyle">City</th>
                        <th className="col  p-1 px-2 tablestyle">State</th>
                        <th className="col  p-1 px-2 tablestyle">District</th>
                        <th className="col  p-1 px-2 tablestyle">Phone</th>
                        <th className="col  p-1 px-2 tablestyle">Birthday</th>
                        <th className="col  p-1 px-2 tablestyle">Document</th>
                        <th className="col  p-1 px-2 tablestyle">Department</th>
                        <th className="col  p-1 px-2 tablestyle">
                          Working Type
                        </th>
                        <th className="col  p-1 px-2 tablestyle">Start Date</th>
                        <th className="col  p-1 px-2 tablestyle">
                          Emergency Contact
                        </th>
                        <th className="col  p-1 px-2 tablestyle">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user._id}>
                          <td className="col  p-1 px-2 tablestyle">
                            {index + 1}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_name}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_email}
                          </td>

                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_sex}
                          </td>

                          <td
                            className="col  p-1 px-2 tablestyle"
                            style={{ width: "20px" }}
                          >
                            {user.user_address}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_zip}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_city}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_state}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_district}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_phone}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {formatDate(user.user_birthday)}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            <img src={user.user_docx} alt="UserPhoto" />
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_department}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_workingtype}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {formatDate(user.user_doj)}
                          </td>
                          <td className="col  p-1 px-2 tablestyle">
                            {user.user_emergencyphneno}
                          </td>

                          <td className="col  p-1 px-2 tablestyle">
                            {/* Update button */}

                            {/* <Button onClick={() => navigate(`/editStaff/${user._id}`)} variant='success'>Update</Button>{' '} */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square "
                              viewBox="0 0 16 16"
                              onClick={() =>
                                navigate.push(`/editStaff/${user._id}`)
                              }
                            >
                              <path
                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805
                                             2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 

                                             .196-.12l6.813-6.814z"
                                style={{ cursor: "pointer" }}
                              />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                              />
                            </svg>

                            {/* Delete Button */}
                            {/* <Button variant='primary' onClick={() => handelDelete(user._id)}>Delete</Button> */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash3"
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
                            {/* View details button  */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-eye "
                              viewBox="0 0 16 16"
                            >
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                              <path
                                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                                onClick={() =>
                                  navigate.push(`/manageStaff/${user._id}`)
                                }
                              />
                            </svg>
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
                <p className="float-start my-2">Showing 1 to2 of 2 entries</p>
                <div
                  class="btn-group float-end my-2"
                  role="group"
                  aria-label="Basic outlined example"
                  // style={}
                >
                  <button type="button" class="btn btn-outline-primary">
                    &#11164;
                  </button>
                  <button type="button" class="btn btn-outline-primary active">
                    1
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    &#11166;
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
