import { Router } from "express";
import uploader from "../middlewares/uploader.js";

const router = Router();


router.get('/',(req,res)=>{
    if(req.papa){
        console.log(req.papa);
    }

    res.send(pets);
})

//uploader.single === La petición VIENE CON UN ARCHIVO

const pets = []

router.post('/',uploader.single('image'),(req,res)=>{
    console.log(req.file)
    console.log(req.body);
    pets.push({
        name:req.body.name,
        specie:req.body.specie,
        thumbnail:`http://localhost:8080/${req.file.filename}`
    })
    res.send("Mascota agregada");
})

router.put('/:pid',(req,res)=>{

})
router.delete('/:pid',(req,res)=>{

})


export default router;