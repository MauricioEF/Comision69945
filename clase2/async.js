const divide = (numerator, denominator) => {
  return new Promise((resolve, reject) => {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      reject('Both arguments should be NUMBERS');
    }
    if (denominator === 0) {
      reject('Cannot divide by zero');
    }
    resolve(numerator / denominator);
  });
};

//Descomentar para prueba síncrona y asíncrona
// console.log("Iniciando mi operación de división Maestra suprema HD")

// const a = divide(4,2)
// .then(result=>console.log(result))
// .catch(error=>console.log(error));

// console.log(a);

//FULL ASYNC AWAIT
// console.log('Fin del programa');

async function asyncContext() { //TODO LO QUE YO PONGA AQUI, A PESAR DE TENER TAREAS SINCRONAS, SE COMPORTARAN ASINCRONAS
  console.log('Iniciando mi operación de división Maestra suprema HD');
  
  try{
    const a = await divide(4, 0)
    console.log(a);
  }catch(error){
    console.log(error);
  }

  console.log('Fin del programa');
}

asyncContext();