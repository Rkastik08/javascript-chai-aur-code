// for


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("5 is best number");
        
    }
    // console.log(i);
    
}

// nested loop

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // console.log(`Table of: ${i}`);
    
    for (let j = 0; j <= 10; j++) {

        // console.log(`Inner loop value ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

const myArr = ["Superman", "Batman", "Spiderman"]
console.log(myArr.length);

for (let index = 0; index <  myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
    
}

// break and continue
console.log(" ");

// for (let i = 1; i <= 20; i++) {
   
//     console.log(`value of i is ${i}`);
    
//     for (let j = 1; j <= 20; j++) {
//         console.log(`under index ${i} value of j is ${j}`);
        
//         if(j == 10){
//             break;
//         }
//     }
    
//  console.log("After break came line 53");
    
// }


// console.log("if after long time then naturally or came here 57  after break");

// from here we can see break just leads us to the exit of current scope not directly in global scope.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`detected 5 index`);
        continue; // skips the current check [here index 5]
    }
    console.log(`value of i is ${i}`);
    
}


