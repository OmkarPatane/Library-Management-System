const express=require("express")
const {authToken, checkRole} = require("../middleware/auth.middleware")

const BookRouter=express.Router()

//adding the book
BookRouter.post("/add",authToken,checkRole("librarian"),async(req,res)=>{
    console.log({...req.body})
    res.send("hie")
})



module.exports=BookRouter