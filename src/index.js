import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Function Return Values

// 1: With Function Declaration
function makeCarPrice1(...params) {
  const total = params.reduce((prev, next) => prev + next);
  // console.log(`Total: ${total}`);
  // IMPLICIT RETURN
  // return; -> this return will always be added by a function under the hood after executing step by step the function body, even if you won't add it at the end of the function.
  // Once it's returned, we then get the result bound to the variable, abd then can be used.
  // And because we're not returning anything, it's an undefined value. It' just simply returning nothing, therefore it's undefined.
  // adding return
  return total;
}

const totalPrice1 = makeCarPrice1(11, 22, 33, 44, 55);
console.log(`Total1: ${totalPrice1}`); // undefined; after adding return - Total1: 165

// 2: Witch Arrow Function
// one-liner
const makeCarPrice2 = (...params) => params.reduce((prev, next) => prev + next); // no need return statement - it is one-liner
const totalPrice2 = makeCarPrice2(11, 22, 33, 44, 55);
console.log(`Total2: ${totalPrice2}`); // Total2: 165

// with body
const  makeCarPrice3 = (...params) => {
  // const total = params.reduce((prev, next) => prev + next);
  // return total; // need this return because we have function body here

  // simplifying
  return params.reduce((prev, next) => prev + next);
}

const totalPrice3 = makeCarPrice3(11, 22, 33, 44, 55);
console.log(`Total3: ${totalPrice3}`); // undefined; after adding return - Total1: 165

// 3: Calling Functions in string literals - we can call function directly in string literals, and this is good for debugging, because we avoid to create any constants. Because this functions return something, we can call them out.
console.log(`Total4: ${makeCarPrice1(11, 22, 33, 44, 55)}`); // 165
console.log(`Total5: ${makeCarPrice2(99, 77, 44)}`); // 220
