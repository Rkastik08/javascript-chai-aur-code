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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// this is called Heap memory reference(value changed).
let userOne = {
    email: "astik@google.com",
    age: 20
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "goswami@google.com"

console.log(userTwo.email);
console.log(userOne.email);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// This is called stack memory copy of value not address(Value not changed).

let anotherId2 = "Astik"
let anotherName = anotherId2

anotherName = "Monisha"

console.log(anotherId2);
console.log(anotherName);

console.log(typeof console);


