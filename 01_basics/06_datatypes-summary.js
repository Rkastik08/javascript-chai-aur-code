// primitive datatypes 

// String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const Id = Symbol('123')// Symbols
const anotherId = Symbol('123')

console.log(Id === anotherId);

const bigNumber = 83748926394876n //ending with n means bigint

console.log(typeof bigNumber);

//Reference(Non-primitive) datatypes

// Array, Objects, Functions

const heros = ["Shaktiman","Nagraj","Doga"] // array

let myObj = {
    name: "Astik",
    score: 23,
    age: 20

} // its called object



const myFunction = function(){
    console.log("Hello world");
    
} //it is function

console.log(typeof myFunction);
console.log(typeof heros);

