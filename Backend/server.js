const express=require("express")
const cors=require("cors")
const connectionToDB = require("./config/mongoDb.config")
const UserRouter = require("./routes/user.route")
const BookRouter = require("./routes/book.route")
require("dotenv").config()

const PORT=process.env.PORT || 5000
const app=express()
app.use(express.json())
app.use(cors())

//calling the connection function for database connection
connectionToDB()

app.get("/healthy",(req,res)=>{
    res.send("Healthy API")
})

//user routes
app.use("/users",UserRouter)

//book routes
app.use("/books",BookRouter)


//route for wrong request
app.use((req,res)=>{
    res.json({message:"Opps! Route not found please check your route"})
})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})