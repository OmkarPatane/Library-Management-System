const jwt=require("jsonwebtoken")
require("dotenv").config()
const JWT_SECRET=process.env.JWT_SECRET

const authToken=(req,res,next)=>{
    try {
        const token=req.headers.authorization?.split(" ")[1]
        if(!token){
            return res.status(500).json({message:"opps! Token required"})
        }

        var decoded = jwt.verify(token, JWT_SECRET);
        req.userId=decoded.userId
        req.role=decoded.role
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Token not valid "})
    }
}

const checkRole=(...allowedRoles)=>{
    return(req,res,next)=>{
        if(!req.role){
            return res.status(403).json({message:"Plase provide the role"})
        }
        if(!allowedRoles.includes(req.role)){
            return res.status(403).json({message:"Access Denied"})
        }
        next()
    }
}


module.exports={authToken,checkRole}