import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Integers and Floating Points

// console.log(99.99); // 99.99
// console.log(0.1 + 0.2 === 0.3); // false -> it is because how floating point number work due to their binary nature of their encoding.
console.log(0.1 + 0.2); // 0.30000000000000004 -> this is how computer add numbers together
// console.log(100 / 3); // 33.333333333333336
// console.log(33.333333333333336 * 3); // 100
// console.log(33.33333333333333333333333 * 3); // 100


const price = 9.33;
const quantity = 3;
console.log(price * quantity); // 27.990000000000002

// way of correctly rounding numbers
const anotherPrice = 9.33 * 100; // first - removing the decimal point with *100
const anotherQuantity = 3;
console.log(anotherPrice * anotherQuantity / 100); // then - add the decimal point with /100 so now will give 27.99
