// simple/primitive
let number = 0;
number = 1;
// simple/primitive
let string = 'test1000';
string = '1000'
// simple/primitive
const boolean = true;

// complex/ compound
const array = [0, number, true, boolean, 'test', string];
// complex/ compound
const object = {
    number: 0,
    string: 'test',
    boolean: true,
    otherObject: {
        name: 'some other object'
    },
    myArray: array
};

console.log(document.querySelectorAll('button'))
document.querySelectorAll('button')[2].innerText = '<h1>Hello</h1>'