const mongoose=require("mongoose")

const bookSchema=new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    available: { type: Boolean, default: true },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    borrowedAt: { type: Date, default: null }
})


const BookModel=mongoose.model("Book",bookSchema)

module.exports=BookModel