const express=require("express");
const router=express.Router();
const realData=require("../realData");
router.get("/getrealdata",function(req,res){
    res.send(realData);
});
module.exports=router;