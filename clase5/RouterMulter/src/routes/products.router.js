import { Router } from "express";


//Cada router es una sub-mini aplicación de express por sí sola.

const router = Router();

//Antes de migrar el código, piensen en la raíz que se repite de esa entidad


router.get('/',(req,res)=>{
    res.send("Hola desde router de productos");
})

router.post('/',(req,res)=>{

})

router.put('/:pid',(req,res)=>{

})

router.delete('/',(req,res)=>{

})

router.get('/:pid',(req,res)=>{

})

export default router;