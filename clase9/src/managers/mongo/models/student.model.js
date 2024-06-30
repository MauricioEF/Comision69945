import mongoose from "mongoose";

const collection = "Papa";

const schema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    courses: [
        {
            course:{
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Courses'
            },
        }
    ]
})

// schema.pre(['find','findOne'],function(){
//     this.populate('courses.course')
// })

const studentsModel = mongoose.model(collection,schema);

export default studentsModel;