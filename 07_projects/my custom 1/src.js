const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id
                body.style.color = 'white'
                break;

            case 'grey':
                body.style.backgroundColor = e.target.id
                body.style.color = 'white'
                break;

            case 'white':
                body.style.backgroundColor = e.target.id
                body.style.color = 'black'  
                break;

            case 'blue':
                body.style.backgroundColor = e.target.id
                body.style.color = 'yellow' 
                break;
                
            default:
                console.log("please click on the buttons!");
                break;
        }
    
    })
} )

