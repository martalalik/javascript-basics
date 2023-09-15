import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Correctly Type-Checking Numbers

console.log(typeof 99); // number
console.log(typeof 99.88); // number
console.log(99 instanceof Number); // false: 99 is literal value, is not an instance of Number
console.log(Number('99') instanceof Number); // false (it doesn't matter if you pass 99 or '99')
// this is because of the way that instances work and the 'new' keyword works.
// new Number('99') : creating new instance
console.log(new Number('99') instanceof Number); // true, there is no value in this check
console.log({}.toString()); // [object Object] - this is irrelevant to numbers and is just a string. Here we first create a new object
// This is the safest way to easy and reliably type check, any kind of value in JS and get very accurate representation of what it is.
// instead of accessing object directly -> {}.toString(),
// accessing object safely
console.log(Object.prototype.toString()); // [object Object]. Here we access object directly without creating a new object
console.log(Object.prototype.toString.call(99)); // [object Number] -> nice representation from the constructor of Object then the Number,
// cal() -> change the way of executing toString() function.
console.log(Object.prototype.toString.call(99).slice(8, -1)); // Number
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number'); // true, here switch case is created,
// converting particular type into a string, then changing the execution context and takes the constructor value from the number,
// then slicing values that are unwanted out of the string by cutting away [object ]
