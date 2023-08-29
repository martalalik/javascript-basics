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

