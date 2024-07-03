import React, { useEffect } from "react";
import "./SlideNavBar.css";
import { NavLink } from "react-router-dom";

export default function SlideNavbar() {
  useEffect(() => {
    const hamBurger = document.querySelector(".toggle-btn");
    const backdrop = document.querySelector(".backdrop");
    const sidebar = document.querySelector("#sidebar");
    const mainNavigation = document.querySelector(".main-navigation");

    const handleToggle = () => {
      sidebar.classList.toggle("expand");
      backdrop.classList.toggle("show");
      mainNavigation.classList.toggle("visible");
    };

    const handleCloseSidebar = (e) => {
      if (!sidebar.contains(e.target) && sidebar.classList.contains("expand")) {
        sidebar.classList.remove("expand");
        backdrop.classList.remove("show");
        mainNavigation.classList.remove("visible");
      }
    };

    hamBurger.addEventListener("click", handleToggle);
    backdrop.addEventListener("click", handleToggle);
    document.addEventListener("click", handleCloseSidebar);

    return () => {
      hamBurger.removeEventListener("click", handleToggle);
      backdrop.removeEventListener("click", handleToggle);
      document.removeEventListener("click", handleCloseSidebar);
    };
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="backdrop"></div>
        <aside id="sidebar">
          <div className="d-flex">
            <button className="toggle-btn" type="button">
              <i class="fa-solid fa-compact-disc"></i>
            </button>
            <div className="sidebar-logo">
              <NavLink to="/" className="NavBody">
                Administrator
              </NavLink>
            </div>
          </div>
          <form className="d-flex px-2 pb-4 position-relative" role="search">
            <input
              className="form-control text-white border-0 pl-6"
              style={{ background: "#586682b0" }}
              type="search"
              placeholder=" Search . . . "
              aria-label="Search"
            />
            <button
              className="position-absolute rounded-pill border-0"
              style={{ right: "20px", top: "5px" }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div
            className="px-4 py-2 text-capitalize text-white text-opacity-50 main-navigation"
            style={{ background: "#586682b0" }}
          >
            main navigation
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item ">
              <NavLink to="/" className="NavBody pt-2 sidebar-link">
              <i class="fa-solid fa-shop"></i>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/>
            <li className="sidebar-item ">
              <NavLink
                to="/"
                className="NavBody sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#Department"
                aria-expanded="false"
                aria-controls="Department"
              >
                <i class="fa-solid fa-boxes-stacked"></i>
                <span>Department</span>
              </NavLink>
              {/* <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/> */}
              <ul
                id="Department"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Add Department
                  </NavLink>
                </li>
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Manage Department
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="sidebar-item ">
              <NavLink
                to="/"
                className="NavBody sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#Staff"
                aria-expanded="false"
                aria-controls="Staff"
              >
                <i class="fa-solid fa-users"></i>
                <span>Staff</span>
              </NavLink>
              <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/>
              <ul
                id="Staff"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Add Staff
                  </NavLink>
                </li>
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Manage Staff
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <NavLink
                to="/"
                className="NavBody sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#Salary"
                aria-expanded="false"
                aria-controls="Salary"
              >
                <i class="fa-solid fa-sack-dollar"></i>
                <span>Salary</span>
              </NavLink>
              <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/>
              <ul
                id="Salary"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Add Salary
                  </NavLink>
                </li>
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Manage Salary
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <NavLink
                to="/"
                className="NavBody sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#Leave"
                aria-expanded="false"
                aria-controls="Leave"
              >
                <i class="fa-solid fa-share"></i>
                <span>Leave</span>
              </NavLink>
              <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/>
              <ul
                id="Leave"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Apply Leave
                  </NavLink>
                </li>
                <li className="sidebar-item ">
                  <NavLink to="/" className="NavBody sidebar-link">
                    Leave History
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sidebar-footer">
          <hr className=" border-1 text-white m-0" style={{ background: "#586682b0" }}/>
            <NavLink to="/" className="NavBody sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
}
