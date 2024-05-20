const mongoose=require('mongoose');
require("dotenv").config();
async function main(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
      } catch (error) {
        throw new Error(error.message);
      }
}
module.exports=main;
