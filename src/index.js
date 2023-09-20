import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Booleans In-Depth
// ----------------------------------------------------------------

// Correctly Type-Checking Booleans

console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(true instanceof  Boolean); // false
console.log(new Boolean('X') instanceof  Boolean); // true
// with booleans there is no need to go over the top with type safety, but this is what can be done to.
console.log(Object.prototype.toString.call(true)); // [object Boolean]

