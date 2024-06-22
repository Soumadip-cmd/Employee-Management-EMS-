const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/UserRegistration')
const checkEmail=require('.././controllers/checkEmail')
const checkPassword=require('.././controllers/checkPassword')
// Registration Controller
router.post('/register',UserRegistration)
//Email
router.post('/email',checkEmail)
//Check Password
router.post('/password',checkPassword)
module.exports=router