const fileSystem = require('fs');


//Write
//fileSystem.writeFileSync('./miPrimerArchivo.txt',"Hola mamá, soy un archivo :) . Tengo hambrita");

//Read
// try{
//     let fileContent = fileSystem.readFileSync('./miPrimerArchivo.txt','utf-8');
//     fileContent = fileContent.replace('hambrita','hambrota');
//     fileSystem.writeFileSync('./miPrimerArchivo.txt',fileContent);
//     console.log(fileContent);
// }catch(error){
//     console.log("AAA",error);
// }

//Append (Update)
// fileSystem.appendFileSync('./miPrimerArchivo.txt',' . Tengo hambre');

//Unlink (Delete)
// fileSystem.unlinkSync('./miPrimerArchivo.txt');


//Writing an object
// const persons = [
//     {
//         firstName: "Douglas",
//         lastName: "Bianchi"
//     },
//     {
//         firstName:"Pablo",
//         lastName:"Parisi"
//     }
// ] 

// fileSystem.writeFileSync('./person.json',JSON.stringify(persons,null,'\t'));