import UserManager from "./managers/UserManager.js";
import moment from "moment";
import papaconqueso from 'papaconqueso';

async function context() {
    const manager = new UserManager();
    // await manager.createUser({
    //     firstName:"Luis",
    //     lastName:"Figueredo",
    //     username:"figuido3000",
    //     password:"123"
    // })

    const loginAttempt = {
        username:"figuido3000",
        password:"1234"
    }
    manager.validateUser(loginAttempt);
}

//Descomentar sólo si quieres probar el UserManager
//context();

const today = new Date();
const todayMoment = moment();

papaconqueso.papaLog(`Hola


soy una papa`);