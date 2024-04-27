const sum = (num1,num2) => {
    return new Promise((resolve,reject)=>{
        if(num1===0||num2===0) {
            reject("Operación innecesaria");
        }
        const result = num1+num2;
        if(result===0) {
            reject("El cero es neutro y no puede servir como resultado");
        }
        if(result<0){
            reject("El resultado no puede ser menor que cero");
        }
        resolve(result);
    })
}

const divide = (numerator,denominator) => {
    return new Promise((resolve,reject)=>{
        if(typeof numerator !=="number" || typeof denominator!=="number"){
            reject("Both arguments should be NUMBERS")
        }
        if(denominator === 0){
            reject("Cannot divide by zero")
        }
        resolve(numerator/denominator);
    })
}

const context = async() =>{
    try{
        const result = await sum(1,2);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

context();