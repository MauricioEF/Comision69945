import { Router } from "express";
import ordersModel from "../managers/mongo/models/order.model.js";

const router = Router();

router.get('/',async(req,res)=>{
    const result = await ordersModel.find();
    res.send({status:"success",payload:result})
})

router.post('/',async(req,res)=>{
    const orders = [
        { name: "Pepperoni", size: "small", price: 19,
          quantity: 10, date:"2021-03-13T08:14:30Z" },
        { name: "Pepperoni", size: "medium", price: 20,
          quantity: 20, date :"2021-03-13T09:13:24Z"},
        { name: "Pepperoni", size: "large", price: 21,
          quantity: 30, date :"2021-03-17T09:22:12Z"},
        { name: "Cheese", size: "small", price: 12,
          quantity: 15, date :"2021-03-13T11:21:39.736Z" },
        { name: "Cheese", size: "medium", price: 13,
          quantity:50, date : "2022-01-12T21:23:13.331Z"},
        { name: "Cheese", size: "large", price: 14,
          quantity: 10, date : "2022-01-12T05:08:13Z"},
        { name: "Vegan", size: "small", price: 17,
          quantity: 10, date : "2021-01-13T05:08:13Z"},
        { name: "Vegan", size: "medium", price: 18,
          quantity: 10, date : "2021-01-13T05:10:13Z"}
     ]
     await ordersModel.insertMany(orders);
     res.send("Inserted orders");
})

router.get('/report/:size',async(req,res)=>{
    const size = req.params.size;
    //Aquí comienza la magia.
    const aggregationResult = await ordersModel.aggregate([
        //Filtrar por tamaño
        {$match:{size:size}},
        //A partir de este punto, el siguiente paso trabaja únicamente con medianas
        {$group:{_id:'$name', total:{$sum:"$quantity"}}},
        //A partir de este punto ya ni siquiera tengo pizzas como tal.
        {$sort:{total:-1}},
        //Ahora sí lo desafiante.
        {$group:{_id:'order', orders:{$push:"$$ROOT"}}},
        //Crear un único documento a partir de lo anterior.
        {$project:{_id:0, size:size, orders:"$orders"}},
        {$merge:{into:'reports'}}
    ])
    console.log(JSON.stringify(aggregationResult));
    res.send("OK");
})

export default router;