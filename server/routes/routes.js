const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/UserRegistration')
const checkEmail=require('.././controllers/checkEmail')
const checkPassword=require('.././controllers/checkPassword')
const checkAdmin=require("../controllers/checkAdmin");
const addStaff=require('../controllers/AddStaff/AddStaff')
// Registration Controller
router.post('/register',UserRegistration)
//Email
router.post('/email',checkEmail)
//Check Password
router.post('/password',checkPassword)
//check admin
router.post('/admin',checkAdmin)
//add staff
router.post('/addstaff',addStaff)

module.exports=router;