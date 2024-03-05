//using using user.models.js -- the is no significance for this
//only standared naming practice
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    // username : String,
    // password : String,
    // phoneNumber : number,
    // isActive : Boolean

    username:{
        type : String,
        required: true,
        unique : true,
        lowercase: true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : [true,"password required"]
    }
},{timestamps: true})


//we can use the schema at many place if we export it.
export const User = mongoose.model("User" , userSchema)  // takes two parameter{schame name and the use the schema that we have specified above}