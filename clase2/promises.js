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

divide(1,2)
.then((result)=>{
    console.log(result);
    const resultadito = result +1;
    return resultadito;
})
.then((secondResult)=>{
    console.log(secondResult)
    throw new Error("Oops");
})
.catch((error)=>{
    console.log(error);
})