import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Booleans In-Depth
// ----------------------------------------------------------------

// Boolean Literal, Function and Constructor Syntax

// Boolean Literal
console.log(true, false); // true false

// Function
const arg1 = '';
const arg2 = 'X';
const arg3 = 0;
const arg4 = 1;
const arg5 = -1;
console.log(Boolean('')); // false - not recommended to use it, unless there is need to perform a type conversion and coerce that type from a string where we want to see if something is empty.
console.log(Boolean(arg1)); // false
console.log(Boolean(arg2)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Constructor Syntax
console.log(new Boolean(arg2)); // [[PrimitiveValue]]: true
console.log(new Boolean(arg3)); // [[PrimitiveValue]]: false
console.log(new Boolean(arg4)); // [[PrimitiveValue]]: true
console.log(new Boolean(arg5)); // [[PrimitiveValue]]: true
