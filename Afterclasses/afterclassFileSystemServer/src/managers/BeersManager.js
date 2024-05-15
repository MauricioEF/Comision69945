import fs from 'fs';

const PATH = './src/files/beers.json';

class BeersManager {
    constructor(){
        //Tener ubicado dónde vivirá el archivo
        this.init();
    }

    async init(){
        if(fs.existsSync(PATH)){
           //Si ya existe, no hago nada
           console.log("Archivo beers.json encontrado") 
        }else{
            try{
                await fs.promises.writeFile(PATH,JSON.stringify([]))
            }catch(error){
                //Si llegó aquí es porque FALLÓ en crear el archivo.
                //La decisión es tuya.
                console.log("El archivo beers.json no pudo crearse: ",error);
                //En este ejemplo, mi servidor va a explotar si no existe ese archivo.
                process.exit(1);
            }
        }
    }

    async getBeers(){
        try{
            const data = await fs.promises.readFile(PATH,'utf-8');
            return JSON.parse(data);
        }catch(error){
            //No hay cervezas
            return null;
        }
    }
    
    async saveBeers(beers){
        try{
            await fs.promises.writeFile(PATH,JSON.stringify(beers,null,'\t'));
            return true;
        }catch(error){
            console.log("Error al escribir cervezas: ", error)
            return false;
        }
    }

    async createBeer({price,taste,type,origin,size,brand="Generic", code}) {
        const newBeer = {
            code,
            price,
            taste,
            type,
            origin,
            size,
            brand
        }
        const beers = await this.getBeers();
        if(!beers){
            //Si llegué a este punto, seguramente hubo un error.
            return -1; //Si yo creo mis ids a partir de 1 en adelante.
        }
        if(beers.length===0){
            //Esta es la primera cerveza a insertar.
            newBeer.id = 1;
        }
        else{
            newBeer.id = beers[beers.length-1].id+1;
        }
        beers.push(newBeer);

        const created = await this.saveBeers(beers);

        if(!created){
            return -1;
        }

        return newBeer.id;
    }
}

export default BeersManager;