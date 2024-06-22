const express=require('express');
const dotenv=require('dotenv');
const app=express();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./ConnectDB/db')
const router= require('./routes/routes')
const PORT=process.env.PORT||5800

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:"PUT,PATCH,DELETE,GET,POST",
    credentials:true
}))
dotenv.config()
app.use(express.json());
app.use(cookieParser());
app.use("*",cors())
app.get('/',(req,res)=>{
    res.json({
        message:"Congratulation Server is running "
    })
})


//API Endpoints
app.use('/api',router)
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is liseting on  ${PORT}`)
    })

}).catch(err=>{
    console.log("Error connecting  with the Data Base ",err.message);
})
    


