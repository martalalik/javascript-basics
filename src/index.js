import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>Array.prototype.reduce()</h1>';

// ----------------------------------------------------------------
// Arrays In-Depth
// ----------------------------------------------------------------

// Exploring Array.reduce

// - array.reduce() -> is a method that exists on Array.prototype.
// - Think: I want to take my array and reduce it to just ONE VALUE.
// - reduce() is commonly used for performing things such as MATH expressions and EQUATIONS. Calculating total.
// - syntax: const reducedValue = yourArray.reduce(() => {prev, nex, index, yourArray}, 0);
// - How reduce() works:
// - on the first loop is the number 1(prev) + 2(next) = 3(result). The next loop takes a previous result 3(prev result) + 3(next) = 6(result), and so on. This is known as an ACCUMULATING VALUE, it's accumulating the results of each callback.
// [1, 2, 3].reduce((prev, next) => prev + next); // 6
// - adding INITIAL VALUE 10
// - in this case prev changed to 10, so the first loop will start with 10(initial value)
// [1, 2, 3].reduce((prev, next) => prev + next, 10); // 16
// - Checking what is happening, how the numbers are added, this can be done, with return, so we need get rid of implicit arrow function:
// [1, 2, 3].reduce((prev, next) => {
//     console.log(prev, next);
//     return prev + next;
// }, 10); // 10 + 1 // 11 + 2 // 13 + 3
// - It returns any kind of value type: flattened arrays, data structures, concatenated strings, create new or merged objects, or anything else.

const items = [
    { id: '🍔', name: 'Super Burger', price: 399 },
    { id: '🍟', name: 'Jumbo Fries', price: 199 },
    { id: '🥤', name: 'Big Slurp', price: 299 }
];

// array of numbers
// creating an array of numbers
// and we can chain the methods as well, because we're returning values
// const reduced = items.map((item) => item.price).reduce((prev, next) => prev + next);
// console.log(reduced); // (3)[399, 199, 299] -> when only map // 897 -> when reduce

// array of objects
// when we want reduce() array of objects, prev will start wih an object, because we are not supplying an initial value. Here we can add as an initial value 0.
const reduced = items.reduce((prev, next) => prev + next.price, 0); // 0 + 399 // 399 + 199 // 598 + 299
console.log(reduced); // 897
console.log(items); // (3)[{…}, {…}, {…}]

// IMPERATIVE style - old ways
// let reduced;
// let prev = 0;
// for(let i = 0; i < items.length; i++) {
//     const next = items[i];
//     prev = prev + next.price;
// }
// reduced = prev;
// console.log(reduced); // 897