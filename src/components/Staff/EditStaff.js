import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function EditStaff() {
  const { id } = useParams();
  const navigate = useHistory();

  // Define formData state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_sex: "",
    user_age: "",
    user_jobtitle: "",
    user_address: "",
    user_zip: "",
    user_city: "",
    user_state: "",
    user_district: "",
    user_phone: "",
    user_birthday: "",
    user_docx: "",
    user_department: "",
    user_workingtype: "",
    user_doj: "",
    user_emergencyphneno: "",
    user_emergency_contact_name: "",
  });

  // Define user state
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/editStaff/${id}`)
      .then((response) => {
        const userData = response.data;
        console.log(userData);
        // Format dates
        const formattedBirthday = userData.user_birthday.split("T")[0];
        const formattedDoj = userData.user_doj.split("T")[0];

        setFormData({
          user_name: userData.user_name,
          user_email: userData.user_email,
          user_age: userData.user_age,
          user_sex: userData.user_sex,
          user_jobtitle: userData.user_jobtitle,
          user_address: userData.user_address,
          user_zip: userData.user_zip,
          user_city: userData.user_city,
          user_state: userData.user_state,
          user_district: userData.user_district,
          user_phone: userData.user_phone,
          user_birthday: formattedBirthday,
          user_docx: "", // Set to empty string htmlFor file input
          user_department: userData.user_department,
          user_workingtype: userData.user_workingtype,
          user_doj: formattedDoj,
          user_emergencyphneno: userData.user_emergencyphneno,
          user_emergency_contact_name: userData.user_emergency_contact_name,
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // For file inputs
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Update formData with the selected file
      }));
    } else {
      // For other input types
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const refcls = useRef(null);
  //update the staff forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to update staff member
    await axios
      .put(`http://localhost:3001/updateStaffs/${id}`, formData)
      .then((res) => {
        console.log(res);
        // Navigate to the staff list page after successful addition
        alert("Data Successfully Updated");
        navigate.push("/staffList");
      })
      .catch((err) => console.log(err));

    // Handle form submission
    let currentUserFormData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_age: formData.user_age,
      user_sex: formData.user_sex,
      user_jobtitle: formData.user_jobtitle,
      user_address: formData.user_address,
      user_zip: formData.user_zip,
      user_city: formData.user_city,
      user_state: formData.user_state,
      user_district: formData.user_district,
      user_phone: formData.user_phone,
      user_birthday: formData.user_birthday,
      user_docx: formData.user_docx,
      user_department: formData.user_department,
      user_workingtype: formData.user_workingtype,
      user_doj: formData.user_doj,
      user_emergencyphneno: formData.user_emergencyphneno,
      user_emergency_contact_name: formData.user_emergency_contact_name,
      index: formData.index,
    };
    let oldUserdata = [...user, currentUserFormData];
    setUser(oldUserdata);
    refcls.current.click();
    console.log(formData);
  };

  

  
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="blue"
        className="bi bi-pencil-square mx-2"
        viewBox="0 0 16 16"
        data-bs-target="#exampleModal"
        data-bs-toggle="modal"
        
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

      <div
        className="modal fade text-start"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Employee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="sex"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Gender
                </label>
                <select
                  id="sex"
                  name="user_sex"
                  value={formData.user_sex}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option disabled selected value="">
                    ---Choose your Sex ----
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="birthday"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="user_birthday"
                  value={formData.user_birthday}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="user_docx"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Upload UserPhoto
                </label>
                <input
                  type="file"
                  accept="image/png"
                  id="user_docx"
                  name="user_docx"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="department"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  name="user_department"
                  value={formData.user_department}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="workingtype"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Working Type
                </label>

                <select
                  id="workingtype"
                  name="user_workingtype"
                  value={formData.user_workingtype}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option disabled value="">
                    ---Select Your Working Type----
                  </option>
                  <option value="FullTime">Full Time</option>
                  <option value="PartTime">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="city"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="user_city"
                  value={formData.user_city}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="zip"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  PinCode
                </label>
                <input
                  type="text"
                  id="zip"
                  name="user_zip"
                  value={formData.user_zip}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="district"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  District
                </label>
                <input
                  type="text"
                  id="district"
                  name="user_district"
                  value={formData.user_district}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="state"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="user_state"
                  value={formData.user_state}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="phone"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="doj"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="doj"
                  name="user_doj"
                  value={formData.user_doj}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="emergencyphoneno"
                  className="form-label"
                  style={{ fontWeight: "500" }}
                >
                  Optional Phone Number
                </label>
                <input
                  type="number"
                  id="emergencyphoneno"
                  name="user_emergencyphneno"
                  value={formData.user_emergencyphneno}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refcls}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Update Department
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
