import express from 'express';
import BeersManager from './managers/BeersManager.js';

const app = express();
const PORT = process.env.PORT||8080;

app.use(express.json());//Permite al server procesar correctamente los json

const manager = new BeersManager();

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))


app.get('/api/beers',async(req,res)=>{
    const beers = await manager.getBeers();
    if(beers==null){
        return res.status(500).send({status:"error",error:"Couldn't get beers"})
    }
    res.send({status:"success",payload:beers})
})


app.post('/api/beers',async (req,res)=>{
    const beer = req.body; //Aquí debe venir la cerveza a crear por parte del cliente.
    //Validación de datos.
    //Obligatorios: taste, price, size, type, code
    if(!beer.taste||!beer.price||!beer.size||!beer.type||!beer.code){
        //Aquí tengo la responsabilidad de no permitirle crearla.
        return res.status(400).send({status:"error",error:"Incomplete values"});
    }

    const result = await manager.createBeer(beer);

    if(result === -1){
        return res.status(500).send({status:"error",error:"Couldn't create beer"});
    }

    res.send({status:"success",message:`Beer created with id: ${result}`});
})