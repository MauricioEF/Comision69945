import { Router } from "express";
import courseModel from "../managers/mongo/models/course.model.js";

const router = Router();


router.post('/',async(req,res)=>{
    const body = req.body;
    const newCourse = {
        title:body.title,
        description:body.description,
        professor:body.professor
    }
    const result = await courseModel.create(newCourse);
    res.sendStatus(200);
})

router.get('/',async(req,res)=>{
    const result = await courseModel.find().populate('students')
    res.send({status:"success",payload:result})
})

export default router;