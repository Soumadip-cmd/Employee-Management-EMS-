import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Test from './components/Test';
import SlideNavbar from './components/SlideNavbar';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import ApplyLeave from './components/Leave/ApplyLeave';
import LeaveHistory from './components/Leave/LeaveHistory';
import ManageSalary from './components/Salary/ManageSalary';
import AddSalary from './components/Salary/AddSalary';
import AddDepartment from './components/Department/AddDepartment';
import ManageDepartment from './components/Department/ManageDepartment';
import AddStaff from './components/Staff/Add Staff';
import ManageStaff from './components/Staff/ManageStaff';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/login",
      element: <><Login/></>,
    },
    {
      path: "/signup",
      element: <><SignUp/></>,
    },
    {
      path: "/addDepartment",
      element: <><NavBar/><AddDepartment/></>,
    },
    {
      path: "/manageDepartment",
      element: <><NavBar/><ManageDepartment/></>,
    },
    {
      path: "/addStaff",
      element: <><NavBar/><AddStaff/></>,
    },
    {
      path: "/manageStaff",
      element: <><NavBar/><ManageStaff/></>,
    },
    {
      path: "/addSalary",
      element: <><NavBar/><AddSalary/></>,
    },
    {
      path: "/manageSalary",
      element: <><NavBar/><ManageSalary/></>,
    },
    {
      path: "/applyLeave",
      element: <><NavBar/><ApplyLeave/></>,
    },
    {
      path: "/leaveHistory",
      element: <><NavBar/><LeaveHistory/></>,
    },
    {
      path: "/login",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/test",
      element: <><Test/></>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
