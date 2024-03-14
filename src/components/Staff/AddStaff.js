import React, { useState } from "react";
import axios from "axios";
import Footer from "../Footer";

export default function AddStaff() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_age: "",
    user_sex: "",
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
    index: "",
  });
  //handelChange is a function where user can type the value and we can get the value of all the input fields
  //on chnage and event are adding for this  here to type
  let [user, setUser] = useState([]);

  const handleChange = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to add staff member
    await axios
      .post("http://localhost:3001/addStaff", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          // Navigate to the staff list page after successful addition
          alert("Data Succesfully added");
          //   navigate("/staffList");
        } else {
          alert("Error adding staff member");
        }
      })
      .catch((error) => {
        // Handle error response
        if (error.response.status === 400) {
          alert(error.response.data.error); // Display the error message to the user
          alert(
            "Error adding staffs for dublicate value.Try again with a updated Data"
          );
        } else {
          console.error("Error adding staff:", error);
        }
      });

    // Handle form submission
    let currentUserFormData = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      user_sex: formData.user_sex,
      user_age: formData.user_age,

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
      index: formData.index,
    };
    let oldUserdata = [...user, currentUserFormData];
    setUser(oldUserdata);
    console.log(formData);
    // if(setUser(oldUserdata)){

    // alert("Form Submitted ")
    // }
    // else
    // {
    //     alert("Please Fill the form before submitting")
    // }
    // To empty the input field after adding/getting the data
    setFormData({
      user_name: "",
      user_email: "",

      user_age: "",

      user_jobtitle: "",
      user_sex: "",
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
      index: "",
    });
  };
  let boxstyle = {
    background: "white",
    padding: "21px",
    borderTop: "5px solid #004dffe8",
    borderRadius: "5px",
  };
  return (
    <>
      <nav
        class="navbar navbar-expand-lg"
        style={{backgroundColor: "rgb(0 77 255 / 65%)",color:"white"}}
      >
        <div class="container">
          <a class="navbar-brand" href="/" style={{fontSize:"25px",color:"white",letterSpacing:".05125em"}}>
            Staff
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/" style={{color:"white"}}>
                  <span class="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="14"
                      fill="white"
                      class="bi bi-house"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path>
                    </svg>
                  </span>
                  Home
                  <span class="ms-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/addStaff"
                  style={{color:"white"}}
                >
                  Add Staff
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{color:"white"}}>
                  Staff
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-2 pt-3">
        <h2>Staff Management</h2>
      </div>
      <div className="container-fluid pt-3" style={{ padding: "100px" }}>
        <div className="row d-flex justify-content-evenly" style={boxstyle}>
          <h5 style={{ fontSize: "20px" }} className="px-2">
            Add Staff
          </h5>
          <hr />
          {/* part1 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Full Name</b>
              <input
                type="text"
                className="form-control"
                id="name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Full Name"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Department</b>

              <select
                className="form-control"
                id="department"
                name="user_department"
                value={formData.user_department}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Department----
                </option>
                <option value="FullTime">CSE1</option>
                <option value="PartTime">CSE2</option>
                <option value="Remote">CSE3</option>
                <option value="Hybrid">CSE4</option>
              </select>
            </div>
          </div>
          {/* part2 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Gender</b>

              <select
                className="form-control"
                id="sex"
                name="user_sex"
                value={formData.user_sex}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Gender----
                </option>
                <option value="FullTime">Male</option>
                <option value="PartTime">Female</option>
                <option value="Remote">Others</option>
              </select>
            </div>
            <div className="mb-3">
              <b>Email</b>
              <input
                className="form-control"
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="name@example.com"
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part3 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Mobile</b>
              <input
                className="form-control"
                type="number"
                id="phone"
                name="user_phone"
                value={formData.user_phone}
                onChange={handleChange}
                placeholder="10 Digit mobile number"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Photo</b>
              <input
                className="form-control"
                type="file"
                accept="image/png"
                id="user_docx"
                name="user_docx"
                value={formData.user_docx}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part4 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Date of Birth</b>
              <input
                className="form-control"
                type="date"
                id="birthday"
                name="user_birthday"
                value={formData.user_birthday}
                onChange={handleChange}
                placeholder="Reason"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Date of Joining</b>
              <input
                type="date"
                className="form-control"
                id="doj"
                name="user_doj"
                value={formData.user_doj}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part5 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>City</b>
              <input
                type="text"
                className="form-control"
                id="city"
                name="user_city"
                value={formData.user_city}
                onChange={handleChange}
                placeholder="City"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>State</b>
              <input
                type="text"
                className="form-control"
                id="state"
                name="user_state"
                value={formData.user_state}
                onChange={handleChange}
                placeholder="State"
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part6 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>District</b>
              <input
                type="text"
                className="form-control"
                id="district"
                name="user_district"
                value={formData.user_district}
                onChange={handleChange}
                placeholder="District"
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Address</b>
              <input
                type="text"
                className="form-control"
                id="address"
                name="user_address"
                value={formData.user_address}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part8 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>PinCode</b>
              <input
                type="text"
                className="form-control"
                id="zip"
                name="user_zip"
                placeholder="Pincode"
                value={formData.user_zip}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              />
            </div>
            <div className="mb-3">
              <b>Optional mobile Number</b>
              <input
                type="tel"
                className="form-control"
                id="emergencyphoneno"
                name="user_emergencyphneno"
                value={formData.user_emergencyphneno}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              />
            </div>
          </div>
          {/* part7 */}
          <div className="col-sm-12 col-md-6 col-lg-5">
            <div className="mb-3">
              <b>Working Type</b>

              <select
                id="workingtype"
                className="form-control"
                name="user_workingtype"
                value={formData.user_workingtype}
                onChange={handleChange}
                style={{ border: "1px solid" }}
              >
                <option disabled selcted value="">
                  ---Select Your Working Type----
                </option>
                <option value="FullTime">Full Time</option>
                <option value="PartTime">Part Time</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-11  ">
            <button
              type="submit"
              className="btn btn-primary float-end"
              id="applyleave"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer footerstyle="fixed-bottom" />
    </>
  );
}

