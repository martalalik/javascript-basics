import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------------------------------------------------------------
// Numbers In-Depth
// ----------------------------------------------------------------

// Exploring Number Methods

console.log(Number.prototype); // in a console we see different properties and methods.
// one of them -> [[Prototype]] and a value of object:  '[[Prototype]]: Object'. Opening this object there are more properties and methods.
// this is how entire JS language is composed from properties to inheritance.
// Because Number object has [[Prototype]] value of Object, essentially is saying that is inherited all of the values from the Object's prototype,
// which is why it automatically has method toString(). Because Number it is whole individual thing it also has additional properties or methods that
// make dealing with numbers much easier.
// Object themselves don't deal with numbers, the Number object deals with numbers.

// prototype methods
// toFixed()
console.log((99.12345678).toFixed()); // 99 -> returned value is string
console.log((99.12345678).toFixed(2)); // 99.12 -> returned value is string
// console.log(99.toFixed(2)); // parsing error: Identifier directly after number
console.log(99..toFixed(2)); // 99.00 -> returned value is string, adding '.' fixed the error, but prettier should wrap this in brackets
console.log((99).toFixed(2)); // 99.00 -> returned value is string
console.log(parseFloat((99.12345678).toFixed(2))); // 99.12 -> because we parsed now we returned value is number
// toPrecision()
console.log((99.12345678).toPrecision(2)); // 99 -> returned value is string
console.log((99.12345678).toPrecision(4)); // 99.12 -> returned value is string
console.log(typeof (99.12345678).toPrecision(4)); // string
// new Number() - dont use new Number() any way, this is exploration example to see how things work
console.log(new Number(99).valueOf()); // 99 -> returned value is number, here is a fun factor and
// this is used internally by JS convert Number objects to primitive values.
