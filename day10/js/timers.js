


const button = document.createElement('button');
const thing = document.createElement('div');
thing.classList.add('thing');


document.body.appendChild(button);
document.body.appendChild(thing);

button.innerText = 'shake';
button.addEventListener('click', function() {
    console.log('action 1')
    
    thing.classList.add('shake');
    setTimeout(function() {
        console.log('action 2')
        thing.classList.remove('shake'); 
        thing.classList.add('active'); 
        thing.classList.add('small');
        setTimeout(function() {
            console.log('action 3')
            thing.classList.remove('active'); 
            thing.classList.remove('small');
            thing.classList.add('big');
            
            
            setTimeout(function() {
                thing.classList.remove('big')
            }, 4_000) 
        }, 4_000);


    }, 4_000);
})