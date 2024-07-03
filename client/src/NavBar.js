import React from "react";

const NavBar = () => {
  return (
    <>
      <nav
        className=" d-flex justify-content-between px-2 align-items-center"
        style={{ background: "#092341eb", height: "50px" }}
      >
        <span
          className="float-start fw-bold"
          style={{ fontFamily: '"Playwrite US Modern", cursive' }}
        >
          <span className="text-danger">Employee</span>{" "}
          <span className="text-primary">Management</span>
        </span>
        {/* <span className="float-end text-white mx-2 px-2 py-1" style={{border:'1px solid white', borderRadius:'50%',cursor:'pointer'}}><i className=" fa-regular fa-user fa"></i></span> */}

        <div className="flex-shrink-0 dropdown mx-2 mx-lg-3">
  <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle dropdown-toggle-no-caret" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="https://placehold.co/32x32" alt="mdo" width="32" height="32" className="rounded-circle"/>
  </a>
  <ul className="dropdown-menu text-small shadow">
    <li><a className="dropdown-item" href="#">New project...</a></li>
    <li><a className="dropdown-item" href="#">Settings</a></li>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Sign out</a></li>
  </ul>
</div>

      </nav>
    </>
  );
};

export default NavBar;
