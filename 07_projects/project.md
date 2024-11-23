# Projects related to DOM

## Projects Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# solution code
## 1-Color_Changer

```javascript
const buttons = document.querySelectorAll('.button') //its a nodelist

const body = document.querySelector('body')

//button is a nodelist so we can:-

buttons.forEach( (button) => {
    console.log(button);
    //now we will add a listener to check the actions or events from now on

    button.addEventListener('click',(e) => {
        console.log(e); //here e means events
        console.log(e.target);// target is where the event is held on
        console.log(e.target.id);

        // we got neccessary values, now:-
        switch(e.target.id){
            case 'grey':
                body.style.backgroundColor = e.target.id //because the color value is same as target id.
                body.style.color = 'white'//extras
                break;
            
            case 'blue':
                body.style.backgroundColor = e.target.id
                body.style.color = 'yellow'
                break;
            
            case 'yellow':
                body.style.backgroundColor = e.target.id
                body.style.color = 'blue'
                break;
            
            case 'white':
                body.style.backgroundColor = e.target.id
                body.style.color = 'black'
                break;

            default:
                console.log("Please click on the buttons!");
                    
        }

    }) 
} )
```
## 02-BMI
```javascript
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
```
## 03-Digital Clock
```javascript
const clock = document.querySelector('#clock')

// const clock = document.queryselector('#clock')

let date = new Date()

// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date()

    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString()

}, 1000 /*means 1 second*/)
```
## 04- Guess a Number
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<button id="newGame">Start again</button>';
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', (e) => {
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    lowOrHi.innerHTML = '';
    startOver.removeChild(p);
    playGame = true;
  });
}
```