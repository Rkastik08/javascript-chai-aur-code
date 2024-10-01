// Immediately Invoked Function Expression (IIFE) `(function)(execution)`

(function chai(){
    // Named IIFE cause Named Function under ()
    console.log(`I'm Astik`);
    
})() ; // this is called IIFE . To prevent Golbal scope pollution in particular function.

( (God) => {
    console.log(`My world is ${God}`);
} )(`Krishna`) // It is showing error not because it is arrow function, but the previous function context should end with ; in case of IIFE. 
