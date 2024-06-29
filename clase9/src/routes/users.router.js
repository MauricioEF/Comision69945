import { Router } from "express";
import userModel from "../managers/mongo/models/user.model.js";

const router = Router();

router.get('/',async(req,res)=>{
    const users = await userModel.find({email:'cubank1y@techcrunch.com'}).explain('executionStats');
    console.log(users);
    res.send("Ok");
})

export default router;