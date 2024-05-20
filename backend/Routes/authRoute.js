const express=require("express");
const router=express.Router();
const userModel=require("../Models/robotic")
const jwt=require("jsonwebtoken");
const jwtsecret="Thisismysecret";
router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user=await userModel.findOne({username:username});
        if(user){
            const data={
                user:{
                    id:user.id
                }
            }
            if(user.password===password){
                const authToken=jwt.sign(data,jwtsecret);
                res.json({success:true,authToken:authToken});
            }
        }
        else{
            res.json({success:false});

        }
    }
    catch(error){
        res.json({success:false});
    }
    
});
module.exports=router;