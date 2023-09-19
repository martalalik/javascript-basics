import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// String In-Depth
// ----------------------------------------------------------------

// Correctly Type-Checking Strings

console.log(typeof 'Pepperoni'); // string
console.log(typeof '0'); // string
console.log('Pepperoni' instanceof String); // false
console.log(new String('Pepperoni') instanceof String); // true -> with the key word 'new' we are creating an instance.
console.log(String('Pepperoni') instanceof String); // false -> we are not creating an instance. We are using just static function String().
console.log(Object.prototype.toString.call('Pepperoni')); // [object String] -> this is the best bulletproof way of detecting the typeof something!!!


