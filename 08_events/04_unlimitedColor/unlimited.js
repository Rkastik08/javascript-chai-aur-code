const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

function randomColor(){
  const hex = "0123456789ABCDEF"
  let color = "#"
  for(i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let time
const startChangingColor = () => {
  if(!time){
    time = setInterval(changeBgColor, 1000)
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor()
  }
}

const stopChangingColor = () => {
  clearInterval(time)
  time = null;
}

start.addEventListener('click', (e) => {
  startChangingColor()
})
stop.addEventListener('click', (e) => {
  stopChangingColor()
})

// cleanup of unnecessary things is a professionalism in real life and also code life.