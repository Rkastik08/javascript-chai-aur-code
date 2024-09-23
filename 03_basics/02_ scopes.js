// why VAR should not be used

let age = 50
if(true){
    const name = "Astik"
    let age = 20
    console.log("INNER: ",age);
    
   let city = "Dgp" // no Datatype or VAR can lead to data leak.
} // limitations of working is called scope.
console.log("Global: ",age);

// console.log(name); 
// console.log(age); 
// console.log(city); // !! VAR city is out of scope. For that VAR shouldnt be used.


function user1(){
    const city = "Mumbai"
    function user2(){
        let website = "google.com"
        console.log(city);
    }
    // console.log(website); 

    // sub functions can access the parent functions variables. But not vice-versa.

    user2()// here it prints Mumbai
    
}

 user1()// but the parent function must be executed to execute any child function.


 if(true){
    const name = "Astik"
    if(name === "Astik"){
        const website = " google.com"
        console.log(name + website);
        
 }
//  console.log(website); //shows error because it is out of scope of the child condition.
 
}
addOne(5) //this also correct to argument before function declaration.
function addOne(num){
    return num ++
}



const func = function addTwo(num){
    return num + 2
}
func(5) // the Variable is called expression sometimes. while argumenting expressions are used instead of function itself.

//but the expressioned function cant be called before declaration.
