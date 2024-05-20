const express=require("express");
const mongoDB=require('./db');
const app=express();
require("dotenv").config();
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width,Content-Type, Accept"
    );
    next();
})
mongoDB();
app.use("/api",require("./Routes/getRealData"));
app.use("/api",require("./Routes/authRoute"));
app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`));