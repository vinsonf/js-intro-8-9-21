// declared (give it a name)
// assigned (give it value)
// bound to global (attached to the main object)


// Simple / Primitive Data Structures
const no = false;
const abc = 'abc';
const numbers = 27;

// Complex / Compound Data Structures 
const array = [0,'this is index 1',"2",`3`,4,5,6,7,8,9];
const person = {
    name: 'Vinson',
    height: 6 + 'feet',
    isInstructor: true,
    body: {
        innerHTML: ''
    }
};



const button = document.querySelector('button');
const input = document.querySelector('#myText');
const p = document.querySelector('.result');
button.addEventListener('click', onButtonClick);
function onButtonClick() {
    console.log(input.value);
    p.innerHTML = input.value;
    document.body.style.backgroundColor = input.value;
}











