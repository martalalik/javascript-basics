import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// String In-Depth
// ----------------------------------------------------------------

// String Literal, Function and Constructor Syntax

// String Literal - best to use
// Quotes
console.log('Pizza'); // Pizza
console.log("Pizza 'Hello!'"); // Pizza 'Hello!' -> when using single quotes inside the string, mast use double quotes as a wrapper for the whole string.
// or using \ backslash
console.log('Pizza \'Hello!\''); // Pizza 'Hello! -> now i can have single quotes inside of single quotes
console.log("Pizza \"Hello!\""); // Pizza 'Hello! -> now i can have double quotes inside of double quotes
console.log('Pizza "Hello!"'); // Pizza 'Hello! -> this is preferred format.

// Backticks & Concatenation
const pizza = 'Peperoni';
console.log('Pizza is: ' + pizza); // Pizza is Peperoni -> string concatenation - adding 2 strings.
console.log(`Pizza is: ${pizza}`); // Pizza is Peperoni -> passing expression into a string. ${pizza} -> it is template literal string.
// this gives added support for multi-line strings.
console.log(`

Pizza is: 

${pizza}

`);

// Function - avoid
// String() object
console.log(String(55)); // 55 -> returned as a string.
console.log(String(55 + 11 )); // 66 -> returned as a string.
console.log(String(55 + '11' )); // 5511 -> returned as a string. Here happens string concatenation.
console.log(String({name: 'Pepperoni'})); // [object Object] -> the string is calling that .toString() method and convert object to a string.
console.log(String([1, 2, 3, 4])); // 1, 2, 3, 4 -> the same happens here like with an object.

// new String() -> Constructor Syntax - avoid
console.log(new String(55)); // String {'55'} --> 0: '5' 1: '5' [[PrimitiveValue]]: '55' -> Creates string wrapper,

