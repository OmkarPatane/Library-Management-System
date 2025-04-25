const mongoose=require("mongoose")
require("dotenv").config()

const MONGO_URI=process.env.MONGO_URI

const connectionToDB=async()=>{
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to the database")
    } catch (error) {
        console.log("Error while connecting to the Database")
    }
}

module.exports=connectionToDB