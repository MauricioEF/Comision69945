import mongoose from 'mongoose';

const collection = "Restaurants"

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:String,
    slogan:String,
    address:String,
    logo:String,
    slug:{
        type:String,
        unique:true
    },
    menu:{
        type:Array,
        default:[
            {
                title:"water",
                description:"Agua gratuita siempre en establecimiento",
                price:0,
                active:true
            }
        ]
    },
    active:{
        type:Boolean,
        default:true
    }
})

const restaurantModel = mongoose.model(collection,schema);

export default restaurantModel;