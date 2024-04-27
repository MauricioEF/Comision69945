const fruits = ['apple','banana'];

const otherProducts = ['bread','meat','pan'];

const purchase = [...fruits,...otherProducts];

console.log(purchase);

const personalProperties = {
    firstName:"Sabrina",
    lastName:"Villareal",
    age:27
}

const otherProperties = {
    hobby:'chess',
    job:'Backend Developer',
}


const person = {
    ...personalProperties,
    ...otherProperties,
    age:20,
}

console.log(person);

const {firstName,lastName} = personalProperties;
const {job, ...otherRest} = otherProperties;

console.log(firstName);
console.log(lastName);

console.log(personalProperties.age);

