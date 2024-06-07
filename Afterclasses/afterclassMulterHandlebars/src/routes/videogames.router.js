import { Router } from "express";
import { videogamesService } from "../managers/index.js";
import uploader from "../services/uploader.js";

const router = Router();

router.post('/',uploader.array('thumbnail',3),async(req,res)=>{
    console.log(req.files);
    const videogame = req.body;
    try{
        const newVideogame = {
            title:videogame.title,
            description:videogame.description,
            price: videogame.price,
            thumbnails:[]
        }

        for(let i=0;i<req.files.length;i++){
            newVideogame.thumbnails.push({mimetype:req.files[i].mimetype,path:`/files/videogames/${req.files[i].filename}`,main:i==0});
        }
    
        const result = await videogamesService.createVideogame(newVideogame);
        res.send({status:"success",payload:result});
    }catch(error){
        console.log(error);
        res.status(500).send({status:"error",error:error})
    }
})

export default router;