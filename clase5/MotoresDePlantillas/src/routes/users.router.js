import { Router } from "express";

const users = [
    {
        id:1,
        firstName:"Luis",
        lastName:"Figueredo"
    },
    {
        id:2,
        firstName:"Diego",
        lastName:"Olivera"
    }
];

const router = Router();



router.get('/',(req,res)=>{
    // if(req.query.limit){
    //     //SOLO DEBO DEVOLVER EL NUMERO DE PRODUCTOS QUE INDIQUE EL QUERY
    // }
    res.send("Users");
})

router.get('/:uid',(req,res)=>{
    const uid = req.params.uid;
    const userId = parseInt(uid);
    //Validaciones aparte por cuenta del estudiante :D
    const user = users.find(u=>u.id === userId);
    if(!user){
        return res.status(404).send({status:"error", error:"User not found"})
    }

    res.send(user);
})

export default router;