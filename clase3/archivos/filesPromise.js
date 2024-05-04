const fs = require('fs');


async function asyncContext(){

    try{
        //Write
        fs.promises.writeFile('./archivoPromesa','Hola, me escribí desde un archivo');

        //Completa a tu gusto
        // fs.promises.readFile();
        // fs.promises.appendFile();
        // fs.promises.unlink();
        
    }catch(error){
        console.log("ERROR EN ARCHIVOS: ",error);
    }
}