import { Router } from "express";

// ESTO SOLO ES EXPLICACION DEL PROYECTO FINAL

/**
 * {
    id:293192,
    products:[]
}
get  ===>  []
 */

const router = Router();



router.post('/:cid/product/:pid',(req,res)=>{
    //1. busco al carrito con el cid proporcionado, recuerda convertir el param a número si tu id es numérico
    //2. busco al producto para saber si existe ¿Por qué agegaría un producto que no existe?
    //3. guardo en una variable el quantity, éste me debe venir por el req.body
    //4. si NO EXISTE req.body.quantity, entonces quantity = 1;
    //5. Agregar al producto con la siguiente estructura
    /**
     * {
     *  product: pid proporcionado,
     *  quantity: variable de cantidad que venía de req.body
     * }
     */
    //6. si el producto ya existe en el arreglo del carrito, puedo aumentar en 1 la cantidad del producto, o bien aumentarle la
    //cantidad de la variable quantity
})