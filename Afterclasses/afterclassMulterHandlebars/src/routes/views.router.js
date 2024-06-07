import { Router } from "express";
import { videogamesService } from "../managers/index.js";

const router = Router();

router.get('/',(req,res)=>{
    res.render('Home');
})

router.get('/videogames/:vid',async(req,res)=>{
    const videogame = await videogamesService.getVideogameById(req.params.vid);
    if(!videogame){
        return res.render("404");
    }
    res.render('VideogameDetails',{
        videogame,
        mainImage:videogame.thumbnails.find(thumbnail=>thumbnail.main)
    })
})

export default router;