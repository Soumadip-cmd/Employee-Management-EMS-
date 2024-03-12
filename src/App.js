import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Myleave from "./components/Myleave";
import ApplyLeave from "./components/ApplyLeave";
import Addsalary from "./components/Addsalary";
import Managesalary from "./components/Managesalary";
import AddDepartment from "./components/Department/AddDepartment";
import ManageDepartment from "./components/Department/ManageDepartment";
import AddStaff from "./components/Staff/AddStaff";
import ManageStaff from "./components/Staff/ManageStaff";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/Applyleave">
            <ApplyLeave />
          </Route>
          <Route exact path="/addDepartment">
            <AddDepartment />
          </Route>
          <Route exact path="/manageDepartment">
            <ManageDepartment />
          </Route>
          <Route exact path="/addStaff">
            <AddStaff />
          </Route>
          <Route exact path="/manageStaff">
            <ManageStaff />
          </Route>
          <Route exact path="/leavehistory">
            <Myleave />
          </Route>
          <Route exact path="/addsalary">
            <Addsalary />
          </Route>
          <Route exact path="/managesalary">
            <Managesalary />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
