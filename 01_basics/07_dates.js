//all date printing methods =>
// let mmyDate = new Date()
// console.log(mmyDate.toDateString());
// console.log(mmyDate.toISOString());
// console.log(mmyDate.toJSON());
// console.log(mmyDate.toLocaleString());
// console.log(mmyDate.toLocaleTimeString());
// console.log(mmyDate.toLocaleDateString());

// console.log(typeof mmyDate);


let customDate = new Date(2024,0,1)
// console.log(customDate.toDateString());

let createDate = new Date("01-04-2024")
// console.log(createDate.toDateString());

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000));// Gets the seconds
// console.log(myTimeStamp);

//getting specific things from date =>

    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth() + 1);
    console.log(newDate.getDay());

// String interpolation method =>
    
//    console.log(`${newDate.getDay()} is the day today and the time is ${newDate.getTime()}`);

//another modern method(customized) =>
    
    console.log(newDate.toLocaleString('default',{
        weekday: "long",
        timeZoneName: "long"

    }));
     

    




