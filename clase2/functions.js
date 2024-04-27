const array1 = [1,2,3]

// const arrayResult = array1.map()


const multiplyByTwo = value=>{
    return value*2;
}

const customMapFunction = (array,callbackFunction) => {
    let resultArray = [];
    for(let i=0;i<array.length;i++){
        resultArray.push(callbackFunction(array[i]))
    }
    return resultArray;
}

const newArrayResult = customMapFunction(array1,multiplyByTwo)

console.log(newArrayResult);

