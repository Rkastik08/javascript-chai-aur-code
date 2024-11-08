const clock = document.querySelector('#clock')

// const clock = document.queryselector('#clock')

let date = new Date()

// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date()

    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString()

}, 1000 /*means 1 second*/)



