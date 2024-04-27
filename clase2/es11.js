class Person {
    firstName;
    #bodyCount; //Número de personas con las que te has acostado
    
    getBodyCount = () =>{
        return this.#bodyCount;
    }
}

const person = new Person();

person