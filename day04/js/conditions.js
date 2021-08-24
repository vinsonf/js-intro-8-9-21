// conditions 
// all conditions return true or false;

const myName = 'Joe';
const x = 5;
const comparative = [1 > 2, 5 >= 5, 'a' === 'a', 'a' !== 'b'];

const falsey = [0, '', false, undefined, null, NaN]

if (2 === '2') {
    console.log('yes it is')
} else {
    console.log('no it is not')
}

2 === '2' ? console.log('yes') : console.log('no')