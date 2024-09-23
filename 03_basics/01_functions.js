/*console.log("A");
console.log("s");
console.log("t");
console.log("i");
console.log("k");
this is very much time taking so there comes functions*/

function Name(){
console.log("A");
console.log("s");
console.log("t");
console.log("i");
console.log("k");
}//funvtion calling

// Name() //execution

// function addTwoNums(num1,num2){// NUM1,NUM2 are PARAMETERS.
//     console.log(num1 + num2); 
// }

function addTwoNums(num1,num2){// NUM1,NUM2 are PARAMETERS.
    
    return (num1 + num2) //nothing will be executed in function after RETURN.
}

// addTwoNums(3, 4) passing parameters are called ARGUMENTS.

// after returning some results the function execution must be under console.log otherwise it will just return the value in memory but will not print.

// addTwoNums(3, 4)

function isLoggedIn(username = `Guest${Math.floor(Math.random() * 100000000)}`){// passes a default value.
//   if(username != undefined)
  if(username)
    return (`${username} just logged in`) //string interpolation
  if(!username)
    console.log("please enter a username");
    
}

const login = isLoggedIn("Astik")

// console.log(login)
//or
// console.log(isLoggedIn("Astik"));

// console.log(isLoggedIn("Astik"));
// console.log(isLoggedIn());



function calculateCartPrice(...price){ // ... is both rest and spread operator depending on the use cases. it returns multiple arguments. Here it is rest.
    return price
}
// console.log(calculateCartPrice(1000,10000,200));

/*function calculateCartPrice(...value1,...price){ // ... is both rest and spread operator depending on the use cases. it returns multiple arguments. Here it is rest. and always rest operator will be last parameter.
    

    return value1
    
}*/

// console.log(calculateCartPrice(1000,10000,200,500,1000));


const user ={
    name: "Astik",
    age: 18
}

function handleObject(anyObject){
    console.log(`${anyObject.name} is ${anyObject.age} years old`);
    
}


handleObject(user) //or 
handleObject({name: "Astik", age: 18}) //without pre-defining object

//defining array as same

const arr = [1,2,3,4,5]
function handleArray(anyArray){
    console.log(anyArray);
    
}
handleArray(arr) //or
handleArray([1,2,3,4,5])








