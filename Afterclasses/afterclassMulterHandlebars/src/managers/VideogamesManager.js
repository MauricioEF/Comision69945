import fs from 'fs';
import __dirname from '../utils.js';

const PATH = `${__dirname}/db/videogames.json`;

export default class VideogamesManager {
    
    constructor(){
        this.init();
    }

    async init(){
        if(fs.existsSync(PATH)){}
        else await fs.promises.writeFile(PATH,JSON.stringify([]));
    }

    async getVideogames() {
        const data = await fs.promises.readFile(PATH,'utf-8'); //Esto trae una string
        return JSON.parse(data);
    }

    async createVideogame(videogame){
        const videogames = await this.getVideogames();
        if(videogames.length===0){
            videogame.id = 1
        }else {
            videogame.id = videogames[videogames.length-1].id+1;
        }
        videogames.push(videogame);
        await fs.promises.writeFile(PATH,JSON.stringify(videogames,null,'\t'));
        return videogame.id;
    }

    async getVideogameById(id){
        const videogames = await this.getVideogames();
        const videogame = videogames.find(v=>v.id==id);
        return videogame;
    }
}