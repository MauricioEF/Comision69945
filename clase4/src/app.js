import express from 'express';
import { validatePosition } from './utils.js';

const app = express();

app.use(express.json());

//Ruta base, la primera que se visita de un servidor.
//req = request = petición
//res = response = respuesta
app.get('/papas',(req,res)=>{
    const papa = "papa con quesito y chili";
    const b = 1+2;
    const valid = 2<3;
    const person = {
        firstName:"Gustavo",
        lastName:"Bahamonde",
        favoriteMeal:papa
    }
    const array = [
        1,2,3,4,5
    ]
    res.send(array)
})

app.get('/request',(req,res)=>{
    req.url //Puedo acceder a la URL de arriba como variable
    req.params //Puedo acceder a params
    req.query //Puedo acceder a búsqueda.
    req.cookies //Puedo acceder a mis galletas.
    
    console.log(req);
    res.send("Prueba de req");
})


const persons = [
    {
        firstName:"Sabrina",
        lastName:"Villareal",
        active:true
    },
    {
        firstName:"Matías",
        lastName:"Rambeaud",
        active:true
    },
    {
        firstName:"Sabrina",
        lastName:"Villarealosa",
        active:false
    },
]

app.get('/persons',(req,res)=>{
    //El query NO RESTRINGE LA BÚSQUEDA
    const name  = req.query.name;
    console.log(req.query);
    if(name){//El cliente quiere filtrar a las personas por nombre
        const filteredPersons = persons.filter(person => person.firstName === name);
        return res.send(filteredPersons);
    }
    res.send(persons);
})

app.post('/persons',(req,res)=>{

})

app.put('/persons',(req,res)=>{

})

app.get('/persons/:name',(req,res)=>{
    const name = req.params.name;
    //Si lo que parametricé es el nombre, entonces FILTRO POR NOMBRE
    console.log(name);
    const person = persons.find(p => p.firstName === name);
    if(person){
       return res.send(person);
    }
    else{
       return res.send("Esa persona no existe");
    }

})




app.get('/products',(req,res)=>{
    //Obtener los productos
    res.send("Hola, supongamos que te envié un producto")
})

app.post('/products',(req,res)=>{
    //Crear un producto
    res.send("Aquí voy a crear un producto");
})

app.put('/products',(req,res)=>{
 //Actualizar producto
})

app.delete('/products',(req,res)=>{
    //eliminar el producto
})


app.get('/message',(req,res)=>{

})

app.get('/carts',(req,res)=>{

})

app.get('/payments',(req,res)=>{

})




app.put('/persons',(req,res)=>{
    //Axel para cambiarse a Axol
})



//Actividad Palabras
let sentence = "Frase Inicial";

app.get('/api/sentences',(req,res)=>{
    //Me devuelve la frase
    res.send(sentence);
})

app.get('/api/sentences/:pos',(req,res)=>{
    const pos = req.params.pos;
    //¿Qué pasaría si me da una posición inexistente en el arreglo?
    const words = sentence.split(" ");
    const {valid,reason,parsedPosition} = validatePosition(words,pos);
    if(!valid) res.status(400).send(reason);
    res.send({
        word:words[parsedPosition-1]
    })
})

app.post('/api/sentences',(req,res)=>{
    //Añade algo a la frase
    const word = req.body.word;
    console.log(word);
    sentence += ` ${word}`;
    res.send({
        word,
        pos:sentence.split(' ').length
    })
})

app.put('/api/sentences/:pos',(req,res)=>{
    const word = req.body.word;
    const pos = req.params.pos;
    //¿Qué pasaría si me da una posición inexistente en el arreglo?
    if(isNaN(pos)){ //NaN === Not a Number
        return res.status(400).send("El parámetro pos deber numérico")
    }
    //La posición me llegó como string, necesito convertirla a número
    const parsedPosition = parseInt(pos);
    const words = sentence.split(' ');

    if(parsedPosition<=0||parsedPosition>words.length){
        //No puedo acceder al arreglo
        return res.status(400).send("Posición inválida");
    }
    
    const previousWord = words[parsedPosition-1];
    words[parsedPosition-1] = word;
    sentence = words.join(" ");

    res.send({
        updated:sentence,
        previous:previousWord
    });
})

app.delete('/api/sentences/:pos',(req,res)=>{
    const pos = req.params.pos;
    //¿Qué pasaría si me da una posición inexistente en el arreglo?
    if(isNaN(pos)){ //NaN === Not a Number
        return res.status(400).send("El parámetro pos deber numérico")
    }
    //La posición me llegó como string, necesito convertirla a número
    const parsedPosition = parseInt(pos);
    const words = sentence.split(' ');

    if(parsedPosition<=0||parsedPosition>words.length){
        //No puedo acceder al arreglo
        return res.status(400).send("Posición inválida");
    }
    const deletedWord = words[parsedPosition-1];
    words.splice(parsedPosition-1,1);
    sentence = words.join(" ");
    res.send({
        deleted:deletedWord,
        newSentence:sentence
    })
})

app.listen(8080,()=>console.log("Express Listo :)"));
