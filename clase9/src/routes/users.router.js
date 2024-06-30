import { Router } from "express";
import userModel from "../managers/mongo/models/user.model.js";

const router = Router();

router.get('/',async(req,res)=>{
    //Explicación Index
   // const users = await userModel.find({email:'cubank1y@techcrunch.com'}).explain('executionStats');
   // console.log(users);
   // res.send("Ok");


   //Explicación paginación
   const users = await userModel.paginate({},{page:2,limit:25})
   res.send({status:"success",payload:users})
})

export default router;