import React, { useRef } from "react";

const EditDepartment = () => {
    const refcls=useRef(null)

    const updateData=()=>{
        refcls.current.click()
    }
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
        class="modal fade text-start"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Department
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
                <label for="departmentName" class="form-label" style={{fontWeight:"500"}}>
                  Department Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="departmentName"
                  placeholder="Department Name"
                />
              </div>
              <div class="mb-3">
                <label for="departmentId" class="form-label" style={{fontWeight:"500"}}>
                  Department Id
                </label>
                <input
                  type="text"
                  class="form-control "
                  id="departmentId"
                  placeholder="Department Id"
                />
              </div>
              
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal" ref={refcls}
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={updateData}>
                Update Department
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDepartment;
