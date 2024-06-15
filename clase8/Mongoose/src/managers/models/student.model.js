import mongoose from "mongoose";

const collection = "Students";

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dateOfBirth:{
        type:Date
    },
    courses:[]
});

const studentModel = mongoose.model(collection,schema);

export default studentModel;