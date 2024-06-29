import { Router } from "express";
import studentsModel from "../managers/mongo/models/student.model.js";
import courseModel from "../managers/mongo/models/course.model.js";

const router = Router();


router.post('/',async(req,res)=>{
    const body = req.body;
    //Validaciones entran por tu cuenta
    const newStudent  = {
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email
    }
    const result = await studentsModel.create(newStudent);
    res.sendStatus(200);
})

router.post('/:sid/course/:cid',async(req,res)=>{
    const {sid,cid} = req.params;
    //¿Ambos existen?
    const student = await studentsModel.findOne({_id:sid});
    if(!student) return res.status(400).send({status:"error",error:"Student doesn't exist"});
    const course = await courseModel.findOne({_id:cid});
    if(!course) return res.status(400).send({status:"error",error:"Course doesn't exist"});
    //Aquí te pido que practiques tu validación para corroborar si el curso ya existe.
    //Tu validación aquí.

    student.courses.push({
        course:cid
    })

    await studentsModel.updateOne({_id:sid},{$set:{courses:student.courses}});
    await courseModel.updateOne({_id:cid},{$push:{students:sid}});

    res.send({status:"success",message:"Added"})
})

router.get('/',async(req,res)=>{
    const result = await studentsModel.find().populate('courses.course');
    res.send({status:"success",payload:result})
})

export default router;