import restaurantModel from "./models/restaurant.model.js";

export default class RestaurantManager{

    createRestaurant(restaurant){
        return restaurantModel.create(restaurant);
    }

    getRestaurant(opts={}){
        return restaurantModel.findOne(opts);
    }

    getRestaurants(opts={}){
        return restaurantModel.find(opts);
    }

    addDish(restaurantId,dish){
        //$push aplica para campos de tipo arreglo
        return restaurantModel.updateOne({_id:restaurantId},{$push:{menu:dish}})
    }

    updateRestaurant(){
        
    }

    deleteRestaurant(restaurantId){
        return restaurantModel.deleteOne({_id:restaurantId});
    }

}