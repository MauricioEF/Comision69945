import { Router } from "express";

const router = Router();

//¿Cómo hago para que el cliente lo visite?

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
    },
    {
        id:3,
        firstName:"Pablo",
        lastName:"Picasso",
        value:"2M"
    }
];

router.get('/',(req,res)=>{
    res.render('Home')
})

router.get('/users',(req,res)=>{
    res.render('Users',{
        title:"Usuarios felices",
        users
    });
})

router.get('/users/:uid',(req,res)=>{
    const uid = req.params.uid;
    const userId = parseInt(uid);
    //Validaciones aparte por cuenta del estudiante :D
    const user = users.find(u=>u.id === userId);
    if(!user){
        return res.render('404',{
            entity:'Usuario'
        })
    }

    res.render('UserDetails',{
        title:`Perfil de ${user.firstName}`,
        user,
        css:'UserDetails'
    })
})

export default router;