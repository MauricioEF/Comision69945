import express from 'express';
import mongoose from 'mongoose';

import studentModel from './managers/models/student.model.js';

const app = express();

const PORT = process.env.PORT||8080;

const CONNECTION_STRING = "AQUI LA URL DE TU ATLAS, O DE TU LOCAL, RECUERDA QUE PARA TU LOCAL, LA URL ES 'mongodb://127.0.0.1:27017/aquiElNombreDeTuDB'"

const connection = mongoose.connect(CONNECTION_STRING);

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))

app.use(express.json());

app.get('/api/students',async (req,res)=>{
    const students = await studentModel.find();
    res.send({status:"success",payload:students})
})

app.post('/api/students',async (req,res)=>{
    const student = req.body;
    if(!student.firstName||!student.lastName||!student.email){
        return res.status(400).send({status:"error",error:"Incomplete valuess"})
    }
    const studentResult = await studentModel.create(student);
    res.send({status:"success",payload:studentResult})
})