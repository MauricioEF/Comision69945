const fs = require('fs');


//Write

// fs.writeFile('./archivocallback.txt','Esto se escribió en un callback',(error)=>{
//     if(error) {
//         console.log("Escribí mal porque soy tonto");
//         return;
//     }
//     console.log("Escritura correcta")
// })



//Read
// fs.readFile('./archivocallback.txt','utf-8',(error,value)=>{
//     if(error){
//         console.log("Falló al leer el archivo");
//         return;
//     }
//     console.log(value);
// })


fs.appendFile('./archivocallback.txt','\n Papa con quesito',(error)=>{
    if(error){
        console.log("No pude actualizar :(");
        return;
    }

    console.log("Actualizado");
})


//¿Cómo implementarías el Unlink?