const styles = {
  form: {
    maxWidth: "1000px",
    margin: "10px auto",
    marginBottom: "10px",
    padding: "10px 20px",
    background: "#f4f7f8",
    borderRadius: "8px",
  },
  heading: {
    margin: "0 0 30px 0",
    textAlign: "center",
  },
  fieldset: {
    marginBottom: "30px",
    border: "none",
  },
  legend: {
    fontSize: "1.4em",
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
  },
  input: {
    background: "rgba(255,255,255,0.1)",
    border: "none",
    fontSize: "16px",
    height: "auto",
    margin: "0",
    outline: "0",
    padding: "15px",
    width: "100%",
    backgroundColor: "#e8eeef",
    color: "#8a97a0",
    boxShadow: "0 1px 0 rgba(0,0,0,0.03) inset",
    marginBottom: "30px",
  },
  button: {
    padding: "19px 39px 18px 39px",
    color: "#FFF",
    backgroundColor: "#4bc970",
    fontSize: "18px",
    textAlign: "center",
    fontStyle: "normal",
    borderRadius: "5px",
    width: "100%",
    border: "1px solid #3ac162",
    borderWidth: "1px 1px 3px",
    boxShadow: "0 -1px 0 rgba(255,255,255,0.1) inset",
    marginBottom: "10px",
  },
  number: {
    backgroundColor: "#5fcf80",
    color: "#fff",
    height: "30px",
    width: "30px",
    display: "inline-block",
    fontSize: "0.8em",
    marginRight: "4px",
    lineHeight: "30px",
    textAlign: "center",
    textShadow: "0 1px 0 rgba(255,255,255,0.2)",
    borderRadius: "100%",
  },
};
