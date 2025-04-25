const express=require("express")
const bcrypt = require('bcrypt');
const UserModel = require("../models/user.model");
const jwt=require("jsonwebtoken")
require("dotenv").config()


const UserRouter=express.Router()
const JWT_SECRET=process.env.JWT_SECRET

//route for signup users
UserRouter.post("/signup",async(req,res)=>{
    try {
        const {email,password,role}=req.body;
        const hash = await bcrypt.hash(password,10);
        const newUser= new UserModel({
            email,
            password:hash,
            role
        })
        await newUser.save()
        res.status(201).json({message:"User registered successfully"})
        
    } catch (error) {
        console.log("Error while user registration",error)
        res.status(500).json({message:"Something went wrong while user registration"})
    }
})


// route for login

UserRouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body
        const isUser=await UserModel.findOne({email})
        if(!isUser){
            return res.status(404).json({message:"User not found please signup first"})
        }
        const isMatch= await bcrypt.compare(password,isUser.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"})
        }
        
        const token=jwt.sign({userId:isUser._id,role:isUser.role},JWT_SECRET,{expiresIn:'1d'})
        res.status(200).json({message:"Login Successful",Token:token})

    } catch (error) {
        res.status(500).json({message:"Something went wrong while logingin, Please try again later"})
    }
})

module.exports=UserRouter