const mongoose=require('mongoose');
const LoginSchema=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})
const LoginModel= mongoose.model("Signup",LoginSchema)
module.exports = LoginModel
