const fs = require('fs');

const date = new Date().toLocaleDateString('es');
const time = new Date().toLocaleTimeString();

console.log(time);

fs.writeFileSync('./dateTime.txt',`Fecha ${date} y hora ${time}`);

const myDateTime = fs.readFileSync('./dateTime.txt','utf-8');

console.log(myDateTime);