import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Number Literal, Function and Constructor Syntax

// Number Literal
const number1 = 99; // literal number -> number in its true numeric form
console.log(number1);

// Function
// perform a type-conversion in a non-constructor context
console.log(Number(55)); // 55
console.log(Number('33')); // 33 -> trying to create a nwe number in a non constructor context.
                                  // In other words,we are providing a type conversion,
                                  // and we are using the number as a function and not using the new keyword.
console.log(Number('44px')); // NaN -> not a number

// Constructor Syntax
// creates a wrapper Object
// avoid using it
console.log(new Number(66)); // Number {66}
console.log(new Number('55px')); // Number {NaN}
