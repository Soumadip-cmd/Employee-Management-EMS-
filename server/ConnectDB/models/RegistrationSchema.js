const mongoose=require('mongoose')
const RegistrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Provide Email"]

    },
    role:{
    type:String,
    default:"User",
    // required:[true,"Provide your Role "],
    },
    password:{
        type:String,
        
        required:[true,"Provide Password"]
    },
   
})
const RegistrationModel=mongoose.model("Registration",RegistrationSchema)
module.exports=RegistrationModel
