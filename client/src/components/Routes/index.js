import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';

import CheckEmail from "./../Pages/Login/CheckEmail"
import CheckPassword from "./../Pages/Login/CheckPassword"
import Register from "./../Pages/Register/Register"
import Forgotpassword from './../Pages/Register/Register'

import AdminDashboard from './../AdminDashboard';
import Myleave from './../Leave/Myleave';
import ApplyLeave from './../Leave/ApplyLeave';
import Addsalary from './../Salary/Addsalary';
import Managesalary from './../Salary/Managesalary';
import AddDepartment from './../Department/AddDepartment';
import ManageDepartment from './../Department/ManageDepartment';
import AddStaff from './../Staff/AddStaff';
import ManageStaff from './../Staff/ManageStaff';
import StaffList from './../Staff/StaffList';
import EditStaff from './../Staff/EditStaff';
import EditDepartment from './../Department/EditDepartment';
import CheckAdminPassword from '../Pages/Login/CheckAdminLogin';

import AuthLayouts from '../Layouts';
import Home from '../Pages/Home/Home';
import Payments from "../Payments/Payment"



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element: (
          <AuthLayouts>
            <Register />
          </AuthLayouts>
        ),
      },
      {
        path: 'email',
        element: (
          <AuthLayouts>
            <CheckEmail />
          </AuthLayouts>
        ),
      },
      {
        path: 'password',
        element: (
          <AuthLayouts>
            <CheckPassword />
          </AuthLayouts>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <AuthLayouts>
            <Forgotpassword />
          </AuthLayouts>
        ),
      },

      {
        path: 'admin',
        element: (
          <AuthLayouts>
           <CheckAdminPassword/>
          </AuthLayouts>
        ),
      },
      {
        path:'payment',
        element:(
          <AuthLayouts>
            <Payments/>
          </AuthLayouts>
        )
      },
     
      {
        path: '',
        element: <Home />,
        children: [
          
        ],
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'staffList',
        element: <StaffList />,
      },
      {
        path: 'Applyleave',
        element: <ApplyLeave />,
      },
      {
        path: 'addDepartment',
        element: <AddDepartment />,
      },
      {
        path: 'manageDepartment',
        element: <ManageDepartment />,
      },
      {
        path: 'editDept',
        element: <EditDepartment />,
      },
      
      {
        path: 'addStaff',
        element: <AddStaff />,
      },
      {
        path: 'manageStaff/:id',
        element: <ManageStaff />,
      },
      {
        path: 'editStaff/:id',
        element: <EditStaff />,
      },
      {
        path: 'leavehistory',
        element: <Myleave />,
      },
      {
        path: 'addsalary',
        element: <Addsalary />,
      },
      {
        path: 'managesalary',
        element: <Managesalary />,
      },
    ],
  },
]);

export default router;
