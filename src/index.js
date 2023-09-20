import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Rest Parameters and Arguments

// Old way: using arguments is an old way of doing things.
function makeCarPrice() {
  // without specified parameters, passing arguments
  console.log(arguments);
  // to check if arguments is an array
  console.log(Array.isArray(arguments)); // false
  // but we can turn this into array, or iterate it.
  console.log(arguments[0]); // 11
  // 1: converting arguments into array - because it's array like  we can simply use Array.from() method, which returns a new array.
  // 2: looping over arguments - .forEach
  // Array.from(arguments).forEach(value => console.log(value)); // 11 44 55 99
  // dynamically adding up values - .reduce() -> this method creates a new array based of all the items that we are passing through, so most likely we want return.
  // prev, next - you can call it whatever
  // Array.from(arguments).reduce((prev, next) => {
  //   return prev + next;
  // }); // because we are returning every single time here
  // we can use const total
  const total = Array.from(arguments).reduce((prev, next) => {
    return prev + next;
  });
  // we can logout that one total
  console.log(`Total: ${total}USD`); // Total: 231USD
}

makeCarPrice(11, 44, 55, 99, 22); // it is possible to pass arguments to the function without specifying parameters on the function. Console.log wil print [[Prototype]]: Object ->
// it's array like, because it doesn't have all of those properties that a typical array might. No access to Array methods
// 22 - was added

// ----------------------------------------------------------------

// New way: new way of doing it, is to use REST PARAMETER!!! new way of accessing arguments. And it is an array, which makes things easier.
// REST PARAMETER - gives rest of the arguments, always need to ba at the end.
function makeCarPriceRest(numberOne, ...params) {
  console.log(numberOne, params); // 99, [[ Prototype]]: Array[88, 77, 11, 44] -> gave us an Array
  // checking if its is an Array
  console.log(Array.isArray(params)); // true
  // now i can use directly .reduce() method
  const total = params.reduce((prev, next) => prev + next);
  console.log(`Total: ${total}USD`); // Total: 220USD
}

makeCarPriceRest(99, 88, 77, 11, 44);

