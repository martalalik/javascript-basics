import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Immediately-Invoked Function Expressions (IIFE)

// const carPartID = function () {}; // this function should be called the moment the JS parser hits it, without us having to invoke carPartID itself.
// Creating some kind of private scope in JS (JS doesn't have a private scope), with emulate that using an IIFE, by wrapping function in ().
// With () treats the contents of what's inside these () as an expression, which then allows us to, we can call (with () at the end) that function.
// const carPartID = (function () {
//     console.log('Hello!') // Hello!
// })(); // this function calls itself
// console.log(carPartID); // undefined. Here we're just logging out not calling carPartID function.
// The reason we want to do this it creates a safe scope.

// We can add arguments into this IIFE.
// By adding id parameter, we're getting access to variable inside function
// const carPartID = (function (id) {
//     console.log(id) // qwe123
// })('qwe123');

const carPartID = (function (id) {
    const theID = `CAR_PART_${id}`;
    return name => `${theID}_${name.toUpperCase()}`;
})('qwe123');

console.log(carPartID('Left Door')); // CAR_PART_qwe123_LEFT DOOR
console.log(carPartID('Right Door')); // CAR_PART_qwe123_RIGHT DOOR