// Q. what they are
// A. set of instructions

// Q. Why
// A. reuse, identifySolution, time-later

console.log('runs')

function multiply2(anotherNumber) {
    console.log(2 * anotherNumber);
    return 2 * anotherNumber;
}

const by5 = multiply2(5);
const by10 = multiply2(10);

function area(length, width) {
    return length * width;
}

console.log(area(7885, 4987));
console.log(by10);
takesACallback(function() {console.log('works')})

function takesACallback(callback) {
    callback();
} // function declaration

takesACallback(function isCallback() {
    console.log('i am a callback')
});



const iamAFunction = () => {
    console.log('I am a normal function and should be treated as so')
}

iamAFunction();