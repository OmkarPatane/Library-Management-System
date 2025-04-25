const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    }, author:{
        type:String,
        required:true
    }, genre:{
        type:String,
        required:true
    }, publicationDate:{
        type:String,
        required:true
    }, available:{
        type:Boolean,
        default:true
    }
})


const BookModel=mongoose.model("Book",bookSchema)

module.exports=BookModel