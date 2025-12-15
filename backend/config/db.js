const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connect successfuly ");
    }catch(err){

    }
}

module.exports = connectDB