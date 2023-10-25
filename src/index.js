import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Array Literal, Function and Constructor Syntax

// - Array is order list.
// - Array is typically created for lists of things.
// - Array is a special type of object.
// - Array is passed by reference, which means that if we mutate a referenced array, it will update an original array.

// LITERAL SYNTAX - []
const drinks = ['Lemonade', 'Lime', 'Peach'];
const drinksReference = drinks;

console.log(drinks); // (3)['Lemonade', 'Lime', 'Peach']
console.log(drinks === drinksReference); // true -> confirms that array is passed by reference. If drinksReference will be mutated it will make changes in the drinks array.
console.log([] === []); // false -> no two arrays are the same unless they are the same reference like so: drinks === drinksReference

// CONSTRUCTOR SYNTAX - new Array - do not use this approach
console.log(new Array('Lemonade', 'Lime', 'Peach')); // (3)['Lemonade', 'Lime', 'Peach'] -> with the 'new' key work we create a new instance of an array.

// FUNCTION SYNTAX
console.log(Array('Lemonade', 'Lime', 'Peach')); // (3)['Lemonade', 'Lime', 'Peach'] -> dropping the 'new' key word, but the Array() function will create a new instance under the hood.
