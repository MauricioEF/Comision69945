import mongoose from 'mongoose';

const collection = "Orders";

const schema = new mongoose.Schema({
    name:String,
    size: {
        type:String,
        default:'medium',
        enum: ['small','medium','large']
    },
    price:Number,
    quantity:Number,
    date:Date
})

const ordersModel = mongoose.model(collection,schema);

export default ordersModel;