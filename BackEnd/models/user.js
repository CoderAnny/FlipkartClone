const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
    },
    lastName : 
    {
        type:String,
        required:true,
    },
    userName:
    {
        type:String,
        required:true,
        unique:true
    },
    emailId : 
    {
        type:String,
        required:true,
        unique:true
    },

    passWord : {
        type:String,
    },

    phone :{
        type:String,
        required:true,
        unique:true
    }
}) 



// Schema crearion for profuctdetails Collection 
// const titleSchema = new mongoose.Schema({
//     shortTitle:String,
//     longTitle:String
// })

// const priceSchema = new mongoose.Schema({
//     mrp: Number,
//     cost: Number,
//     discount: String,
// })

// const userSchema = new mongoose.Schema({
//     Imgurl: String,
//     DetailUrl: String,
//     Title:titleSchema,
//     Price:priceSchema,
//     Quantity: Number,
//     description: String,
//     Discount: String,
//     Tagline: String,
// })


module.exports = mongoose.model("logindatas", userSchema);