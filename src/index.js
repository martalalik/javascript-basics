import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Understanding Not-a-Number

const result = Number('55px');
// isNan(number: number): boolean - specifically checks the value of NaN; avoid using alone without Number.isNaN()
console.log(isNaN(result)); // true
console.log(isNaN('I am a string')); // true, but the behavior here of isNaN is broke, because it doesn't get really a NaN but a string

// Number.isNaN(number: unknown): boolean
// but is can be fixed or properly used, was added in ES2015
console.log(Number.isNaN(result)); // true - here specifically checking for NaN
console.log(Number.isNaN('I am a string')); // false, now is correct
console.log(Number.isNaN(Number.NaN)); // true

// Number.IsInteger(number: unknown): boolean -> checking if a number is indeed a number
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger(2.7)); // false - is a floating point number

