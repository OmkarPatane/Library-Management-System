const mongoose=require("mongoose")


const profileSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    borrowedBook:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Book"
    }
})

const ProfileModel=mongoose.model("Profile",profileSchema)

module.exports=ProfileModel