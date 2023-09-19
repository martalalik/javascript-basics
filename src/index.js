import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// String In-Depth
// ----------------------------------------------------------------

// Strings and Immutability

const immutableString = 'I shall not change!';
immutableString.toUpperCase(); // performing mutation to the string.
console.log(immutableString); // "I shall not change!" - will stay immutable, because we are not using variable - uppercaseString and assigning it, we don't ever has access to it!
// new variable where we can perform mutation.
const uppercaseString = immutableString.toUpperCase(); // immutableString passed by value, so it takes the string literal, it takes that raw value, and
// copies it, and then performs a toUpperCase() modification to the string.
// Copying by the value, this means that it doesn't get in the way, or it doesn't modify or effect the original string.
console.log(immutableString); // "I shall not change!"
console.log(uppercaseString); // "I SHALL NOT CHANGE!"


