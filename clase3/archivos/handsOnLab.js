const fs = require('fs');

class UserManager {

    constructor(){
        this.path = './Users.json';
        this.init();
    }

    //init LO CREAS TÚ siempre nos va a servir para inicializar las cosas
    async init() {
        if(fs.existsSync(this.path)){
            //Si sí existe, tranquilos todos, no hay que crear nada
        }
        else{
            //¡Cuidado! Si no creo el archivo en este momento, puede que tenga problemas después
            await fs.promises.writeFile(this.path,JSON.stringify([]))
        }
    }

    createUser = async ({firstName,lastName,age,course}) =>{
        try{
            const newUser = {
                firstName,
                lastName,
                age,
                course
            }
            //¿Cómo saber dónde insertarlo, hasta tener más usuarios?
            const fileData = await fs.promises.readFile(this.path,'utf-8');
            const users = JSON.parse(fileData); //Convierte una string, a un arreglo u objeto real
    
            if(users.length===0){//El usuario que estoy por insertar, es el primer usuario
                newUser.id = 1;
            }else{
                newUser.id = users[users.length-1].id+1;
            }
    
            users.push(newUser);
    
            await fs.promises.writeFile(this.path,JSON.stringify(users,null,'\t'))
    
            return newUser.id;
        }catch(error){
            console.log("Error al insertar usuario");
            return null;
        }
    }

}

const context = async() =>{
    const userManager = new UserManager();

    const user = {
        firstName:"Diego",
        lastName:"Olivera",
        age:27,
        course:"Backend"
    }
    await userManager.createUser(user);
}

context();