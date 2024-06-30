import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const collection  = "Students";

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:{
        type:String,
        index:true
    },
    gender:String
})

schema.plugin(mongoosePaginate)

const userModel = mongoose.model(collection,schema);

export default userModel;