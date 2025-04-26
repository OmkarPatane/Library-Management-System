const express=require("express")
const { authToken } = require("../middleware/auth.middleware")
const ProfileModel = require("../models/profile.model")

const ProfileRoute=express.Router()

ProfileRoute.post("/create-profile",authToken,async(req,res)=>{
    try {
        const profile= new ProfileModel({...req.body,user:req.userId})
        await profile.save()
        res.status(201).json({message:"Profile created successfully",Profile:profile})
    } catch (error) {
        console.log("Profile creation error",error)
        res.status(500).json({message:"Error while creating the user Profile",error})
    }
})

module.exports=ProfileRoute