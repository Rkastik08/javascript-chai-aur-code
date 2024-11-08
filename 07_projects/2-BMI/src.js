
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const message = document.querySelector('#suggest')
    if(height <= 0 || isNaN(height) || height === ''){
        result.innerHTML = `invalid height`;
    }else if(weight <= 0 || isNaN(weight) || weight === ''){
        result.innerHTML = `invalid weight`;
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`

        
    if(bmi < 18.6){
        message.innerHTML = "you are underweight !!"
    }else if(bmi >= 18.6 && bmi <=24.9){
        message.innerHTML = "You are in Normal range"
    }else{
        message.innerHTML = `exercise needed :(`
    }
    }
    // payment gateway()
});


