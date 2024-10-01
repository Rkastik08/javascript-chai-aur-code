const userEmail = "Astik@Email.com"

if (userEmail) {
    console.log("User got an Email");
}else console.log("No email of this user");

// this is truthy value that if one variable has any value it is considered as true.

/*
falsy values:-

false, 0 , -0 , BigInt '0n', null, undefined, NaN(Not a Number)
*/ // => except these all are truthy values

// surprising truethy values:-
// "0", "false", "<space>", [],{}, function(){}

// detecting some empty values:-

const emptyArr = []

// how to see the length of an array.
if(emptyArr.length === 0){
    console.log("Empty Array");
    
}

const emptyObj = {}

// how to convert the object in array and see the length.
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object");
}

console.log(Object.keys(emptyObj));


const emptyFunc = function() {}

