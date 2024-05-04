let name = "Douglas";
const timedFunction = (callback) =>{
    setTimeout(()=>{
        callback();
    },5000);
}

console.log("Comienza setTimeout");

timedFunction(()=>console.log("Finaliza setTimeout"));

console.log("Fin del programa");


const contador = () => {
    let counter = 1;
    console.log("Realizando operación");
    let timer = setInterval(()=>{
        console.log(counter);
        counter++;
        if(counter>5){
            clearInterval(timer);
        }
    },1000)
}

contador();