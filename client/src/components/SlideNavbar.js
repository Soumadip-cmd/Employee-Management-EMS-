import React, { useEffect } from "react";
import './SlideNavBar.css';
import { NavLink } from "react-router-dom";

export default function SlideNavbar() {
  useEffect(() => {
    const hamBurger = document.querySelector(".toggle-btn");
    const backdrop = document.querySelector(".backdrop");
    const sidebar = document.querySelector("#sidebar");

    const handleToggle = () => {
      sidebar.classList.toggle("expand");
      backdrop.classList.toggle("show");
    };

    const handleCloseSidebar = (e) => {
      if (!sidebar.contains(e.target) && sidebar.classList.contains("expand")) {
        sidebar.classList.remove("expand");
        backdrop.classList.remove("show");
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
              <i className="lni lni-grid-alt"></i>
            </button>
            <div className="sidebar-logo">
              <NavLink  to="/" className="NavBody ">CodzSword</NavLink>
            </div>
          </div>
          <ul className="sidebar-nav">
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link">
                <i className="lni lni-user"></i>
                <span>Profile</span>
              </NavLink>
            </li>
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link">
                <i className="lni lni-agenda"></i>
                <span>Task</span>
              </NavLink>
            </li>
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#auth" aria-expanded="false" aria-controls="auth">
                <i className="lni lni-protection"></i>
                <span>Auth</span>
              </NavLink>
              <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className="sidebar-item ">
                  <NavLink  to="/" className="NavBody sidebar-link">Login</NavLink>
                </li>
                <li className="sidebar-item ">
                  <NavLink  to="/" className="NavBody sidebar-link">Register</NavLink>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                <i className="lni lni-layout"></i>
                <span>Multi Level</span>
              </NavLink>
              <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                <li className="sidebar-item ">
                  <NavLink  to="/" className="NavBody sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#multi-two" aria-expanded="false" aria-controls="multi-two">
                    Two Links
                  </NavLink>
                  <ul id="multi-two" className="sidebar-dropdown list-unstyled collapse">
                    <li className="sidebar-item ">
                      <NavLink  to="/" className="NavBody sidebar-link">Link 1</NavLink>
                    </li>
                    <li className="sidebar-item ">
                      <NavLink  to="/" className="NavBody sidebar-link">Link 2</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link">
                <i className="lni lni-popup"></i>
                <span>Notification</span>
              </NavLink>
            </li>
            <li className="sidebar-item ">
              <NavLink  to="/" className="NavBody sidebar-link">
                <i className="lni lni-cog"></i>
                <span>Setting</span>
              </NavLink>
            </li>
          </ul>
          <div className="sidebar-footer">
            <NavLink  to="/" className="NavBody sidebar-link">
              <i className="lni lni-exit"></i>
              <span>Logout</span>
            </NavLink>
          </div>
        </aside>
      </div>
    </>
  );
}
