const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async process 1")
        resolve()
    }, 1000)
})

promise1.then(() => {
    console.log("Async 1 resolved")
})
//
new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Async process 2")
        resolve()   
    }, 1100)
    
})
.then(() => {
    console.log("Async process 2 resolved")
})


const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            console.log("Async process 3")
            resolve()
        }else{
            reject("ERROR: Something went wrong")
        }
    }, 1000);
})

promise3
.then(() => {
    console.log("Async process 3 resolved")
})
.catch(() => {
    console.log("Error happend")
})
.finally(() => {
    console.log("The operation is completed")
})

