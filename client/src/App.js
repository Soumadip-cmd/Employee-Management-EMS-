import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Test from './components/Test';
import SlideNavbar from './components/SlideNavbar';
import NavBar from './NavBar';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/ssk",
      element: <><SlideNavbar/><NavBar/></>,
    },
    {
      path: "/",
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
