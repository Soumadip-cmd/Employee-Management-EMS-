const express=require('express')
const router=express.Router()
const UserRegistration=require('../controllers/UserRegistration')
// Registration Controller
router.post('/register',UserRegistration)
module.exports=router