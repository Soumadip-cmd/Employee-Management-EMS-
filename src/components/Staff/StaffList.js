import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function StaffList() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
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
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-eye mx-2"
        viewBox="0 0 16 16"
        data-bs-target="#seeDetails"
        data-bs-toggle="modal"
        style={{ cursor: "pointer" }}
      >
        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
      </svg>
      <div
        class="modal fade text-start"
        id="seeDetails"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                View Department
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label
                  for="departmentName"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Name:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_name}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Email:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_email}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Gender:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_sex}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Address:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_address}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  ZIP:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_zip}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  City:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_city}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  State:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_state}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  District:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_district}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Phone-Number.:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_phone}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Birth:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {formatDate(user.user_birthday)}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Department:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_department}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Working Type:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_workingtype}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Date of Joining:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {formatDate(user.user_doj)}
                  </i>
                </label>
              </div>
              <div class="mb-3">
                <label
                  for="departmentId"
                  class="form-label"
                  style={{ fontWeight: "600" }}
                >
                  Optional Mobile-Number:{" "}
                  <i style={{ fontWeight: "500", color: "brown" }}>
                  {user.user_emergencyphneno}
                  </i>
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-success"
                onClick={() => window.print()}
                
              >
                Print Your Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
