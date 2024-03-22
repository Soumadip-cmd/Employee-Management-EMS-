// // import React, { useEffect } from "react";
// // import Footer from "./Footer";
// // import { Link } from "react-router-dom/cjs/react-router-dom.min";
// // import axios from "axios";

// export default function Addsalary() {
//   let boxstyle = {
//     background: "white",
//     padding: "21px",
//     borderTop: "5px solid #004dffe8",
//     borderRadius: "5px",
//   };
//   function calculate() {
//     let n1 = parseInt(document.getElementById("num1").value);
//     let n2 = parseInt(document.getElementById("num2").value);
//     let sum = n1 + n2;
//     //  console.log(sum
//     document.getElementById("total").value = sum;
//   }
//   useEffect(()=>{
//     const fetchDepartment=async()=>{
//       try{
//         const res=axios.get("https://localhost:3001/manageDepartment")
        
//       }
//     }
//   })
//   return (
//     <>
//     {/* <div class="alert alert-success m-3" role="alert"  >
//         A simple success alert—check it out!
//       </div> */}
//       <nav
//         className="navbar navbar-expand-lg"
//         style={{backgroundColor: "rgb(0 77 255 / 65%)" }}
//       >
//         <div className="container">
//           <Link className="navbar-brand" style={{ fontSize: "25px",color:'white',letterSpacing:".05125em"}} to="/">
//             Salary
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="/navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           > 
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" style={{ color:'white' }} to="/">
//                   <span className="ms-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="14"
//                       fill="currentColor"
//                       className="bi bi-house"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
//                     </svg>
//                   </span>
//                   Home
//                   <span className="ms-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-arrow-left-short"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link"
//                   style={{ color:'white' }}
//                   to="/managesalary"
//                 >
//                   Manage Salary
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" style={{ color:'white' }} to='/addsalary'>
//                   Salary
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container my-2">
//         <h2>Salary</h2>
//       </div> 
      
// //       <div className="container-fluid pt-3" style={{ padding: "100px" }}>
// //         <div className="row d-flex justify-content-evenly" style={boxstyle}>
// //           <h5 style={{ fontSize: "20px" }} className="px-2">
// //             Add Salary
// //           </h5>
// //           <hr />
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-md-4">
// //                 <div className="mb-3">
// //                   <b className="">Department Name</b>
// //                   <select
// //                     className="form-control"
// //                     style={{ border: "1px solid" }}
// //                   >
// //                     <option disabled defaultValue={"--Department Name--"}>
// //                       --Department Name--
// //                     </option>
// //                     <option>Backend developement</option>
// //                     <option>Designing</option>
// //                     <option>Front-end developement</option>
// //                     <option>Marketing</option>
// //                     <option>Finance</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="container m-3">
// //             <div className="row p-3">
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
// //                       Staff
// //                     </th>
// //                     <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
// //                       Basic Salary($)
// //                     </th>
// //                     <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
// //                       Allowance($)
// //                     </th>
// //                     <th className="col-md-3 text-center bg- p-1 px-2 tablestyle">
// //                       Total($)
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   <tr>
// //                     <td className="col-md-3 bg- p-1 px-2 tablestyle">
// //                       Soumadip santra
// //                     </td>
// //                     <td className="col-md-3 bg- p-1 px-2 tablestyle">
// //                       <input
// //                         type="text"
// //                         id="num1"
// //                         onChange={calculate}
// //                         style={{ width: "100%" }}
// //                       />
// //                     </td>
// //                     <td className="col-md-3 bg- p-1 px-2 tablestyle">
// //                       <input
// //                         type="text"
// //                         id="num2"
// //                         onChange={calculate}
// //                         style={{ width: "100%" }}
// //                       />
// //                     </td>
// //                     <td className="col-md-3 bg- p-1 px-2 tablestyle">
// //                       <input type="text" id="total" style={{ width: "100%" }} />
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //           <div className="container">
// //             <button
// //               type="submit"
// //               className="btn btn-success float-end"
// //               // onClick={show}
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer footerstyle="fixed-bottom" />
// //     </>
// //   );
// // }
