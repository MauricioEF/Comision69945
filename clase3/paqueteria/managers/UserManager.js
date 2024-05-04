import fs from 'fs';
import crypto from 'crypto';

export default class UserManager {
    
    constructor() {
        this.path = './managers/Users.json';
        this.init();
    }

    async init() {
        if(fs.existsSync(this.path)){
            console.log("El archivo de usuarios ya existe");
        }
        else{
            //No existe? lo creo.
            fs.writeFileSync(this.path,JSON.stringify([]))
        }
    }

    async createUser ({firstName,lastName,username,password}) {
        const newUser = {
            firstName,
            lastName,
            username,
            password
        }

        //Leer a todos los usuarios.
        const fileData = await fs.promises.readFile(this.path,'utf-8');
        //el fileData llega en string.
        const users = JSON.parse(fileData);

        if(users.length===0){//El usuario que estoy por insertar, es el primer usuario
            newUser.id = 1;
        }else{
            newUser.id = users[users.length-1].id+1;
        }

        newUser.salt =  crypto.randomBytes(128).toString('base64');
        newUser.password = crypto.createHmac('sha256',newUser.salt).update(newUser.password).digest('hex');

        users.push(newUser);
        
        await fs.promises.writeFile(this.path,JSON.stringify(users));

    }

    async validateUser({username,password}) {
        //Leer a todos los usuarios.
        const fileData = await fs.promises.readFile(this.path,'utf-8');
        //el fileData llega en string.
        const users = JSON.parse(fileData);

        //Buscar al usuario por username
        const user = users.find(u=>u.username===username);
        //Validamos si el usuario no existió (Práctica)

        const compareHash = crypto.createHmac('sha256',user.salt).update(password).digest('hex');
        if(compareHash === user.password){//Si el algoritmo devolvió lo mismo entonces sí pasó
            console.log("Logged in");
        }
        else{
            console.log("Incorrect Password");
        }
    }
}

