import http from 'http';

const server = http.createServer((request,response)=>{
    response.end("Hola mundo del backend")
})

server.listen(8080,()=>console.log("Servidor listo"));