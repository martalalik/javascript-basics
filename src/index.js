import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Functions In-Depth
// ----------------------------------------------------------------

// Function Declarations and Expressions

// Hoisting test
console.log(makeCar); // only function declarations is seen
// there are const, so we don't seed them before declaration.
console.log(makeCarExpression2); // undefined - Variable might not have been initialized
console.log(makeCarArrow); // undefined - Variable might not have been initialized
console.log(makeCarArrowShorthand); // undefined - Variable might not have been initialized

// 1: Function Declaration - mostly to create generic functions
function makeCar() {
  console.log('Making car...');
}

console.log(makeCar) // convert function to string, where we can see the structure of the function.
makeCar(); // calling function

// 2: Function Expression
// const makeCarExpression1 = function makeCar() {}; // taking the value of a function.
// it is not necessarily needed this makeCare keyword, so we get an anonymous function.
const makeCarExpression2 = function () {}; // this is an anonymous function. Technically the function doesn't have a name.
// function () {}; // you cannot create functions without a name. It needs a keyword to exist.
console.log(makeCarExpression2); // makeCarExpression2() {}
console.log(makeCarExpression2.name); // makeCarExpression2 - stringify name of the function, perhaps to pass somewhere.
// named function expression
const makeCarExpression3 = function myFunction() {};
console.log(makeCarExpression3.name); // myFunction

// 3: Arrow Function
const makeCarArrow = () => {
  console.log('Making car inside Arrow...');
};

makeCarArrow();

// shorthand version
const makeCarArrowShorthand = () => console.log('Short');
makeCarArrowShorthand();
