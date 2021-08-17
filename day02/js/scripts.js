// Verbs 

// Actions (things we do)

var no = false;    // Boolean
var yes = true;    // Boolean

let abc = 'abc';   // String
let abcd = "abcd"; // String

const count = 1;     // Number
const number = 2.2;  // Number

// declare   // VAR CONST LET
// redeclare // VAR

// assign    // VAR CONST LET
// re-assign // VAR LET

// bind to the global object (access from anywhere)
// VAR

const array = [];
const object = {
    name: 'Vinson',
    score: 100,
    isPresent: true,
}

const falsey = [false, 0, '', null, NaN, undefined];


const input = document.querySelector('input');
const button = document.querySelector('button');
button.style.fontSize = '100px';
input.value = 'Test';
input.type = `color`;




button.addEventListener('click', changeBackgroundColorToInputValue);



/// Create, Read, Update, Delete




















button.addEventListener('click', log);



/// 3 reasons for function
// 1. Repeatable
// 2. Useable later
// 3. Gives a name for the action

function log() {
    console.log('log');
    console.log('made a sandwich');
    console.log('told the meaning of life');
}

function changeBackgroundColorToInputValue() {
    console.log(document.querySelector('input').value);
    document.body.style.backgroundColor = input.value;
    button.innerText = input.value;
}

// Logic
if (input.value === '#000001') {
    console.log('run this code')
} else {
    console.log('no it  is something different')
}


// Loops

for(let i = 0; i <= 100; i++) {
    console.log(i);
}
