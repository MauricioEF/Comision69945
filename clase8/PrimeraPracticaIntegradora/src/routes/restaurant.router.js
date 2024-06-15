import { Router } from "express";
import { restaurantsService } from "../managers/index.js";
import { makeid } from "../utils.js";



const router = Router();

router.get('/',async (req,res)=>{
    const restaurants = await restaurantsService.getRestaurants();
    res.send({status:"success",payload:restaurants});
})

router.post('/',async(req,res)=>{
    const restaurant = req.body;
    if(!restaurant.name){
        return res.status(400).send({status:"error",error:"Incomplete values"})
    }
    const newRestaurant = {
        name:restaurant.name,
        address:restaurant.address||"Sin especificar",
        slogan: restaurant.slogan,
        slug: `${restaurant.name}_${makeid(4)}`
    }

    const result = await restaurantsService.createRestaurant(newRestaurant);
    return res.send({status:"success",message:"Restaurant created"})
})

// api/restaurants/:rid/menu (Visitar un endpoint de API no es lo mismo que visitar una )

router.post('/:rid/menu',async(req,res)=>{
    const {rid} = req.params;
    const {title,description,price} = req.body;

    if(!title||!price){
        return res.status(400).send({status:"error",error:"Incomplete values"});
    }
    const newDish = {
        title,
        description,
        price
    }
    const result = await restaurantsService.addDish(rid,newDish);
    res.send({status:"success",message:"Platillo agregado"})
})

router.delete('/:rid',async(req,res)=>{
    const {rid} = req.params;
    const result = await restaurantsService.deleteRestaurant(rid);
    res.send({status:"success",message:"Restaurante eliminado"})
})






export default router;