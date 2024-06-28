const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/UserRegistration')
const checkEmail=require('.././controllers/checkEmail')
const checkPassword=require('.././controllers/checkPassword')
const checkAdmin=require("../controllers/checkAdmin");
const addStaff=require('../controllers/Staffs/AddStaff');
const getStaffs=require('../controllers/Staffs/GetStaff');
const editStaffs=require('../controllers/Staffs/EditStaff');
const deleteStaffs=require('../controllers/Staffs/DeleteStaff')
const addDepartment=require('../controllers/Departments/addDepartment');
const getDepartment=require("../controllers/Departments/getDepartment");
const editDepartment=require('../controllers/Departments/editDepartment')
const deleteDepartment=require('../controllers/Departments/DeleteDepartment');
const leaveUserApply=require('../controllers/Leave/AddLeave');
const getAllLeaves=require('../controllers/Leave/GetAllLeave');
const EmployeeIDLeave=require('../controllers/Leave/getEmployeLeave');
const EditLeaveRequest=require('../controllers/Leave/EditLeave');
const deleteLeaveRequest =require('../controllers/Leave/DeleteLeave')
// Registration Controller
router.post('/register',UserRegistration)
//Email
router.post('/email',checkEmail)
//Check Password
router.post('/password',checkPassword)
//check admin
router.post('/admin',checkAdmin)
//add staff
router.post('/add-staff',addStaff);
//get all staffs
router.get('/get-staffs',getStaffs)
//get particular staffs
router.get('/get-staffs/:id',getStaffs);
//edit staff
router.patch('/edit-staffs/:id',editStaffs);
//delete staffs
router.delete('/delete-staffs/:id',deleteStaffs)
//add department
router.post('/add-dept',addDepartment);
//get all department
router.get('/get-dept',getDepartment);
//get particular departments
router.get('/get-dept/:id',getDepartment);
//edit department
router.patch('/edit-dept/:id',editDepartment);
//delete department
router.delete('/delete-dept/:id',deleteDepartment);
//leave user Apply
router.post('/apply-leave/:id',leaveUserApply);
//get All Leaves
router.get('/get-leave',getAllLeaves);
//get leave with id
router.get('/get-leave/:id',EmployeeIDLeave)
//edit leave request
router.put('/edit-leave/:id',EditLeaveRequest)
//delete leave request
router.delete('/delete-leave/:id',deleteLeaveRequest)
module.exports=router;