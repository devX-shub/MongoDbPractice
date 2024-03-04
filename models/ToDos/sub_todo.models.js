import mongoose, { mongo } from "mongoose";


const subTodoSchema = new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    content : {
        type : String,
        require : true
    },
    completed : {
        type : Boolean,
        default : false
    }
},{timestamps: true})


//we can use the schema at many place if we export it.
export const SubTodo = mongoose.model("SubTodo" , subTodoSchema)  // takes two parameter{schame name and the use the schema that we have specified above}