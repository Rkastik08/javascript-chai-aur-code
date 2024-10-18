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
                console.log('please click on a button!');
                
                    
        }

    }) 

} )

Array.from(body).forEach( (click) => {
    click.addEventListener('click', function (e){
        console.log(e.target);
        
        if(e.target){
            document.body.appendChild()
        }
    })
} )