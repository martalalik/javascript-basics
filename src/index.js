import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----
// Conditional logic

// console.log(1 == 1); // true
// console.log(1 === 1); // true
//
// console.log(1 == '1'); // true - converting both to a string, called: coercion
// console.log(1 === '1'); // false
//
// console.log(Boolean(true)); // true
// console.log(Boolean('')); // false
// console.log(Boolean('true')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('any string')); // true
//
// console.log(Boolean(true)); // true
// console.log(!!true); // true; called: double bang, the same as above
// console.log(!true); // false
//
// // mainly truthy values
// console.log(!!{}); // true
// console.log(!![]); // true
// console.log(!!new Date()); // true
// console.log(!!'0'); // true
// console.log(!!''); // false
// console.log(!!0); // false
// console.log(!!42); // true; any number above 0 gives true
// console.log(!!-42); // true
// console.log(!!3.14); // true
// console.log(!!-3.14); // true
//
// // mainly falsy values
// console.log(!!false); // false
// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!0); // false
// console.log(!!NaN); // false
// console.log(!!''); // false
// console.log(!!false); // false


// If, Else If and Else Statements

const condition = false;

if (condition) {
  console.log('Yes'); // Yes if condition=true
} else {
  console.log('No'); // No if condition=false
}

// shorter versions
// 1
if (condition) console.log('Yes');
else console.log('No');
// 2
condition ? console.log('Yes') : console.log('No');

const number = 99;
// const number = 1;
let result; // undefined

if (number === 1) {
  result = 'One';
} else if (number === 99) {
  result = 'Ninety-Nine';
} else if (number === 1000) {
  result = 'One Thousand';
} else {
  result = 'No Match';
}
console.log(result);
