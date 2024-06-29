import mongoose from "mongoose";

const collection  = "Users";

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{
        type:String,
        index:true
    },
    gender:String
})

const userModel = mongoose.model(collection,schema);

export default userModel;