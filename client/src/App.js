import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Test from './components/Test';
import SlideNavbar from './components/SlideNavbar';

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/ssk",
      element: <><SlideNavbar/><Test/></>,
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
