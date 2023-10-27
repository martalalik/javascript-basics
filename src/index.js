import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Correctly Type-Checking Arrays

console.log(typeof []); // object
console.log([] instanceof Array); // true, better option then typeof
console.log(new Array() instanceof Array); // true
console.log(Array.isArray([1, 2])); // true -> exceptional way for arrays
console.log(Object.prototype.toString.call([])); // [object Array] -> bulletproof!!!
