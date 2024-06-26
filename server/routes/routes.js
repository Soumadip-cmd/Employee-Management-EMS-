const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/UserRegistration')
const checkEmail=require('.././controllers/checkEmail')
const checkPassword=require('.././controllers/checkPassword')
const checkAdmin=require("../controllers/checkAdmin");
const addStaff=require('../controllers/Staffs/AddStaff');
const getStaffs=require('../controllers/Staffs/GetStaff')
const addDepartment=require('../controllers/Departments/addDepartment');
const getDepartment=require("../controllers/Departments/getDepartment");

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
router.get('/get-staffs/:id',getStaffs)
//add department
router.post('/add-dept',addDepartment);
//get all department
router.get('/get-dept',getDepartment);
//get particular departments
router.get('/get-dept/:id',getDepartment)
module.exports=router;