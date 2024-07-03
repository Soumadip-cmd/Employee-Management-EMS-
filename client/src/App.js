import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Test from './components/Test';
import SlideNavbar from './components/SlideNavbar';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/addDepartment",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/manageDepartment",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
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
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/manageSalary",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/applyLeave",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
    },
    {
      path: "/leaveHistory",
      element: <><SlideNavbar/><NavBar/><Dashboard/></>,
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
