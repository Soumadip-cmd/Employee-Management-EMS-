import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ManageDepartment.css";
import EditDepartment from "./EditDepartment";
import ViewDepartment from "./ViewDepartment";

export default function ManageDepartment() {
  const tableStyle = {
    background: "linear-gradient(135deg, #2980b9, #6dd5fa)", // Gradient background
    color: "#fff", // Text color
  };
  
  const navigate = useHistory();

  const loaderStyle = {
    width: "60px",
    aspectRatio: "2",
    background:
      "no-repeat radial-gradient(circle closest-side, #000 90%, #0000)",
    backgroundSize: "calc(100%/3) 50%",
    animation: "l3 1s infinite linear",
  };

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Maintain authentication state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/manageDepartment"
        );
        setUser(response.data);
        setIsAuthenticated(true); // Set isAuthenticated to true when data is fetched successfully
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete?");

    if (confirmed) {
      axios
        .delete("http://localhost:3001/deletedept/" + id)
        .then((res) => {
          console.log(res);
          alert("Record Deleted successfully");
          //  window.location.reload();
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
  // const {editnote}=props
  return (
    <div className="container-fluid" style={{ minHeight: "100%" }}>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <div style={loaderStyle}>Loading...</div>
      ) : user.length === 0 ? (
        <p>No data available. Add data to see the Department list.</p>
      ) : (
        <div>
          <div className="container my-2 pt-3">
            <h2>Manage Departments</h2>
          </div>
          <div className="container mt-3" style={boxstyle}>
            <h4>View Departments</h4>
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
            <div className="container m-2">
              <div className="row">
                <table className="table table-striped">
                  <thead>
                    <tr className="tablestyle2">
                      <th className="col-1 bg- p-1 px-2 text-center ">#</th>
                      <th className="col bg- p-1 px-2 ">Department Name</th>
                      <th className="col bg- p-1 px-2 ">Department Id</th>
                      <th className="col bg- p-1 px-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((userData, index) => (
                      <tr key={userData._id} id="text" className="tablestyle1">
                        <td
                          className="col-1 bg- p-1 px-2  text-center my-5 "
                          style={{ height: "47px" }}
                        >
                          {index + 1}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 "
                          style={{ height: "47px" }}
                        >
                          {userData.deptName}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 "
                          style={{ height: "47px" }}
                        >
                          {userData.deptID}
                        </td>
                        <td
                          className="col bg- p-1 px-2  my-5 text-center"
                          style={{ height: "47px" }}
                        >
                          {/* Update button */}
                          <EditDepartment/>

                          {/* Delete Button */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="red"
                            className="bi bi-trash3mx-2"
                            viewBox="0 0 16 16"
                            onClick={() => handleDelete(userData._id)}
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
                          {/* View details button */}
                          <ViewDepartment/>
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
        </div>
      )}
    </div>
  );
}
