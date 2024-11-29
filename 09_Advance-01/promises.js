const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Hello javascript")
        resolve()
    },1000)
})

promise1.then(() => {
    console.log("Promise consumed")
})

new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async task 2 without vatiable")
        resolve()
    },1000)
}).then(() => {
    console.log("Promise resolved")
})


const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        //we can also pass parameters through resolve() it will be object.
        resolve({
            userName: "Astik codes",
            Email: "code@example.com"
        })
    },1000)
})

promise3.then((user) => {
    console.log(user.userName) // it is the passed parameter from resolve because of then object.
})

const promise4 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({
                user: "Astik08", email: "astikgoswami2004@gmail.com"
                
            })
        }
        else{
            reject('System call is not responding, please try again')
        }
    }, 1000)
})

promise4
.then((user) => {
    console.log(user)
    return user.user
})
.then((userName) => {
    console.log(userName)
})
.catch((error) => {
    console.log("ERROR: Something went Wrong")
})
.finally(() => {console.log("The operation is completed")})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({
                user: "Javascript", password: "fawlrehtq9874"
                
            })
        }
        else{
            reject('ERROR: JS went Wrong')
        }
    }, 1000)
})

//another way to accept the promise is to wait some time if DB corrects then:-

async function consumePromise5(){
    try {
        const response = await promise5
    console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromise5()

async function getApi(){
   try {
    const responseApi = await fetch('https://api.github.com/users/Rkastik08')
    console.log(responseApi)
   const data = await responseApi.json()
   console.log(data)
   } catch (error) {
    console.log("E: ",error)
   }
}

// easy method .
fetch('https://api.github.com/users/Rkastik08')
.then((response) => { 
    return response.json()
 })
 .then((data) => { console.log(data.user)})
 .catch((error) => { console.log(error) })




