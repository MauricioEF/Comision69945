import mongoose from 'mongoose';

const collection = "Courses";

const schema = new mongoose.Schema({
    title:String,
    description:String,
    professor:String,
    students:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref:'Students'
        }
    ]
})

//Middlewares de mongoose
// schema.pre(['find','findOne'],function(){
//     this.populate('students');
// })


const courseModel = mongoose.model(collection,schema);

export default courseModel;