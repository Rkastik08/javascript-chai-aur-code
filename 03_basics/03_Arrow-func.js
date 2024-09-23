const user = {
    username: "Astik",
    email: "astik@google.com",

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`); //here this defines the current context means current scope.
        
        
    }
}
user.welcomeMessage()
user.username = "Monisha"// changing of current context.

// console.log(user.username) // user.username

// console.log(this); // context under {}, that can be object,functions


function me()
{
    console.log(this);    
}

// me() // must necessary to execute function things.

const myname ={
    name: "Astik",
    age: 18,
    print: function(){
        console.log(this); // to print something in object the log should be within a function. remember this.
        
    }
    
}

console.log(myname); //defining object (recalling)

//this keyword cant be used in functions. only in object. remember thiis.

const func1 = function(){
    let username = "Arya"
    console.log(this.username);
}

// func1() //shows undefined

const func2 = () =>{
    let username = "Arya"
    console.log(this.username);
}

// func2() //shows undefined

// basic arrow functions ===>

//    const addAgain = (n1,n2) => {

//     return(n1 + n2);
// }

// console.log(addAgain(3,4)) //normal arrow function.



const addAgain_2 = (n1,n2) => n1 + n2; //implicit return arrow function
const addAgain_Xb = (n1,n2) => (n1 + n2); //implicit return arrow function 
// [N.B: if {} return must be written but if () not required return keyword.]

console.log(addAgain_2(3,4))
console.log(addAgain_Xb(3,4));

const addAgain_3 = (n1,n2) => (n1+n2) // just returning value

const ObjReturn = (n1,n2) => ({username: "Astik"})



