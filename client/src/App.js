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

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
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
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/manageStaff",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
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
