// all actions or the verbs thing we do and when we do them

console.dir(document);
const body = document.body;

// gather the element place them in a variable.
const h1 = document.querySelector('h1');
const input = document.querySelector('#username');
const button = document.querySelector('.submit-button');

// place an element inside another elements children list
body.prepend(h1);

// change the text of an element
button.innerText = 'ADD AN ITEM';

// change a style
input.style.color = 'red';
h1.style.backgroundColor = 'red';

// add a listener
button.addEventListener('click', addLi);



function addLi() {
    button.style.color = 'green';

    // create an element
    const li = document.createElement('li');

    body.appendChild(li);
    li.innerText = input.value;

    input.value = '';

    li.addEventListener('click', addClass);
}


function addClass() {
    console.log(this);
    // add classes
    this.classList.add('hasBeenClicked');
}
console.log(Math.random())
